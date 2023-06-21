import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navs from "./components/NavBars/Navs";
import SignIn from './Pages/SignInPages/SignIn1';
import Admin from './Pages/AdminPages/Admin'
import Accueil from "./Pages/Accueil/Accueil";
import AnalysePredictiveAdmin from "./Pages/AnalysePredictiveAdmin/AnalysePredictiveAdmin";
import ResponsableAdmin from "./Pages/ResponsableAdmin/ResponsableAdmin";
import TableauDeBord from "./Pages/TableauDeBord/TableauDeBord";
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route path="/inscription" element={<SignIn />} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/admin/AnalysePredictiveAdmin" element={<AnalysePredictiveAdmin/>} />
        <Route path="/admin/ResponsableAdmin" element={<ResponsableAdmin/>} />
        <Route path="/admin/TableauDeBord" element={<TableauDeBord/>} />
      </Routes>
    </div>
  );
}

export default App;
