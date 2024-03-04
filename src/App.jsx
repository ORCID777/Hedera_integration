import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppRootLayout from "./pages/AppRoot";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Vote from "./pages/Vote";
import HomeRootLayout from "./pages/HomeRoot";
import HomePage from "./pages/HomePage";
import { ModalContextProvider } from "./util/modalContext";
import { AllWalletsProvider } from "./services/wallets/AllWalletsProvider";
import { Buffer } from "buffer";

window.global = window.global ?? window;
window.Buffer = window.Buffer ?? Buffer;
window.process = window.process ?? { env: {} };

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/app",
        element: <AppRootLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "markets", element: <Markets /> },
          { path: "vote", element: <Vote /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AllWalletsProvider>
        <ModalContextProvider>
          <RouterProvider router={router} />
        </ModalContextProvider>
      </AllWalletsProvider>
    </>
  );
}

export default App;
