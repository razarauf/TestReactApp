import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Posts from "./components/Posts";
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Posts />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        requireAuth: true,
        element: <FetchData />
    },
    {
        path: '/home',
        element: <Home />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
