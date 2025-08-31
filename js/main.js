document.addEventListener('DOMContentLoaded', () => {
  // Inicializar o sistema de armazenamento
  const storage = new Storage();
  storage.initializeDefaultData();

  // Inicializar o catálogo de filmes
  const movieCatalog = new MovieCatalog(storage);

  // Inicializar a interface do usuário
  const ui = new UI(movieCatalog);
  ui.initialize();
});