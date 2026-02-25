import { create } from "zustand";
import supabase from "../utils/supabase_client";

const useUserStore = create((set) => ({
    user: null,
    loading: true,

    initializeUser: async () => {
        const { data } = await supabase.auth.getUser();
        set({
            user: data.user || null,
            loading: false
        });
        supabase.auth.onAuthStateChange((event, session) => {
            set({
                user: session?.user || null,
            });
           });
    },

    setUser: (user) => set({user}),
    clearUser: () => set({user: null})
   
}));