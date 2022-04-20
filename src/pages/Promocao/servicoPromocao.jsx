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
    if (!produto.preco_original) {
      erros.push({ id: 3, msg: 'O campo Preço Original é obrigatório.' })
    }
    if (!produto.preco_promocional) {
      erros.push({ id: 4, msg: 'O campo Preço Promocional é obrigatório.' })
    }
    console.log('erros:')
    console.log(erros)
    if (erros.length > 0) {
      throw new ErroValidacao(erros)
    }
  }
}