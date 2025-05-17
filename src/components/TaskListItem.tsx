import React from 'react'
import { icons, actionIcons } from '../utils/contants'

const TaskListItem:React.FC = () => {
  const statusIcons = {
    "inProgress": actionIcons.timerHover,
    "completed": actionIcons.doneHover,
    "wontDo" : actionIcons.closeHover
  }
  return (
    <div className='task-list-item flex items-start p-4 rounded-[16px] bg-amber-300 mb-5 gap-5'>
        <div className="left-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  bg-white max-w-[50px] flex items-center justify-center">
            {icons.clock}
        </div>
        <div className="task-content w-full">
          <h2 className='text-[22px] font-bold'>Task In Progeess</h2>
          <p className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias iure aperiam ducimus earum architecto illo illum? Molestiae eos repudiandae earum nulla non expedita, cupiditate illum repellat quis architecto laudantium.</p>
        </div>
        <div className="right-icon w-[40px] h-[40px] shrink-0 rounded-[8px]  bg-[#00000038] max-w-[50px] flex items-center justify-center">
          <img src={statusIcons.inProgress} alt="" />
        </div>  
    </div>
  )
}

export default TaskListItem