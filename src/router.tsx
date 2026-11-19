import {createBrowserRouter} from "react-router-dom";
import { Apod, HomeLayout, Hubble, Landing, News, SpaceX, Webb } from "./pages";
import { newsPageLoader } from "./pages/News";
import { ErrorElement } from "./components";


const router = createBrowserRouter([
    {
        path: "/", 
        element: <HomeLayout />,
        children: [
            {index: true, element: <Landing />},
            {path: "news", element: <News />, loader: newsPageLoader, errorElement: <ErrorElement />},
            {path: "webb", element: <Webb />},
            {path: "spacex", element: <SpaceX />},
            {path: "apod", element: <Apod />},
            {path: "hubble", element: <Hubble />},

        ]
    }
])

export default router;