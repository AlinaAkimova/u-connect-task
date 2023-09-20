import { FC } from "react";
import { RouterProvider } from "react-router-dom";

// Routes
import { router } from "routes";

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
