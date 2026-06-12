import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase_client";
import toast from "react-hot-toast";

const ResetPassword = () => {

    const [password, setPassword] =
        useState("");

    const [confirmPassword,
        setConfirmPassword] =
        useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            password !== confirmPassword
        ) {

            toast.error(
                "Passwords do not match"
            );

            return;
        }

        const { error } =
            await supabase.auth.updateUser({
                password
            });

        if (error) {

            toast.error(error.message);

        } else {

            toast.success(
                "Password updated successfully"
            );

            navigate("/login");
        }
    };

    return (

        <div className="forgot-password-page">

            <form
                className="forgot-password-form"
                onSubmit={handleSubmit}
            >

                <h2>
                    Reset Password
                </h2>

                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(
                            e.target.value
                        )
                    }
                />

                <button type="submit">
                    Update Password
                </button>

            </form>

        </div>

    );
};

export default ResetPassword;