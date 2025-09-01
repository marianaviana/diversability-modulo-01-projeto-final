
class MovieCatalog {
  constructor(storage) {
    this.storage = storage;
    this.movies = this.loadMovies();
  }

  loadMovies() {
    const data = this.storage.getData();
    return data.map(movieData => new Movie(
      movieData.id,
      movieData.title,
      movieData.tipo,
      movieData.diretores,
      movieData.avaliacao,
      movieData.lancamento,
      movieData.duracao,
      movieData.streaming,
      movieData.imgLink
    ));
  }

  saveMovies() {
    return this.storage.saveData(this.movies);
  }

  getNextId() {
    if (this.movies.length === 0) return 1;
    return Math.max(...this.movies.map(movie => movie.id)) + 1;
  }

  addMovie(movieData) {
    const newMovie = new Movie(
      this.getNextId(),
      movieData.title,
      movieData.tipo,
      movieData.diretores,
      movieData.avaliacao,
      movieData.lancamento,
      movieData.duracao,
      movieData.streaming,
      movieData.imgLink
    );

    const errors = newMovie.validate();
    if (errors.length > 0) {
      return { success: false, errors };
    }

    this.movies.push(newMovie);
    const saveResult = this.saveMovies();

    return saveResult
      ? { success: true, movie: newMovie }
      : { success: false, errors: ['Erro ao salvar no armazenamento'] };
  }

  updateMovie(id, movieData) {
    const index = this.movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      return { success: false, errors: ['Filme/série não encontrado'] };
    }

    const updatedMovie = new Movie(
      id,
      movieData.title,
      movieData.tipo,
      movieData.diretores,
      movieData.avaliacao,
      movieData.lancamento,
      movieData.duracao,
      movieData.streaming,
      movieData.imgLink
    );

    const errors = updatedMovie.validate();
    if (errors.length > 0) {
      return { success: false, errors };
    }

    this.movies[index] = updatedMovie;
    const saveResult = this.saveMovies();

    return saveResult
      ? { success: true, movie: updatedMovie }
      : { success: false, errors: ['Erro ao salvar no armazenamento'] };
  }

  deleteMovie(id) {
    const index = this.movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      return { success: false, errors: ['Filme/série não encontrado'] };
    }

    this.movies.splice(index, 1);
    const saveResult = this.saveMovies();

    return saveResult
      ? { success: true }
      : { success: false, errors: ['Erro ao salvar no armazenamento'] };
  }

  getMovieById(id) {
    return this.movies.find(movie => movie.id === id);
  }

  searchMovies(query) {
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return this.movies;
    }

    const searchTerm = query.toLowerCase().trim();
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm)
    );
  }

  getHighlyRatedMovies() {
    return this.movies
      .filter(movie => movie.avaliacao > 6)
      .map(movie => movie.title);
  }

  getAvailableOnStreaming() {
    return this.movies
      .filter(movie => movie.streaming)
      .map(movie => movie.title);
  }

  getExtremeDuration(option) {
    if (this.movies.length === 0) return null;

    if (option === 'maior') {
      return this.movies.reduce((max, movie) =>
        movie.duracao > max.duracao ? movie : max
      );
    } else if (option === 'menor') {
      return this.movies.reduce((min, movie) =>
        movie.duracao < min.duracao ? movie : min
      );
    }

    return null;
  }

  getAverageRating() {
    if (this.movies.length === 0) return 0;

    const total = this.movies.reduce((sum, movie) => sum + movie.avaliacao, 0);
    return total / this.movies.length;
  }

  filterByRating(minRating) {
    return this.movies.filter(movie => movie.avaliacao > minRating);
  }

  filterByStreaming(streaming) {
    return this.movies.filter(movie => movie.streaming === streaming);
  }

  filterByType(tipo) {
    return this.movies.filter(movie => movie.tipo === tipo);
  }

  sortByRating(order = 'desc') {
    return [...this.movies].sort((a, b) => {
      return order === 'desc' ? b.avaliacao - a.avaliacao : a.avaliacao - b.avaliacao;
    });
  }

  sortByReleaseDate(order = 'desc') {
    return [...this.movies].sort((a, b) => {
      const dateA = this.parseDate(a.lancamento);
      const dateB = this.parseDate(b.lancamento);
      return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }

  parseDate(dateString) {
    const parts = dateString.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  applyFilters(filters = {}) {
    console.log('Aplicando filtros:', filters);

    let filteredMovies = [...this.movies];

    if (filters.rating) {
      filteredMovies = filteredMovies.filter(movie => movie.avaliacao > 6);
    }

    if (filters.streaming) {
      filteredMovies = filteredMovies.filter(movie => movie.streaming === true);
    }

    if (filters.tipos && filters.tipos.length > 0) {
      filteredMovies = filteredMovies.filter(movie => filters.tipos.includes(movie.tipo));
    }

    const sortBy = filters.sortBy || 'mais-recentes';
    console.log('Ordenando por:', sortBy);

    switch (sortBy) {
      case 'maior-nota':
        filteredMovies.sort((a, b) => b.avaliacao - a.avaliacao);
        break;
      case 'menor-nota':
        filteredMovies.sort((a, b) => a.avaliacao - b.avaliacao);
        break;
      case 'data-lancamento':
        filteredMovies.sort((a, b) => {
          const dateA = this.parseDate(a.lancamento);
          const dateB = this.parseDate(b.lancamento);
          return dateA - dateB;
        });
        break;
      case 'mais-recentes':
      default:
        filteredMovies.sort((a, b) => {
          const dateA = this.parseDate(a.lancamento);
          const dateB = this.parseDate(b.lancamento);
          return dateB - dateA;
        });
        break;
    }

    console.log('Resultados após filtros:', filteredMovies.length);
    return filteredMovies;
  }

  parseDate(dateString) {
    try {
      const parts = dateString.split('/');
      return new Date(parts[2], parts[1] - 1, parts[0]);
    } catch (error) {
      console.error('Erro ao parsear data:', dateString, error);
      return new Date(0);
    }
  }
}