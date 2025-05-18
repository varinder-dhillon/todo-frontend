import React from 'react';
import ReactDom from "react-dom"
import TaskMain from '../components/Task';
import type { Task } from '../types/board';

export interface TaskbarProps {
    isOpen: boolean;
    onClose: () => void;
    selectedTask: Task | undefined
}
const TaskBar:React.FC<TaskbarProps> = ({isOpen=true, onClose=()=>{}, selectedTask}) => {
    const sidebarRoot = document.getElementById("taskbar-root");
    
    if (!sidebarRoot) return null;
    return ReactDom.createPortal(
        <TaskMain selectedTask={selectedTask} isOpen={isOpen} onClose={onClose} />,
        sidebarRoot
    )
}

export default TaskBar