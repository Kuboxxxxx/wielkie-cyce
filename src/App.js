import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>

  );
};
