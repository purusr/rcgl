
import './App.css';
import Head from './Head'
import Main from './Main'
import End from './End'
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='paint'>
      <Head/>
      <hr></hr>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main/>}>
        </Route>
        <Route path='/signup' element={ <Signup/>}>
        </Route>
      </Routes>
      </BrowserRouter>
      <hr></hr>
      <End/>

    </div>
  );
}

export default App;
