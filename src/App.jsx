import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useContext, useEffect, useState } from "react";
import auth from "./Appwrite/auth";
import UserContext from "./context/UserContext";
import AllPost from "./pages/AllPost";
import Protected from "./components/Protected";
import AddPost from "./pages/AddPost";

function App() {
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth
      .getCurrentUser()
      .then((user) => {
        if (user) dispatch({ type: "login", payload: user });
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="all-posts"
          element={
            <Protected>
              <AllPost />
            </Protected>
          }
        />
        <Route
          path="add-post"
          element={
            <Protected>
              <AddPost />
            </Protected>
          }
        />
        <Route
          path="login"
          element={
            <Protected auth={false}>
              <Login />
            </Protected>
          }
        />
        <Route
          path="signup"
          element={
            <Protected auth={false}>
              <SignUp />
            </Protected>
          }
        />
      </Route>
    )
  );

  return !loading ? <RouterProvider router={router} /> : <h1>Loading...</h1>;
}

export default App;
