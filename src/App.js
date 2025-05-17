import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import ResultContainer from "./components/ResultContainer";
import ErrorProvider from "./components/ErrorProvider";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
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
          path: "result",
          element: <ResultContainer />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
      {/* header
      sidebar
        -menu items
      body
        -button list
        video container
       */}
    </Provider>
  );
}

export default App;
