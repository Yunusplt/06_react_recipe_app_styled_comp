import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Detail from "./pages/details/Detail"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="details" element={<Detail/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
