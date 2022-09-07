import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Page/Home/Home"
import './App.css';
import SHop from './Page/Shop/SHop';
import Main from './Page/Main/Main';
import Login from './Page/Login/Login';
import Blog from './Page/Blog/Blog';
import Introduce from './Page/Introduce/Introduce';
import Contact from './Page/Contact/Contact';
import Form from './Page/Form/Form';
import Search from './Page/Search/Search';
import Detail from './Page/Detail/Detail';
import 'antd/dist/antd.css'
import Searchs from './Page/Searchs/Searchs';

import Cart from './Page/Cart/Cart';
import { useSelector } from 'react-redux';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route index element={<Home />} />
            <Route path='/shop/' element={<SHop />} />
            <Route path='/blog/' element={<Blog />} />
            <Route path='/introduce/' element={<Introduce />} />
            <Route path='/contact/' element={<Contact />} />
            <Route path='/search/:id/' element={<Search />} />
            <Route path='/detail/:item/' element={<Detail />} />
            <Route path='searchs/' element={<Searchs />} />
            <Route path='/cart/' element={<Cart />} />
          </Route>
          <Route path='login' element={<Form />} >
            
          </Route>
          <Route path='signup' element={<Login />} >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
