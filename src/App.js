import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import { RouterProvider } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";
import ErrorHandler from "./components/ErrorHandler";
import Loader from "./components/Loader";
import "./i18n";
import appRouter from "./utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  // lazy loading
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 3, // when stale set to 0 when component remount api will be called but this staleTime will make the data catched for given time
        refetchOnWindowFocus: false, //when we refocus after moving out of window we dont want to refetch data from api
        retry: 1, // retry query one more time when there is console.error;
        useErrorBoundary: true, // return error to near error boundary implemeneted in application
      },
      mutations: {
        retry: 1,
        useErrorBoundary: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Shimmer />}>
        <Provider store={appStore}>
          <ErrorHandler />
          <Loader />
          <ReactQueryDevtools initialIsOpen={false} />
          <ErrorBoundary>
            <RouterProvider router={appRouter}></RouterProvider>
          </ErrorBoundary>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
