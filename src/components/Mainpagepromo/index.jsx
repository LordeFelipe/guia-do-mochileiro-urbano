
import { Container } from './styles'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import img from '../../assets/market.jpg'
import { React, useState } from 'react'
 
const Mainpagepromo = () => {

    const [count, setCounter] = useState(0);
    const [count2, setCounter2] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
      };
      const increase2 = () => {
        setCounter2(count2 => count2 + 1);
      };
      const [disable, setDisable] = useState(false);
      const [disable2, setDisable2] = useState(false);
      const buttoncall = () => {
          increase();
          setDisable(true);
          setDisable2(true);
     }
     const buttoncall2 = () => {
        increase2();
        setDisable(true);
        setDisable2(true);
   }
    return(
        <Container>
            <div className="product">
                <img src={img} alt="" />
                <div className="info">
                <h2 className="title">Alface Verde</h2>
                <p className="old-price">De R$ 25,00</p>
                <p className="new-price">Por R$ 10,00</p>
                </div>
                <div className="buttons">
                <button className="details"> Detalhes </button>
                <div className="like-deslike">
                    <div className='like'>
                    <button disabled={disable} onClick={buttoncall}><BiLike size={"5vh"} color={"green"}/></button>
                    <p> {count} </p>
                    </div>
                    <div className="deslike">
                    <button disabled={disable2} onClick={buttoncall2}><BiDislike size={"5vh"} color ={"red"}/></button>
                    <p>{count2} </p>
                    </div>
                </div>
                </div>
            </div>
         </Container>
    )
}

export default Mainpagepromo 
