import "./Styles.scss";

const TaskMaster = () => {
    return (
        <div className="taskmaster-container">
            <div className="taskmaster">
                <header className="taskmaster__header">
                    <div className="taskmaster__logo-container">
                        <div className="taskmaster__logo"></div>
                    </div>
                    <div className="taskmaster__title-container">
                        <div className="taskmaster__title">Taskmaster</div>
                    </div>
                    <div className="taskmaster__time-container">
                        <div className="taskmaster__time-wrapper">
                            <div className="taskmaster__time">6:28 PM</div>
                            <div className="taskmaster__date">11/09/2001</div>
                        </div>
                    </div>
                </header>

                <main className="taskmaster__content">
                    <div className="taskmaster__main-area">
                        <div className="taskmaster__task-showcase">
                            <div className="taskmaster__background-gradient"></div>
                            <div className="taskmaster__task-card">
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
                            <img
                                className="taskmaster__placeholder-img"
                                src="https://placehold.co/1090x625"
                                alt="Task background"
                            />
                        </div>

                        <div className="taskmaster__sidebar">
                            <div className="taskmaster__details-panel">
                                <div className="details-panel__title">
                                    Task Details :
                                </div>
                                <div className="details-panel__content">
                                    <div className="details-panel__description">
                                        Desc : "please god you said you wanted
                                        to finish it like 2 months ago"
                                    </div>
                                    <div className="details-panel__created-at">
                                        Created at : 17/07/1945
                                    </div>
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
                        <button className="taskmaster__reroll-button">
                            <div className="reroll-button__icon"></div>
                            <div className="reroll-button__text">Reroll</div>
                        </button>
                        <div className="taskmaster__queue-link">
                            show reroll queue
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TaskMaster;
