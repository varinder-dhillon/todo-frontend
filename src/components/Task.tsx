import React, {useState, useEffect} from 'react'
import type {TaskbarProps} from "../layout/TaskBar";
import { icons, actionIcons, status, statusColors, statusIcons, statusText } from '../utils/contants';
import type { TaskBase, TaskStatus} from "../types/board";
import { createTaskThunkHandler, deleteTaskThunkHandler, updateTaskThunkHandler } from '../store/thunks/board';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { toast } from 'react-toastify';
import { getErrorMessage } from '../utils/functions';


const TaskMain:React.FC<TaskbarProps> = ({isOpen, onClose, selectedTask}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState<keyof typeof icons>('clock');
    const [taskStatus, setTaskStatus] = useState<TaskStatus | ''>('');
    const [errors, setErrors] = useState<{ taskName?: string; description?: string }>({});
    const boardId = localStorage.getItem("boardId") || "";

    const resetFields = () => {
        setTaskName('');
        setDescription('');
        setIcon('clock');
        setTaskStatus('');
    }
    
    useEffect(() => {
        if (selectedTask) {
            setTaskName(selectedTask.name || '');
            setDescription(selectedTask.description || '');
            setIcon((selectedTask.icon in icons ? selectedTask.icon : 'clock') as keyof typeof icons);
            setTaskStatus(selectedTask.status || '');
        } else {
            resetFields();
        }
    }, [selectedTask]);

    const validate = () => {
        const newErrors: { taskName?: string; description?: string } = {};
        if (!taskName.trim()) newErrors.taskName = "Task name is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const deleteHandle = async () => {
        try {
            await dispatch(deleteTaskThunkHandler(selectedTask?._id || "")).unwrap();
            toast.success("Task deleted!");
            resetFields();
            onClose();
        } catch (error) {
            toast.error(getErrorMessage(error));
        }
        
    }

    const handleSubmit = async () => {
        if (!validate()) return;
        const newTask:TaskBase = { name: taskName, description, icon, status:taskStatus, boardId };
        // dispatch(createTaskThunk(newTask));
        
        try {
            await dispatch(createTaskThunkHandler(newTask)).unwrap();
            toast.success("Task created!");
            resetFields();
            onClose();
        } catch (error) {
            toast.error(getErrorMessage(error));
        }
    };

    const handleUpdate = async () => {
        if (!validate()) return;
        const updatedTask = { ...selectedTask, name: taskName, description, icon, boardId, status:taskStatus, };
        // dispatch(updateTaskThunk(updatedTask));
        try {
            await dispatch(updateTaskThunkHandler({reqBody:updatedTask, taskId:selectedTask?._id || ""})).unwrap();
            toast.success("Task Updated!");
            resetFields();
            onClose();
        } catch (error) {
            toast.error(getErrorMessage(error));
        }
    };

  return (
    <>
        <div className={`backdrop duration-1000 transition-all fixed top-0 w-screen h-screen bg-[#00000038] ${isOpen ? "opacity-100 left-0" : " opacity-0 left-[100%]"}`}></div>
        <div className={`backdrop duration-1000 transition-all fixed top-0  max-w-[800px] w-[calc(100%_-_40px)] h-[calc(100vh_-_40px)] m-[20px] bg-white rounded-[16px] p-[20px] flex flex-col ${isOpen ? "right-0" : "right-[100%]"} overflow-y-auto`}>
            <div>
                <div className="sticky top-0 bg-white taskbar-header w-full flex items-center justify-between">
                    <h2 className='text-[22px] font-semibold'>Task Details</h2>
                    <div onClick={onClose} className="left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  max-w-[50px] flex items-center justify-center cursor-pointer border border-solid border-[#97a3b6]">
                        <img src={actionIcons.close} alt="" />
                    </div>
                </div>
                <div className="taskbar-content mt-5">
                    <div className="field">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Task Name</label>
                        <input 
                            type="text"
                            className='flex border border-solid border-[#97a3b6] mt-1 p-2 rounded-[8px] w-full'
                            onChange={(e) => setTaskName(e.target.value)}
                            value={taskName}
                        />
                        {errors.taskName && <span className="text-red-500 text-sm mt-1 block">{errors.taskName}</span>}
                    </div>
                    <div className="field mt-5">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Description</label>
                        <textarea 
                            rows={6}
                            className='flex border border-solid border-[#97a3b6] mt-1 p-2 rounded-[8px] w-full'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        >
                        </textarea>
                    </div>
                    <div className="field mt-5">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Icon</label>
                        <div className="icon-list flex gap-3 mt-1">
                            {Object.entries(icons).map(([key, value], index)=> (
                                <div 
                                    key={index} 
                                    onClick={()=> setIcon((key in icons ? key : 'clock') as keyof typeof icons) } 
                                    className={`left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  max-w-[50px] flex items-center justify-center cursor-pointer border border-solid ${key === icon ? "border-[#3662e3]" : "border-[#97a3b65d]"} bg-[#97a3b65d]`}
                                >
                                    {value}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Status</label>
                        <div className="status-list flex gap-3 mt-1 flex-wrap">
                            {status.map((value, index)=> (
                                <div 
                                    key={index} 
                                    onClick={() => setTaskStatus(value)}  
                                    className={`status-item border-2 border-solid ${value === taskStatus ? "border-[#3662e3]" : "border-[#97a3b65d]"}  p-1 rounded-[12px] flex gap-2 items-center w-[calc(50%_-_8px)]`}
                                >
                                    <div 
                                        key={index} 
                                        className="left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  max-w-[50px] flex items-center justify-center cursor-pointer"
                                        style={{
                                            background: statusColors[value]
                                        }}
                                    >
                                        <img src={statusIcons[value]} alt="" />
                                    </div>
                                    <span className='font-medium'>{statusText[value]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="taskbar-footer mt-auto flex  justify-end gap-3">
                {selectedTask && 
                    <button 
                        onClick={deleteHandle}
                        className='min-w-[110px] flex justify-center gap-1 items-center px-4 py-2 bg-[#97a3b6] rounded-full text-white cursor-pointer'
                    >
                        Delete
                        <img src={actionIcons.delete} alt="" />
                    </button>
                }
                <button 
                    onClick={selectedTask ? handleUpdate : handleSubmit}
                    className='min-w-[110px] flex justify-center gap-1 items-center px-4 py-2 bg-[#3662e3] rounded-full text-white cursor-pointer'
                >
                    Save
                    <img src={actionIcons.done} alt="" />
                </button>
            </div>
        </div>
    </>
  )
}

export default TaskMain;