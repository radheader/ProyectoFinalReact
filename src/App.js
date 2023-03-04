import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsItem from './components/components item/DetailsItem';
import ProviderContextCart from "./components/components item/ProviderContextCart.js"

function App() {

  return (
    
    <ProviderContextCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ < DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
    </BrowserRouter>
    </ProviderContextCart>
    
  );
}

export default App;