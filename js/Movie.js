class Movie {
  constructor(id, title, tipo, diretores, avaliacao, lancamento, duracao, streaming, imgLink) {
    this.id = id;
    this.title = title;
    this.tipo = tipo;
    this.diretores = Array.isArray(diretores) ? diretores : [diretores];
    this.avaliacao = parseFloat(avaliacao);
    this.lancamento = lancamento;
    this.duracao = parseInt(duracao);
    this.streaming = Boolean(streaming);
    this.imgLink = imgLink || '';
  }

  validate() {
    const errors = [];

    if (!this.title || typeof this.title !== 'string' || this.title.trim().length === 0) {
      errors.push('Título é obrigatório');
    }

    if (!this.tipo || (this.tipo !== 'Filme' && this.tipo !== 'Serie')) {
      errors.push('Tipo deve ser "Filme" ou "Serie"');
    }

    if (!this.diretores || this.diretores.length === 0 || this.diretores.some(d => !d || typeof d !== 'string' || d.trim().length === 0)) {
      errors.push('Pelo menos um diretor é obrigatório');
    }

    if (isNaN(this.avaliacao) || this.avaliacao < 0 || this.avaliacao > 10) {
      errors.push('Avaliação deve ser um número entre 0 e 10');
    }

    if (!this.isValidDate(this.lancamento)) {
      errors.push('Data de lançamento deve estar no formato DD/MM/AAAA');
    }

    if (isNaN(this.duracao) || this.duracao <= 0) {
      errors.push('Duração deve ser um número positivo');
    }

    if (typeof this.streaming !== 'boolean') {
      errors.push('Streaming deve ser um valor booleano');
    }

    return errors;
  }

  isValidDate(dateString) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(dateString)) return false;

    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;

    // Verificação básica de dias por mês
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) return false;
    if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      if (day > (isLeapYear ? 29 : 28)) return false;
    }

    return true;
  }
}