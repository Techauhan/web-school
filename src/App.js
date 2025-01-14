import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/user";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Adduser from "./pages/user/adduser/adduser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/adduser" element={<Adduser />} />
          <Route path="/users" element={<User />} >
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="/products" element={<Adduser />} >
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  