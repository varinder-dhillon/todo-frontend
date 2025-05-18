import React from 'react';
import ReactDom from "react-dom"
import Task from '../components/Task';
import type { Task as TypeTask } from '../types/board';

export interface TaskbarProps {
    isOpen: boolean;
    onClose: () => void;
    selectedTask: TypeTask | undefined
}
const TaskBar:React.FC<TaskbarProps> = ({isOpen=true, onClose=()=>{}, selectedTask}) => {
    const sidebarRoot = document.getElementById("taskbar-root");
    
    if (!sidebarRoot) return null;
    return ReactDom.createPortal(
        <Task selectedTask={selectedTask} isOpen={isOpen} onClose={onClose} />,
        sidebarRoot
    )
}

export default TaskBar