import supabase from "./supabase_client";

const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, user: data.user };
};

const signup = async (
  name,
  email,
  password,
  role,
  companyName
) => {

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  const user = data.user;

  if (!user) {
    return {
      success: false,
      message: "Signup failed",
    };
  }

  // ---------------- USER TABLE ----------------

  const { error: userError } = await supabase
    .from("User")
    .insert([
      {
        user_id: user.id,
        email,
        role,
      },
    ]);

  if (userError) {

    return {
      success: false,
      message: userError.message,
    };
  }

  // ---------------- STUDENT SIGNUP ----------------

  if (role === "candidate") {

    const { error: studentError } = await supabase
      .from("Students")
      .insert([
        {
          user_student_id: user.id,
          name,
        },
      ]);

    if (studentError) {


      return {
        success: false,
        message: studentError.message,
      };
    }
  }

  // ---------------- RECRUITER SIGNUP ----------------

  if (role === "recruiter") {

    // Create Company

    const {
      data: company,
      error: companyError,
    } = await supabase
      .from("Company")
      .insert([
        {
          company_name: companyName,
        },
      ])
      .select()
      .single();

    if (companyError) {


      return {
        success: false,
        message: companyError.message,
      };
    }

    // Create Recruiter

    const { error: recruiterError } = await supabase
      .from("Recruiters")
      .insert([
        {
          id: user.id,
          name,
          company_id: company.comp_id,
        },
      ]);

    if (recruiterError) {

      return {
        success: false,
        message: recruiterError.message,
      };
    }
  }

  return {
    success: true,
    user,
  };
};

const logout = async () => {

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
};

export {
  login,
  signup,
  logout,
};