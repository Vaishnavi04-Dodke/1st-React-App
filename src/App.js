
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage/Homepage';
import About from './Components/About Us/About';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonal/Testominal';
import Bussines from './Components/Bussiness/Bussines';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/home' element={<Homepage/>} />
          <Route path='/learn' element={<About/>} />
          <Route path='/refrence' element={<Services/>} />
          {/* <Route path='/community' element={<Testimonial/>} /> */}
          <Route path='/mycommunity' element={<Bussines/>} />
          <Route path='/ourcommunity' element={<About/>} />
          <Route path='/github' element={<h1>GitHub page</h1>} />
          <Route path='/git' element={<Testimonial/>} />
          {/* <Route path='/blog' element={<h1>Blogpage</h1>} /> */}
          {/* <Route path="/register"element={<h1>Git page</h1>}  /> */}
          <Route path='/github' element={<h1>Git page</h1>} />
          <Route path='/darkmode' element={<h1>Darkmode</h1>} />
          
          

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
