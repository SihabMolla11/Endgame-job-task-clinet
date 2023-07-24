import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Ragister/Register";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/My-college/MyCollege";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile/MyProfile";
import CollgetDetail from "../Component/CollgetCard/CollgetDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/college-detail/:id",
        element: (
          <PrivateRoute>
            <CollgetDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_DATABASE_URL}/college-detail/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
