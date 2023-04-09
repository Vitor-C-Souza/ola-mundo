import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './componentes/Menu/index.js';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/SobreMim' element={<SobreMim />} />
        <Route path='*' element={<div>Pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
