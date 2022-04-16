import './App.css';
import {BrowserRouter , Route ,Routes ,Navigate } from "react-router-dom"
import Navbar from './componenets/Navbar';
import Cart from './componenets/Cart';
import Home from './componenets/Home';
import NotFound from './componenets/NotFound';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ToastContainer />
     <Navbar/>
     <Routes>
       <Route path="/cart" exact element={<Cart/>}/>
       <Route path="/"  exact element={<Home/>}/>
       <Route path="/not-found" element={<NotFound/>}/>
       <Route path="*"
        element={<Navigate to="/not-found" replace />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
