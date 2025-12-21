import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Pages/Dashboard/Common/Profile";

import AddProduct from "../Pages/Dashboard/Manager/AddProduct";
import ManageProducts from "../Pages/Dashboard/Manager/ManageProducts";
import PendingOrders from "../Pages/Dashboard/Manager/PendingOrders";
import ApproveOrders from "../Pages/Dashboard/Manager/ApproveOrders";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import TrackOrder from "../Pages/Dashboard/Buyer/TrackOrder";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AllProducts from "../Pages/Dashboard/Admin/AllProducts";
import AllOrders from "../Pages/Dashboard/Admin/AllOrders";
import AllProduct from "../Pages/AllProduct/AllProduct";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-product",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <PrivateRoute>
            <ManageProducts></ManageProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "pending-orders",
        element: (
          <PrivateRoute>
            <PendingOrders></PendingOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "approve-orders",
        element: (
          <PrivateRoute>
            <ApproveOrders></ApproveOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "track-order",
        element: (
          <PrivateRoute>
            <TrackOrder></TrackOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers></ManageUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "all-orders",
        element: (
          <PrivateRoute>
            <AllOrders></AllOrders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
