import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import AI_SymptomChecker from "./pages/AI_SymptomChecker";
import AI_Result from "./pages/AI_Result";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Pages */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* AI System Pages */}
                <Route path="/ai-symptom" element={<AI_SymptomChecker />} />
                <Route path="/ai-result" element={<AI_Result />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;