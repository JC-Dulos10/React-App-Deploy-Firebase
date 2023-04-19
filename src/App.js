import Navbar from "./Navbar";
import Works from "./pages/Works";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import pagebg from "./Asset/images/page-bg.jpg";

function App() {
  return (
  <>
    <div style={{
        backgroundImage: `url(${pagebg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        backgroundAttachment: 'fixed'
    }}>
      <Navbar />
      <div className="inside-container">
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/works" element={<Works />}/> 
          <Route path="/contact" element={<Contacts/>}/> 
        </Routes>
      </div>
    </div>
  </>
  )
}

export default App;
