import { createBrowserRouter } from "react-router";
import Board from "./components/Board";
import Layout from "./layout/layout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/board/:boardId",
                element: <Board />,
            },
        ]
    }
]);


export default router;