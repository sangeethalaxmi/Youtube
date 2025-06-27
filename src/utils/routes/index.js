import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Shimmer from "../../components/Shimmer";
import RouterError from "../../components/RouterError";

const Signup = lazy(() => import("../../components/Signup"));
const Body = lazy(() => import("../../components/Body"));
const MainContainer = lazy(() => import("../../components/MainContainer"));
const WatchPage = lazy(() => import("../../components/WatchPage"));
const ResultContainer = lazy(() => import("../../components/ResultContainer"));

const appRouter = createBrowserRouter([
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Body />
      </Suspense>
    ),
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<Shimmer />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ResultContainer />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
