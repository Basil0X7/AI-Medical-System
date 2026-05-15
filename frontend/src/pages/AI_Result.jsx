import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/AI_Result.module.css";
import { useState } from "react";

function AI_Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedClinic, setSelectedClinic] = useState("");

    const { area, symptoms } = location.state || {};

    const result = {
        mainClinic: "General Medicine",
        diagnosis: "Possible inflammation or infection",
        clinics: ["Cardiology", "Orthopedics", "Neurology", "Dermatology"],
    };

    const finalClinic = selectedClinic || result.mainClinic;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>AI Medical Result</h1>

            {/* Patient Info */}
            <div className={styles.card}>
                <p><b>Area:</b> {area}</p>
                <p><b>Symptoms:</b> {symptoms}</p>
            </div>

            {/* Recommended Clinic */}
            <div className={styles.card}>
                <h3>Recommended Clinic (AI)</h3>

                <button
                    className={`${styles.recommendedBtn} ${
                        selectedClinic === result.mainClinic ? styles.active : ""
                    }`}
                    onClick={() => setSelectedClinic(result.mainClinic)}
                >
                    {result.mainClinic}
                </button>
            </div>

            {/* Diagnosis */}
            <div className={styles.card}>
                <h3>Initial Diagnosis</h3>
                <p>{result.diagnosis}</p>
            </div>

            {/* Other Clinics */}
            <div className={styles.card}>
                <h3>Other Clinics</h3>

                <div className={styles.clinics}>
                    {result.clinics.map((c, i) => (
                        <button
                            key={i}
                            className={`${styles.clinicBtn} ${
                                selectedClinic === c ? styles.active : ""
                            }`}
                            onClick={() => setSelectedClinic(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
            <button
                    className={styles.backBtn}
                    onClick={() => navigate("/ai-symptom")}
            >
                Back
            </button>

                <button
                    className={styles.browseBtn}
                    onClick={() => navigate("/clinics")}
                >
                    Browse Clinics
                </button>

                <button
                    className={styles.primaryBtn}
                    onClick={() =>
                        alert(`Registered in: ${finalClinic}`)
                    }
                >
                    Register in Clinic ({finalClinic})
                </button>
            </div>
        </div>
    );
}

export default AI_Result;