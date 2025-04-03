import React, { useState } from "react";
import Header from "./components/header";
import "./styles/taskmaster.scss";

const TaskMaster = () => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [animationPhase, setAnimationPhase] = useState("");
    const [sidebarPhase, setSidebarPhase] = useState("");

    const handleReroll = () => {
        if (isFlipping) return;

        setIsFlipping(true);
        setAnimationPhase("flipping-out");
        setSidebarPhase("fading-out");

        // After the first animation completes, prepare for the flip-in
        setTimeout(() => {
            setAnimationPhase("flipping-in");
            setSidebarPhase("fading-in");

            // After the second animation completes, reset the state
            setTimeout(() => {
                setIsFlipping(false);
                setAnimationPhase("");
                setSidebarPhase("");
            }, 800);
        }, 800);
    };

    return (
        <div className="taskmaster">
            <Header />

            <main className="taskmaster__content">
                <div className="taskmaster__main-area">
                    <div className="taskmaster__task-showcase">
                        <div className="taskmaster__background-gradient"></div>
                        <div className="taskmaster__checkerboard-bg"></div>
                        <div
                            className={`taskmaster__task-card ${animationPhase}`}
                        >
                            {/* Front of the card */}
                            <div className="task-card__front">
                                <div className="task-card__header">
                                    <div className="task-card__category">
                                        Art project
                                    </div>
                                </div>
                                <div className="task-card__body">
                                    <div className="task-card__title">
                                        Finish up on that one script you were
                                        writing
                                    </div>
                                </div>
                                <div className="task-card__footer">
                                    <div className="task-card__points">+1p</div>
                                    <div className="task-card__tag">
                                        <div className="task-card__tag-text">
                                            Passion
                                        </div>
                                    </div>
                                    <div className="task-card__deadline">
                                        "Soon"
                                    </div>
                                </div>
                            </div>
                            {/* Back of the card */}
                            <div className="task-card__back">
                                <div className="task-card__back-content">
                                    <div className="task-card__back-logo">
                                        <img
                                            src="/cat-svgrepo-com.svg"
                                            alt="Cat Logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`taskmaster__sidebar ${sidebarPhase}`}>
                        <div className="taskmaster__details-panel">
                            <div className="taskmaster__details-header">
                                Task Details
                            </div>
                            <div className="taskmaster__details-content">
                                "please god you said you wanted to finish it
                                like 2 months ago"
                                <br />
                                <br />
                                Created at: 17/07/1945
                            </div>
                        </div>

                        <div className="taskmaster__actions">
                            <button className="taskmaster__action-button">
                                Mark as Done
                            </button>
                            <button className="taskmaster__action-button">
                                Add progress
                            </button>
                        </div>
                    </div>
                </div>

                <div className="taskmaster__controls">
                    <button
                        className="taskmaster__reroll-button"
                        onClick={handleReroll}
                        disabled={isFlipping}
                    >
                        <div className="reroll-button__icon"></div>
                        <div className="reroll-button__text">Reroll</div>
                    </button>
                    <div className="taskmaster__queue-link">
                        show reroll queue
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TaskMaster;
