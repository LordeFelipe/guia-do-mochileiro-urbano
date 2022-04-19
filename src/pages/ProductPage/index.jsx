import { Container } from './styles'
import BackButton from '../../components/BackButton'
import img from '../../assets/market.jpg'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductContext } from '../../contexts/useProductContext'

const ProductPage = () => {

  const { products, addProduct} = useProductContext();
  let navigate = useNavigate()
  let {id} = useParams();
  const product = products[id-1]

  return(
    <Container>
      <BackButton/>
      <div className="sections">
        <section className="first-column">
          <h1>{product.name}</h1>
          <div className="image-box">
            <img src={product.img} alt="" />
          </div>
          <div className="like-deslike">
            <div className='like'>
              <button><BiLike size={"7vh"}/></button>
              <p> {product.likes} </p>
            </div>
            <div className="deslike">
              <button><BiDislike size={"7vh"}/></button>
              <p> {product.deslikes} </p>
            </div>
          </div>
          <button className='route'>Traçar Rota</button>
        </section>
        <section className="second-column">
          <p className="old-price">De R$ 25,00</p>
          <p className="new-price">Por R$ 10,00</p>
          <div className="info-box">
            <p>{product.description}</p>
          </div>
          <div className="market">
            <img src={img} alt="" />  
            <div className="market-info">
              <h1 className="title">Carrefour - Asa Norte</h1>
              <p>Via W3 Norte, 504/505 - Bloco A</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default ProductPage