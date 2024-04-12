 
import './App.css';
import Home from './components/Home';
import Matches from './components/Matches';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Addmatch from './components/Addmatch';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Addplayers from './components/Addplayers';
import Tableplayers from './components/Tableplayers';
import Players from './components/Players';
import Cards from './components/Cards';
import Signup from './components/Signup';
import Login from './components/Login';




function App() {
  
 return (

      <div className='site-wrap'>
        <BrowserRouter>
                <Header/>
                <Routes>
                  <Route path="" element={<Home/>} />
                  <Route path="matches" element={<Matches/>} />
                  <Route path="Addmatch" element={<Addmatch/>} />
                  <Route path="Editmatch/:id" element={<Addmatch/>} />
                  <Route path="Admin" element={<Admin/>} />
                  <Route path="players" element={<Players/>} />
                  <Route path="Addplayers" element={<Addplayers/>} />
                  <Route path="Editplayer/:id" element={<Addplayers/>} />
                  <Route path="Tableplayers" element={<Tableplayers/>} />
                  <Route path="Cards" element={<Cards/>} />
                  <Route path="signup" element={<Signup/>} />
                  <Route path="Login" element={<Login/>} />
                </Routes>
                <Footer/>
         </BrowserRouter>
      </div>
      );
}

export default App;
