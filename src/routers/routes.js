// Import Library's Hook
import { createBrowserRouter } from "react-router-dom";

// Import Components
import Dashboard from "../Pages/Dashboard";
import RootLayout from "../Layouts/RootLayout";
import Homepage from "../Pages/HomePage";
import Movie from "../Pages/Movie";
import UserProtected from "./UserProtected";
import Checkout from "../Pages/Checkout";
import Auth from "../Pages/Auth";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import NotFound from "../Pages/NotFound";
import AdminProtected from "./AdminProtected";

const routes = createBrowserRouter([
   // Admin
   {
      path: "/admin",
      element: (
         <AdminProtected>
            <Dashboard />
         </AdminProtected>
      ),
   },
   {
      path: "/",
      element: <RootLayout />,
      children: [
         // Homepage
         { index: true, element: <Homepage /> },

         // Movie
         { path: "/movie/:movieId", element: <Movie /> },

         // Checkout
         {
            path: "/checkout/:checkoutId",
            element: (
               <UserProtected>
                  <Checkout />
               </UserProtected>
            ),
         },

         // Authentication
         {
            path: "",
            element: <Auth />,
            children: [
               { path: "/signin", element: <Signin /> },
               { path: "/signup", element: <Signup /> },
            ],
         },
      ],
   },

   { path: "*", element: <NotFound /> },
]);

export default routes;
