import React from 'react'
import logo from "../assets/Logo.svg"
import { actionIcons } from '../utils/contants'

const BoardHeader: React.FC = () => {
  return (
    <div className='board-header mt-5 flex items-start justify-start gap-3'>
        <img src={logo} alt="logo" className='mt-1.5' />
        <div>
            <div className="board-name flex gap-1">
                <h2 className='text-[32px] font-bold'>Board Title</h2>
                <span><img src={actionIcons.editHover} alt="" /></span>
            </div>
            <div className="board-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iure atque totam doloribus commodi voluptate ad architecto reprehenderit illo voluptatum, quod iste quaerat eius dignissimos quisquam. At delectus in accusantium.</p>
            </div>
        </div>
    </div>
  )
}

export default BoardHeader