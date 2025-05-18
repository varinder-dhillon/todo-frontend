import React, { useState } from 'react'
import logo from "../assets/Logo.svg"
import { actionIcons } from '../utils/contants'
import { updateBoardThunkHandler } from '../store/thunks/board';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { toast } from 'react-toastify';
import { getErrorMessage } from '../utils/functions';

interface BoardHeaderProps {
  name: string;
  description: string;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({name="", description=""}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [boardName, setBoardName] = useState<string>(name)
  const [boardDescription, setBoardDescription] = useState<string>(description);

   const handleSubmit = async () => {
  
      try {
          await dispatch(updateBoardThunkHandler({name: boardName, description:boardDescription})).unwrap();
          toast.success("Board updated!");
          setIsEditing(false)
      } catch (error) {
          toast.error(getErrorMessage(error));
      }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setBoardName(name);
    setBoardDescription(description);
  }
  return (
    <div className='board-header mt-5 flex items-start justify-start gap-3'>
        <img src={logo} alt="logo" className='mt-1.5' />
          {!isEditing ? 
            <div>
                <div className="board-name flex gap-1">
                  <h2 className='text-[32px] font-bold'>{name}</h2>
                    <span onClick={()=>setIsEditing(true)}><img src={actionIcons.editHover} alt="" /></span>
              </div>
              <div className="board-description">
                  <p>{description}</p>
              </div>
            </div>
            :
            <div className='flex flex-col w-full'>
               <div className="field">
                  <input 
                      type="text"
                      className='flex border border-solid border-[#97a3b6] mt-1 p-2 rounded-[8px] w-full'
                      onChange={(e) => setBoardName(e.target.value)}
                      value={boardName}
                  />
              </div>
              <div className="field mt-5">
                  <textarea 
                      rows={6}
                      className='flex border border-solid border-[#97a3b6] mt-1 p-2 rounded-[8px] w-full'
                      onChange={(e) => setBoardDescription(e.target.value)}
                      value={boardDescription}
                  >
                  </textarea>
              </div>

              <div className="taskbar-footer mt-3 flex  justify-end gap-3">
               
                  <button 
                      onClick={handleCancel}
                      className='min-w-[110px] flex justify-center gap-1 items-center px-4 py-2 bg-[#97a3b6] rounded-full text-white cursor-pointer'
                  >
                      Cancel
                      {/* <img src={actionIcons.delete} alt="" /> */}
                  </button>
                 
                  <button 
                      onClick={handleSubmit}
                      className='min-w-[110px] flex justify-center gap-1 items-center px-4 py-2 bg-[#3662e3] rounded-full text-white cursor-pointer'
                  >
                      Save
                      <img src={actionIcons.done} alt="" />
                  </button>
              </div>
            </div>
          }
    </div>
  )
}

export default BoardHeader