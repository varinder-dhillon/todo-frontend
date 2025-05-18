import React from 'react'
import BoardHeader from './BoardHeader'
import TaskListItem from './TaskListItem'
import { actionIcons  } from '../utils/contants'
import TaskBar from '../layout/TaskBar'

const Board: React.FC = () => {
  // const dispatch = useDispatch();
  
  
  return (
    <>
      <div className='board-container max-w-[800px] mx-auto p-2'>
        <BoardHeader />
        <div className='tasks-list mt-[30px]'>
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
        </div>
        <div className='task-list-item flex items-center p-4 rounded-[16px] bg-amber-300 mb-5 gap-5 cursor-pointer'>
            <div className="left-icon w-[50px] h-[50px] shrink-0 rounded-[8px] bg-[#00000038] max-w-[50px] flex items-center justify-center">
                <img src={actionIcons.addHover} alt="" />
            </div>
            <div className="task-content w-full">
              <h2 className='text-[18px] font-bold'>Add Task</h2>
            </div>
        </div>
      </div>
      <TaskBar isOpen={true} onClose={()=>{}} />
    </>
  )
}

export default Board