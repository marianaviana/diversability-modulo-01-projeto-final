
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
}