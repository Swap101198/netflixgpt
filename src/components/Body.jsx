import { createBrowserRouter, RouterProvider } from "react-router"
import Browse from "./Browse"
import Login from "./Login"
import Error from './Error'


const Body = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement:<Error/>
        },
        {
            path: '/Browse',
            element: <Browse />,
            errorElement:<Error/>
        },
    ])

    return (<>
        <RouterProvider router={router} />
    </>)
}

export default Body