import React from 'react';
import BackButton from '../../components/BackButton';
import Card from './components/Card';
import Col from './components/Col';
import Row from './components/Row';
import { ServicoPromocao } from './servicoPromocao';

const estadoInicial = {
  nome: '',
  descricao: '',
  preco_original: '',
  preco_promocional:'',
  erros: [],
  sucesso: false,
}

class CadastroPromocao extends React.Component {

  state = estadoInicial

  constructor() {
    super()
    this.servico = new ServicoPromocao()
  }

  onChange = (event) => {
    const valor = event.target.value
    const nomeDoCampo = event.target.name
    this.setState({ [nomeDoCampo]: valor })
  }
  onSubmit = (event) => {
    event.preventDefault()
    console.log('  onSubmit => state v2')
    console.log(this.state)
    const produto = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      preco_original: this.state.preco_original,
      preco_promocional: this.state.preco_promocional,
    }
    try {
      this.servico.validar(produto)
      this.limpaCampos()
      this.setState({ sucesso: true })
    } catch (erro) {
      const erros = erro.msgs_erro
      this.setState({ erros })
    }
  }
  limpaCampos = () => {
    this.setState(estadoInicial)
  }
  render() {
    return (
      <>
        <BackButton/>
        <Card header='Cadastro Promoção'>
          <form id='frmPromocao' onSubmit={this.onSubmit}>
            {this.state.sucesso &&
              <div className='alert alert-dismissible alert-success'>
                <button type='button'
                  className='btn-close'
                  data-bs-dismiss='alert'></button>
                <strong>Sucesso!</strong> Promoção cadatrada.
              </div>
            }

            {this.state.erros.length > 0 &&
              this.state.erros.map((msg) => {
                return (
                  <div key={msg.id} className='alert alert-dismissible alert-danger'>
                    <button type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      disabled></button>
                    <strong>Erro!</strong> {msg.msg}
                  </div>
                )
              })
            }
            <p className='text-danger'>* Campos obrigatórios</p>
            <Row>
              <Col colStyle='col-md-12'>
                <div className='form-group'>
                  <label>Nome: *</label>
                  <input name='nome'
                    type='text'
                    value={this.state.nome}
                    onChange={this.onChange}
                    placeholder='Nome do produto'
                    className='form-control' />
                </div>
              </Col>
            </Row>

            <Row>
              <Col colStyle='col-md-12'>
                <label>Descrição: *</label>
                <textarea name='descricao'
                  value={this.state.descricao}
                  onChange={this.onChange}
                  placeholder='Descrição do produto'
                  className='form-control' />
              </Col>
            </Row>

            <Row>
              <Col colStyle='col-md-6'>
                <label>Preço Original: *</label>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>R$</span>
                  <input name='preco_original'
                    type='text'
                    inputMode='decimal'
                    value={this.state.preco_original}
                    onChange={this.onChange}
                    placeholder='0,00'
                    className='form-control' />
                </div>
              </Col>

              <Col colStyle='col-md-6'>
                <div className='form-group'>
                  <label>Preço Promocional: *</label>
                  <div className='input-group mb-3'>
                    <span className='input-group-text'>R$</span>
                    <input name='preco_promocional'
                      type='text'
                      inputMode='decimal'
                      value={this.state.preco_promocional}
                      onChange={this.onChange}
                      placeholder='0,00'
                      className='form-control' />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col colStyle='col-md-12'>
                <label htmlFor='formFile'
                  className='form-label'>
                  Escolha uma imagem:
                </label>
                <input className='form-control'
                  type='file'
                  accept='image/*'
                  id='formFile' />
              </Col>
            </Row>

            <Row>
              <Col colStyle='col-md-6'>
                <div className='text-center'>
                  <button className='btn btn-danger'
                    type='button'
                    title='Limpa todos os campos'
                    onClick={this.limpaCampos}>
                    Limpar
                  </button>
                </div>
              </Col>

              <Col colStyle='col-md-6'>
                <div className='text-center'>
                  <button className='btn btn-primary'
                    type='submit'
                    title='Salva a promoção'>
                    Salvar
                  </button>
                </div>
              </Col>
            </Row>
          </form>
        </Card>
      </>
    )
  }
}

export default CadastroPromocao