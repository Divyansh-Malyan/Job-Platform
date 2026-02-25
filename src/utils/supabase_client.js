import { createClient } from '@supabase/supabase-js'

const SupaURL = import.meta.env.VITE_SUPABASE_URL
const SupaKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

const supabase = createClient(SupaURL, SupaKey)

export default supabase;