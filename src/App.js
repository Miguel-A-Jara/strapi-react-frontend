import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SiteHeader    from './components/SiteHeader';
import Category      from './pages/Category';
import HomePage      from './pages/HomePage';
import ReviewDetails from './pages/ReviewDetails';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <SiteHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:id' element={<ReviewDetails />} />
          <Route path='/category/:id' element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
