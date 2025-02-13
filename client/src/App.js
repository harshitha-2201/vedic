import { BrowserRouter as Router, Routes, Route     } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contect from './components/Contect'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import BookAppointment from './components/BookAppointment';
<<<<<<< HEAD
import AdminDashboard from "./Admin/AdminDashboard";


=======
import AdminAppointments from "./components/Admin/AdminAppointments ";
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Features" element={<Features/>} />
        <Route path="/Contect" element={<Contect/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book-appointment" element = {<BookAppointment />} />
<<<<<<< HEAD
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
=======
        <Route path="/list-appointment" element = {<AdminAppointments />} />

>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
