class UI {
  constructor(movieCatalog) {
    this.movieCatalog = movieCatalog;
    this.currentPage = 'principal';
    this.editingMovieId = null;
  }

  isValidImageUrl(url) {
    if (!url || typeof url !== 'string' || url.trim() === '') return false;

    const cleanUrl = url.trim();

    return (
      cleanUrl === 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png' ||
      cleanUrl.startsWith('/images/') ||
      cleanUrl.startsWith('http://') ||
      cleanUrl.startsWith('https://') ||
      cleanUrl.startsWith('data:image/') ||
      cleanUrl.includes('.jpg') ||
      cleanUrl.includes('.jpeg') ||
      cleanUrl.includes('.png') ||
      cleanUrl.includes('.gif') ||
      cleanUrl.includes('.webp')
    );
  }

  initialize() {
    this.renderHeader();
    this.renderFooter();
    this.showPage('principal');
    this.setupEventListeners();
  }

  loadAllImages() {
    setTimeout(() => {
      const images = document.querySelectorAll('img.card-img');
      images.forEach(img => {
        if (img.src && img.src !== 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png' && !img.complete) {
          const newImg = new Image();
          newImg.onload = function() {
            img.src = this.src;
          };
          newImg.onerror = function() {
            img.src = 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png';
          };
          newImg.src = img.src;
        }
      });
    }, 100);
  }

  renderHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    header.innerHTML = `
      <div class="logo-container">
        <img src="https://mariviana.dev/diversability-modulo-01-projeto-final/images/ada-tech-logo.webp" alt="Logo MCU 1" class="side-logo">
        <img src="https://mariviana.dev/diversability-modulo-01-projeto-final/images/cognizant-logo-white.webp" alt="Logo Principal MCU" class="main-logo">
        <img src="https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png" alt="Logo MCU 2" class="side-logo">
      </div>
      <nav>
        <ul>
          <li><a href="#" class="nav-link ${this.currentPage === 'principal' ? 'active' : ''}" data-page="principal">Principal</a></li>
          <li><a href="#" class="nav-link ${this.currentPage === 'cadastrar' ? 'active' : ''}" data-page="cadastrar">Cadastrar</a></li>
          <li><a href="#" class="nav-link ${this.currentPage === 'atualizar' ? 'active' : ''}" data-page="atualizar">Atualizar</a></li>
          <li><a href="#" class="nav-link ${this.currentPage === 'excluir' ? 'active' : ''}" data-page="excluir">Excluir</a></li>
          <li>
            <a href="#" class="nav-link ${this.currentPage === 'sobre' ? 'active' : ''}" data-page="sobre">
              Sobre
            </a>
          </li>
          <li>
            <div class="nav-aluna" data-page="sobre">
              <div class="aluna">
                <div>
                  <h3>Mariana Viana</h3>
                  <h4>Id Ada: 1433002</h4>
                </div>
                <img src="https://mariviana.dev/diversability-modulo-01-projeto-final/images/mariana-viana-foto-profissional.png" alt="Mariana Viana" title="Mariana Viana">
              </div>
            </div>
          </li>
        </ul>
      </nav>
    `;
  }

  renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    footer.innerHTML = `
      <p>Catálogo Marvel (MCU) &copy; ${new Date().getFullYear()} | Aluna <a href="https://mariviana.dev" target="_blank" rel="noreferrer" aria-label="Mari Viana">Mariana Viana</a> | Programa <a target="_blank" href="https://ada.tech/oportunidades/cognizant-diversability" rel="noreferrer" aria-label="DiversAbility">DiversAbility</a> via <a href="https://ada.tech/" target="_blank" rel="noreferrer" aria-label="Ada">Ada & Cognizant</a></p>
    `;
  }

  renderPageContent(page) {
    const content = document.getElementById('content');
    if (!content) return;

    switch (page) {
      case 'principal':
        content.innerHTML = this.getPrincipalPageHTML();
        this.renderMovieCards();
        this.renderStatistics();
        break;
      case 'cadastrar':
        content.innerHTML = this.getCadastrarPageHTML();
        break;
      case 'atualizar':
        content.innerHTML = this.getAtualizarPageHTML();
        this.renderSearchResults('atualizar');
        break;
      case 'excluir':
        content.innerHTML = this.getExcluirPageHTML();
        this.renderSearchResults('excluir');
        break;
      case 'sobre':
        content.innerHTML = this.getSobrePageHTML();
        break;
      default:
        content.innerHTML = this.getPrincipalPageHTML();
        this.renderMovieCards();
        this.renderStatistics();
    }
  }

  getPrincipalPageHTML() {
    return `
      <section class="page principal active">
        <div class="section-container">
          <h2 class="section-title">Estatísticas</h2>
          <div id="statistics" class="stats-grid"></div>
        </div>
        <div class="section-container">
          <h2 class="section-title">Catálogo Marvel (MCU)</h2>
          <div class="search-box">
            <input type="text" id="search-input" class="form-control" placeholder="Buscar por título...">
            <button id="search-btn" class="btn btn-primary">Buscar</button>
          </div>
          <div id="movie-cards" class="cards-grid"></div>
        </div>
      </section>
    `;
  }

  getCadastrarPageHTML() {
    return `
      <section class="page cadastrar active">
        <div class="section-container">
          <h2 class="section-title">Cadastrar Novo Filme/Série</h2>
          <form id="movie-form">
            <div class="form-group">
              <label for="title">Título*</label>
              <input type="text" id="title" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="tipo">Tipo*</label>
              <select id="tipo" class="form-control" required>
                <option value="">Selecione...</option>
                <option value="Filme">Filme</option>
                <option value="Serie">Série</option>
              </select>
            </div>
            <div class="form-group">
              <label for="diretores">Diretor(es)* (separados por vírgula)</label>
              <input type="text" id="diretores" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="avaliacao">Avaliação IMDb (Entre 0.0 e 10.0)*</label>
              <input type="number" id="avaliacao" class="form-control" min="0" max="10" step="0.1" required>
            </div>
            <div class="form-group">
              <label for="lancamento">Data de Lançamento (DD/MM/AAAA)*</label>
              <input type="text" id="lancamento" class="form-control" placeholder="Ex: 15/01/2021" required>
            </div>
            <div class="form-group">
              <label for="duracao">Duração (minutos)*</label>
              <input type="number" id="duracao" class="form-control" min="1" required>
            </div>
            <div class="form-group">
              <div class="checkbox-group">
                <input type="checkbox" id="streaming" class="form-control">
                <label for="streaming">Disponível em streaming</label>
              </div>
            </div>
            <div class="form-group">
              <label for="imgLink">Link da Imagem (opcional)</label>
              <input type="text" id="imgLink" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
          </form>
        </div>
      </section>
    `;
  }

  getAtualizarPageHTML() {
    return `
      <section class="page atualizar active">
        <div class="section-container">
          <h2 class="section-title">Atualizar Filme/Série</h2>
          <div class="search-box">
            <input type="text" id="update-search-input" class="form-control" placeholder="Buscar por título...">
            <button id="update-search-btn" class="btn btn-primary">Buscar</button>
          </div>
          <div id="update-results"></div>
          <div id="update-form-container" style="display: none;">
            <h3 class="section-title">Editar Filme/Série</h3>
            <form id="update-form">
              <input type="hidden" id="update-id">
              <div class="form-group">
                <label for="update-title">Título*</label>
                <input type="text" id="update-title" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="update-tipo">Tipo*</label>
                <select id="update-tipo" class="form-control" required>
                  <option value="">Selecione...</option>
                  <option value="Filme">Filme</option>
                  <option value="Serie">Série</option>
                </select>
              </div>
              <div class="form-group">
                <label for="update-diretores">Diretor(es)* (separados por vírgula)</label>
                <input type="text" id="update-diretores" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="update-avaliacao">Avaliação IMDb (Entre 0.0 e 10.0)*</label>
                <input type="number" id="update-avaliacao" class="form-control" min="0" max="10" step="0.1" required>
              </div>
              <div class="form-group">
                <label for="update-lancamento">Data de Lançamento (DD/MM/AAAA)*</label>
                <input type="text" id="update-lancamento" class="form-control" placeholder="Ex: 15/01/2021" required>
              </div>
              <div class="form-group">
                <label for="update-duracao">Duração (minutos)*</label>
                <input type="number" id="update-duracao" class="form-control" min="1" required>
              </div>
              <div class="form-group">
                <div class="checkbox-group">
                  <input type="checkbox" id="update-streaming" class="form-control">
                  <label for="update-streaming">Disponível em streaming</label>
                </div>
              </div>
              <div class="form-group">
                <label for="update-imgLink">Link da Imagem (opcional)</label>
                <input type="text" id="update-imgLink" class="form-control">
              </div>
              <button type="submit" class="btn btn-primary">Atualizar</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  getExcluirPageHTML() {
    return `
      <section class="page excluir active">
        <div class="section-container">
          <h2 class="section-title">Excluir Filme/Série</h2>
          <div class="search-box">
            <input type="text" id="delete-search-input" class="form-control" placeholder="Buscar por título...">
            <button id="delete-search-btn" class="btn btn-primary">Buscar</button>
          </div>
          <div id="delete-results"></div>
        </div>
      </section>
    `;
  }

  getSobrePageHTML() {
    return `
      <section class="page sobre active">
        <div class="section-container">
          <h2 class="section-title">Sobre o Projeto</h2>
          <p>Este projeto foi desenvolvido como parte das atividades da disciplina da trilha de Front-end Javascript no Módulo 01 (Nivelamento de Lógica de Programação e OO) do programa DiversAbility.</p>
          <p>O objetivo é concluir o desafio do professor e demonstrar o domínio das habilidades apresentadas.</p>
          <p>Este é um catálogo de filmes e séries do Universo Cinematográfico Marvel (MCU), desenvolvido com HTML, CSS e JavaScript puro.</p>
          <p>O sistema permite gerenciar um catálogo completo com funcionalidades de cadastro, atualização, exclusão e consulta de informações sobre produções do MCU.</p>
          <h3>Funcionalidades:</h3>
          <ul>
            <li>Cadastro de novos filmes/séries com validação de dados</li>
            <li>Atualização de informações existentes</li>
            <li>Exclusão de itens do catálogo</li>
            <li>Busca por título</li>
            <li>Visualização em cards com informações detalhadas</li>
            <li>Estatísticas do catálogo</li>
          </ul>
          <p>O projeto foi desenvolvido seguindo os princípios de Clean Code e Programação Orientada a Objetos, com uma interface escura com cores inspiradas na plataforma de aprendizagem da Ada.tech.</p>
        </div>
      </section>
    `;
  }

  renderMovieCards(movies = null) {
    const container = document.getElementById('movie-cards');
    if (!container) return;

    const moviesToRender = movies || this.movieCatalog.movies;

    console.log('Renderizando cards, total de filmes:', moviesToRender.length);
    moviesToRender.forEach(movie => {
      console.log('Filme:', movie.title, 'ImgLink:', movie.imgLink, 'Válida:', this.isValidImageUrl(movie.imgLink));
    });

    if (moviesToRender.length === 0) {
      container.innerHTML = '<p>Nenhum filme/série encontrado.</p>';
      return;
    }

    container.innerHTML = moviesToRender.map(movie => {
      const imageUrl = this.isValidImageUrl(movie.imgLink) ? movie.imgLink : 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png';

      return `
      <div class="movie-card" data-id="${movie.id}">
        <div class="card-body-img">
          <img src="${imageUrl}"
            alt="${movie.title}"
            class="card-img"
            onerror="this.src='https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png'"
          />
        </div>
        <div class="card-body">
          <h3 class="card-title">${movie.title}</h3>
          <p class="card-text"><strong>Tipo:</strong> ${movie.tipo}</p>
          <p class="card-text"><strong>${movie.diretores[0].includes(',') ? 'Diretores(as)' : 'Diretor(a)'}:</strong> ${movie.diretores.join(', ')}</p>
          <p class="card-text"><strong>Lançamento:</strong> ${movie.lancamento}</p>
          <p class="card-text"><strong>Duração:</strong> ${movie.duracao} minutos</p>
          <p class="card-text"><strong>Streaming:</strong> ${movie.streaming ? 'Disponível' : 'Indisponível'}</p>
          <p class="card-text rating"><strong>Avaliação IMDb:</strong> ${this.renderStars(movie.avaliacao)} (${movie.avaliacao.toFixed(1)}/10)</p>
          <div class="card-actions">
            <button class="btn btn-warning edit-btn" data-id="${movie.id}">Editar</button>
            <button class="btn btn-danger delete-btn" data-id="${movie.id}">Excluir</button>
          </div>
        </div>
      </div>
      `;
    }).join('');

    this.attachCardEventListeners();
  }

  renderSearchResults(page) {
    const container = page === 'atualizar'
      ? document.getElementById('update-results')
      : document.getElementById('delete-results');

    if (!container) return;

    const searchInput = page === 'atualizar'
      ? document.getElementById('update-search-input')
      : document.getElementById('delete-search-input');

    const query = searchInput ? searchInput.value : '';
    const results = this.movieCatalog.searchMovies(query);

    if (results.length === 0) {
      container.innerHTML = '<p>Nenhum resultado encontrado.</p>';
      return;
    }

    container.innerHTML = `
      <h3>Resultados da Busca:</h3>
      <div class="cards-grid">
        ${results.map(movie => {
          const hasValidImage = movie.imgLink &&
                              (movie.imgLink.startsWith('http') ||
                                movie.imgLink.startsWith('https://mariviana.dev/diversability-modulo-01-projeto-final/images/') ||
                                movie.imgLink.startsWith('data:image'));

          const imageUrl = hasValidImage ? movie.imgLink : 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png';

          return `
          <div class="movie-card">
            <div class="card-body-img">
              <img src="${imageUrl}"
                alt="${movie.title}"
                class="card-img"
                onerror="this.src='https://mariviana.dev/diversability-modulo-01-projeto-final/images/marvel.png'"
              />
            </div>
            <div class="card-body">
              <h3 class="card-title">${movie.title}</h3>
              <p class="card-text"><strong>Tipo:</strong> ${movie.tipo}</p>
              <p class="card-text"><strong>Diretor(es):</strong> ${movie.diretores.join(', ')}</p>
              <p class="card-text"><strong>Lançamento:</strong> ${movie.lancamento}</p>
              <p class="card-text"><strong>Duração:</strong> ${movie.duracao} minutos</p>
              <p class="card-text"><strong>Streaming:</strong> ${movie.streaming ? 'Disponível' : 'Indisponível'}</p>
              <p class="card-text rating"><strong>Avaliação IMDb:</strong> ${this.renderStars(movie.avaliacao)} (${movie.avaliacao.toFixed(1)}/10)</p>
              ${page === 'atualizar' ?
                `<button class="btn btn-primary select-update-btn" data-id="${movie.id}">Editar ${movie.tipo}</button>` :
                `<button class="btn btn-danger select-delete-btn" data-id="${movie.id}">Excluir</button>`
              }
            </div>
          </div>
          `;
        }).join('')}
      </div>
    `;

    if (page === 'atualizar') {
      document.querySelectorAll('.select-update-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          this.prepareUpdateForm(id);
        });
      });
    } else {
      document.querySelectorAll('.select-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          this.confirmDelete(id);
        });
      });
    }
  }

  attachCardEventListeners() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        this.showPage('atualizar');
        this.prepareUpdateForm(id);
      });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        this.confirmDelete(id);
      });
    });
  }

  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
      starsHTML += '★';
    }

    if (halfStar) {
      starsHTML += '☆';
    }

    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '☆';
    }

    return starsHTML;
  }

  renderStatistics() {
    const container = document.getElementById('statistics');
    if (!container) return;

    const highlyRated = this.movieCatalog.getHighlyRatedMovies();
    const availableOnStreaming = this.movieCatalog.getAvailableOnStreaming();
    const longestMovie = this.movieCatalog.getExtremeDuration('maior');
    const shortestMovie = this.movieCatalog.getExtremeDuration('menor');
    const averageRating = this.movieCatalog.getAverageRating();

    container.innerHTML = `
      <div class="stat-card">
        <div class="stat-value">${this.movieCatalog.movies.length}</div>
        <div class="stat-label">Total de Itens</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${averageRating.toFixed(1)}</div>
        <div class="stat-label">Média de Avaliação</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${highlyRated.length}</div>
        <div class="stat-label">Avaliação > 6</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${availableOnStreaming.length}</div>
        <div class="stat-label">Disponível em Streaming</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${longestMovie ? longestMovie.duracao + 'min' : 'N/A'}</div>
        <div class="stat-label">Maior Duração${longestMovie ? `<br>${longestMovie.title}` : ''}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${shortestMovie ? shortestMovie.duracao + 'min' : 'N/A'}</div>
        <div class="stat-label">Menor Duração${shortestMovie ? `<br>${shortestMovie.title}` : ''}</div>
      </div>
    `;
  }

  prepareUpdateForm(id) {
    const movie = this.movieCatalog.getMovieById(id);
    if (!movie) return;

    this.editingMovieId = id;

    document.getElementById('update-id').value = movie.id;
    document.getElementById('update-title').value = movie.title;
    document.getElementById('update-tipo').value = movie.tipo;
    document.getElementById('update-diretores').value = movie.diretores.join(', ');
    document.getElementById('update-avaliacao').value = movie.avaliacao;
    document.getElementById('update-lancamento').value = movie.lancamento;
    document.getElementById('update-duracao').value = movie.duracao;
    document.getElementById('update-streaming').checked = movie.streaming;
    document.getElementById('update-imgLink').value = movie.imgLink || '';

    document.getElementById('update-form-container').style.display = 'block';

    document.getElementById('update-form-container').scrollIntoView({ behavior: 'smooth' });
  }

  confirmDelete(id) {
    const movie = this.movieCatalog.getMovieById(id);
    if (!movie) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Confirmar Exclusão</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <p>Tem certeza que deseja excluir <strong>"${movie.title}"</strong>?</p>
          <p>Esta ação não pode ser desfeita.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary cancel-delete">Cancelar</button>
          <button class="btn btn-danger confirm-delete">Excluir</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    modal.querySelector('.cancel-delete').addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    modal.querySelector('.confirm-delete').addEventListener('click', () => {
      const result = this.movieCatalog.deleteMovie(id);
      if (result.success) {
        this.showNotification('Filme/série excluído com sucesso!', 'success');

        if (this.currentPage === 'principal') {
          this.renderMovieCards();
          this.renderStatistics();
        } else if (this.currentPage === 'excluir') {
          this.renderSearchResults('excluir');
        }
      } else {
        this.showNotification('Erro ao excluir: ' + result.errors.join(', '), 'error');
      }

      document.body.removeChild(modal);
    });
  }

  showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
      document.body.removeChild(notification);
    });

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 5px;
      color: white;
      z-index: 1000;
      font-weight: 500;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      animation: slideIn 0.3s ease;
  `;

    if (type === 'success') {
      notification.style.backgroundColor = 'var(--success-color)';
    } else if (type === 'error') {
      notification.style.backgroundColor = 'var(--danger-color)';
    } else {
      notification.style.backgroundColor = 'var(--accent-color)';
    }

    document.body.appendChild(notification);

    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 3000);
  }

  showPage(page) {
    this.currentPage = page;
    this.renderHeader();
    this.renderPageContent(page);
    this.setupPageEventListeners(page);
    // Forçar carregamento de imagens após a renderização
    this.loadAllImages();
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        e.preventDefault();
        const page = e.target.dataset.page;
        this.showPage(page);
      }
    });
  }

  setupPageEventListeners(page) {
    switch (page) {
      case 'principal':
        this.setupPrincipalPageListeners();
        break;
      case 'cadastrar':
        this.setupCadastrarPageListeners();
        break;
      case 'atualizar':
        this.setupAtualizarPageListeners();
        break;
      case 'excluir':
        this.setupExcluirPageListeners();
        break;
    }
  }

  setupPrincipalPageListeners() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => {
        const results = this.movieCatalog.searchMovies(searchInput.value);
        this.renderMovieCards(results);
      });

      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const results = this.movieCatalog.searchMovies(searchInput.value);
          this.renderMovieCards(results);
        }
      });
    }
  }

  setupCadastrarPageListeners() {
    const form = document.getElementById('movie-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = {
        title: document.getElementById('title').value,
        tipo: document.getElementById('tipo').value,
        diretores: document.getElementById('diretores').value.split(',').map(d => d.trim()),
        avaliacao: parseFloat(document.getElementById('avaliacao').value),
        lancamento: document.getElementById('lancamento').value,
        duracao: parseInt(document.getElementById('duracao').value),
        streaming: document.getElementById('streaming').checked,
        imgLink: document.getElementById('imgLink').value
      };

      const result = this.movieCatalog.addMovie(formData);

      if (result.success) {
        this.showNotification('Filme/série cadastrado com sucesso!', 'success');
        form.reset();
      } else {
        this.showNotification('Erro no cadastro: ' + result.errors.join(', '), 'error');
      }
    });
  }

  setupAtualizarPageListeners() {
    const searchBtn = document.getElementById('update-search-btn');
    const searchInput = document.getElementById('update-search-input');
    const form = document.getElementById('update-form');

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => {
        this.renderSearchResults('atualizar');
      });

      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          this.renderSearchResults('atualizar');
        }
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
          title: document.getElementById('update-title').value,
          tipo: document.getElementById('update-tipo').value,
          diretores: document.getElementById('update-diretores').value.split(',').map(d => d.trim()),
          avaliacao: parseFloat(document.getElementById('update-avaliacao').value),
          lancamento: document.getElementById('update-lancamento').value,
          duracao: parseInt(document.getElementById('update-duracao').value),
          streaming: document.getElementById('update-streaming').checked,
          imgLink: document.getElementById('update-imgLink').value
        };

        const result = this.movieCatalog.updateMovie(this.editingMovieId, formData);

        if (result.success) {
          this.showNotification('Filme/série atualizado com sucesso!', 'success');
          form.reset();
          document.getElementById('update-form-container').style.display = 'none';
          this.renderSearchResults('atualizar');
        } else {
          this.showNotification('Erro na atualização: ' + result.errors.join(', '), 'error');
        }
      });
    }
  }

  setupExcluirPageListeners() {
    const searchBtn = document.getElementById('delete-search-btn');
    const searchInput = document.getElementById('delete-search-input');

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => {
        this.renderSearchResults('excluir');
      });

      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          this.renderSearchResults('excluir');
        }
      });
    }
  }
}