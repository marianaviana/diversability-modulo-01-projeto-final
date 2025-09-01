class Storage {
  constructor() {
    this.storageKey = 'mcuCatalog';
  }

  getData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Erro ao recuperar dados do localStorage:', error);
      return [];
    }
  }

  saveData(data) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados no localStorage:', error);
      return false;
    }
  }

  initializeDefaultData() {
    const mockData = [
      {
        id: 1,
        title: 'Capitão América: O Primeiro Vingador',
        tipo: 'Filme',
        diretores: ['Joe Johnston'],
        avaliacao: 6.9,
        lancamento: '22/07/2011',
        duracao: 124,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/capitao-america-o-primeiro-vingador.webp'
      },
      {
        id: 2,
        title: 'Agente Carter',
        tipo: 'Serie',
        diretores: [
          'Jennifer Getzinger',
          'Metin Hüseyin',
          'David Platt',
          'Lawrence Trilling',
          'Craig Zisk',
          'Stephen Cragg',
          "Louis D'Esposito",
          'Peter Leto',
          'Christopher Misiano',
          'Vincent Misiano',
          'Joe Russo',
          'Stephen Williams',
          'Scott Winant'
        ],
        avaliacao: 7.8,
        lancamento: '06/01/2015',
        duracao: 129600,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/agente-carter.webp'
      },
      {
        id: 3,
        title: 'Quarteto Fantástico: Primeiros Passos',
        tipo: 'Filme',
        diretores: ['Matt Shakman'],
        avaliacao: 7.3,
        lancamento: '24/07/2025',
        duracao: 115,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/quarteto-fantastico-primeiros-passos.webp'
      },
      {
        id: 4,
        title: 'Capitã Marvel',
        tipo: 'Filme',
        diretores: ['Jon Favreau'],
        avaliacao: 7.9,
        lancamento: '02/05/2008',
        duracao: 126,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/capita-marvel.webp'
      },
      {
        id: 5,
        title: 'Madame Teia',
        tipo: 'Filme',
        diretores: ['S.J. Clarkson'],
        avaliacao: 4.1,
        lancamento: '15/02/2024',
        duracao: 116,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/madame-teia.png'
      },
      {
        id: 6,
        title: 'O Incrível Hulk',
        tipo: 'Filme',
        diretores: ['Louis Leterrier'],
        avaliacao: 6.6,
        lancamento: '13/06/2008',
        duracao: 112,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/o-incrivel-hulk.webp'
      },
      {
        id: 7,
        title: 'Homem de Ferro',
        tipo: 'Filme',
        diretores: ['Jon Favreau'],
        avaliacao: 7.9,
        lancamento: '30/04/2008',
        duracao: 126,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-de-ferro.webp'
      },
      {
        id: 8,
        title: 'Homem de Ferro 2',
        tipo: 'Filme',
        diretores: ['Jon Favreau'],
        avaliacao: 6.9,
        lancamento: '30/04/2010',
        duracao: 124,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-de-ferro-2.webp'
      },
      {
        id: 9,
        title: 'Curta Marvel: O Consultor',
        tipo: 'Filme',
        diretores: ['Leythum'],
        avaliacao: 6.3,
        lancamento: '13/09/2011',
        duracao: 4,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/o-consultor.webp'
      },
      {
        id: 10,
        title: 'Curta Marvel: Aconteceu uma coisa engraçada a caminho do martelo de Thor',
        tipo: 'Filme',
        diretores: ['Leythum'],
        avaliacao: 7.1,
        lancamento: '25/10/2011',
        duracao: 4,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/aconteceu-uma-coisa-engracada-a-caminho-do-martelo-de-thor.webp'
      },
      {
        id: 11,
        title: 'Thor',
        tipo: 'Filme',
        diretores: ['Kenneth Branagh'],
        avaliacao: 7.0,
        lancamento: '29/04/2011',
        duracao: 115,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/thor.webp'
      },
      {
        id: 12,
        title: 'Venom',
        tipo: 'Filme',
        diretores: ['Ruben Fleischer'],
        avaliacao: 6.6,
        lancamento: '01/10/2018',
        duracao: 112,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/venom.png'
      },
      {
        id: 13,
        title: 'Os Vingadores',
        tipo: 'Filme',
        diretores: ['Joss Whedon'],
        avaliacao: 8.0,
        lancamento: '01/10/2018',
        duracao: 143,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/os-vingadores.webp'
      },
      {
        id: 14,
        title: 'Curta Marvel: Item 47',
        tipo: 'Filme',
        diretores: ["Louis D'Esposito"],
        avaliacao: 6.6,
        lancamento: '27/09/2012',
        duracao: 12,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/item-47.webp'
      },
      {
        id: 15,
        title: 'Homem de Ferro 3',
        tipo: 'Filme',
        diretores: ['Shane Black'],
        avaliacao: 7.1,
        lancamento: '26/04/2013',
        duracao: 130,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-de-ferro-3.webp'
      },
      {
        id: 16,
        title: 'Curta Marvel: Todos Saúdem o Rei',
        tipo: 'Filme',
        diretores: ['Drew Pearce'],
        avaliacao: 7.2,
        lancamento: '04/02/2014',
        duracao: 14,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/todos-saudem-o-rei.webp'
      },
      {
        id: 17,
        title: 'Agentes da S.H.I.E.L.D.',
        tipo: 'Serie',
        diretores: ['Kevin Tancharoen, Jesse Bochco, Billy Gierhart, Vincent Misianom, Garry A. Brown, Bobby Roth, Nina Lopez-Corrado, Roxann Dawson, Milan Cheylov, Kevin Hooks'],
        avaliacao: 7.5,
        lancamento: '24/09/2013',
        duracao: 6043,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/shield.webp'
      },
      {
        id: 18,
        title: 'Thor: O Mundo Sombrio',
        tipo: 'Filme',
        diretores: ['Alan Taylor'],
        avaliacao: 6.7,
        lancamento: '24/09/2013',
        duracao: 112,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/thor-o-mundo-sombrio.webp'
      },
      {
        id: 19,
        title: 'Capitão América: O Soldado Invernal',
        tipo: 'Filme',
        diretores: ['Anthony Russo, Joe Russo'],
        avaliacao: 7.7,
        lancamento: '10/04/2014',
        duracao: 136,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/capitao-america-o-soldado-invernal.webp'
      },
      {
        id: 20,
        title: 'Guardiões da Galáxia Vol. 1',
        tipo: 'Filme',
        diretores: ['James Gunn'],
        avaliacao: 8.0,
        lancamento: '31/07/2014',
        duracao: 121,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/guardioes-da-galaxia.webp'
      },
      {
        id: 21,
        title: 'Eu sou Groot',
        tipo: 'Serie',
        diretores: ['Kirsten Lepore'],
        avaliacao: 6.7,
        lancamento: '10/08/2022',
        duracao: 31,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/eu-sou-groot.webp'
      },
      {
        id: 22,
        title: 'Guardiões da Galáxia Vol. 2',
        tipo: 'Filme',
        diretores: ['James Gunn'],
        avaliacao: 7.6,
        lancamento: '27/04/2017',
        duracao: 136,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/guardioes-da-galaxia-vol-2.webp'
      },
      {
        id: 23,
        title: 'Demolidor / Deredevil',
        tipo: 'Serie',
        diretores: ['Drew Goddard'],
        avaliacao: 8.6,
        lancamento: '10/04/2015',
        duracao: 2081,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/deredevil.webp'
      },
      {
        id: 24,
        title: 'Jessica Jones',
        tipo: 'Serie',
        diretores: ['Melissa Rosenberg'],
        avaliacao: 7.8,
        lancamento: '10/22/2015',
        duracao: 2041,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/jessica-jones.webp'
      },
      {
        id: 25,
        title: 'Vingadores: Era de Ultron',
        tipo: 'Filme',
        diretores: ['Joss Whedon'],
        avaliacao: 7.3,
        lancamento: '23/04/2015',
        duracao: 141,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/vingadores-era-de-ultron.webp'
      },
      {
        id: 26,
        title: 'Homem-Formiga',
        tipo: 'Filme',
        diretores: ['Peyton Reed'],
        avaliacao: 7.2,
        lancamento: '16/07/2015',
        duracao: 117,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-formiga.webp'
      },
      {
        id: 27,
        title: 'Luke Cage',
        tipo: 'Serie',
        diretores: ['Andy Goddard, Marc Jobst, Clark Johnson, Stephen Surjik, Paul McGuigan, Phil Abraham'],
        avaliacao: 7.2,
        lancamento: '30/09/2016',
        duracao: 1430,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/luke-cage.webp'
      },
      {
        id: 28,
        title: 'Punho de Ferro',
        tipo: 'Serie',
        diretores: ['Stephen Surjik, John Dahl'],
        avaliacao: 6.4,
        lancamento: '17/03/2017',
        duracao: 1265,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/punho-de-ferro.webp'
      },
      {
        id: 29,
        title: 'Capitão América: Guerra Civil',
        tipo: 'Filme',
        diretores: ['Anthony Russo, Joe Russo'],
        avaliacao: 7.8,
        lancamento: '28/04/2016',
        duracao: 147,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/capitao-america-guerra-civil.webp'
      },
      {
        id: 30,
        title: 'Viúva Negra',
        tipo: 'Filme',
        diretores: ['Cate Shortland'],
        avaliacao: 6.6,
        lancamento: '28/04/2016',
        duracao: 132,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/viuva-negra.webp'
      },
      {
        id: 31,
        title: 'Pantera Negra',
        tipo: 'Filme',
        diretores: ['Ryan Coogler'],
        avaliacao: 7.3,
        lancamento: '15/02/2018',
        duracao: 134,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/pantera-negra.webp'
      },
      {
        id: 32,
        title: 'Os Defensores',
        tipo: 'Série',
        diretores: ['S.J. Clarkson', 'Farren Blackburn', 'Uta Briesewitz'],
        avaliacao: 6.8,
        lancamento: '18/08/2017',
        duracao: 353,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/os-defensores.webp'
      },
      {
        id: 33,
        title: 'Homem-Aranha: De Volta ao Lar',
        tipo: 'Filme',
        diretores: ['Jon Watts'],
        avaliacao: 7.4,
        lancamento: '06/07/2017',
        duracao: 133,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-aranha-de-volta-ao-lar.webp'
      },
      {
        id: 34,
        title: 'Inumanos',
        tipo: 'Série',
        diretores: ['Roel Reiné', 'Chris Fisher', 'Kevin Tancharoen'],
        avaliacao: 4.9,
        lancamento: '29/09/2017',
        duracao: 336,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/inumanos.webp'
      },
      {
        id: 35,
        title: 'Doutor Estranho',
        tipo: 'Filme',
        diretores: ['Scott Derrickson'],
        avaliacao: 7.5,
        lancamento: '02/11/2016',
        duracao: 115,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/doutor-estranho.webp'
      },
      {
        id: 36,
        title: 'Helstrom',
        tipo: 'Série',
        diretores: ['Daina Reid', 'Amanda Row', 'David Straiton'],
        avaliacao: 6.0,
        lancamento: '16/10/2020',
        duracao: 450,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/helstrom.webp'
      },
      {
        id: 37,
        title: 'Thor: Ragnarok',
        tipo: 'Filme',
        diretores: ['Taika Waititi'],
        avaliacao: 7.9,
        lancamento: '26/10/2017',
        duracao: 130,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/thor-ragnarok.webp'
      },
      {
        id: 38,
        title: 'Justiceiro',
        tipo: 'Série',
        diretores: ['Tom Shankland', 'Andy Goddard', 'Kevin Hooks'],
        avaliacao: 8.5,
        lancamento: '17/11/2017',
        duracao: 660,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/justiceiro.webp'
      },
      {
        id: 39,
        title: 'The Runaways',
        tipo: 'Série',
        diretores: ['Roxann Dawson', 'Jeffrey W. Byrd', 'Jet Wilkinson'],
        avaliacao: 6.9,
        lancamento: '21/11/2017',
        duracao: 1830,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/the-runnaways.png'
      },
      {
        id: 40,
        title: 'Manto e Adaga',
        tipo: 'Série',
        diretores: ['Peter Hoar', 'Alex Garcia Lopez', 'Amanda Row'],
        avaliacao: 6.6,
        lancamento: '07/06/2018',
        duracao: 1200,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/manto-e-adaga.webp'
      },
      {
        id: 41,
        title: 'Vingadores: Guerra Infinita',
        tipo: 'Filme',
        diretores: ['Anthony Russo', 'Joe Russo'],
        avaliacao: 8.4,
        lancamento: '26/04/2018',
        duracao: 149,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/vingadores-guerra-infinita.webp'
      },
      {
        id: 42,
        title: 'Homem-Formiga e a Vespa',
        tipo: 'Filme',
        diretores: ['Peyton Reed'],
        avaliacao: 7.0,
        lancamento: '05/07/2018',
        duracao: 118,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-formiga-e-a-vespa.webp'
      },
      {
        id: 43,
        title: 'Vingadores: Ultimato',
        tipo: 'Filme',
        diretores: ['Anthony Russo', 'Joe Russo'],
        avaliacao: 8.4,
        lancamento: '25/04/2019',
        duracao: 181,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/vingadores-ultimato.webp'
      },
      {
        id: 44,
        title: 'Loki',
        tipo: 'Série',
        diretores: ['Kate Herron', 'Justin Benson', 'Aaron Moorhead'],
        avaliacao: 8.2,
        lancamento: '09/06/2021',
        duracao: 324,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/loki.webp'
      },
      {
        id: 45,
        title: 'What If',
        tipo: 'Série',
        diretores: ['Bryan Andrews'],
        avaliacao: 7.4,
        lancamento: '11/08/2021',
        duracao: 270,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/what-if.webp'
      },
      {
        id: 46,
        title: 'WandaVision',
        tipo: 'Série',
        diretores: ['Matt Shakman'],
        avaliacao: 8.0,
        lancamento: '15/01/2021',
        duracao: 300,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/wandavision.webp'
      },
      {
        id: 47,
        title: 'Falcão e Soldado Invernal',
        tipo: 'Série',
        diretores: ['Kari Skogland'],
        avaliacao: 7.2,
        lancamento: '19/03/2021',
        duracao: 300,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/falcao-e-soldado-invernal.webp'
      },
      {
        id: 48,
        title: 'Homem-Aranha: Longe de Casa',
        tipo: 'Filme',
        diretores: ['Jon Watts'],
        avaliacao: 7.4,
        lancamento: '04/07/2019',
        duracao: 129,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-aranha-longe-de-casa.png'
      },
      {
        id: 49,
        title: 'Venom: Tempo de Carnificina',
        tipo: 'Filme',
        diretores: ['Andy Serkis'],
        avaliacao: 5.9,
        lancamento: '07/10/2021',
        duracao: 97,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/venom-tempo-de-carnificina.png'
      },
      {
        id: 50,
        title: 'Morbius',
        tipo: 'Filme',
        diretores: ['Daniel Espinosa'],
        avaliacao: 5.2,
        lancamento: '31/03/2022',
        duracao: 104,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/morbius.png'
      },
      {
        id: 51,
        title: 'Homem-Aranha: Sem Volta para Casa',
        tipo: 'Filme',
        diretores: ['Jon Watts'],
        avaliacao: 8.2,
        lancamento: '16/12/2021',
        duracao: 148,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-aranha-sem-volta-para-casa.png'
      },
      {
        id: 52,
        title: 'Shang-Chi e a Lenda dos Dez Anéis',
        tipo: 'Filme',
        diretores: ['Destin Daniel Cretton'],
        avaliacao: 7.4,
        lancamento: '02/09/2021',
        duracao: 132,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/shang-chi-e-a-lenda-dos-dez-aneis.webp'
      },
      {
        id: 53,
        title: 'Os Eternos',
        tipo: 'Filme',
        diretores: ['Chloé Zhao'],
        avaliacao: 6.3,
        lancamento: '04/11/2021',
        duracao: 157,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/os-eternos.webp'
      },
      {
        id: 54,
        title: 'Doutor Estranho: No Multiverso da Loucura',
        tipo: 'Filme',
        diretores: ['Sam Raimi'],
        avaliacao: 6.9,
        lancamento: '06/05/2022',
        duracao: 126,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/doutor-estranho-no-multiverso-da-loucura.webp'
      },
      {
        id: 55,
        title: 'Gavião Arqueiro',
        tipo: 'Série',
        diretores: ['Rhys Thomas', 'Bert & Bertie', 'Amber Templemore-Finlayson'],
        avaliacao: 7.5,
        lancamento: '24/11/2021',
        duracao: 288,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/gaviao-arqueiro.webp'
      },
      {
        id: 56,
        title: 'Echo',
        tipo: 'Série',
        diretores: ['Sydney Freeland', 'Catriona McKenzie'],
        avaliacao: 6.9,
        lancamento: '09/01/2024',
        duracao: 270,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/Echo.webp'
      },
      {
        id: 57,
        title: 'Cavaleiro da Lua',
        tipo: 'Série',
        diretores: ['Mohamed Diab', 'Justin Benson', 'Aaron Moorhead'],
        avaliacao: 7.3,
        lancamento: '30/03/2022',
        duracao: 300,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/cavaleiro-da-lua.webp'
      },
      {
        id: 58,
        title: 'Pantera Negra: Wakanda para Sempre',
        tipo: 'Filme',
        diretores: ['Ryan Coogler'],
        avaliacao: 6.7,
        lancamento: '10/11/2022',
        duracao: 161,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/pantera-negra-wakanda-para-sempre.webp'
      },
      {
        id: 59,
        title: 'Coração de Ferro',
        tipo: 'Série',
        diretores: ['Sam Bailey', 'Angela Barnes'],
        avaliacao: 0,
        lancamento: '24/06/2025',
        duracao: 360,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/coracao-de-ferro.webp'
      },
      {
        id: 60,
        title: 'Mulher Hulk',
        tipo: 'Série',
        diretores: ['Kat Coiro', 'Anu Valia'],
        avaliacao: 5.2,
        lancamento: '18/08/2022',
        duracao: 270,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/she-hulk.webp'
      },
      {
        id: 61,
        title: 'Ms. Marvel',
        tipo: 'Série',
        diretores: ['Adil El Arbi', 'Bilall Fallah', 'Meera Menon'],
        avaliacao: 6.2,
        lancamento: '08/06/2022',
        duracao: 282,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/ms-marvel.webp'
      },
      {
        id: 62,
        title: 'Thor: Amor e Trovão',
        tipo: 'Filme',
        diretores: ['Taika Waititi'],
        avaliacao: 6.2,
        lancamento: '07/07/2022',
        duracao: 119,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/thor-amor-e-trovao.webp'
      },
      {
        id: 63,
        title: 'Lobisomem na Noite',
        tipo: 'Filme',
        diretores: ['Michael Giacchino'],
        avaliacao: 6.3,
        lancamento: '07/10/2022',
        duracao: 52,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/lobisomem-na-noite.webp'
      },
      {
        id: 64,
        title: 'Os Guardiões da Galáxia - Especial de Natal',
        tipo: 'Filme',
        diretores: ['James Gunn'],
        avaliacao: 7.1,
        lancamento: '25/11/2022',
        duracao: 42,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/os-guardioes-da-galaxia-especial-de-natal.webp'
      },
      {
        id: 65,
        title: 'Homem-Formiga e a Vespa: Quantumania',
        tipo: 'Filme',
        diretores: ['Peyton Reed'],
        avaliacao: 6.1,
        lancamento: '16/02/2023',
        duracao: 124,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/homem-formiga-e-a-vespa-quantumania.webp'
      },
      {
        id: 66,
        title: 'Os Guardiões da Galáxia Vol. 3',
        tipo: 'Filme',
        diretores: ['James Gunn'],
        avaliacao: 8.0,
        lancamento: '04/05/2023',
        duracao: 150,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/os-guardioes-da-galaxia-vol-3.webp'
      },
      {
        id: 67,
        title: 'Invasão Secreta',
        tipo: 'Série',
        diretores: ['Ali Selim'],
        avaliacao: 5.8,
        lancamento: '21/06/2023',
        duracao: 270,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/invasao-secreta.webp'
      },
      {
        id: 68,
        title: 'As Marvels',
        tipo: 'Filme',
        diretores: ['Nia DaCosta'],
        avaliacao: 5.6,
        lancamento: '09/11/2023',
        duracao: 105,
        streaming: true,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/as-marvels.webp'
      },
      {
        id: 69,
        title: 'Deadpool & Wolverine',
        tipo: 'Filme',
        diretores: ['Shawn Levy'],
        avaliacao: 0,
        lancamento: '25/07/2024',
        duracao: 127,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/deadpool-wolverine.webp'
      },
      {
        id: 70,
        title: 'Agatha Desde Sempre',
        tipo: 'Série',
        diretores: ['Gandja Monteiro', 'Rachel Goldberg'],
        avaliacao: 0,
        lancamento: '18/09/2024',
        duracao: 270,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/agatha-desde-sempre.webp'
      },
      {
        id: 71,
        title: 'Capitão América: Admirável Mundo Novo',
        tipo: 'Filme',
        diretores: ['Julius Onah'],
        avaliacao: 0,
        lancamento: '14/02/2025',
        duracao: 130,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/capitao-america-admiravel-mundo-novo.webp'
      },
      {
        id: 72,
        title: 'Demolidor: Renascido',
        tipo: 'Série',
        diretores: ['Michael Cuesta', 'Alex Garcia Lopez'],
        avaliacao: 0,
        lancamento: '04/03/2025',
        duracao: 360,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/demolidor-renascido.webp'
      },
      {
        id: 73,
        title: 'Thunderbolts*',
        tipo: 'Filme',
        diretores: ['Jake Schreier'],
        avaliacao: 0,
        lancamento: '02/05/2025',
        duracao: 125,
        streaming: false,
        imgLink: 'https://mariviana.dev/diversability-modulo-01-projeto-final/images/thunderbolts.webp'
      }
    ];

    !localStorage.getItem(this.storageKey) && this.saveData(mockData);
  }
}