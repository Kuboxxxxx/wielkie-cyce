import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Czlonkowie } from "./pages/Czlonkowie";
import { Harmonogram } from "./pages/Harmonogram";
import { Merch } from "./pages/Merch";
import { Wspolpraca } from "./pages/Wspolpraca";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/czlonkowie" element={<Czlonkowie />} />
      <Route path="/harmonogram" element={<Harmonogram />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/wspolpraca" element={<Wspolpraca />} />
    </Routes>
  );
};
