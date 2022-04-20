import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { useProductContext } from '../../contexts/useProductContext';
import Card from './components/Card';
import Col from './components/Col';
import Row from './components/Row';

const CadastroPromocao = () => {

  const {addProduct} = useProductContext()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [newPrice, setNewPrice] = useState('')

  const [errors, setErrors] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    const produto = {
      name: name,
      description: description,
      oldPrice: oldPrice,
      newPrice: newPrice,
    }
    try {
      addProduct(produto)
      
      if(validar(produto)){
        limpaCampos()
        alert("Produto Cadastrado!")
        navigate('/')
      }
    } catch (erro) {
      const erros = erro.msgs_erro
    }
  }
  const limpaCampos = () => {
    setName('')
    setDescription('')
    setOldPrice('')
    setNewPrice('')
  }

  const validar = (produto) => {
    const erros = []

    if (!produto.name) {
      erros.push({ id: 1, msg: 'O campo Nome é obrigatório.' })
    }
    if (!produto.description) {
      erros.push({ id: 2, msg: 'O campo Descrição é obrigatório.' })
    }
    if (!produto.oldPrice) {
      erros.push({ id: 3, msg: 'O campo Preço Original é obrigatório.' })
    }
    if (!produto.newPrice) {
      erros.push({ id: 4, msg: 'O campo Preço Promocional é obrigatório.' })
    }

    if (erros.length == 0) {
      return true
    } 
    else {
      setErrors(erros)
      return false
    }
    
  }
  return (
    <>
      <BackButton/>
      <Card header='Cadastro Promoção'>
        <form id='frmPromocao' onSubmit={onSubmit}>

          {errors.length > 0 &&
            errors.map((msg) => {
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
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder='Nome do produto'
                  className='form-control' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col colStyle='col-md-12'>
              <label>Descrição: *</label>
              <textarea name='descricao'
                value={description}
                onChange={e => setDescription(e.target.value)}
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
                  value={oldPrice}
                  placeholder='0,00'
                  className='form-control'
                  onChange={e => setOldPrice(e.target.value)}
                />
              </div>
            </Col>

            <Col colStyle='col-md-6'>
              <div className='form-group'>
                <label>Preço Promocional: *</label>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>R$</span>
                  <input name='preco_promocional'
                    type='text'
                    value={newPrice}
                    placeholder='0,00'
                    className='form-control'
                    onChange={e => setNewPrice(e.target.value)}
                  />
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
                  onClick={limpaCampos}>
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

export default CadastroPromocao