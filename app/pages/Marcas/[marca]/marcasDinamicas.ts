const marcasDinamicas = [
  {
    marca: "Casio",
    source: "/img/casio-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "CASIO",
    cardDescription: `Essa é uma importante marca japonesa que assume o posto de uma das líderes do mercado mundial. 
Um fato importante é que seus instrumentos têm como proposta um bom custo-benefício, além da qualidade.
A marca surgiu em 1946 em Tóquio, pelas mãos de Tadao Kashio. Curiosamente, ele não era músico, mas, sim, 
um engenheiro especializado em produções tecnológicas.`,
  },
  {
    marca: "Crafter",
    source: "/img/crafter-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "CRAFTER",
    cardDescription: `Marca sul-coreana fundada na década de 1970, a Crafter é reconhecida principalmente pela fabricação de violões acústicos. 
Seu nome reflete o compromisso com o artesanato refinado, e seus instrumentos são muito usados tanto por iniciantes quanto por profissionais. 
Com sede em Seul, a empresa ganhou destaque internacional por combinar tradição artesanal com inovação tecnológica.`,
  },
  {
    marca: "DW",
    source: "/img/dw-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "DW",
    cardDescription: `Fundada em 1972 nos Estados Unidos, a DW é especializada em baterias e acessórios de percussão de alta performance. 
A marca começou como uma escola de bateria e rapidamente se transformou em referência mundial em tambores personalizados. 
É amplamente usada por músicos profissionais por oferecer materiais de altíssima qualidade e excelente durabilidade.`,
  },
  {
    marca: "Eagle",
    source: "/img/eagle-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "EAGLE",
    cardDescription: `A Eagle é uma marca brasileira bastante respeitada no segmento de cordas, especialmente violões, guitarras e baixos. 
Com um catálogo que equilibra qualidade e preço, tornou-se muito popular entre estudantes e músicos intermediários. 
Seus instrumentos se destacam por acabamento cuidadoso e timbre consistente, sendo presença certa em muitas escolas de música.`,
  },
  {
    marca: "Fender",
    source: "/img/Fender_logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "FENDER",
    cardDescription: `Fundada em 1946 nos Estados Unidos por Leo Fender, é uma das marcas mais lendárias do universo musical. 
Conhecida mundialmente por modelos como Stratocaster e Telecaster, ajudou a definir o som da música moderna. 
A Fender também é referência em amplificadores, baixos e acessórios, sempre com altíssimo padrão de qualidade.`,
  },
  {
    marca: "Gibson",
    source: "/img/Gibson_Guitar_logo.svg.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "GIBSON",
    cardDescription: `Poucas marcas têm o prestígio histórico da Gibson, fundada em 1902 em Michigan, EUA. 
Criadora de modelos icônicos como a Les Paul, a empresa é sinônimo de excelência em guitarras elétricas e acústicas. 
Seu legado inclui parcerias com lendas da música, sendo referência absoluta no mundo do rock, jazz e blues.`,
  },
  {
    marca: "Jupiter",
    source: "/img/Jupiter-logo.webp",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "JUPITER",
    cardDescription: `Parte do grupo KHS, a Jupiter é uma marca especializada em instrumentos de sopro, como trompetes, clarinetes e flautas. 
Ela se destaca por fabricar instrumentos voltados tanto para iniciantes quanto para músicos experientes. 
Com um padrão internacional de fabricação, seus produtos são amplamente utilizados em bandas marciais e escolas de música.`,
  },
  {
    marca: "Korg",
    source: "/img/Korg_logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "KORG",
    cardDescription: `Marca japonesa fundada em 1962, a Korg é uma gigante do mercado de teclados, sintetizadores e equipamentos de áudio. 
Foi responsável por lançamentos revolucionários no mundo da música eletrônica e gravação. 
É a escolha de músicos, DJs e produtores que buscam inovação, qualidade sonora e confiabilidade.`,
  },
  {
    marca: "King",
    source: "/img/king-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "KING",
    cardDescription: `Criada nos Estados Unidos no final do século XIX, a King é uma marca tradicionalmente associada a instrumentos de sopro. 
Seu foco principal é na fabricação de trompetes, trombones e tubas, usados frequentemente em orquestras e bandas militares. 
Os instrumentos King são apreciados por sua resistência, afinação precisa e resposta sonora ágil.`,
  },
  {
    marca: "Michael",
    source: "/img/michael-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "MICHAEL",
    cardDescription: `Marca brasileira que ganhou espaço oferecendo instrumentos acessíveis sem abrir mão da estética e tocabilidade. 
Seus violões, baixos e teclados são frequentemente escolhidos por iniciantes e músicos em desenvolvimento. 
A Michael busca equilibrar custo e estilo, com modelos que chamam atenção pela beleza visual e boa sonoridade.`,
  },
  {
    marca: "Pearl",
    source: "/img/pearl-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "PEARL",
    cardDescription: `Marca japonesa renomada no universo da percussão, a Pearl foi fundada em 1946 e logo conquistou reconhecimento global. 
Suas baterias acústicas são destaque entre bateristas de diversos estilos musicais. 
Além disso, investe constantemente em pesquisa e design, tornando-se referência também em percussão sinfônica e acessórios.`,
  },
  {
    marca: "Roland",
    source: "/img/roland-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "ROLAND",
    cardDescription: `Fundada no Japão em 1972, a Roland se consolidou como uma das maiores fabricantes de instrumentos eletrônicos do mundo. 
Responsável por clássicos como os sintetizadores da linha Juno e os baterias eletrônicas V-Drums. 
É a marca preferida de muitos produtores e músicos profissionais pela inovação e confiabilidade técnica.`,
  },
  {
    marca: "Selmer",
    source: "/img/henri-selmer-paris-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "SELMER",
    cardDescription: `A Henri Selmer Paris é uma das marcas mais tradicionais e respeitadas do mundo dos instrumentos de sopro. 
Fundada em 1885 na França, tornou-se famosa por fabricar clarinetes e saxofones de altíssimo nível. 
Seus instrumentos são amplamente utilizados por músicos clássicos e jazzistas, sendo sinônimo de prestígio e excelência.`,
  },
  {
    marca: "Yamaha",
    source: "/img/logo_yamaha.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "YAMAHA",
    cardDescription: `Presente em mais de 180 países, a Yamaha foi fundada em 1887 no Japão e inicialmente produzia órgãos de bambu. 
Hoje, é uma das maiores fabricantes de instrumentos musicais do planeta, com destaque para teclados, guitarras, baterias e sopros. 
A marca é sinônimo de confiabilidade, inovação e uma vasta gama de produtos para todos os níveis de músicos.`,
  },
  {
    marca: "Yanagisawa",
    source: "/img/yanagisawa-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "YANAGISAWA",
    cardDescription: `Marca japonesa de prestígio internacional, a Yanagisawa é especializada em saxofones artesanais. 
Fundada em 1893, se consolidou por fabricar instrumentos com precisão, materiais nobres e atenção extrema aos detalhes. 
É a escolha de músicos profissionais que valorizam entonação precisa e resposta rápida em performances exigentes.`,
  },
  {
    marca: "Weril",
    source: "/img/weril-logo.png",
    widthImg: "200",
    heightImg: "200",
    cardTitle: "WERIL",
    cardDescription: `Fundada no Brasil em 1909, a Weril é uma das marcas mais tradicionais na produção de instrumentos de sopro no país. 
Suas linhas são amplamente usadas por bandas marciais, escolas e músicos de nível intermediário. 
Com forte presença no mercado nacional, é reconhecida pela durabilidade e bom custo-benefício.`,
  },
];

export default marcasDinamicas;
