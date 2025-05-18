import React from 'react';
import ReactDom from "react-dom"
import Task from '../components/Task';

export interface TaskbarProps {
    isOpen: boolean;
    onClose: () => void
}
const TaskBar:React.FC<TaskbarProps> = ({isOpen=true, onClose=()=>{}}) => {
    const sidebarRoot = document.getElementById("taskbar-root");
    
    if (!sidebarRoot) return null;
    return ReactDom.createPortal(
        <Task isOpen={isOpen} onClose={onClose} />,
        sidebarRoot
    )
}

export default TaskBar