import { Container } from './styles'
import { Link} from "react-router-dom";
import img from "../../assets/Perfil.png"

const Navbar = () => {
  return(
    <Container>
      <div className="elements">
        <Link to="/" className='link'> Início </Link>
        <Link to="/" className='link'> Mapa </Link>
        <Link to="/markets/1" className='link'> Mercados </Link>
        <img src={img} alt="" />
      </div>
    </Container>
  )
}

export default Navbar