export class ErroValidacao {
  constructor(erros) {
    this.msgs_erro = erros;
  }
}

export class ServicoPromocao {

  validar = (produto) => {
    console.log('validar')
    console.log(produto)
    const erros = []

    if (!produto.nome) {
      erros.push({ id: 1, msg: 'O campo Nome é obrigatório.' })
    }
    if (!produto.descricao) {
      erros.push({ id: 2, msg: 'O campo Descrição é obrigatório.' })
    }
    if (isNaN(produto.preco_original) || produto.preco_original <= 0) {
      erros.push({ id: 3, msg: 'O campo Preço Original deve ser maior do que R$ 0,00' })
    }
    if (isNaN(produto.preco_promocional) || produto.preco_promocional <= 0) {
      erros.push({ id: 4, msg: 'O campo Preço Promocional deve ser maior do que R$ 0,00' })
    }
    console.log('erros:')
    console.log(erros)
    if (erros.length > 0) {
      throw new ErroValidacao(erros)
    }
  }
}