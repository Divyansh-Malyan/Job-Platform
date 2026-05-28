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
      set({ user: null, profile: null, loading: false });
      return;
    }

    const { data: profile, error } = await supabase
      .from("User")
      .select("*")
      .eq("user_id", user.id)
      .single();

    set({
      user,
      profile: profile || null,
      loading: false,
    });
  },

  // ---------------- UPDATE PROFILE ----------------
  updateProfile: async (updatedData) => {
    const { data } = await supabase.auth.getUser();
    const user = data?.user;

    if (!user) return;

    const { data: updatedProfile, error } = await supabase
      .from("User")
      .update(updatedData)
      .eq("user_id", user.id)
      .select()
      .single();

    if (!error) {
      set({
        profile: updatedProfile,
      });
    } else {
      console.error("Profile update failed:", error.message);
    }
  },

  // ---------------- SET USER AFTER LOGIN ----------------
  setUser: (user, profile) => {
    set({
      user,
      profile,
    });
  },

  // ---------------- CLEAR USER AFTER LOGOUT ----------------
  clearUser: () => {
    set({
      user: null,
      profile: null,
    });
  },
}));

export default useUserStore;