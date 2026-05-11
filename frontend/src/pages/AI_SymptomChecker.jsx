import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AI_SymptomChecker.module.css";

function AI_SymptomChecker() {
    const [selectedArea, setSelectedArea] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const navigate = useNavigate();

    const handleAnalyze = () => {
        if (!selectedArea || !symptoms) {
            alert("Please select area and describe symptoms");
            return;
        }

        navigate("/ai-result", {
            state: {
                area: selectedArea,
                symptoms: symptoms,
            },
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>AI Symptom Checker</h1>

            <div className={styles.card}>
                <h3>Select Pain Area</h3>

                <div className={styles.bodyButtons}>
                    {["Head", "Chest", "Arm", "Leg", "Back", "Stomach"].map((part) => (
                        <button
                            key={part}
                            className={`${styles.btn} ${selectedArea === part ? styles.active : ""}`}
                            onClick={() => setSelectedArea(part)}
                        >
                            {part}
                        </button>
                    ))}
                </div>

                {selectedArea && (
                    <p className={styles.selected}>
                        Selected: {selectedArea}
                    </p>
                )}
            </div>

            <div className={styles.card}>
                <textarea
                    placeholder="Describe your symptoms..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                />
            </div>

            <button className={styles.analyzeBtn} onClick={handleAnalyze}>
                Analyze
            </button>
        </div>
    );
}

export default AI_SymptomChecker;