import { Container } from './styles'
import Profile from '../../assets/Perfil.png'
import Mainpagepromo from '../../components/Mainpagepromo'
import { useProductContext } from '../../contexts/useProductContext'

const ProfilePage = () => {
  const {products} = useProductContext();
  return(
    <Container>
      <div className= "prof-page">
        <div className='profile'>
          <h1>User Name</h1>
          <img src = {Profile} alt = "foto de perfil"></img>
          <button className='edit'>Editar Perfil</button>
          <button className='addpic' >Adicionar Foto</button>
        </div>
        <div className='marketlist'>
          <Mainpagepromo id={1}/>
          <Mainpagepromo id={2}/>
          <Mainpagepromo id={3}/>
        </div>
      </div>
    </Container>
  )
}

export default ProfilePage