import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import {
  NavBar,
  About,
  Belt,
  CTA,
  Footer,
  GetStarted,
  Hero,
  Contact,
  Features,
  GreenPalette,
  SignUp,
  LoginPage,
  Body,
  MySpace,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes> 
      <Routes>
        <Route path='/myspace' element={<MySpace />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
