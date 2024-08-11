import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Success from "./components/Success";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [searchTerm ,setSearchTerm] = useState();
 
  return (
    <BrowserRouter>
    <Navbar onsearch={setSearchTerm} />
     <Routes>
     <Route element={<PrivateComponent/>}>
      <Route path="/" element={<MainPage searchTerm={searchTerm}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<h1>Shop Component</h1>}/>
      <Route path="/" element={<h1>Contact Component</h1>}/>
      <Route path="/product" element={<ProductDetails/>}/>
      <Route path="/success" element={<Success/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<h1>logout Component</h1>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     
     <Footer/>
    <ToastContainer />

    </BrowserRouter>


  );
};

export default App;
