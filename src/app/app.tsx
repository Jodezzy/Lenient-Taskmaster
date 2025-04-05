// import React from "react";
// import ReactDOM from "react-dom/client";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Taskmaster />
//   </React.StrictMode>,
// );

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Taskmaster from "../pages/taskmaster/index.tsx";
import Calendar from "../pages/calendar/index.tsx";
import Tasklist from "../pages/tasklist/index.tsx";
import Layout from "./layout.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Taskmaster />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/tasklists" element={<Tasklist />} />
                </Route>
            </Routes>
        </Router>
        // <Taskmaster />
    );
}
export default App;
