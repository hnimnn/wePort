import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
	return (
		<BrowserRouter>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />}>
        </Route>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
	);
}

export default App;
