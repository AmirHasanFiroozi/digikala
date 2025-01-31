import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

import HomePage from "./pages/HomePage";
import HandleFullLoader from "./Ui/Loader/HandleFullLoader";
const CategoryPage = lazy(() =>import("./pages/CategoryPage"));
const CartPage = lazy(() =>import("./pages/CartPage"));
const UserPage = lazy(() =>import("./pages/UserPage"));
const HandleModals = lazy(() =>import("./features/modals/HandleModals"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <HandleModals />
      <HandleFullLoader />
    </>
  );
}

export default App;
