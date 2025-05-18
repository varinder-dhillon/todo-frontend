import React from 'react'
import { icons, actionIcons, statusColors } from '../utils/contants';
import type {Task} from "../types/board";

const TaskListItem:React.FC<{task:Task, onClick: ()=>void}> = ({task, onClick}) => {
  const statusIcons = {
    "inProgress": actionIcons.timerHover,
    "completed": actionIcons.doneHover,
    "wontDo" : actionIcons.closeHover
  }
  return (
    <div 
      className='task-list-item flex items-start p-4 rounded-[16px] bg-amber-300 mb-5 gap-5 cursor-pointer'
      style={{
        background: statusColors[task.status || "todo"]
      }}
      onClick={onClick}
    >
        <div className="left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  bg-white max-w-[50px] flex items-center justify-center">
            {icons[task.icon]}
        </div>
        <div className="task-content w-full">
          <h2 className='text-[22px] font-bold'>{task.name}</h2>
          {task.description && <p className='font-light'>{task.description}</p>}
        </div>
        {task.status && 
          <div className="right-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  bg-[#00000038] max-w-[50px] flex items-center justify-center">
            <img src={statusIcons[task.status]} alt="" />
          </div>
        }
    </div>
  )
}

export default TaskListItem