import React, { useEffect, useState } from "react";
import "./style.scss";

const Header = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const time = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
            const date = now.toLocaleDateString();
            setCurrentTime(time);
            setCurrentDate(date);
        };

        updateDateTime(); // Set initial time and date
        const interval = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <header className="app-header">
            <div className="app-header__logo-container">
                <img
                    src="src/app/assets/LenTask_logo.svg"
                    alt="Taskmaster Logo"
                    className="app-header__logo"
                />
            </div>
            <div className="app-header__title-container">
                <div className="app-header__title">Taskmaster</div>
            </div>
            <div className="app-header__time-container">
                <div className="app-header__time-wrapper">
                    <div className="app-header__time">{currentTime}</div>
                    <div className="app-header__date">{currentDate}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
