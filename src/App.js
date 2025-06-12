import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import RouterError from "./components/RouterError";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import ErrorHandler from "./components/ErrorHandler";
import Loader from "./components/Loader";
import "./i18n";
function App() {
  // lazy loading
  const ResultContainer = lazy(() => import("./components/ResultContainer"));
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <RouterError />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
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
  return (
    <Suspense fallback={<Shimmer />}>
      <Provider store={appStore}>
        <ErrorHandler />
        <Loader />

        <ErrorBoundary>
          <RouterProvider router={appRouter}></RouterProvider>
        </ErrorBoundary>
      </Provider>
    </Suspense>
  );
}

export default App;
