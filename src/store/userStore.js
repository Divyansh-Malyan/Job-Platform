import { create } from "zustand";
import supabase from "../utils/supabase_client";

const useUserStore = create((set) => ({
  user: null,
  profile: null,
  loading: true,

  // ---------------- INITIALIZE USER ----------------
  initializeUser: async () => {
    set({ loading: true });

const { data } = await supabase.auth.getUser();
const user = data?.user;

if (!user) {
  set({
    user: null,
    profile: null,
    loading: false,
  });

  return;
}

// ---------------- TRY STUDENT ----------------

const { data: studentProfile } = await supabase
  .from("Students")
  .select("*")
  .eq("user_student_id", user.id)
  .maybeSingle();

if (studentProfile) {
  set({
    user,
    profile: {
      ...studentProfile,
      role: "student",
    },
    loading: false,
  });

  return;
}

// ---------------- TRY RECRUITER ----------------

const { data: recruiterProfile } = await supabase
  .from("Recruiters")
  .select("*")
  .eq("id", user.id)
  .maybeSingle();

if (recruiterProfile) {
  set({
    user,
    profile: {
      ...recruiterProfile,
      role: "recruiter",
    },
    loading: false,
  });

  return;
}

// ---------------- FIRST GOOGLE LOGIN ----------------
// Auto-create Candidate profile

const { error: userError } = await supabase
  .from("User")
  .insert([
    {
      user_id: user.id,
      email: user.email,
      role: "candidate",
    },
  ]);

if (!userError) {
  const { error: studentError } = await supabase
    .from("Students")
    .insert([
      {
        user_student_id: user.id,
        name:
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          "New User",
      },
    ]);

  if (!studentError) {
    const { data: newProfile } = await supabase
      .from("Students")
      .select("*")
      .eq("user_student_id", user.id)
      .single();

    set({
      user,
      profile: {
        ...newProfile,
        role: "student",
      },
      loading: false,
    });

    return;
  }
}

set({
  user,
  profile: null,
  loading: false,
});

  },

  // ---------------- UPDATE PROFILE ----------------

  updateProfile: async (updatedData) => {
    const { data } = await supabase.auth.getUser();
    const user = data?.user;

    
if (!user) return;

const studentData = {
  name: updatedData.name,
  headline: updatedData.headline,
  phone: updatedData.phone,
  city: updatedData.city,
  country: updatedData.country,
  course: updatedData.course,
  college: updatedData.college,
  cgpa: updatedData.cgpa,
  about: updatedData.bio,
  github: updatedData.github,
  linkedin: updatedData.linkedin,
  portfolio: updatedData.portfolio,
  leetcode: updatedData.leetcode,
  open_to_work:
    updatedData.openToWork === "true",
  preferred_job_type:
    updatedData.preferredJobType,
  preferred_location:
    updatedData.preferredLocation,
  work_mode:
    updatedData.workMode,
};

const { data: updatedProfile, error } =
  await supabase
    .from("Students")
    .update(studentData)
    .eq("user_student_id", user.id)
    .select()
    .single();

if (!error) {
  set({
    profile: {
      ...updatedProfile,
      role: "student",
    },
  });
}

  },

  // ---------------- SET USER ----------------

  setUser: (user, profile) => {
    set({
      user,
      profile,
    });
  },

  // ---------------- CLEAR USER ----------------

  clearUser: () => {
    set({
      user: null,
      profile: null,
    });
  },
}));

export default useUserStore;
