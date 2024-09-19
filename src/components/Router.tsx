import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

interface RouterProps {
    isAuthenticated: boolean;
  }

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <>
      <Routes>
          <>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<LoginPage />} />

          </>
      </Routes>
    </>
  );
}
