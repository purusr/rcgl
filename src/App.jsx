
import './App.css';
import Head from './Head'
import Main from './Main'
import End from './End'
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './Signin';
import Pnf from './Pnf';
import Comments from './Comments';

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
        <Route path='/signin' element={ <Signin/>}>
        </Route>
        <Route path='/comments/:id' element={ <Comments/>}>
        </Route>
        <Route path='*' element={ <Pnf/>}>
        </Route>
      </Routes>
      </BrowserRouter>
      <hr></hr>
      <End/>

    </div>
  );
}

export default App;
