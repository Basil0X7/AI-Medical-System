import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setMessage("Please fill all fields");
            return;
        }

        setMessage("Login successful");
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit">Login</button>
            </form>

            {message && <p>{message}</p>}

            <div className={styles.links}>
                <Link to="/forgot-password">Forgot Password?</Link>
                <Link to="/register">Create Account</Link>
            </div>
        </div>
    );
}

export default Login;