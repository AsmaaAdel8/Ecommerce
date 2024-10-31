import { Route, Routes } from "react-router-dom";
import MasterLayout from "./MasterLayout";
import Register from "./Component/Sign/Register";
import Login from "./Component/Sign/Login";
import Dashpoard from "./Component/Sign/Dashpoard";
import Hero from "./Component/homePage/Hero";

export default function App() {
  // http://localhost:1337/api/product?populate=*  api url
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Hero/>}/>

        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashpoard" element={<Dashpoard />} />
      </Route>
    </Routes>
  );
}
