import {createBrowserRouter} from "react-router-dom";
import { HomeLayout } from "./pages";


const router = createBrowserRouter([
    {path: "/", element: <HomeLayout />}
])

export default router;