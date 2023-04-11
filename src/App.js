import { Route, Routes} from "react-router-dom";
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";
import Detail from "./component/Detail";
import Navbars from "./component/Navbars";
import Error from "./pages/Error";

function App() {
  
  return (

    <div className="App">
      <header className="App-header">
        <Navbars />
        <Routes >
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/Contact/:id" element={<Contact/>}/>
        <Route path="/*" element={<Error />}/>

        </Routes>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
