import { useState } from "react";
import Sidebar from "../components/sidebar/index.tsx";
import Header from "../components/header/index.tsx";
import NewTaskModal from "../components/new-task-modal/index.tsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    const handleNewTask = (taskData: any) => {
        // This function is currently a placeholder until the database is set up
        console.log("New task creation is not yet implemented.");
    };

    return (
        <>
            <Sidebar onNewTask={() => setIsNewTaskModalOpen(true)} />
            <Header />
            <main>
                <Outlet />
                <NewTaskModal
                    isOpen={isNewTaskModalOpen}
                    onClose={() => setIsNewTaskModalOpen(false)}
                    onSubmit={handleNewTask}
                />
            </main>
        </>
    );
}
