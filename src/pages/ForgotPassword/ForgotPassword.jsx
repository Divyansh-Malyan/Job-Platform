import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../utils/supabase_client";
import toast from "react-hot-toast";
import "./ForgotPassword.css";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReset = async (e) => {

        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        setLoading(true);

        const { error } =
            await supabase.auth.resetPasswordForEmail(
                email,
                {
                    redirectTo:
                        "http://localhost:5173/reset-password"
                }
            );

        console.log("Reset Error:", error);

        setLoading(false);

        if (error) {

            toast.error(error.message);

        } else {

            toast.success(
                "Password reset link sent to your email"
            );

        }
    };

    return (

        <div className="login-page">

            <form
                onSubmit={handleReset}
                className="left-side-form"
            >

                <h2>Forgot Password</h2>

                <p
                    style={{
                        marginBottom: "20px",
                        color: "#666"
                    }}
                >
                    Enter your email and we'll send you a password reset link.
                </p>

                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <button
                    className="submit-button"
                    type="submit"
                    disabled={loading}
                >
                    {
                        loading
                            ? "Sending..."
                            : "Send Reset Link"
                    }
                </button>

                <section className="sign-up-redirect">

                    <p>
                        Remember your password?
                    </p>

                    <Link to="/login">
                        Back To Login
                    </Link>

                </section>

            </form>

            <div className="right">

                <h1>
                    Reset Your <span>Password</span>
                    <br />
                    Securely.
                </h1>

            </div>

        </div>

    );
};

export default ForgotPassword;