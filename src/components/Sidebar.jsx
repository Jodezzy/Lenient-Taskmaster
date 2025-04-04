import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Sidebar.scss';

const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 1.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 1.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.25 7.5H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TaskmasterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.25 12L15.75 9L11.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.75 9H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TasklistsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 13.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 4.5H3.0075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9H3.0075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 13.5H3.0075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AddIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3.75V14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.1667 10C16.1667 10.3333 16.1333 10.6667 16.0833 11L17.9167 12.4667C18.0833 12.6 18.125 12.8333 18 13.0333L16.1667 16.3C16.0417 16.5 15.8083 16.5667 15.6083 16.4667L13.4583 15.5333C12.9583 15.9 12.4167 16.2 11.825 16.4L11.5 18.6667C11.4583 18.8833 11.2667 19.0333 11.0417 19.0333H7.375C7.15 19.0333 6.95833 18.8833 6.91667 18.6667L6.59167 16.4C5.99167 16.2 5.45 15.9 4.95833 15.5333L2.80833 16.4667C2.60833 16.5667 2.375 16.5 2.25 16.3L0.416667 13.0333C0.291667 12.8333 0.333333 12.6 0.5 12.4667L2.33333 11C2.28333 10.6667 2.25 10.3333 2.25 10C2.25 9.66667 2.28333 9.33333 2.33333 9L0.5 7.53333C0.333333 7.4 0.291667 7.16667 0.416667 6.96667L2.25 3.7C2.375 3.5 2.60833 3.43333 2.80833 3.53333L4.95833 4.46667C5.45833 4.1 6 3.8 6.59167 3.6L6.91667 1.33333C6.95833 1.11667 7.15 0.966667 7.375 0.966667H11.0417C11.2667 0.966667 11.4583 1.11667 11.5 1.33333L11.825 3.6C12.425 3.8 12.9667 4.1 13.4583 4.46667L15.6083 3.53333C15.8083 3.43333 16.0417 3.5 16.1667 3.7L18 6.96667C18.125 7.16667 18.0833 7.4 17.9167 7.53333L16.0833 9C16.1333 9.33333 16.1667 9.66667 16.1667 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Sidebar = ({ onNewTask }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const handleMouseEnter = useCallback(() => {
        setIsVisible(true);
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    }, []);

    const handleOverlayEnter = useCallback(() => {
        if (!isAnimating) {
            setIsVisible(false);
        }
    }, [isAnimating]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey && e.key === 'n') || (e.ctrlKey && e.key === 't')) {
                e.preventDefault();
                onNewTask();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNewTask]);

    return (
        <>
            {/* Invisible hitbox for detection */}
            <div 
                className="sidebar-hitbox"
                onMouseEnter={handleMouseEnter}
            />

            {/* Dark overlay */}
            <div 
                className={`sidebar-overlay ${isVisible ? 'visible' : ''}`}
                onMouseEnter={handleOverlayEnter}
                style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
            />
            
            {/* Sidebar */}
            <div className={`sidebar ${isVisible ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <div className="sidebar-title">Lenient Taskmaster</div>
                    
                    <div className="nav-container">
                        <nav>
                            <ul>
                                <li>
                                    <button className="nav-button">
                                        <CalendarIcon />
                                        <span>Calendar</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="nav-button">
                                        <TaskmasterIcon />
                                        <span>Taskmaster</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="nav-button">
                                        <TasklistsIcon />
                                        <span>Tasklists</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <button className="new-task-button" onClick={onNewTask}>
                        <AddIcon />
                        <span>New Task</span>
                        <div className="tooltip">
                            <div className="tooltip-text">Create a new task</div>
                            <div className="tooltip-shortcut">Ctrl + N/T</div>
                        </div>
                    </button>

                    <button className="settings-button" aria-label="Settings">
                        <SettingsIcon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar; 