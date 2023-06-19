import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navs from "./components/NavBars/Navs";
import SignIn from '../src/Pages/SignInPages/SignIn';
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Navs />
      <Routes>
        <Route exact path="/" />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/inscription" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
