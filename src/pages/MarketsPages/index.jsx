import { Container } from './styles'
import BackButton from '../../components/BackButton'
import MarketRow from '../../components/MarketRow'

const MarketsPage = () => {

  return(
    <Container>
      <BackButton/>
      <div className="sections">
        <section className="title">
          <h1>Lista de Mercados</h1>
        </section>
        <section className="markets">
          <MarketRow/>
          <MarketRow/>
          <MarketRow/>
          <MarketRow/>
          <MarketRow/>
        </section>
      </div>
    </Container>
  )
}

export default MarketsPage