import React, {useState} from 'react'
import BoardHeader from './BoardHeader'
import TaskListItem from './TaskListItem'
import { actionIcons  } from '../utils/contants'
import TaskBar from '../layout/TaskBar'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store';
import type { Task } from '../types/board'
const Board: React.FC = () => {
  // const dispatch = useDispatch();
  const board = useSelector((state:RootState) => state.boardSlice.board);
  const [selectedTask, setSeletedTask] = useState<Task | undefined>(undefined)
  const [isTaskBarOpen, setIsTaskBarOpen] = useState<boolean>(false)
  
  if(!board) return <>Something went wrong!</>;

  return (
    <>
      <div className='board-container max-w-[800px] mx-auto'>
        <BoardHeader name={board.name} description={board.description}  />
        <div className='tasks-list mt-[30px] h-[calc(100vh_-_130px)] overflow-y-auto'>
          {board.tasks.map((task, index) => (
            <TaskListItem 
              key={index} 
              task={task} 
              onClick={()=> {
                setSeletedTask(task);
                setIsTaskBarOpen(true);
              }} 
            />
          ))}
          
        <div onClick={() => setIsTaskBarOpen(true)} className='sticky bottom-0 task-list-item flex items-center p-4 rounded-[16px] bg-amber-300 mb-5 gap-5 cursor-pointer'>
            <div className="left-icon w-[50px] h-[50px] shrink-0 rounded-[8px] bg-[#00000038] max-w-[50px] flex items-center justify-center">
                <img src={actionIcons.addHover} alt="" />
            </div>
            <div className="task-content w-full">
              <h2 className='text-[18px] font-bold'>Add Task</h2>
            </div>
        </div>
        </div>
      </div>
      <TaskBar 
        selectedTask={selectedTask} 
        isOpen={isTaskBarOpen} 
        onClose={()=> {
          setIsTaskBarOpen(prev => !prev)
          setSeletedTask(undefined);
        }} 
      />
    </>
  )
}

export default Board