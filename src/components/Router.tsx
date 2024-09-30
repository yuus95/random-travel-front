import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import RandomTravelListPage from "../pages/TravelList";

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
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<LoginPage />} />
            <Route path="/random-travel" element={<RandomTravelListPage />} />
          </>
      </Routes>
    </>
  );
}
