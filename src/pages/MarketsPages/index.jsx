import { Container } from './styles'
import BackButton from '../../components/BackButton'
import MarketRow from '../../components/MarketRow'
import { useProductContext } from '../../contexts/useProductContext'

const MarketsPage = () => {
  const { markets } = useProductContext()
  return(
    <Container>
      <BackButton/>
      <div className="sections">
        <section className="title">
          <h1>Lista de mercados</h1>
        </section>
        <section className="markets">
          {
            markets.map((market,key) => {
              return(<MarketRow id={key+1}/>)
            })
          }
        </section>
      </div>
    </Container>
  )
}

export default MarketsPage