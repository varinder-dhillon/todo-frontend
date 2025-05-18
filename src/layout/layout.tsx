import React, {useEffect, useState} from 'react';
import { Outlet, useNavigate } from 'react-router';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch} from '../store/store';
import { getBoardThunkHandler, createBoardThunkHandler } from '../store/thunks/board';
import { ToastContainer } from 'react-toastify';


const Layout: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const board = useSelector((state:RootState) => state.boardSlice.board);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  console.log(board)

  useEffect(()=>{
    const timeOut = setTimeout(() => {
      if(board){
      // Set loading state when Board is there!
      setLoading(false)
    }else{
      if(localStorage.getItem("boardId")){
        // Get Current Board
        dispatch(getBoardThunkHandler(localStorage.getItem("boardId") || ""));
        navigate("/board/"+localStorage.getItem("boardId"));
      }else{
        // Create New Board
        dispatch(createBoardThunkHandler());
      }
    }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [board])

  if(loading) {
    return (
      <div className='h-screen w-screen flex items-center justify-center'>
        <Loader></Loader>
      </div>
    )
  }

  return (
    <div className='layout'>
        <Outlet />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
)
};

export default Layout;