import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Posts from "./components/Posts";
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
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
        path: '/posts',
        element: <Posts />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
