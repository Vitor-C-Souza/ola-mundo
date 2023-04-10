import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './componentes/Menu/index.js';
import Rodape from 'componentes/Rodape/index.js';
import PaginaPadrao from 'componentes/paginaPadrao/index.js';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path='SobreMim' element={<SobreMim />} />
        </Route>
        <Route path='*' element={<div>Pagina não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
