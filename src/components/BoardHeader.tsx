import React from 'react'
import logo from "../assets/Logo.svg"
import { actionIcons } from '../utils/contants'

interface BoardHeaderProps {
  name: string;
  description: string;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({name="", description=""}) => {
  return (
    <div className='board-header mt-5 flex items-start justify-start gap-3'>
        <img src={logo} alt="logo" className='mt-1.5' />
        <div>
            <div className="board-name flex gap-1">
                <h2 className='text-[32px] font-bold'>{name}</h2>
                <span><img src={actionIcons.editHover} alt="" /></span>
            </div>
            <div className="board-description">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default BoardHeader