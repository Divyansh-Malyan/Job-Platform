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

const signup = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { success: false, message: error.message }
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