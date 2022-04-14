import React from 'react'
import { Route, Routes} from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import CadastroPromocao from '../pages/Promocao/cadastroPromocao';

const Router = () => {
  return(    
    <Routes>
      <Route path='*' element={<ProfilePage/>} />
      <Route path='/markets' element={<ProfilePage/>} />
      <Route path='/markets/:id' element={<ProfilePage/>} />
      <Route path='/markets/:id/add-product' element={<ProfilePage/>} />
      <Route path='/markets/products/:id' element={<ProfilePage/>} />
      <Route path='/cadastro-promocao' element={<CadastroPromocao/>} />
    </Routes>
  )
}

export default Router