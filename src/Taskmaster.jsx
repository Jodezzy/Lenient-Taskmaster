import Header from "./components/header";
import "./styles/taskmaster.scss";

const TaskMaster = () => {
    return (
        <div className="taskmaster">
            <Header />

            <main className="taskmaster__content">
                <div className="taskmaster__main-area">
                    <div className="taskmaster__task-showcase">
                        <div className="taskmaster__background-gradient"></div>
                        <div className="taskmaster__checkerboard-bg"></div>
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
                    </div>

                    <div className="taskmaster__sidebar">
                        <div className="taskmaster__details-panel">
                            <div className="details-panel__title">
                                Task Details :
                            </div>
                            <div className="details-panel__content">
                                <div className="details-panel__description">
                                    Desc : "please god you said you wanted to
                                    finish it like 2 months ago"
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
    );
};

export default TaskMaster;
