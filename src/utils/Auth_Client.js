import supabase from "./supabase_client"

const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, user: data.user }
}

const signup = async (name, email, password, role, companyName) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  if (error) {
    return { success: false, message: error.message }
  }

  const user = data.user

  if (!user) {
    return { success: false, message: "Signup failed" };
  }

  console.log(data)
  const { error: dberror } = await supabase.from("User").insert([
    {
      user_id: user.id,
      name: name,
      email: email,
      role: role,
      company: role === "recruiter" ? companyName : null
    }
  ])
  if (dberror) {
    return { success: false, message: dberror.message }
  }
  return { success: true, user: data.user }
}

const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true }
}

export { login, signup, logout }