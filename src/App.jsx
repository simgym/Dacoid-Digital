import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrackGoal from "./pages/TrackGoal";
import GetBurn from "./pages/GetBurn";
import RootLayout from "./pages/Root";
import Errorpage from "./pages/Errorpage";
import SetGoals from "./pages/SetGoals";
import WorkoutTracker from "./pages/WorkoutTracker";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errorpage />,
      children: [
        { index: true, element: <TrackGoal /> },
        { path: "/getburn", element: <GetBurn /> },
        { path: "/setgoals", element: <SetGoals /> },
        { path: "/tracker", element: <WorkoutTracker /> },
        { path: "/login", element: <Signin /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
