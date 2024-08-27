
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";
import Tech from "./components/Tech";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h2> this is main page </h2>} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="*" element={<h2> page not found </h2>} />
            </Routes>
        </Router>
    )
}

export default App;