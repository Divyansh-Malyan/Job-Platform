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

    console.log(updatedProfile);
    console.log(error);

    if (!error) {
      set({
        profile: updatedProfile,
      });
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