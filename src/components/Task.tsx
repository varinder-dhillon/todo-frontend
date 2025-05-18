import React from 'react'
import type {TaskbarProps} from "../layout/TaskBar";
import { icons, actionIcons, status, statusColors, statusIcons, statusText } from '../utils/contants';

const Task:React.FC<TaskbarProps> = () => {
  return (
    <>
        <div className="backdrop fixed top-0 left-0 w-screen h-screen bg-[#00000038]"></div>
        <div className="backdrop fixed top-0 right-0 max-w-[800px] w-[calc(100%_-_40px)] h-[calc(100vh_-_40px)] m-[20px] bg-white rounded-[16px] p-[20px] flex flex-col">
            <div>
                <div className="taskbar-header w-full flex items-center justify-between">
                    <h2 className='text-[22px] font-semibold'>Task Details</h2>
                    <div className="left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  max-w-[50px] flex items-center justify-center cursor-pointer border border-solid border-[#97a3b6]">
                        <img src={actionIcons.close} alt="" />
                    </div>
                </div>
                <div className="taskbar-content mt-5">
                    <div className="field">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Task Name</label>
                        <input 
                            type="text"
                            className='flex border border-solid border-[#97a3b6] mt-1 p-2 rounded-[8px] w-full'
                        />
                    </div>
                    <div className="field mt-5">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Description</label>
                        <textarea 
                            rows={6}
                            className='flex border border-solid border-[#97a3b6] mt-1 p-2 rounded-[8px] w-full'
                        >
                        </textarea>
                    </div>
                    <div className="field mt-5">
                        <label htmlFor="task-name" className='text-[#97a3b6] text-[14px]'>Icon</label>
                        <div className="icon-list flex gap-3 mt-1">
                            {Object.entries(icons).map(([key, value], index)=> (
                                <div 
                                    key={index} 
                                    onClick={()=> key} 
                                    className="left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  max-w-[50px] flex items-center justify-center cursor-pointer bg-[#97a3b65d]"
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
                                <div className="status-item border-2 border-solid border-[#97a3b65d] p-1 rounded-[12px] flex gap-2 items-center w-[calc(50%_-_8px)]">
                                    <div 
                                        key={index} 
                                        onClick={() => value} 
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
                <button className='min-w-[110px] flex justify-center gap-1 items-center px-4 py-2 bg-[#97a3b6] rounded-full text-white cursor-pointer'>
                    Delete
                    <img src={actionIcons.delete} alt="" />
                </button>
                <button className='min-w-[110px] flex justify-center gap-1 items-center px-4 py-2 bg-[#3662e3] rounded-full text-white cursor-pointer'>
                    Save
                    <img src={actionIcons.done} alt="" />
                </button>
            </div>
        </div>
    </>
  )
}

export default Task