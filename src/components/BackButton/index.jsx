import { Container } from './styles'
import {FaArrowLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    let navigate = useNavigate();

    return (
        <Container>
          <button className= "back-button" onClick={() => {navigate(-1)}}> <FaArrowLeft/> Voltar </button>
        </Container>
    )
}

export default BackButton