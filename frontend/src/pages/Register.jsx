import { useState } from "react";
import styles from "../styles/Register.module.css";

function Register() {
const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
});

const [message, setMessage] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.location ||
        !formData.password ||
        !formData.confirmPassword
    ) {
        setMessage("Please fill all fields");
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match");
        return;
    }

    setMessage("Account created successfully!");
};

return (
    <div className={styles.container}>
        <h1 className={styles.title}>Create Account</h1>

    <form className={styles.form} onSubmit={handleSubmit}>
        <input
            className={styles.input}
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
        />

        <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
        />

        <input
            className={styles.input}
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
        />

        <input
            className={styles.input}
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
        />

        {/* Password */}
        <div className={styles.passwordBox}>
        <input
            className={styles.input}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
        />

        <button
            type="button"
            className={styles.showBtn}
            onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? "Hide" : "Show"}
        </button>
        </div>

        {/* Confirm Password */}
        <input
            className={styles.input}
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
        />

        <button className={styles.button} type="submit">
            Create Account
        </button>
    </form>

        {message && <p className={styles.message}>{message}</p>}
    </div>
);
}

export default Register;