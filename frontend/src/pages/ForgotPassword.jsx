import { useState } from "react";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter your email");
            return;
        }

        // fake check (later backend)
        setSent(true);
        setMessage("Reset code sent to your email");
    };

    return (
        <div style={styles.container}>
            <h1>Forgot Password</h1>

            {!sent ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                        Send Reset Link
                    </button>
                </form>
            ) : (
                <p style={{ color: "green" }}>{message}</p>
            )}

            {message && !sent && <p style={{ color: "red" }}>{message}</p>}
        </div>
    );
}

const styles = {
    container: {
        width: "400px",
        margin: "50px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "12px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
};

export default ForgotPassword;