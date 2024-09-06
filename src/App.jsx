import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import Shop from './pages/Shop/Shop'
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

function App() {


return (  
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path='/' element={ <Home/> } />
            <Route exact path='/shop' element={ <Shop/> } />
            <Route exact path='/detail/:id' element={ <Detail/> } />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    
  )
}


export default App;
