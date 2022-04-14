import React from 'react';
import Card from "../components/card";
import Col from '../components/col';
import Row from "../components/row";

const estadoInicial = {
  nome: '',
  descricao: '',
  preco_original: '',
  preco_promocional: '',
}

class CadastroPromocao extends React.Component {

  state = estadoInicial

  onChange = (event) => {
    const valor = event.target.value
    const nomeDoCampo = event.target.name
    this.setState({ [nomeDoCampo]: valor })
  }
  onSubmit = (event) => {
    event.preventDefault()
    console.log('  onSubmit => state')
    console.log(this.state)
  }
  limpaCampos = () => {
    this.setState(estadoInicial)
  }
  render() {
    return (
      <Card header="Cadastro Promoção">
        <form id="frmPromocao" onSubmit={this.onSubmit}>
          <Row>
            <Col colStyle="col-md-12">
              <div className="form-group">
                <label>Nome: *</label>
                <input name="nome"
                  type="text"
                  value={this.state.nome}
                  onChange={this.onChange}
                  placeholder='Nome do produto'
                  className="form-control" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col colStyle="col-md-12">
              <label>Descrição: *</label>
              <textarea name="descricao"
                value={this.state.descricao}
                onChange={this.onChange}
                placeholder='Descrição do produto'
                className="form-control" />
            </Col>
          </Row>

          <Row>
            <Col colStyle="col-md-6">
              <label>Preço Original: *</label>
              <div class="input-group mb-3">
                <span class="input-group-text">R$</span>
                <input name="preco_original"
                  type="text"
                  inputmode="decimal"
                  value={this.state.preco_original}
                  onChange={this.onChange}
                  placeholder='0,00'
                  className="form-control" />
              </div>
            </Col>

            <Col colStyle="col-md-6">
              <div className="form-group">
                <label>Preço Promocional: *</label>
                <div class="input-group mb-3">
                  <span class="input-group-text">R$</span>
                  <input name="preco_promocional"
                    type="text"
                    inputmode="decimal"
                    value={this.state.preco_promocional}
                    onChange={this.onChange}
                    placeholder='0,00'
                    className="form-control" />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col colStyle="col-md-12">
              <label for="formFile"
                class="form-label">
                  Escolha uma imagem:
                </label>
              <input class="form-control"
                type="file"
                accept="image/*"
                id="formFile" />
            </Col>
          </Row>

          <Row>
            <Col colStyle="col-md-6">
              <div className="text-center">
                <button className="btn btn-primary"
                  onClick={this.limpaCampos}>
                    Limpar
                </button>
              </div>
            </Col>

            <Col colStyle="col-md-6">
              <div className="text-center">
                <button className="btn btn-success"
                  type="submit">
                    Salvar
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </Card>
    )
  }
}

export default CadastroPromocao