import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../links";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[]
    }
])