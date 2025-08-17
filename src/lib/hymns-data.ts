export interface Estrofe {
  texto: string;
  italico: boolean;
}

export interface Hymn {
  id: number;
  numero: number;
  titulo: string;
  estrofes: Estrofe[][];
}

export const hymnsData: Hymn[] = [
  {
    "id": 1,
    "numero": 1,
    "titulo": "ESTAMOS MUITO ALEGRES",
    "estrofes": [
      [
        { "texto": "Estamos muito alegres, Jesus está aqui", "italico": false },
        { "texto": "Sentimos muito amor, sentimos união", "italico": false }
      ],
      [
        { "texto": "Sentimos que Jesus está aqui", "italico": true },
        { "texto": "Em nosso meio", "italico": true },
        { "texto": "Por isso temos paz no coração! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 2,
    "numero": 2,
    "titulo": "VEM LOUVAR",
    "estrofes": [
      [
        { "texto": "Hoje é tempo de louvar a Deus", "italico": false },
        { "texto": "Em nós, agora, habita o Seu Espírito!", "italico": false }
      ],
      [
        { "texto": "Então é só cantar e a Cristo exaltar,", "italico": true },
        { "texto": "E Sua glória encherá este lugar!", "italico": true },
        { "texto": "Vem louvar! (Vem louvar!)", "italico": true },
        { "texto": "Vem louvar! (Vem louvar!)", "italico": true },
        { "texto": "Vem louvar!", "italico": true }
      ],
      [
        { "texto": "No meio dos louvores Deus habita,", "italico": false },
        { "texto": "E é seu prazer cumprir o que nos diz!", "italico": false }
      ]
    ]
  },
  {
    "id": 3,
    "numero": 3,
    "titulo": "JESUS CRISTO SATISFAZ",
    "estrofes": [
      [
        { "texto": "Oh! Jesus Cristo satisfaz", "italico": false },
        { "texto": "Me traz alegria e paz", "italico": false },
        { "texto": "Gozo no viver!", "italico": false }
      ],
      [
        { "texto": "Venha e tenha a paz de Cristo", "italico": true },
        { "texto": "Pleno gozo, nunca visto!", "italico": true },
        { "texto": "Venha! Basta nEle crer! Vem!", "italico": true }
      ],
      [
        { "texto": "Oh! Hoje tenho esta paz", "italico": false },
        { "texto": "Tenho o amor que me traz", "italico": false },
        { "texto": "Gozo no viver.", "italico": false }
      ]
    ]
  },
  {
    "id": 4,
    "numero": 4,
    "titulo": "A TUA PRESENÇA",
    "estrofes": [
      [
        { "texto": "Senhor, eu quero sentir", "italico": true },
        { "texto": "A Tua presença no meu coração! (2x)", "italico": true }
      ],
      [
        { "texto": "Ó, faz-me um crente sincero!", "italico": false },
        { "texto": "De Ti eu quero aprender!", "italico": false }
      ],
      [
        { "texto": "Senhor, eu quero sentir", "italico": false },
        { "texto": "A Tua presença em todo o meu ser!", "italico": false }
      ]
    ]
  },
  {
    "id": 5,
    "numero": 5,
    "titulo": "NUMA SÓ VOZ",
    "estrofes": [
      [
        { "texto": "Um sorriso se abrindo no olhar", "italico": false },
        { "texto": "Todos juntos louvemos a Deus outra vez", "italico": false }
      ],
      [
        { "texto": "É tão bom ter você como irmão", "italico": false },
        { "texto": "E compartilhar do que Ele fez", "italico": false }
      ],
      [
        { "texto": "Levantemos as mãos ao Senhor", "italico": false },
        { "texto": "Na alegria de juntos cantar numa só voz", "italico": false }
      ],
      [
        { "texto": "É tão bom ter você como irmão E saber que", "italico": false },
        { "texto": "Deus habita em nós! (3x)", "italico": true }
      ]
    ]
  },
  {
    "id": 6,
    "numero": 6,
    "titulo": "CANTANDO ALEGRE",
    "estrofes": [
      [
        { "texto": "Estou cantando alegre", "italico": false },
        { "texto": "No caminho da verdade", "italico": false },
        { "texto": "Com Jesus!", "italico": false }
      ],
      [
        { "texto": "A cada passo encontro", "italico": false },
        { "texto": "Um motivo pra falar da sua cruz!", "italico": false }
      ],
      [
        { "texto": "Estreito é o caminho", "italico": false },
        { "texto": "E às vezes é difícil continuar", "italico": false }
      ],
      [
        { "texto": "Alegre eu prossigo", "italico": false },
        { "texto": "Pois meu lar, em breve,", "italico": false },
        { "texto": "Hei de encontrar!", "italico": false }
      ],
      [
        { "texto": "Ali pra sempre viverei! (2x)", "italico": true },
        { "texto": "Eu viverei!", "italico": false }
      ]
    ]
  },
  {
    "id": 7,
    "numero": 7,
    "titulo": "SATISFAÇÃO",
    "estrofes": [
      [
        { "texto": "Satisfação é ter a Cristo!", "italico": false },
        { "texto": "Não há melhor prazer já visto!", "italico": false },
        { "texto": "Sou de Jesus", "italico": false },
        { "texto": "E agora eu sinto satisfação sem fim!", "italico": false }
      ],
      [
        { "texto": "Satisfação é nova vida!", "italico": false },
        { "texto": "Eu com Jesus em alegria!", "italico": false },
        { "texto": "Sempre cantando a melodia", "italico": false },
        { "texto": "Satisfação sem fim!", "italico": false }
      ],
      [
        { "texto": "Sim, paz real!", "italico": false },
        { "texto": "Sim, gozo na aflição!", "italico": false },
        { "texto": "Achei o segredo: é Cristo no coração.", "italico": false }
      ],
      [
        { "texto": "Satisfação é não ter medo,", "italico": false },
        { "texto": "Pois meu Jesus virá bem cedo,", "italico": false },
        { "texto": "Logo em glória eu hei de vê-Lo!", "italico": false },
        { "texto": "Satisfação sem fim. (3x)", "italico": true }
      ]
    ]
  },
  {
    "id": 8,
    "numero": 8,
    "titulo": "DEUS É PAI",
    "estrofes": [
      [
        { "texto": "Deus é Pai! Sim, Deus é Pai", "italico": true },
        { "texto": "Daqueles que creram em Jesus!", "italico": true },
        { "texto": "Deus é Pai! Querido Pai", "italico": true },
        { "texto": "Daqueles que creram em Jesus!", "italico": true }
      ],
      [
        { "texto": "Os quais não nasceram do sangue", "italico": false },
        { "texto": "Nem da vontade da carne", "italico": false },
        { "texto": "Nem da vontade do homem", "italico": false },
        { "texto": "Mas de Deus", "italico": false }
      ],
      [
        { "texto": "Sim, a todos quantos O receberam", "italico": false },
        { "texto": "Deu-lhes o poder de serem feitos,", "italico": false },
        { "texto": "O poder de serem feitos filhos de Deus", "italico": false },
        { "texto": "Aos que creram em Jesus!", "italico": false }
      ]
    ]
  },
  {
    "id": 9,
    "numero": 9,
    "titulo": "ESTA PAZ",
    "estrofes": [
      [
        { "texto": "Esta paz que sinto em minha alma", "italico": false },
        { "texto": "Não é porque tudo me vai bem", "italico": false },
        { "texto": "Esta paz que sinto em minha alma É porque eu", "italico": false },
        { "texto": "louvo ao meu Senhor...", "italico": false }
      ],
      [
        { "texto": "Não olho as circunstâncias (não, não, não)", "italico": true },
        { "texto": "Olho o Seu amor (olho o Seu amor)", "italico": true },
        { "texto": "Não me guio por vista (ah, ah, ah)", "italico": true },
        { "texto": "Alegre estou!", "italico": true }
      ],
      [
        { "texto": "E ainda que a terra não floresça", "italico": false },
        { "texto": "E a vide não der o seu fruto", "italico": false },
        { "texto": "E ainda que os montes se lancem ao mar", "italico": false },
        { "texto": "Ou que a terra trema, hei de confiar...", "italico": false }
      ],
      [
        { "texto": "Oh Glória, glória e aleluia", "italico": false },
        { "texto": "Glória e aleluia ao meu Senhor!", "italico": false },
        { "texto": "(2x)", "italico": false }
      ]
    ]
  },
  {
    "id": 10,
    "numero": 10,
    "titulo": "SOU FELIZ",
    "estrofes": [
      [
        { "texto": "Sou feliz, mui feliz!", "italico": false },
        { "texto": "Pois a Cristo me entreguei!", "italico": false },
        { "texto": "Tenho paz, muita paz!", "italico": false },
        { "texto": "Nada mais eu temerei!", "italico": false }
      ],
      [
        { "texto": "Sempre ao meu lado", "italico": false },
        { "texto": "Jesus me guarda", "italico": false },
        { "texto": "Dia e noite contra o mal", "italico": false }
      ],
      [
        { "texto": "Sou feliz, mui feliz!", "italico": false },
        { "texto": "Meu Senhor é sem igual!", "italico": false }
      ]
    ]
  },
  {
    "id": 11,
    "numero": 11,
    "titulo": "DEUS FIEL",
    "estrofes": [
      [
        { "texto": "Deus fiel, Deus fiel!", "italico": false },
        { "texto": "Poderoso Deus, eu louvo a Ti!", "italico": false },
        { "texto": "És minha paz, És o meu libertador!", "italico": false },
        { "texto": "Eu louvo a Ti, Deus fiel!", "italico": false }
      ]
    ]
  },
  {
    "id": 12,
    "numero": 12,
    "titulo": "GRANDES COISAS",
    "estrofes": [
      [
        { "texto": "Grandes coisas fez o Senhor por nós! (4x)", "italico": true },
        { "texto": "O Senhor nos deu paz!", "italico": false },
        { "texto": "O Senhor nos deu a Salvação!", "italico": false },
        { "texto": "O Senhor nos deu alegria!", "italico": false },
        { "texto": "O Senhor é a nossa inspiração!", "italico": false }
      ],
      [
        { "texto": "Grandes coisas fez o Senhor por nós! (4x)", "italico": true },
        { "texto": "O Senhor nos deu paz!", "italico": false },
        { "texto": "O Senhor nos deu a Salvação!", "italico": false },
        { "texto": "O Senhor nos deu alegria!", "italico": false },
        { "texto": "O Senhor será sempre a nossa canção!", "italico": false }
      ]
    ]
  },
  {
    "id": 13,
    "numero": 13,
    "titulo": "MEU CORAÇÃO TRANSBORDA",
    "estrofes": [
      [
        { "texto": "Meu coração transborda de amor", "italico": false },
        { "texto": "Porque meu Deus é um Deus de amor", "italico": false },
        { "texto": "Minh'alma está repleta de paz.", "italico": false },
        { "texto": "Porque Jesus é a minha paz!", "italico": false }
      ],
      [
        { "texto": "Eu digo:", "italico": false },
        { "texto": "\"Aleluia!\" (5x)", "italico": true },
        { "texto": "Aleluia, amém!", "italico": true }
      ]
    ]
  },
  {
    "id": 14,
    "numero": 14,
    "titulo": "TUDO COOPERA",
    "estrofes": [
      [
        { "texto": "Tudo coopera para o bem", "italico": true },
        { "texto": "Dos que Te amam, ó Deus!", "italico": true },
        { "texto": "Tudo coopera para o bem", "italico": true },
        { "texto": "Dos que Te amam!", "italico": true }
      ],
      [
        { "texto": "Se as coisas não sei controlar,", "italico": false },
        { "texto": "Elevo minha alma a Ti", "italico": false },
        { "texto": "Se tudo é difícil de entender,", "italico": false },
        { "texto": "No Teu plano, Senhor, confiarei.", "italico": false }
      ],
      [
        { "texto": "O confuso eu vou entender, O encoberto vai", "italico": false },
        { "texto": "aparecer, O que está errado vai se acertar, Se", "italico": false },
        { "texto": "em Tua luz, ó Senhor, eu andar!", "italico": false }
      ]
    ]
  },
  {
    "id": 15,
    "numero": 15,
    "titulo": "TE AGRADEÇO",
    "estrofes": [
      [
        { "texto": "Por tudo o que tens feito,", "italico": false },
        { "texto": "Por tudo o que vais fazer,", "italico": false },
        { "texto": "Por Tuas promessas e tudo o que És", "italico": false },
        { "texto": "Eu quero Te agradecer!", "italico": false },
        { "texto": "Com todo o meu ser!", "italico": false }
      ],
      [
        { "texto": "Te agradeço, meu Senhor (3x)", "italico": true },
      ],
      [
        { "texto": "Te agradeço por me libertar e salvar,", "italico": false },
        { "texto": "Por ter morrido em meu lugar", "italico": false },
        { "texto": "Te agradeço!", "italico": false },
        { "texto": "Jesus, Te agradeço!", "italico": false },
        { "texto": "Eu Te agradeço!", "italico": false },
        { "texto": "Te agradeço!", "italico": false }
      ]
    ]
  },
  {
    "id": 16,
    "numero": 16,
    "titulo": "RENDEI GRAÇAS",
    "estrofes": [
      [
        { "texto": "Rendei graças ao Senhor,", "italico": false },
        { "texto": "Porque o Senhor é bom,", "italico": false },
        { "texto": "Porque a Sua misericórdia", "italico": false },
        { "texto": "Dura para sempre.", "italico": false }
      ],
      [
        { "texto": "Porque acima dos céus", "italico": false },
        { "texto": "É Sua fidelidade, De geração a geração.", "italico": false },
        { "texto": "As Suas misericórdias", "italico": true },
        { "texto": "Subsistem para sempre,", "italico": true },
        { "texto": "Pois o Senhor é o Deus eterno.", "italico": true }
      ]
    ]
  },
  {
    "id": 17,
    "numero": 17,
    "titulo": "EXALTADO",
    "estrofes": [
      [
        { "texto": "Exaltado, exaltado", "italico": true },
        { "texto": "E o Senhor Jesus!", "italico": true },
      ],
      [
        { "texto": "Acima dos céus e da terra", "italico": false },
        { "texto": "Acima de anjos e homens,", "italico": false },
        { "texto": "Acima das potestades está.", "italico": false },
        { "texto": "Assentado a direita de Deus.", "italico": false },
      ],
      [
        { "texto": "Exaltado pra sempre será! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 18,
    "numero": 18,
    "titulo": "DIGNO DE GLÓRIA",
    "estrofes": [
      [
        { "texto": "Digno de glória e honra", "italico": false },
        { "texto": "Levantamos nossa voz", "italico": false },
        { "texto": "Pra o Teu nome exaltar!", "italico": false }
      ],
      [
        { "texto": "Digno de glória e honra", "italico": false },
        { "texto": "Levantamos nossa voz,", "italico": false },
        { "texto": "Te adoramos, ó Senhor!", "italico": false }
      ],
      [
        { "texto": "Porque grande és Tu!", "italico": true },
        { "texto": "Maravilhas fazes Tu!", "italico": true },
        { "texto": "Não há outro igual a Ti! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 19,
    "numero": 19,
    "titulo": "MINHA FORÇA",
    "estrofes": [
      [
        { "texto": "O Senhor é a minha força", "italico": false },
        { "texto": "E o meu cântico", "italico": false },
        { "texto": "Porque Ele me salvou.", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Na tenda do justo", "italico": false },
        { "texto": "Há voz de júbilo e de salvação", "italico": false },
        { "texto": "A destra do Senhor faz proezas", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Não morrerei, mas viverei", "italico": false },
        { "texto": "E contarei as obras do Senhor!", "italico": false },
        { "texto": "(2x)", "italico": false }
      ]
    ]
  },
  {
    "id": 20,
    "numero": 20,
    "titulo": "Ó, LOUVAI A DEUS",
    "estrofes": [
      [
        { "texto": "Ó, louvai a Deus comigo", "italico": false },
        { "texto": "Pois Seu braço amigo me acolheu", "italico": false },
        { "texto": "E das trevas do castigo", "italico": false },
        { "texto": "Pra viver Consigo, me escolheu", "italico": false }
      ],
      [
        { "texto": "Eu era culpado", "italico": false },
        { "texto": "E meu pecado Ele apagou", "italico": false },
        { "texto": "Minha triste sorte,", "italico": false },
        { "texto": "A minha morte Ele provou", "italico": false }
      ],
      [
        { "texto": "E por isso eu declaro em claro e alto som", "italico": false },
        { "texto": "Oh! Provai e vede que Ele é bom!", "italico": true }
      ]
    ]
  },
  {
    "id": 21,
    "numero": 21,
    "titulo": "TU ÉS SOBERANO",
    "estrofes": [
      [
        { "texto": "Tu és Soberano sobre a terra,", "italico": false },
        { "texto": "Sobre os céus, Tu és Senhor absoluto.", "italico": false },
        { "texto": "Tudo que existe e acontece", "italico": false },
        { "texto": "Tu o sabes muito bem.", "italico": false },
        { "texto": "Tu és Tremendo!", "italico": false }
      ],
      [
        { "texto": "E apesar dessa glória que tens,", "italico": false },
        { "texto": "Tu te importas comigo também", "italico": false },
        { "texto": "E esse amor tão grande,", "italico": false },
        { "texto": "Eleva-me, amarra-me a Ti.", "italico": false },
        { "texto": "Tu és tremendo!", "italico": false }
      ]
    ]
  },
  {
    "id": 22,
    "numero": 22,
    "titulo": "QUÃO FORMOSO ÉS",
    "estrofes": [
      [
        { "texto": "Quão Formoso és, Rei do universo", "italico": true },
        { "texto": "Tua Glória enche a terra e enche os céus!", "italico": true },
        { "texto": "Tua Glória enche a terra,", "italico": true },
        { "texto": "Tua glória enche os céus,", "italico": true },
        { "texto": "Tua glória enche minha vida, Senhor!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Maravilhoso é estar em Tua presença", "italico": false },
        { "texto": "Maravilhoso é poder Te adorar", "italico": false },
        { "texto": "Maravilhoso é tocar nas Tuas vestes", "italico": false },
        { "texto": "Maravilhoso é Te contemplar, Senhor.", "italico": false }
      ]
    ]
  },
  {
    "id": 23,
    "numero": 23,
    "titulo": "ME AMASTE",
    "estrofes": [
      [
        { "texto": "Sendo eu pecador, Tu me amaste", "italico": false },
        { "texto": "Como prova, Jesus enviaste", "italico": false },
        { "texto": "Muito mais agora, justificado", "italico": false },
        { "texto": "Pelo sangue vertido na cruz.", "italico": false }
      ],
      [
        { "texto": "Sendo Teu inimigo, me amaste", "italico": false },
        { "texto": "Como prova, Jesus enviaste", "italico": false },
        { "texto": "Muito mais agora, reconciliado", "italico": false },
        { "texto": "Através de Jesus, o Senhor.", "italico": false }
      ],
      [
        { "texto": "Eu Te amo, meu Deus!", "italico": false },
        { "texto": "Eu Te amo, meu Pai!", "italico": false },
        { "texto": "Porque Tu me amaste em primeiro lugar,", "italico": true },
        { "texto": "Eu Te amo, meu Deus!", "italico": true }
      ]
    ]
  },
  {
    "id": 24,
    "numero": 24,
    "titulo": "NOVA VIDA",
    "estrofes": [
      [
        { "texto": "Romperam-se as cadeias,", "italico": false },
        { "texto": "Quebraram-se os grilhões", "italico": false },
        { "texto": "Libertos do pecado e da condenação", "italico": false },
        { "texto": "Morremos com Jesus", "italico": false },
        { "texto": "E com Ele ressurgimos", "italico": false },
        { "texto": "Aleluia! Nova vida!", "italico": false }
      ],
      [
        { "texto": "O nosso homem velho", "italico": false },
        { "texto": "Já ficou para trás", "italico": false },
        { "texto": "Foi crucificado o corpo do pecado", "italico": false },
        { "texto": "Morremos com Jesus,", "italico": false },
        { "texto": "E com Ele ressurgimos", "italico": false },
        { "texto": "Aleluia! Nova vida!", "italico": false }
      ],
      [
        { "texto": "Cheios de gratidão,", "italico": false },
        { "texto": "Rendemos adoração!", "italico": false },
        { "texto": "Rei dos reis, Senhor dos senhores,", "italico": false },
        { "texto": "Em Ti nos alegramos!", "italico": false }
      ],
      [
        { "texto": "Aleluia! Estamos livres,", "italico": false },
        { "texto": "Livres da condenação", "italico": false },
        { "texto": "Cristo deu-nos nova vida", "italico": false },
        { "texto": "E um novo coração!", "italico": false },
        { "texto": "Aleluia! Cristo vive!", "italico": false },
        { "texto": "Nele nos alegraremos!", "italico": false },
        { "texto": "Sua graça é infinita", "italico": true },
        { "texto": "Seu amor proclamaremos!", "italico": true }
      ]
    ]
  },
  {
    "id": 25,
    "numero": 25,
    "titulo": "GRANDE FARDO",
    "estrofes": [
      [
        { "texto": "Grande fardo de pecados meus", "italico": false },
        { "texto": "Cristo carregou sobre Si", "italico": false },
        { "texto": "Meu pesar em paz se transformou", "italico": false },
        { "texto": "Desde que a Jesus eu conheci.", "italico": false }
      ],
      [
        { "texto": "Sigo alegre no caminho para os céus", "italico": false },
        { "texto": "Desfrutando a livre graça de Jesus,", "italico": false },
        { "texto": "Pois o fardo dos pecados meus", "italico": false },
        { "texto": "Cristo carregou sobre a cruz.", "italico": false }
      ]
    ]
  },
  {
    "id": 26,
    "numero": 26,
    "titulo": "DONO DO MEU CORAÇÃO",
    "estrofes": [
      [
        { "texto": "Rei do universo, Te dou meu louvor", "italico": false },
        { "texto": "Com tantas bênçãos me cercas, Senhor", "italico": false },
        { "texto": "Só Tu és a fonte de alegria e prazer", "italico": false },
        { "texto": "Melhor que a própria vida é a Ti conhecer", "italico": false }
      ],
      [
        { "texto": "Tu és o dono do meu coração! (2x)", "italico": true },
        { "texto": "E não há outro! (E não há outro!) (2x)", "italico": true },
        { "texto": "Só tu és o dono do meu coração! (2x)", "italico": true }
      ],
      [
        { "texto": "Paz e família, abrigo e luz,", "italico": false },
        { "texto": "Minhas necessidades supres todas em Jesus", "italico": false },
        { "texto": "Mas nem o ouro e a prata podem satisfazer", "italico": false },
        { "texto": "A sede da minh'alma é a Ti pertencer.", "italico": false }
      ],
      [
        { "texto": "Planos e sonhos Tu tens para mim", "italico": false },
        { "texto": "Eu, maravilhado, digo: \"Eis me aqui\"", "italico": false },
        { "texto": "Quero agradar-Te e cumprir Teu querer", "italico": false },
        { "texto": "Caminhando em graça vou obedecer", "italico": false }
      ],
      [
        { "texto": "Em minha jornada intimamente Te amar", "italico": false },
        { "texto": "Para que na glória, quando o dia chegar", "italico": false },
        { "texto": "Ao contemplar Teu rosto eu venha reconhecer", "italico": false },
        { "texto": "O olhar tão doce que amou o meu ser.", "italico": false }
      ]
    ]
  },
  {
    "id": 27,
    "numero": 27,
    "titulo": "DEUS, CRIA EM MIM",
    "estrofes": [
      [
        { "texto": "Deus, cria em mim um coração puro e bom", "italico": false },
        { "texto": "Renova meu ser com o gozo da salvação", "italico": false },
        { "texto": "Toda mancha do meu coração", "italico": false },
        { "texto": "Só Jesus tem poder de apagar", "italico": false },
        { "texto": "Pois Seu sangue transforma o viver", "italico": false },
        { "texto": "Dando paz ao meu ser", "italico": false }
      ],
      [
        { "texto": "Meus lábios, Senhor,", "italico": false },
        { "texto": "O Teu Nome louvarão", "italico": false },
        { "texto": "Quero agradecer", "italico": false },
        { "texto": "Pelas coisas que Tu me dás", "italico": false },
        { "texto": "Se estou triste, me fazes sorrir", "italico": false },
        { "texto": "E eu volto, então, a cantar...", "italico": false },
        { "texto": "Com o coração adoro a Ti,", "italico": true },
        { "texto": "Pois Tu és o Senhor do meu ser!", "italico": true }
      ]
    ]
  },
  {
    "id": 28,
    "numero": 28,
    "titulo": "RENOVA-ME",
    "estrofes": [
      [
        { "texto": "Renova-me, Senhor Jesus", "italico": false },
        { "texto": "Já não quero ser igual", "italico": false },
        { "texto": "Renova-me, Senhor Jesus", "italico": false },
        { "texto": "Põe em mim Teu coração!", "italico": false }
      ],
      [
        { "texto": "Porque tudo que há dentro de mim", "italico": false },
        { "texto": "Necessita ser mudado, Senhor", "italico": false },
        { "texto": "Porque tudo que há Dentro do meu coração", "italico": false },
        { "texto": "Necessita mais de Ti!", "italico": false }
      ]
    ]
  },
  {
    "id": 29,
    "numero": 29,
    "titulo": "VASO NOVO",
    "estrofes": [
      [
        { "texto": "Eu quero ser, Senhor amado,", "italico": false },
        { "texto": "Como o vaso nas mãos do oleiro.", "italico": false }
      ],
      [
        { "texto": "Quebra minha vida e faze-a de novo", "italico": true },
        { "texto": "Eu quero ser,", "italico": true },
        { "texto": "Eu quero ser um vaso novo.", "italico": true }
      ],
      [
        { "texto": "Como Tu queres, Senhor amado,", "italico": false },
        { "texto": "Tu és o oleiro e eu sou o vaso", "italico": false }
      ]
    ]
  },
  {
    "id": 30,
    "numero": 30,
    "titulo": "FALA COMIGO",
    "estrofes": [
      [
        { "texto": "Estou pronto, Senhor, para ouvir-Te falar", "italico": false },
        { "texto": "Faz-me entender Teu querer,", "italico": false },
        { "texto": "Faz-me servir-Te melhor", "italico": false }
      ],
      [
        { "texto": "Fala, Senhor! Fala comigo, Senhor!", "italico": false },
        { "texto": "Fala, Senhor! Todo meu ser Te ouvirá!", "italico": false }
      ],
      [
        { "texto": "Enche os meus dias de amor", "italico": false },
        { "texto": "Transborda em graça o meu viver", "italico": false },
        { "texto": "Traz paz ao meu coração", "italico": false },
        { "texto": "Dirige o meu caminhar", "italico": false }
      ]
    ]
  },
  {
    "id": 31,
    "numero": 31,
    "titulo": "POUCO A POUCO",
    "estrofes": [
      [
        { "texto": "Pouco a pouco, cada dia", "italico": false },
        { "texto": "Pouco a pouco, enquanto me guia", "italico": false },
        { "texto": "Cristo, transforma-me!", "italico": false },
        { "texto": "Desde que a meia-volta eu dei", "italico": false },
        { "texto": "Cresço na graça do meu Rei", "italico": false },
        { "texto": "Cristo, transforma-me.", "italico": false }
      ],
      [
        { "texto": "Transforma-me, querido Cristo", "italico": false },
        { "texto": "Já não sou mais o que eu antes fui", "italico": false },
        { "texto": "E, vendo a mudança, tenho a confiança", "italico": false },
        { "texto": "Que um dia perfeito eu serei!", "italico": false }
      ]
    ]
  },
  {
    "id": 32,
    "numero": 32,
    "titulo": "SONDA-ME, Ó DEUS",
    "estrofes": [
      [
        { "texto": "Sonda-me, ó Deus, pois vês meu coração;", "italico": false },
        { "texto": "Prova-me, ó Pai, Te peço em oração.", "italico": false },
        { "texto": "De todo mal liberta-me, Senhor,", "italico": false },
        { "texto": "Também da transgressão que oculta for.", "italico": false }
      ],
      [
        { "texto": "Vem me limpar dos vis pecados meus,", "italico": false },
        { "texto": "Conforme prometeste, meu bom Deus.", "italico": false },
        { "texto": "Faze-me arder e consumir de amor,", "italico": false },
        { "texto": "Pois quero Te glorificar, Senhor.", "italico": false }
      ],
      [
        { "texto": "Todo o meu ser, que já não chamo meu,", "italico": false },
        { "texto": "Quero gastá-lo no serviço Teu.", "italico": false },
        { "texto": "Minhas paixões Tu podes dominar:", "italico": false },
        { "texto": "Ó Santo Deus, vem sempre em mim estar!", "italico": false }
      ],
      [
        { "texto": "Lá do alto céu o avivamento vem,", "italico": false },
        { "texto": "A começar em mim e indo além.", "italico": false },
        { "texto": "O Teu poder, as bênçãos, Teu favor,", "italico": false },
        { "texto": "Concede aos que são Teus, ó Pai de amor.", "italico": false }
      ]
    ]
  },
  {
    "id": 33,
    "numero": 33,
    "titulo": "SE CONFESSARMOS",
    "estrofes": [[
      { "texto": "Se confessarmos os nossos pecados,", "italico": false },
      { "texto": "Ele é fiel e justo", "italico": false },
      { "texto": "Para nos perdoar os pecados", "italico": false },
      { "texto": "E nos purificar de toda injustiça.", "italico": false }
    ]]
  },
  {
    "id": 34,
    "numero": 34,
    "titulo": "BUSCAI PRIMEIRO",
    "estrofes": [
      [
        { "texto": "Buscai primeiro o reino de Deus", "italico": false },
        { "texto": "E a sua justiça", "italico": false },
        { "texto": "Todas outras coisas", "italico": false },
        { "texto": "Vos serão acrescentadas", "italico": false },
        { "texto": "Aleluia! Aleluia!", "italico": false }
      ],
      [
        { "texto": "Aleluia! (5x)", "italico": true }
      ],
      [
        { "texto": "Nem só de pão o homem viverá", "italico": false },
        { "texto": "Mas de toda Palavra", "italico": false },
        { "texto": "Que procede da boca de Deus", "italico": false },
        { "texto": "Aleluia! Aleluia!", "italico": false }
      ],
      [
        { "texto": "Pedi, pedi e dar-se-vos-á", "italico": false },
        { "texto": "Buscai e encontrareis", "italico": false },
        { "texto": "Batei, batei e abrir-se-vos-á", "italico": false },
        { "texto": "Aleluia! Aleluia!", "italico": false }
      ]
    ]
  },
  {
    "id": 35,
    "numero": 35,
    "titulo": "EM LOUVOR A TI, Ó SENHOR",
    "estrofes": [
      [
        { "texto": "Que as palavras da minha boca", "italico": false },
        { "texto": "E o meditar do meu coração", "italico": false },
        { "texto": "Sejam todos em louvor a Ti, ó Senhor!", "italico": false }
      ],
      [
        { "texto": "Ó Senhor! (4x)", "italico": true }
      ],
      [
        { "texto": "Pensamentos da minha mente", "italico": false },
        { "texto": "E o querer do meu coração", "italico": false },
        { "texto": "Sejam todos em louvor a Ti, ó Senhor!", "italico": false }
      ]
    ]
  },
  {
    "id": 36,
    "numero": 36,
    "titulo": "RENDE O CORAÇÃO",
    "estrofes": [
      [
        { "texto": "Rende o coração a Jesus Cristo já", "italico": false },
        { "texto": "Pois a Tua espera, com amor, está", "italico": false },
        { "texto": "Quem se entrega a Cristo, Gozo e paz terá!", "italico": false },
        { "texto": "Oh, rende-te ao Senhor!", "italico": false }
      ]
    ]
  },
  {
    "id": 37,
    "numero": 37,
    "titulo": "LEMBRA-TE DO TEU CRIADOR",
    "estrofes": [
      [
        { "texto": "Lembra-te do Teu Criador! (3x)", "italico": true },
        { "texto": "Nos dias da tua mocidade!", "italico": true }
      ],
      [
        { "texto": "Este é o verso que eu quero decorar,", "italico": false },
        { "texto": "Pois ele me ensina", "italico": false },
        { "texto": "Que de Deus devo lembrar", "italico": false },
        { "texto": "Enquanto eu sou jovem", "italico": false },
        { "texto": "Tenho forças pra lutar", "italico": false },
        { "texto": "E a minha vida vou a Ele dedicar!", "italico": false }
      ],
      [
        { "texto": "Quando velho for, ó sim,", "italico": false },
        { "texto": "Eu quero olhar pra trás", "italico": false },
        { "texto": "E ver que tudo fiz", "italico": false },
        { "texto": "Para o meu bom Senhor louvar", "italico": false },
        { "texto": "Sentir que ainda tenho forças", "italico": false },
        { "texto": "Para, então, cantar", "italico": false },
        { "texto": "Pois quem em Cristo vive,", "italico": false },
        { "texto": "Nunca envelhecerá!", "italico": false }
      ]
    ]
  },
  {
    "id": 38,
    "numero": 38,
    "titulo": "JESUS VIRÁ",
    "estrofes": [
      [
        { "texto": "Um lindo dia almejo eu encontrar", "italico": false },
        { "texto": "A eterna glória que prometida está.", "italico": false },
        { "texto": "Gozo e alegria posso, então, eu sentir", "italico": false },
        { "texto": "Pois Jesus Cristo já está por vir.", "italico": false }
      ],
      [
        { "texto": "Jesus virá!", "italico": true },
        { "texto": "Outra vez aqui Jesus virá!", "italico": true },
        { "texto": "Jesus virá mais outra vez aqui!", "italico": true },
        { "texto": "E todos juntos em um só louvor", "italico": true },
        { "texto": "(um só louvor)", "italico": true },
        { "texto": "Cantemos todos que", "italico": true },
        { "texto": "Ele é o nosso Senhor.", "italico": true }
      ],
      [
        { "texto": "Ele veio ao mundo para dar-nos a paz", "italico": false },
        { "texto": "Ele foi tentado e não pecou jamais", "italico": false },
        { "texto": "A Sua vida foi um exemplo de amor", "italico": false },
        { "texto": "Por isso eu canto: Ele é o nosso Senhor!", "italico": false }
      ]
    ]
  },
  {
    "id": 39,
    "numero": 39,
    "titulo": "VIRÃO TE LOUVAR",
    "estrofes": [
      [
        { "texto": "De todas as tribos, povos e raças,", "italico": false },
        { "texto": "Muitos virão Te louvar.", "italico": false },
        { "texto": "De tantas culturas, línguas e nações,", "italico": false },
        { "texto": "No tempo e espaço, virão Te adorar.", "italico": false }
      ],
      [
        { "texto": "Bendito seja sempre o cordeiro,", "italico": true },
        { "texto": "Filho de Deus, Raiz de Davi:", "italico": true },
        { "texto": "Bendito seja o Seu Santo Nome,", "italico": true },
        { "texto": "Cristo Jesus presente aqui.", "italico": true }
      ],
      [
        { "texto": "Remidos, comprados, grande multidão,", "italico": false },
        { "texto": "Muitos virão Te louvar!", "italico": false },
        { "texto": "Povo escolhido, Teu reino e nação", "italico": false },
        { "texto": "No tempo e espaço, virão Te adorar.", "italico": false }
      ],
      [
        { "texto": "E a nós nos cabe tudo dedicar,", "italico": false },
        { "texto": "Oferta suave ao Senhor,", "italico": false },
        { "texto": "Dons e talentos queremos consagrar", "italico": false },
        { "texto": "E a vida no Teu altar, pra Teu louvor.", "italico": false }
      ]
    ]
  },
  {
    "id": 40,
    "numero": 40,
    "titulo": "PARA QUE O MUNDO CREIA",
    "estrofes": [
      [
        { "texto": "Ide e pregai em Nome do Senhor Jesus", "italico": false },
        { "texto": "Erguei os olhos para ver", "italico": false },
        { "texto": "Que é tempo de ceifar", "italico": false },
        { "texto": "Ide e confiai,", "italico": false },
        { "texto": "Que Deus sempre cumpre o que nos diz", "italico": false },
        { "texto": "Em toda circunstância,", "italico": false },
        { "texto": "Graça e força vos dará!", "italico": false }
      ],
      [
        { "texto": "Para que o mundo creia,", "italico": true },
        { "texto": "Ide, pregai a Cristo", "italico": true },
        { "texto": "Só nEle há perdão, só nEle há poder!", "italico": true },
        { "texto": "Para que o mundo creia em Deus!", "italico": true }
      ],
      [
        { "texto": "Ide e pregai em Nome do Senhor Jesus", "italico": false },
        { "texto": "Secai os olhos, consolai,", "italico": false },
        { "texto": "Que o mundo triste está", "italico": false },
        { "texto": "Ide, restaurai o homem aflito e sofredor", "italico": false },
        { "texto": "Seu fardo Deus aliviará,", "italico": false },
        { "texto": "Sua graça bastará!", "italico": false }
      ]
    ]
  },
  {
    "id": 41,
    "numero": 41,
    "titulo": "DEUS AMOU O MUNDO",
    "estrofes": [
      [
        { "texto": "Deus amou o mundo de tal maneira", "italico": true },
        { "texto": "Que deu Seu Unico Filho,", "italico": true },
        { "texto": "Para que todo aquele que nEle crê", "italico": true },
        { "texto": "Não pereça, mas tenha a vida eterna!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Quem crê em Jesus não é julgado,", "italico": false },
        { "texto": "Quem não crê já está julgado", "italico": false },
        { "texto": "Porquanto não crê no Nome", "italico": false },
        { "texto": "Do Filho de Deus.", "italico": false }
      ],
      [
        { "texto": "Deus amou o mundo...", "italico": true }
      ]
    ]
  },
  {
    "id": 42,
    "numero": 42,
    "titulo": "COMPROMISSO",
    "estrofes": [
      [
        { "texto": "É hora de falar, é tempo de pregar,", "italico": false },
        { "texto": "Buscar vidas perdidas", "italico": false },
        { "texto": "O compromisso é meu!", "italico": false }
      ],
      [
        { "texto": "Se eu não for falar, como ouvirão?", "italico": false },
        { "texto": "Também em quem crerão?", "italico": false },
        { "texto": "O compromisso é meu!", "italico": false }
      ],
      [
        { "texto": "Vamos! A ordem é urgente!", "italico": true },
        { "texto": "São muitos esperando para ouvir", "italico": true },
        { "texto": "Uma voz de esperança...", "italico": true },
        { "texto": "Que compromisso tenho eu com Deus?", "italico": true }
      ]
    ]
  },
  {
    "id": 43,
    "numero": 43,
    "titulo": "IDE E PREGAI",
    "estrofes": [
      [
        { "texto": "Ide e pregai, ide com fé!", "italico": false },
        { "texto": "Esta é a ordem de Cristo", "italico": false },
        { "texto": "Ide e pregai, testemunhai,", "italico": false },
        { "texto": "Tendes de Cristo o poder!", "italico": false }
      ],
      [
        { "texto": "Com sua vida, mostra Jesus", "italico": false },
        { "texto": "Diferença você fará", "italico": false },
        { "texto": "Fale do amor, da salvação!", "italico": false },
        { "texto": "Muitos a Cristo conhecerão!", "italico": false }
      ]
    ]
  },
  {
    "id": 44,
    "numero": 44,
    "titulo": "QUEM QUER AJUDAR",
    "estrofes": [
      [
        { "texto": "É grande a seara", "italico": true },
        { "texto": "E são poucos os trabalhadores", "italico": true },
        { "texto": "Rogai ao Senhor da seara", "italico": true },
        { "texto": "Pra que mande mais trabalhadores", "italico": true },
        { "texto": "Quem quer ajudar?", "italico": true }
      ],
      [
        { "texto": "O Mestre está a chamar", "italico": false },
        { "texto": "Tem trabalho para fazer", "italico": false },
        { "texto": "Debaixo de sol e chuva", "italico": false },
        { "texto": "A jornada dura vai ser", "italico": false },
        { "texto": "Juntemos a nossa força", "italico": false },
        { "texto": "De braço, mão, coração", "italico": false },
        { "texto": "Erguei os olhos e vede", "italico": false },
        { "texto": "Os campos brancos estão!", "italico": false }
      ],
      [
        { "texto": "Os homens são esse campo", "italico": false },
        { "texto": "Onde temos que trabalhar", "italico": false },
        { "texto": "E quem no arado pegar", "italico": false },
        { "texto": "Que não olhe mais para trás", "italico": false },
        { "texto": "Quem sai andando e chorando", "italico": false },
        { "texto": "No tempo de semear", "italico": false },
        { "texto": "Voltará com muita alegria", "italico": false },
        { "texto": "E feixes para mostrar!", "italico": false }
      ]
    ]
  },
  {
    "id": 45,
    "numero": 45,
    "titulo": "TEU POVO",
    "estrofes": [
      [
        { "texto": "É o Teu povo aqui presente,", "italico": false },
        { "texto": "Todos numa só voz", "italico": false },
        { "texto": "Declarando que só Tu és grande.", "italico": false },
        { "texto": "Exaltamos Teu doce Nome", "italico": false },
        { "texto": "Pelo amor, pela cruz,", "italico": false },
        { "texto": "Por Teu Filho Jesus", "italico": false }
      ],
      [
        { "texto": "Pois és Santo, sim, és digno", "italico": false },
        { "texto": "De louvor e de ser adorado.", "italico": false },
        { "texto": "És bondoso, Pai querido,", "italico": false },
        { "texto": "Dentre todas as coisas", "italico": true },
        { "texto": "Tu és verdadeiro Senhor.", "italico": true }
      ]
    ]
  },
  {
    "id": 46,
    "numero": 46,
    "titulo": "SÓ EM JESUS",
    "estrofes": [
      [
        { "texto": "Só em Jesus, meu Redentor,", "italico": false },
        { "texto": "A minha fé firmada está", "italico": false },
        { "texto": "Seu sangue salva o pecador,", "italico": false },
        { "texto": "Seu Nome vida eterna dá", "italico": false },
        { "texto": "A rocha eterna Ele é,", "italico": false },
        { "texto": "Pedra de esquina sem igual", "italico": false },
        { "texto": "O que sustenta a minha fé,", "italico": false },
        { "texto": "Seguro abrigo contra o mal.", "italico": false }
      ],
      [
        { "texto": "Ao meu Senhor sou devedor", "italico": false },
        { "texto": "De Sua graça que é sem fim", "italico": false },
        { "texto": "Como pagar tão alto amor", "italico": false },
        { "texto": "Que O fez subir a cruz por mim?", "italico": false },
        { "texto": "Só a Jesus eu servirei,", "italico": false },
        { "texto": "A Ele a vida entregarei", "italico": false },
        { "texto": "Ao Deus que homem encarnou,", "italico": false },
        { "texto": "Ao Rei que servo se tornou.", "italico": false }
      ],
      [
        { "texto": "Só por Jesus irei travar", "italico": false },
        { "texto": "O bom combate pela fé", "italico": false },
        { "texto": "Se vagas querem me tragar,", "italico": false },
        { "texto": "NEle a vitória certa é", "italico": false },
        { "texto": "Durante a noite Ele é a luz,", "italico": false },
        { "texto": "Até que chegue o alvorecer", "italico": false },
        { "texto": "No dia quando o Rei Jesus", "italico": false },
        { "texto": "Dos céus em glória vai descer.", "italico": false }
      ]
    ]
  },
  {
    "id": 47,
    "numero": 47,
    "titulo": "AO ÚNICO",
    "estrofes": [
      [
        { "texto": "Ao Único que é digno de receber", "italico": false },
        { "texto": "A honra e a glória, a força e o poder", "italico": false },
        { "texto": "Ao rei eterno imortal, invisível, mas real", "italico": false },
        { "texto": "A Ele ministramos o louvor!", "italico": false }
      ],
      [
        { "texto": "Coroamos a Ti, ó rei Jesus", "italico": false },
        { "texto": "Adoramos o Teu Nome", "italico": false },
        { "texto": "Nos rendemos aos Teus pés", "italico": false },
        { "texto": "Consagramos todo nosso ser a Ti! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 48,
    "numero": 48,
    "titulo": "CONQUISTOU MEU CORAÇÃO",
    "estrofes": [
      [
        { "texto": "Tu que estás entronizado", "italico": false },
        { "texto": "Entre os querubins", "italico": false },
        { "texto": "Cuja glória e majestade nunca terá fim", "italico": false },
        { "texto": "Tu és o Senhor, a Quem eu amo,", "italico": false },
        { "texto": "Filho de Deus, a Quem adoro", "italico": false },
        { "texto": "Jesus, Jesus", "italico": false }
      ],
      [
        { "texto": "Venceste a morte e o inferno", "italico": false },
        { "texto": "Pra me dar guarida", "italico": false },
        { "texto": "Pelas Tuas pisaduras, hoje eu tenho vida", "italico": false },
        { "texto": "Tu és o Senhor, a Quem eu amo,", "italico": false },
        { "texto": "Filho de Deus a Quem adoro", "italico": false },
        { "texto": "Jesus, Jesus", "italico": false }
      ],
      [
        { "texto": "Teu Nome é sobre todo nome", "italico": false },
        { "texto": "Na terra céu e mar", "italico": false },
        { "texto": "Todo joelho em Tua presença", "italico": false },
        { "texto": "Há de se dobrar", "italico": false }
      ],
      [
        { "texto": "Jesus, Jesus", "italico": true },
        { "texto": "Autor da minha salvação!", "italico": true },
        { "texto": "Jesus, Jesus", "italico": true },
        { "texto": "Conquistou meu coração! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 49,
    "numero": 49,
    "titulo": "TUA VISÃO",
    "estrofes": [
      [
        { "texto": "Tua visão pra minha vida", "italico": false },
        { "texto": "É o que eu quero ter", "italico": false },
        { "texto": "Os Teus propósitos pra mim, vou viver", "italico": false },
        { "texto": "Nenhuma outra ambição pra conquistar", "italico": false },
        { "texto": "Somente uma motivação de Te agradar", "italico": false }
      ],
      [
        { "texto": "Limpa o meu coração neste mundo mal", "italico": true },
        { "texto": "Ensina-me a viver Teu reino aqui", "italico": true },
        { "texto": "Tu me deste Tua Vida", "italico": true },
        { "texto": "Pra que eu não viva mais pra mim", "italico": true },
        { "texto": "Olhar somente a Ti", "italico": true },
        { "texto": "Viver só para Ti", "italico": true },
        { "texto": "Não me perder de Ti", "italico": true }
      ]
    ]
  },
  {
    "id": 50,
    "numero": 50,
    "titulo": "NADA IGUAL",
    "estrofes": [
      [
        { "texto": "Porque desde a antiguidade,", "italico": false },
        { "texto": "Não se ouviu nem se percebeu.", "italico": false },
        { "texto": "Nem com os olhos jamais se viu,", "italico": false },
        { "texto": "Outro Deus além de Ti;", "italico": false },
        { "texto": "Que trabalha pra todo aquele", "italico": false },
        { "texto": "Que espera no Teu poder,", "italico": false },
        { "texto": "Que descansa nas Tuas mãos", "italico": false },
        { "texto": "Que confia no Teu querer.", "italico": false }
      ],
      [
        { "texto": "És o Deus que me ajuda sempre,", "italico": false },
        { "texto": "Que me dá força pra viver;", "italico": false },
        { "texto": "Que combate minhas batalhas,", "italico": false },
        { "texto": "Me conforta no meu sofrer.", "italico": false }
      ],
      [
        { "texto": "Quero sempre Te adorar,", "italico": false },
        { "texto": "Cada dia Te bendizer;", "italico": false },
        { "texto": "Mesmo eu não merecendo nada", "italico": false },
        { "texto": "Tu me dás todo o Teu amor.", "italico": false },
        { "texto": "É Tua graça incomparável,", "italico": false },
        { "texto": "Que me faz mais que vencedor!", "italico": false }
      ]
    ]
  },
  {
    "id": 51,
    "numero": 51,
    "titulo": "GLÓRIA PRA SEMPRE",
    "estrofes": [
      [
        { "texto": "Glória pra sempre", "italico": false },
        { "texto": "Ao Cordeiro de Deus,", "italico": false },
        { "texto": "A Jesus, o Senhor,", "italico": false },
        { "texto": "Ao Leão de Judá", "italico": false },
        { "texto": "A raiz de Davi, que venceu,", "italico": false },
        { "texto": "E o livro abrirá.", "italico": false },
        { "texto": "O céu, a terra e o mar,", "italico": false },
        { "texto": "E tudo que neles há", "italico": false },
        { "texto": "O adorarão e confessarão:", "italico": false },
        { "texto": "\"Jesus Cristo é o Senhor\"", "italico": false }
      ],
      [
        { "texto": "Ele é o Senhor (2x)", "italico": true },
        { "texto": "Ressurreto dentre os mortos,", "italico": true },
        { "texto": "Ele é o Senhor...", "italico": true },
        { "texto": "Todo o joelho se dobrará,", "italico": true },
        { "texto": "Toda a língua confessará", "italico": true },
        { "texto": "Que Jesus Cristo é o Senhor.", "italico": true }
      ]
    ]
  },
  {
    "id": 52,
    "numero": 52,
    "titulo": "DEZ MIL RAZÕES",
    "estrofes": [
      [
        { "texto": "Minha alma canta a Ti!", "italico": true },
        { "texto": "Oh-oh! Canta a Ti!", "italico": true },
        { "texto": "Teu Nome adorarei!", "italico": true },
        { "texto": "Com tudo o que há em mim, canto a Ti", "italico": true },
        { "texto": "Teu Nome adorarei!", "italico": true }
      ],
      [
        { "texto": "O sol nasceu, surge um novo dia", "italico": false },
        { "texto": "É tempo de Te adorar", "italico": false },
        { "texto": "E mesmo em momentos de dificuldade", "italico": false },
        { "texto": "Não deixarei de Te exaltar!", "italico": false }
      ],
      [
        { "texto": "Tu és amor, sempre paciente", "italico": false },
        { "texto": "Teu Nome é Santo, Tu és sempre bom", "italico": false },
        { "texto": "Tua grandeza me leva a cantar", "italico": false },
        { "texto": "Dez mil razões pra Te exaltar!", "italico": false }
      ],
      [
        { "texto": "E quando enfim for chegada a hora", "italico": false },
        { "texto": "E o meu tempo aqui se acabar", "italico": false },
        { "texto": "Eu cantarei o Seu louvor para sempre", "italico": false },
        { "texto": "Por toda eternidade eu vou cantar!", "italico": false }
      ]
    ]
  },
  {
    "id": 53,
    "numero": 53,
    "titulo": "RAZÃO DE VIVER",
    "estrofes": [
      [
        { "texto": "Muitos há que põem suas vidas em coisas vãs", "italico": false },
        { "texto": "E seu coração naquilo que não da paz", "italico": false },
        { "texto": "Buscam nas filosofias um motivo pra viver", "italico": false },
        { "texto": "Tudo que encontram, porém, é ilusão!", "italico": false },
        { "texto": "Mas...", "italico": true }
      ],
      [
        { "texto": "...Eu achei o melhor,", "italico": true },
        { "texto": "Melhor que tudo que se possa ter", "italico": true },
        { "texto": "É Jesus Cristo o Filho de Deus", "italico": true },
        { "texto": "Minha razão de viver!", "italico": true }
      ],
      [
        { "texto": "Nele está minha segurança e o meu coração", "italico": false },
        { "texto": "Tudo o que preciso posso nEle encontrar", "italico": false },
        { "texto": "Ele é o Caminho certo, basta você confiar", "italico": false },
        { "texto": "E terá o verdadeiro motivo de viver!", "italico": false },
        { "texto": "Sim...", "italico": true }
      ]
    ]
  },
  {
    "id": 54,
    "numero": 54,
    "titulo": "DOU GRAÇAS DE CORAÇÃO",
    "estrofes": [
      [
        { "texto": "Dou graças de coração,", "italico": true },
        { "texto": "Prostrado em adoração", "italico": true },
        { "texto": "Dou graças por Jesus, meu Salvador!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Porque, sendo fraco, hei de dizer:", "italico": false },
        { "texto": "\"Eu sou forte no Senhor,", "italico": false },
        { "texto": "Por tudo o que Ele fez na cruz por mim!\"", "italico": false },
        { "texto": "Porque, sendo pobre, hei de dizer:", "italico": false },
        { "texto": "\"Eu sou rico no Senhor,", "italico": false },
        { "texto": "Por tudo o que Ele fez na cruz por mim!\"", "italico": false },
        { "texto": "Dou graças!", "italico": false }
      ]
    ]
  },
  {
    "id": 55,
    "numero": 55,
    "titulo": "ANDAM PROCURANDO",
    "estrofes": [
      [
        { "texto": "Andam procurando a razão de viver", "italico": false },
        { "texto": "Neste mundo mal querem paz receber", "italico": false },
        { "texto": "Gozam seus caminhos pensando achar", "italico": false },
        { "texto": "Algo que na vida valor possa dar.", "italico": false },
        { "texto": "Mas...", "italico": true }
      ],
      [
        { "texto": "...Só Jesus pode dar a razão de viver", "italico": true },
        { "texto": "Gozo, paz e amor só Jesus pode dar", "italico": true },
        { "texto": "E assim você será bem feliz", "italico": true },
        { "texto": "Com Jesus! Aleluia! Amém!", "italico": true }
      ],
      [
        { "texto": "Como todo mundo eu também procurei", "italico": false },
        { "texto": "E agora digo que a paz encontrei", "italico": false },
        { "texto": "Cristo me salvou e eu quero falar", "italico": false },
        { "texto": "Que uma nova vida Ele pode te dar!", "italico": false },
        { "texto": "Sim...", "italico": true }
      ]
    ]
  },
  {
    "id": 56,
    "numero": 56,
    "titulo": "EU TE LOUVAREI",
    "estrofes": [
      [
        { "texto": "Eu Te louvarei, Senhor,", "italico": false },
        { "texto": "De todo o meu coração!", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Na presença dos anjos", "italico": false },
        { "texto": "A Ti cantarei louvores!", "italico": false },
        { "texto": "(2x)", "italico": false }
      ]
    ]
  },
  {
    "id": 57,
    "numero": 57,
    "titulo": "VAMOS ADORAR",
    "estrofes": [
      [
        { "texto": "Vamos adorar a Deus! (2x)", "italico": false },
        { "texto": "Vamos invocar Seu Nome!", "italico": false },
        { "texto": "Vamos adorar a Deus!", "italico": false }
      ],
      [
        { "texto": "Ele veio em minha vida", "italico": true },
        { "texto": "Em um dia especial", "italico": true },
        { "texto": "Trocou meu coração", "italico": true },
        { "texto": "Por um novo coração", "italico": true },
        { "texto": "Esta é a razão porque eu digo que", "italico": true },
        { "texto": "Vamos adorar a Deus! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 58,
    "numero": 58,
    "titulo": "OS QUE ESPERAM NO SENHOR",
    "estrofes": [
      [
        { "texto": "Os que esperam no Senhor", "italico": true },
        { "texto": "Renovam suas forças! (2x)", "italico": true },
        { "texto": "Subirão com asas como águias", "italico": true },
        { "texto": "Jamais se cansarão! (2x)", "italico": true }
      ],
      [
        { "texto": "Na verdade, todo povo é erva", "italico": false },
        { "texto": "E toda a sua glória como a flor", "italico": false },
        { "texto": "Seca-se a erva, caindo suas flores", "italico": false },
        { "texto": "Com o sopro do Senhor.", "italico": false }
      ],
      [
        { "texto": "Mas o homem que teme ao Senhor", "italico": false },
        { "texto": "Que todo o seu pecado perdoou", "italico": false },
        { "texto": "Já recebeu a vida transbordante", "italico": false },
        { "texto": "De graça, paz e amor!", "italico": false }
      ]
    ]
  },
  {
    "id": 59,
    "numero": 59,
    "titulo": "ENTÃO SE VERÁ",
    "estrofes": [
      [
        { "texto": "Então se verá o Filho do homem", "italico": true },
        { "texto": "Vindo sobre as nuvens com poder e glória!", "italico": true }
      ],
      [
        { "texto": "Porque assim como um relâmpago,", "italico": false },
        { "texto": "Que sai do Oriente", "italico": false },
        { "texto": "E se mostra no Ocidente,", "italico": false },
        { "texto": "Assim há de ser", "italico": false },
        { "texto": "A vinda do Filho do homem!", "italico": false }
      ]
    ]
  },
  {
    "id": 60,
    "numero": 60,
    "titulo": "ALTO PREÇO",
    "estrofes": [
      [
        { "texto": "Eu sei que foi pago um alto preço", "italico": false },
        { "texto": "Para que contigo eu fosse um, meu irmão", "italico": false },
        { "texto": "Quando Jesus derramou Sua Vida,", "italico": false },
        { "texto": "Ele pensava em ti,", "italico": false },
        { "texto": "Ele pensava em mim,", "italico": false },
        { "texto": "Pensava em nós!", "italico": false }
      ],
      [
        { "texto": "E nos via redimidos por Seu sangue,", "italico": false },
        { "texto": "Lutando o bom combate do Senhor,", "italico": false },
        { "texto": "Lado a lado trabalhando,", "italico": false },
        { "texto": "Sua igreja edificando", "italico": false },
        { "texto": "E rompendo as barreiras pelo amor", "italico": false }
      ],
      [
        { "texto": "E na força do Espírito Santo", "italico": false },
        { "texto": "Nós proclamamos aqui", "italico": false },
        { "texto": "Que pagaremos o preço", "italico": false },
        { "texto": "De sermos um só coração no Senhor,", "italico": false },
        { "texto": "E por mais que as trevas militem", "italico": false },
        { "texto": "E nos tentem separar,", "italico": false },
        { "texto": "Com os nossos olhos em Cristo,", "italico": false },
        { "texto": "Unidos iremos andar! (2x)", "italico": false }
      ]
    ]
  },
  {
    "id": 61,
    "numero": 61,
    "titulo": "O MEU LOUVOR É FRUTO",
    "estrofes": [
      [
        { "texto": "O meu louvor é fruto", "italico": true },
        { "texto": "Do meu amor por Ti, Jesus", "italico": true },
        { "texto": "De lábios que confessam o Teu Nome", "italico": true },
        { "texto": "E fruto de Tua graça", "italico": true },
        { "texto": "E da paz que encontro em Ti", "italico": true },
        { "texto": "E do Teu Espírito", "italico": true },
        { "texto": "Que habita em mim (2x)", "italico": true }
      ],
      [
        { "texto": "Ainda que as trevas venham me cercar,", "italico": false },
        { "texto": "Ainda que os montes desabem sobre mim", "italico": false },
        { "texto": "Meus lábios não se fecharão,", "italico": false },
        { "texto": "Pra sempre hei de Te louvar!", "italico": false }
      ],
      [
        { "texto": "Ainda que cadeias venham me prender", "italico": false },
        { "texto": "Ainda que os homens", "italico": false },
        { "texto": "se levantem contra mim", "italico": false },
        { "texto": "Meus lábios não se fecharão", "italico": false },
        { "texto": "Pra sempre hei de Te louvar!", "italico": false }
      ]
    ]
  },
  {
    "id": 62,
    "numero": 62,
    "titulo": "QUEM NOS SEPARARÁ",
    "estrofes": [
      [
        { "texto": "Quem nos separará do amor de Cristo?", "italico": false },
        { "texto": "Será tribulação, angústia ou perseguição?", "italico": false },
        { "texto": "Fome ou nudez, perigo ou espada?", "italico": false },
        { "texto": "Quem nos separará do amor de Cristo?", "italico": false }
      ],
      [
        { "texto": "Pois sei que estou bem certo", "italico": false },
        { "texto": "De que nem morte, nem vida", "italico": false },
        { "texto": "Nem anjos, nem principados", "italico": false },
        { "texto": "Nem coisas do presente, nem do porvir", "italico": false },
        { "texto": "Nem poderes, nem alturas,", "italico": false },
        { "texto": "Nem profundidade", "italico": false },
        { "texto": "Nem qualquer outra criatura", "italico": false },
        { "texto": "Poderá nos separar do amor de Deus", "italico": false },
        { "texto": "Que está em Jesus Cristo, nosso Senhor", "italico": false },
        { "texto": "Que está em Jesus Cristo...", "italico": false }
      ],
      [
        { "texto": "Nada, nada, poderá nos separar (2x)", "italico": true },
        { "texto": "Do amor de Deus", "italico": false },
        { "texto": "Que está em Jesus Cristo, nosso Senhor", "italico": false },
        { "texto": "Que está em Jesus Cristo...", "italico": false }
      ]
    ]
  },
  {
    "id": 63,
    "numero": 63,
    "titulo": "PORQUE ELE VIVE",
    "estrofes": [
      [
        { "texto": "Deus enviou seu Filho amado", "italico": false },
        { "texto": "Pra me salvar e perdoar", "italico": false },
        { "texto": "Na cruz morreu por meus pecados", "italico": false },
        { "texto": "Mas ressurgiu e vivo com o Pai está!", "italico": false }
      ],
      [
        { "texto": "Porque Ele vive, posso crer no amanhã,", "italico": true },
        { "texto": "Porque Ele vive, temor não há,", "italico": true },
        { "texto": "Mas eu bem sei, eu sei que a minha vida", "italico": true },
        { "texto": "Está nas mãos de meu Jesus", "italico": true },
        { "texto": "Que vivo está", "italico": true }
      ],
      [
        { "texto": "E quando, enfim, chegar a hora", "italico": false },
        { "texto": "Em que a morte enfrentarei", "italico": false },
        { "texto": "Sem medo, então, terei vitória,", "italico": false },
        { "texto": "Verei na glória o meu Jesus", "italico": false },
        { "texto": "Que vivo está!", "italico": false }
      ]
    ]
  },
  {
    "id": 64,
    "numero": 64,
    "titulo": "REI DAS NAÇÕES",
    "estrofes": [
      [
        { "texto": "Grandes são as Tuas obras,", "italico": false },
        { "texto": "Senhor Todo-Poderoso", "italico": false },
        { "texto": "Justos e verdadeiros são", "italico": false },
        { "texto": "Os Teus caminhos", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Ó Rei das nações, quem não temerá?", "italico": true },
        { "texto": "Quem não glorificará o Teu Nome?", "italico": true },
        { "texto": "Ó Rei das nações, quem não Te louvará?", "italico": true },
        { "texto": "Pois só Teu Nome é santo!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Todas as nações virão", "italico": false },
        { "texto": "E adorarão diante de Ti,", "italico": false },
        { "texto": "Pois os Teus atos de justiça", "italico": false },
        { "texto": "Se fizeram manifestos", "italico": false },
        { "texto": "(2x)", "italico": false }
      ]
    ]
  },
  {
    "id": 65,
    "numero": 65,
    "titulo": "TUDO ELE É PRA MIM",
    "estrofes": [
      [
        { "texto": "Nas estrelas vejo a Sua mão", "italico": false },
        { "texto": "E no vento ouço a Sua voz", "italico": false },
        { "texto": "Deus domina sobre terra e mar", "italico": false },
        { "texto": "O que Ele é pra mim?", "italico": false }
      ],
      [
        { "texto": "Eu sei o sentido do natal,", "italico": false },
        { "texto": "Pois na história tem o seu lugar", "italico": false },
        { "texto": "Cristo veio para nos salvar", "italico": false },
        { "texto": "O que Ele é pra mim?", "italico": false }
      ],
      [
        { "texto": "'Té que um dia Seu amor senti,", "italico": true },
        { "texto": "Sua imensa graça recebi", "italico": true },
        { "texto": "Descobri, então, que Deus", "italico": true },
        { "texto": "Não vive longe, lá no céu,", "italico": true },
        { "texto": "Sem se importar comigo, não!", "italico": true },
        { "texto": "Mas, agora, ao meu lado está,", "italico": true },
        { "texto": "Cada dia sinto Seu cuidar", "italico": true },
        { "texto": "Ajudando-me a caminhar", "italico": true },
        { "texto": "Tudo Ele é pra mim! (2x)", "italico": true }
      ],
      [
        { "texto": "Tudo é Jesus pra mim!", "italico": true }
      ]
    ]
  },
  {
    "id": 66,
    "numero": 66,
    "titulo": "CELEBRAI COM JÚBILO",
    "estrofes": [
      [
        { "texto": "Celebrai, com júbilo, ao Senhor", "italico": false },
        { "texto": "Todos moradores da terra", "italico": false },
        { "texto": "Servi ao Senhor com alegria", "italico": false },
        { "texto": "Apresentai-vos a Ele com cântico", "italico": false },
        { "texto": "Sabei que o Senhor é Deus,", "italico": false },
        { "texto": "E eterna a Sua bondade,", "italico": false },
        { "texto": "E a Sua fidelidade, de geração em geração,", "italico": false },
        { "texto": "Aleluia! Glória e aleluia! (4x)", "italico": true },
        { "texto": "Amém.", "italico": false }
      ]
    ]
  },
  {
    "id": 67,
    "numero": 67,
    "titulo": "VITÓRIA EM CRISTO",
      "estrofes": [
        [
          { "texto": "Ouvi contar a história", "italico": false },
          { "texto": "De Jesus, o Rei da glória", "italico": false },
          { "texto": "Que do céu desceu e aqui viveu", "italico": false },
          { "texto": "Porque me quis salvar", "italico": false },
          { "texto": "Ouvi do sofrimento", "italico": false },
          { "texto": "Que Ele padeceu morrendo", "italico": false },
          { "texto": "Arrependi-me, aceitei-O", "italico": false },
          { "texto": "Como Salvador", "italico": false }
        ],
        [
          { "texto": "Vitória tenho em Cristo,", "italico": true },
          { "texto": "Meu Mestre divino", "italico": true },
          { "texto": "Buscou-me, comprou-me", "italico": true },
          { "texto": "Com o sangue remidor", "italico": true },
          { "texto": "Em compaixão amou-me", "italico": true },
          { "texto": "Da perdição salvou-me", "italico": true },
          { "texto": "Vitoria me assegurou", "italico": true },
          { "texto": "Jesus, meu Salvador!", "italico": true }
        ],
        [
          { "texto": "Ouvi de um lar glorioso", "italico": false },
          { "texto": "Que Jesus, meu Rei bondoso,", "italico": false },
          { "texto": "Preparou nos céus e um dia ali", "italico": false },
          { "texto": "Com Ele habitarei E no celeste coro", "italico": false },
          { "texto": "Cantarei a antiga história", "italico": false },
          { "texto": "Ao meu Senhor e Salvador", "italico": false },
          { "texto": "Pra sempre louvarei.", "italico": false }
        ]
      ]
  },
  {
    "id": 68,
    "numero": 68,
    "titulo": "NOVOS CAMINHOS",
    "estrofes": [
      [
        { "texto": "Novos caminhos (novos caminhos)", "italico": true },
        { "texto": "Novos dias (novos dias)", "italico": true },
        { "texto": "Mundo novo (mundo novo)", "italico": true },
        { "texto": "São meus (são meus)", "italico": true }
      ],
      [
        { "texto": "Novos caminhos (novos caminhos)", "italico": true },
        { "texto": "E uma nova paz (e uma nova paz)", "italico": true },
        { "texto": "Novo coração (novo coração)", "italico": true },
        { "texto": "Que Deus me deu!", "italico": true }
      ],
      [
        { "texto": "Porque eu já tentei, só vazio achei", "italico": false },
        { "texto": "'Té que um dia em Cristo eu cri", "italico": false },
        { "texto": "E vale a pena, eu sei,", "italico": false },
        { "texto": "Pois em Cristo achei", "italico": false },
        { "texto": "Novo viver pra mim!", "italico": false }
      ],
      [
        { "texto": "O sol pra mim brilhou!", "italico": false },
        { "texto": "Cristo me livrou", "italico": false },
        { "texto": "E me deu a vida real", "italico": false },
        { "texto": "E nesse meu viver", "italico": false },
        { "texto": "Quero obedecer!", "italico": false },
        { "texto": "A Cristo obedecer...", "italico": false },
        { "texto": "Sempre nEle crer...", "italico": false },
        { "texto": "É um novo viver! (Viver!)", "italico": false }
      ]
    ]
  },
  {
    "id": 69,
    "numero": 69,
    "titulo": "ADORAI EM MAJESTADE",
    "estrofes": [
      [
        { "texto": "Adorai em majestade,", "italico": false },
        { "texto": "Toda glória seja dada a Cristo Jesus", "italico": false },
        { "texto": "Adorai em santidade,", "italico": false },
        { "texto": "Vinde e louvai!", "italico": false },
        { "texto": "E vos prostrai ao pé da cruz", "italico": false }
      ],
      [
        { "texto": "Exaltai, bem alto erguei", "italico": false },
        { "texto": "De Cristo o Nome", "italico": false },
        { "texto": "Adorai, glorificai! Jesus Cristo, o Rei!", "italico": false },
        { "texto": "Adorai em majestade,", "italico": false },
        { "texto": "Ele morreu, Ele venceu,", "italico": false },
        { "texto": "É o Rei dos reis!", "italico": false }
      ]
    ]
  },
  {
    "id": 70,
    "numero": 70,
    "titulo": "NOSSO DEUS É SOBERANO",
    "estrofes": [
      [
        { "texto": "Nosso Deus é Soberano", "italico": true },
        { "texto": "Já reinava antes da fundação do mundo", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "A terra era sem forma e vazia", "italico": false },
        { "texto": "E o Espírito do nosso Deus", "italico": false },
        { "texto": "Se movia sobre a face das águas", "italico": false },
        { "texto": "Foi Ele quem criou o céu dos céus", "italico": false },
        { "texto": "E fez separação das águas e da terra seca", "italico": false },
        { "texto": "Foi Ele quem criou os luminares", "italico": false },
        { "texto": "E criou a natureza e formou o homem!", "italico": false }
      ],
      [
        { "texto": "Glória a Deus por Suas maravilhas,", "italico": true },
        { "texto": "Pelas Suas grandezas, glória a Deus!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 71,
    "numero": 71,
    "titulo": "AMIGO DE DEUS",
    "estrofes": [
      [
        { "texto": "Não existe nada melhor", "italico": false },
        { "texto": "Do que ser amigo de Deus", "italico": false },
        { "texto": "Caminhar seguro na luz", "italico": false },
        { "texto": "Desfrutar do Seu Amor", "italico": false }
      ],
      [
        { "texto": "Ter a Paz no coração", "italico": true },
        { "texto": "Viver sempre em comunhão", "italico": true },
        { "texto": "E assim perceber", "italico": true },
        { "texto": "A Grandeza do poder", "italico": true },
        { "texto": "De Jesus, meu Bom Pastor!", "italico": true }
      ]
    ]
  },
  {
    "id": 72,
    "numero": 72,
    "titulo": "SÓ O PODER DE DEUS",
    "estrofes": [
      [
        { "texto": "Só o poder de Deus", "italico": false },
        { "texto": "Pode mudar teu ser", "italico": false },
        { "texto": "A prova que eu te dou", "italico": false },
        { "texto": "Ele mudou o meu", "italico": false },
        { "texto": "Não vês que sou feliz", "italico": false },
        { "texto": "Servindo ao Senhor!", "italico": false },
        { "texto": "Nova criatura sou!", "italico": false },
        { "texto": "Nova sou!", "italico": false }
      ]
    ]
  },
  {
    "id": 73,
    "numero": 73,
    "titulo": "SALMO 96",
    "estrofes": [
      [
        { "texto": "Cantai ao Senhor um cântico novo", "italico": false },
        { "texto": "Cantai ao Senhor todas as terras", "italico": false },
        { "texto": "Cantai ao Senhor, bendizei o Seu Nome", "italico": false },
        { "texto": "Proclamai a Sua Salvação!", "italico": false }
      ],
      [
        { "texto": "Anunciai entre as nações a Sua glória", "italico": false },
        { "texto": "E entre todos os povos as Suas maravilhas", "italico": false },
        { "texto": "Porque grande é o Senhor", "italico": false },
        { "texto": "E mui digno de ser louvado", "italico": false },
        { "texto": "Mais temível do que falsos deuses", "italico": false }
      ],
      [
        { "texto": "Glória e majestade estão diante dEle", "italico": true },
        { "texto": "Força e formosura no Seu santuário!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 74,
    "numero": 74,
    "titulo": "SANTO LUGAR",
    "estrofes": [
      [
        { "texto": "Há de ter um lugar", "italico": false },
        { "texto": "Onde o tempo ha de parar,", "italico": false },
        { "texto": "Onde a paz se faz real", "italico": false },
        { "texto": "E o irreal amor não há, não!", "italico": false },
        { "texto": "Sei que há, pois Deus o diz", "italico": false },
        { "texto": "Não preciso duvidar,", "italico": false },
        { "texto": "Mesmo que eu não possa imaginar,", "italico": false },
        { "texto": "Espero o dia! Sim, espero!", "italico": false }
      ],
      [
        { "texto": "Aleluia! Aleluia!", "italico": true },
        { "texto": "No céu eu vou morar", "italico": true },
        { "texto": "Aleluia! Aleluia!", "italico": true },
        { "texto": "Pois Cristo vem me buscar", "italico": true }
      ],
      [
        { "texto": "Há de ter um lugar", "italico": false },
        { "texto": "Onde lágrimas não rolarão,", "italico": false },
        { "texto": "Fracassados dias maus, da vida em caos,", "italico": false },
        { "texto": "Jamais verei, pois No lugar, santo lugar,", "italico": false },
        { "texto": "Onde o inimigo ausente estará,", "italico": false },
        { "texto": "Face a face, a Cristo verei!", "italico": false },
        { "texto": "E muitos verão! Por isso eu canto...", "italico": false }
      ]
    ]
  },
  {
    "id": 75,
    "numero": 75,
    "titulo": "AO NOSSO DEUS",
    "estrofes": [
      [
        { "texto": "Ao Nosso Deus, que se assenta no trono", "italico": true },
        { "texto": "E ao Cordeiro pertence a salvação!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "E o louvor e glória e a sabedoria", "italico": false },
        { "texto": "E as ações de graça e a honra", "italico": false },
        { "texto": "E o poder e a força", "italico": false },
        { "texto": "Sejam ao Nosso Deus", "italico": false },
        { "texto": "Pelos séculos dos séculos!", "italico": false },
        { "texto": "Amém!", "italico": false }
      ]
    ]
  },
  {
    "id": 76,
    "numero": 76,
    "titulo": "JESUS CRISTO MUDOU MEU VIVER",
    "estrofes": [
      [
        { "texto": "Jesus Cristo mudou meu viver! (2x)", "italico": true },
        { "texto": "E a Luz que ilumina meu ser", "italico": false },
        { "texto": "Sim, Jesus Cristo mudou meu viver!", "italico": false }
      ],
      [
        { "texto": "Diferente, hoje é o meu coração! (2x)", "italico": true },
        { "texto": "Cristo deu-me paz e perdão", "italico": false },
        { "texto": "Sim, diferente hoje é o meu coração!", "italico": false }
      ],
      [
        { "texto": "O amor só conhecia em canções", "italico": false },
        { "texto": "Que falavam de ilusões", "italico": false },
        { "texto": "Mas agora é diferente!", "italico": false },
        { "texto": "Isto falo a toda a gente", "italico": false },
        { "texto": "Sim, Jesus Cristo mudou meu viver!", "italico": false }
      ]
    ]
  },
  {
    "id": 77,
    "numero": 77,
    "titulo": "NÃO HÁ DEUS MAIOR",
    "estrofes": [
      [
        { "texto": "Não há Deus maior!", "italico": true },
        { "texto": "Não há Deus melhor!", "italico": true },
        { "texto": "Não há Deus tão grande", "italico": true },
        { "texto": "Como nosso Deus!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Criou o céu, criou a terra", "italico": false },
        { "texto": "Criou o Sol e as estrelas", "italico": false },
        { "texto": "Tudo Ele fez, tudo criou, tudo formou", "italico": false },
        { "texto": "Para o Seu louvor!", "italico": false },
        { "texto": "Para o Seu... (Para o Seu...)", "italico": false },
        { "texto": "Para o Seu louvor!", "italico": false }
      ]
    ]
  },
  {
    "id": 78,
    "numero": 78,
    "titulo": "SEJA ENGRANDECIDO",
    "estrofes": [
      [
        { "texto": "Seja engrandecido,", "italico": false },
        { "texto": "Ó Deus da minha vida", "italico": false },
        { "texto": "Tu és o Deus da minha salvação", "italico": false },
        { "texto": "És a minha Rocha, a minha segurança", "italico": false },
        { "texto": "Meus lábios sempre Te exaltarão", "italico": false }
      ],
      [
        { "texto": "Aleluia! (Aleluia!) Te louvo! (Te louvo!)", "italico": true },
        { "texto": "Pois sei que sobre todos és Senhor!", "italico": true }
      ],
      [
        { "texto": "Aleluia! (Aleluia!)", "italico": true },
        { "texto": "Aleluia! Louvemos ao Senhor!", "italico": true }
      ]
    ]
  },
  {
    "id": 79,
    "numero": 79,
    "titulo": "PURO E SANTO",
    "estrofes": [
      [
        { "texto": "Puro e santo quero ser", "italico": false },
        { "texto": "Tua vontade obedecer", "italico": false },
        { "texto": "Com sua luz, ensina-me", "italico": false },
        { "texto": "Com amor, transforma-me", "italico": false },
        { "texto": "Santo! Santo! Santo Deus! (2x)", "italico": true }
      ],
      [
        { "texto": "Grande és Tu e pequeno sou", "italico": false },
        { "texto": "Mas louvores a Ti eu dou", "italico": false },
        { "texto": "Tu és Rei sobre meu viver", "italico": false },
        { "texto": "E contio no Teu poder!", "italico": false },
        { "texto": "Santo! Santo! Santo Deus! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 80,
    "numero": 80,
    "titulo": "DOCE NOME",
    "estrofes": [
      [
        { "texto": "Só de ouvir Tua voz, de sentir Teu amor", "italico": false },
        { "texto": "Só de pronunciar o Teu Nome", "italico": false },
        { "texto": "Os meus medos se vão,", "italico": false },
        { "texto": "minha dor, meu sofrer,", "italico": false },
        { "texto": "Pois de paz Tu inundas meu ser!", "italico": false }
      ],
      [
        { "texto": "Jesus! Que doce Nome, que transforma", "italico": true },
        { "texto": "em alegria o meu triste coração!", "italico": true },
        { "texto": "Jesus, só o Teu Nome", "italico": true },
        { "texto": "É capaz de dar ao homem salvação!", "italico": true }
      ]
    ]
  },
  {
    "id": 81,
    "numero": 81,
    "titulo": "CÂNTICO DA COLHEITA",
    "estrofes": [
      [ { "texto": "Paraparaparara parapapara parapapararara", "italico": true } ],
      [
        { "texto": "Lembra que o Senhor uma vez nos falou", "italico": false },
        { "texto": "Sobre a promessa de um dia colher", "italico": false },
        { "texto": "O fruto que hoje temos nas mãos", "italico": false },
        { "texto": "É o que nos fazia sonhar", "italico": false },
        { "texto": "Com muito trabalho e guardando a visão", "italico": false },
        { "texto": "Às vezes chorando, mas sempre com fé", "italico": false },
        { "texto": "Valeu a pena esperar no Senhor", "italico": false },
        { "texto": "Mais uma vez foi Fiel!", "italico": false }
      ],
      [
        { "texto": "A nossa boca se encheu de alegria", "italico": true },
        { "texto": "E a nossa língua de júbilo", "italico": true },
        { "texto": "Em toda terra um canto se ouvia", "italico": true },
        { "texto": "Grandes coisas fez o Senhor!", "italico": true }
      ],
      [
        { "texto": "A nossa boca se encheu de alegria", "italico": true },
        { "texto": "E a nossa língua de júbilo", "italico": true },
        { "texto": "Nossa colheita tem sido abundante", "italico": true },
        { "texto": "Cumpriu-se a palavra de Deus!", "italico": true }
      ],
      [ { "texto": "Paraparaparara parapapara parapapararara", "italico": true } ]
    ]
  },
  {
    "id": 82,
    "numero": 82,
    "titulo": "SANTIFICAÇÃO",
    "estrofes": [
      [
        { "texto": "Porquanto é santo Aquele que me chamou", "italico": false },
        { "texto": "Sim, santo é Aquele que me escolheu", "italico": false },
        { "texto": "Pra andar com Ele, viver por meio dEle,", "italico": false },
        { "texto": "Santidade!", "italico": false }
      ],
      [
        { "texto": "Pois esta é a vontade de Deus, o Pai", "italico": false },
        { "texto": "Sim, Ele quer a minha santificação", "italico": false },
        { "texto": "Pra andar com Ele, viver por meio dEle,", "italico": false },
        { "texto": "Santidade!", "italico": false }
      ],
      [
        { "texto": "Santificação! Santidade!", "italico": true },
        { "texto": "Assim como Tu és, Senhor, eu quero ser", "italico": true },
        { "texto": "Santo! Santo!", "italico": true },
        { "texto": "Santificação! Santidade!", "italico": true }
      ]
    ]
  },
  {
    "id": 83,
    "numero": 83,
    "titulo": "DIANTE DO TRONO DE DEUS",
    "estrofes": [
      [
        { "texto": "Diante do trono de Deus nos céus", "italico": false },
        { "texto": "Tenho perfeita intercessão", "italico": false },
        { "texto": "Do Sumo Sacerdote - o Amor", "italico": false },
        { "texto": "Que advoga em meu favor.", "italico": false },
        { "texto": "Meu nome em Suas mãos está", "italico": false },
        { "texto": "E escrito em Seu coração", "italico": false },
        { "texto": "Por toda eternidade, eu sei", "italico": false },
        { "texto": "Seguro ali eu estarei. (2x)", "italico": true }
      ],
      [
        { "texto": "Se sou tentado a desviar", "italico": false },
        { "texto": "E vejo a culpa que há em mim,", "italico": false },
        { "texto": "Contemplo os céus e vejo, então", "italico": false },
        { "texto": "Aquele que morreu na cruz.", "italico": false },
        { "texto": "O Justo Salvador morreu", "italico": false },
        { "texto": "Pra minha vida libertar", "italico": false },
        { "texto": "Satisfazendo o Santo Deus", "italico": false },
        { "texto": "Que me perdoa ao ver Jesus. (2x)", "italico": true }
      ],
      [
        { "texto": "Vejo o Cordeiro que ressurgiu", "italico": false },
        { "texto": "Minha justiça e perfeição", "italico": false },
        { "texto": "O grande, imutável \"Eu Sou\"", "italico": false },
        { "texto": "O Rei da graça, o Rei dos céus.", "italico": false },
        { "texto": "Unido a Ele, não morrerei", "italico": false },
        { "texto": "Comprado por Seu sangue fui", "italico": false },
        { "texto": "Eterno abrigo eu encontrei", "italico": false },
        { "texto": "Em Cristo, meu Deus, Salvador! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 84,
    "numero": 84,
    "titulo": "ELE É EXALTADO",
    "estrofes": [
      [
        { "texto": "Ele é exaltado, o Rei exaltado nos céus!", "italico": false },
        { "texto": "Eu O louvarei!", "italico": false },
        { "texto": "Ele é exaltado, pra sempre exaltado!", "italico": false },
        { "texto": "O Seu Nome louvarei!", "italico": false }
      ],
      [
        { "texto": "Ele é o Senhor!", "italico": false },
        { "texto": "Sua verdade vai sempre reinar!", "italico": false },
        { "texto": "Terra e céus glorificam Seu Santo Nome!", "italico": false }
      ],
      [
        { "texto": "Ele é exaltado, o Rei exaltado nos céus!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 85,
    "numero": 85,
    "titulo": "JESUS, EM TUA PRESENÇA",
    "estrofes": [
      [
        { "texto": "Só pra Te adorar!", "italico": true },
        { "texto": "E fazer Teu Nome grande!", "italico": true },
        { "texto": "E Te dar o louvor que é devido", "italico": true },
        { "texto": "Estamos nós aqui!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Jesus, em Tua presença, Reunimo-nos aqui", "italico": false },
        { "texto": "Contemplamos Tua face", "italico": false },
        { "texto": "E rendemo-nos a Ti", "italico": false },
        { "texto": "Pois um dia a Tua morte", "italico": false },
        { "texto": "Trouxe vida a todos nós", "italico": false },
        { "texto": "E nos deu completo acesso", "italico": false },
        { "texto": "Ao coração do Pai", "italico": false }
      ],
      [
        { "texto": "O véu que separava, já não separa mais!", "italico": false },
        { "texto": "A luz que outrora apagada", "italico": false },
        { "texto": "Agora brilha e cada dia brilha mais!", "italico": false }
      ]
    ]
  },
  {
    "id": 86,
    "numero": 86,
    "titulo": "SEMPRE A TI EU GRAÇAS DOU",
    "estrofes": [
      [
        { "texto": "Aqui diante de Ti,", "italico": false },
        { "texto": "Eu tenho tanto pra Te agradecer,", "italico": false },
        { "texto": "Graças dou, graças dou!", "italico": false },
        { "texto": "O que me deste Senhor,", "italico": false },
        { "texto": "Por tantas bênçãos que eu não posso ver", "italico": false },
        { "texto": "Graças dou, graças dou!", "italico": false }
      ],
      [
        { "texto": "Com meu coração, e o meu louvor,", "italico": true },
        { "texto": "Com as mãos aos céus, louvo-Te Senhor", "italico": true },
        { "texto": "Graças dou!", "italico": true },
        { "texto": "Sempre a Ti eu graças dou! (2x)", "italico": true },
        { "texto": "Graças dou...", "italico": true }
      ],
      [
        { "texto": "Tens feito tanto por mim,", "italico": false },
        { "texto": "Da escuridão Tua luz me tirou,", "italico": false },
        { "texto": "Graças dou, graças dou!", "italico": false },
        { "texto": "Por Teu Amor e perdão,", "italico": false },
        { "texto": "Por meus pecados levados na cruz,", "italico": false },
        { "texto": "Graças dou, graças dou!", "italico": false }
      ]
    ]
  },
  {
    "id": 87,
    "numero": 87,
    "titulo": "CELEBRAÇÃO",
    "estrofes": [
      [
        { "texto": "É tempo de celebrar!", "italico": false },
        { "texto": "É tempo de agradecer!", "italico": false },
        { "texto": "O Senhor tem feito grandes coisas entre nós!", "italico": false },
        { "texto": "E tempo de, então, cantar", "italico": false },
        { "texto": "louvores ao nosso Deus", "italico": false },
        { "texto": "Pela voz! Pela vida!", "italico": false },
        { "texto": "E por bênçãos que nos deu!", "italico": false }
      ],
      [
        { "texto": "Por terra, por céu e mar", "italico": true },
        { "texto": "A ordem é proclamar", "italico": true },
        { "texto": "Que Cristo vai voltar, vem nos buscar!", "italico": true },
        { "texto": "Vem cumprir o que prometeu", "italico": true },
        { "texto": "Vem buscar os que já são seus", "italico": true },
        { "texto": "Vem nas nuvens com poder", "italico": true },
        { "texto": "Sua glória vamos ver!", "italico": true }
      ],
      [
        { "texto": "É tempo de decidir", "italico": false },
        { "texto": "viver ao lado de Deus", "italico": false },
        { "texto": "Uma vida pura e santa", "italico": false },
        { "texto": "Que agrade a Deus!", "italico": false },
        { "texto": "E tempo de dedicar", "italico": false },
        { "texto": "mais tempo ao Salvador", "italico": false },
        { "texto": "E encontrar a alegria", "italico": false },
        { "texto": "que existe no louvor!", "italico": false }
      ]
    ]
  },
  {
    "id": 88,
    "numero": 88,
    "titulo": "LOGO DE MANHÃ",
    "estrofes": [
      [
        { "texto": "Logo de manhã, quero Te buscar", "italico": true },
        { "texto": "Tua voz ouvir, Teu amor sentir!", "italico": true },
        { "texto": "Estender as mãos para Te louvar", "italico": true },
        { "texto": "Derramar meu coração sobre Teu altar!", "italico": true }
      ],
      [
        { "texto": "Pois Tu sabes bem tudo quanto há em mim", "italico": true },
        { "texto": "Vou Te seguir e Te amar até o fim!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "E no fim do dia, quando o sol se for,", "italico": false },
        { "texto": "Te adorarei, Te darei louvor!", "italico": false },
        { "texto": "Mesmo escura a noite, brilha a Tua Luz", "italico": false },
        { "texto": "Em Teus braços eu descanso,", "italico": false },
        { "texto": "Meu Senhor Jesus.", "italico": false }
      ]
    ]
  },
  {
    "id": 89,
    "numero": 89,
    "titulo": "VIM PARA ADORAR-TE",
    "estrofes": [
      [
        { "texto": "Luz do mundo, vieste à Terra", "italico": false },
        { "texto": "Pra que eu pudesse Te ver", "italico": false },
        { "texto": "Tua beleza me leva a adorar-Te", "italico": false },
        { "texto": "Quero contigo viver!", "italico": false }
      ],
      [
        { "texto": "Vim para adorar-Te,", "italico": true },
        { "texto": "Vim para prostrar-me,", "italico": true },
        { "texto": "Vim para dizer que és meu Deus.", "italico": true },
        { "texto": "És totalmente amável, totalmente digno,", "italico": true },
        { "texto": "Tão maravilhoso para mim!", "italico": true }
      ],
      [
        { "texto": "Eterno Rei, exaltado nas alturas", "italico": false },
        { "texto": "Glorioso nos céus", "italico": false },
        { "texto": "Humilde, vieste à Terra que criaste", "italico": false },
        { "texto": "Por amor pobre se fez.", "italico": false },
      ],
      [
        { "texto": "Eu nunca saberei o preço", "italico": false },
        { "texto": "dos meus pecados lá na cruz...", "italico": false }
      ]
    ]
  },
  {
    "id": 90,
    "numero": 90,
    "titulo": "DEUS É FIEL",
    "estrofes": [
      [
        { "texto": "Deus é fiel, é fiel!", "italico": true },
        { "texto": "Acima de todas as coisas eu sei,", "italico": true },
        { "texto": "Eu sei que meu Deus é fiel!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Em meio aos muitos problemas,", "italico": false },
        { "texto": "Em meio às lutas sem fim,", "italico": false },
        { "texto": "Por entre os muitos dilemas", "italico": false },
        { "texto": "Que se apresentam pra mim.", "italico": false }
      ],
      [
        { "texto": "Às vezes eu posso passar", "italico": false },
        { "texto": "Uma noite inteira a chorar", "italico": false },
        { "texto": "Mas sei que meu Deus logo pela manhã", "italico": false },
        { "texto": "Fará novamente o sol brilhar.", "italico": false }
      ],
      [
        { "texto": "E encherá de alegria os meus lábios", "italico": false },
        { "texto": "E o meu coração de louvor", "italico": false },
        { "texto": "Assim vou descansar, sim, eu vou confiar", "italico": false },
        { "texto": "No Seu grande e imenso amor!", "italico": false }
      ]
    ]
  },
  {
    "id": 91,
    "numero": 91,
    "titulo": "VEM DE TI, SENHOR",
    "estrofes": [
      [
        { "texto": "Não tenho palavras", "italico": false },
        { "texto": "Pra agradecer Tua bondade", "italico": false },
        { "texto": "Dia após dia me cercas com fidelidade", "italico": false },
        { "texto": "Nunca me deixes esquecer", "italico": false },
        { "texto": "Que tudo o que tenho, tudo o que sou,", "italico": false },
        { "texto": "O que vier a ser...", "italico": false },
        { "texto": "Vem de Ti, Senhor!", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Dependo de Ti, preciso de Ti", "italico": false },
        { "texto": "Sozinho, nada posso fazer.", "italico": false },
        { "texto": "Descanso em Ti, espero em Ti", "italico": false },
        { "texto": "Sozinho, nada posso fazer.", "italico": false }
      ],
      [
        { "texto": "Nunca me deixes esquecer", "italico": false },
        { "texto": "Que tudo o que tenho, tudo o que sou", "italico": false },
        { "texto": "O que vier a ser...", "italico": false },
        { "texto": "Vem de Ti, Senhor", "italico": false }
      ],
      [
        { "texto": "Tudo o que tenho... Tudo o que sou...", "italico": false },
        { "texto": "O que vier a ser...", "italico": false },
        { "texto": "Entrego a Ti Senhor!", "italico": false }
      ]
    ]
  },
  {
    "id": 92,
    "numero": 92,
    "titulo": "CALMO, SERENO E TRANQUILO",
    "estrofes": [
      [
        { "texto": "Calmo, sereno e tranquilo", "italico": false },
        { "texto": "Sinto descanso neste viver.", "italico": false },
        { "texto": "Isto, devo a um Amigo", "italico": false },
        { "texto": "Que só por Ele eu pude obter", "italico": false }
      ],
      [
        { "texto": "Ele é Jesus, meu Amigo,", "italico": true },
        { "texto": "Meu Senhor, o Salvador", "italico": true },
        { "texto": "Só por Ele ganhei a vida eterna", "italico": true },
        { "texto": "Com Deus, com Deus!", "italico": true }
      ],
      [
        { "texto": "Triste foi Sua história", "italico": false },
        { "texto": "Levado à cruz sem pecado algum,", "italico": false },
        { "texto": "Só porque me amou", "italico": false },
        { "texto": "Morreu por mim e não hesitou.", "italico": false }
      ]
    ]
  },
  {
    "id": 93,
    "numero": 93,
    "titulo": "SE ISSO NÃO FOR AMOR",
    "estrofes": [
      [
        { "texto": "Deixou o esplendor de Sua glória", "italico": false },
        { "texto": "Sabendo o destino aqui", "italico": false },
        { "texto": "Estava só e ferido no Gólgota", "italico": false },
        { "texto": "Para dar Sua vida por mim.", "italico": false }
      ],
      [
        { "texto": "Se isso não for amor, o oceano secou", "italico": true },
        { "texto": "Não há estrelas no céu,", "italico": true },
        { "texto": "As andorinhas não voam mais", "italico": true },
        { "texto": "Se isso não for amor, o céu não é real", "italico": true },
        { "texto": "Tudo perde o valor, se isto não for amor", "italico": true }
      ],
      [
        { "texto": "Mesmo na morte lembrou-se", "italico": false },
        { "texto": "Do ladrão que ao Seu lado estava", "italico": false },
        { "texto": "Com amor e ternura falou-lhe", "italico": false },
        { "texto": "\"No paraíso, Comigo, estarás.\"", "italico": false }
      ]
    ]
  },
  {
    "id": 94,
    "numero": 94,
    "titulo": "CONSAGRAÇÃO",
    "estrofes": [
      [
        { "texto": "Ao Rei dos reis consagro tudo o que sou", "italico": false },
        { "texto": "De gratos louvores transborda o meu coração", "italico": false },
        { "texto": "A minha vida eu entrego", "italico": false },
        { "texto": "Nas Tuas mãos, meu Senhor,", "italico": false },
        { "texto": "Pra Te exaltar com todo o meu amor", "italico": false },
        { "texto": "Eu Te louvarei conforme a Tua justiça", "italico": false },
        { "texto": "E cantarei louvores, pois Tu és altíssimo!", "italico": false }
      ],
      [
        { "texto": "Celebrarei a Ti, ó Deus, com meu viver", "italico": false },
        { "texto": "Cantarei e contarei as Tuas obras", "italico": false },
        { "texto": "Pois por Tuas mãos foram criados", "italico": false },
        { "texto": "Terra, céu e mar e todo ser que neles há", "italico": false }
      ],
      [
        { "texto": "Toda a terra celebra a Ti", "italico": true },
        { "texto": "Com cânticos de júbilo", "italico": true },
        { "texto": "Pois Tu és o Deus Criador!", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "A honra, a glória, a força", "italico": true },
        { "texto": "E o poder ao Rei Jesus!", "italico": true },
        { "texto": "E o louvor ao Rei Jesus!", "italico": true }
      ]
    ]
  },
  {
    "id": 95,
    "numero": 95,
    "titulo": "A TUA PALAVRA",
    "estrofes": [
      [
        { "texto": "A Tua palavra escondi", "italico": false },
        { "texto": "Guardada no meu coração", "italico": false },
        { "texto": "Pra eu não pecar contra Ti, Senhor", "italico": false },
        { "texto": "A Tua palavra escondi!", "italico": false }
      ],
      [
        { "texto": "Minhas vestes no sangue lavei", "italico": false },
        { "texto": "E das Tuas águas bebi", "italico": false },
        { "texto": "Pra ser uma oferta agradável a Ti", "italico": false },
        { "texto": "Minha vida a Ti consagrei.", "italico": false }
      ],
      [
        { "texto": "Meus dons e talentos são pra Te servir,", "italico": true },
        { "texto": "Meus dons preciosos são Seus", "italico": true },
        { "texto": "Não vejo razão na minha vida sem Ti", "italico": true },
        { "texto": "Tu és meu Senhor e meu Deus!", "italico": true }
      ],
      [
        { "texto": "Assim como o fogo refina o ouro", "italico": true },
        { "texto": "Vem Tua obra, em mim, completar", "italico": true },
        { "texto": "Até que o mundo possa ver", "italico": true },
        { "texto": "Tua glória em meu rosto brilhar!", "italico": true }
      ]
    ]
  },
  {
    "id": 96,
    "numero": 96,
    "titulo": "POR AMOR",
    "estrofes": [
      [
        { "texto": "Por amor Deus se revelou", "italico": false },
        { "texto": "Homem se tornou, neste mundo andou", "italico": false },
        { "texto": "Por amor, Ele aqui desceu", "italico": false },
        { "texto": "E aqui viveu com o pecador", "italico": false },
        { "texto": "Por amor, na história Cristo andou", "italico": false },
        { "texto": "E foi Seu amor que nos libertou", "italico": false },
        { "texto": "Por amor, numa cruz morreu", "italico": false },
        { "texto": "Pra salvar alguém como eu!", "italico": false }
      ],
      [
        { "texto": "Este amor, que Deus enviou", "italico": false },
        { "texto": "Já me alcançou, já me transformou", "italico": false },
        { "texto": "O Senhor, que Se deu por mim,", "italico": false },
        { "texto": "Sobre a cruz ficou só porque me amou", "italico": false },
        { "texto": "Tanto amor, não existe outro igual!", "italico": false },
        { "texto": "No Seu grande amor tenho paz real!", "italico": false },
        { "texto": "Deus é o amor que do céu desceu", "italico": false },
        { "texto": "Pra salvar alguém como eu! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 97,
    "numero": 97,
    "titulo": "CRISTO VEM ME BUSCAR",
    "estrofes": [
      [
        { "texto": "Cristo vem me buscar!", "italico": false },
        { "texto": "Para o céu me levará!", "italico": false },
        { "texto": "O cordeiro prometido voltara!", "italico": false }
      ],
      [
        { "texto": "Oh! Glória, aleluia!", "italico": true },
        { "texto": "Maranata, vem Jesus!", "italico": true },
        { "texto": "Sou liberto pelo sangue dessa cruz.", "italico": true },
        { "texto": "Tenho o Consolador", "italico": true },
        { "texto": "Sua glória e esplendor", "italico": true },
        { "texto": "Sou liberto pelo poder do Senhor.", "italico": true }
      ],
      [
        { "texto": "Ele manda atento estar", "italico": false },
        { "texto": "Vigiar e sempre orar", "italico": false },
        { "texto": "Para o toque da trombeta escutar.", "italico": false }
      ],
      [
        { "texto": "Oh! Que gozo vou sentir", "italico": false },
        { "texto": "Com os anjos a cantar", "italico": false },
        { "texto": "Pois com Cristo para sempre vou morar!", "italico": false }
      ]
    ]
  },
  {
    "id": 98,
    "numero": 98,
    "titulo": "DIGNO É O SENHOR",
    "estrofes": [
      [
        { "texto": "Pela cruz dou graças,", "italico": false },
        { "texto": "Pelo preço pago ali", "italico": false },
        { "texto": "Meu pecado suportou,", "italico": false },
        { "texto": "Por Seu amor, a graça recebi.", "italico": false },
        { "texto": "Pelo amor dou graças,", "italico": false },
        { "texto": "Pelos pregos em Suas mãos", "italico": false },
        { "texto": "Com Seu sangue me lavou", "italico": false },
        { "texto": "E me mostrou", "italico": false },
        { "texto": "Seu amor e Seu perdão!", "italico": false }
      ],
      [
        { "texto": "Digno é o Senhor, que no trono está", "italico": true },
        { "texto": "Coroai o Rei dos reis!", "italico": true },
        { "texto": "Pra sempre reinará!", "italico": true },
        { "texto": "Exaltado está, Cristo Salvador!", "italico": true },
        { "texto": "Cordeiro de Deus, Por mim morreu", "italico": true },
        { "texto": "Digno é o Senhor! (2x)", "italico": true }
      ]
    ]
  },
  {
    "id": 99,
    "numero": 99,
    "titulo": "NOS BRAÇOS DO MEU PAI",
    "estrofes": [
      [
        { "texto": "Não há lugar melhor com tamanha paz", "italico": false },
        { "texto": "Paz igual, eu nunca encontrei jamais", "italico": false },
        { "texto": "É o lugar do meu prazer,", "italico": false },
        { "texto": "Onde todo medo se vai", "italico": false },
        { "texto": "É o lugar do meu descanso, os braços do meu Pai.", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Os braços do meu Pai são os braços de Jesus", "italico": true },
        { "texto": "Quando foram estendidos, eu fui recebido lá na cruz (na cruz)", "italico": true },
        { "texto": "Nos braços do meu Pai!", "italico": true },
        { "texto": "Nos braços do meu Pai!", "italico": true }
      ],
      [
        { "texto": "Outrora eu era triste sem lugar pra onde ir", "italico": false },
        { "texto": "Mas o Pai com Seus braços de amor restaurou me o sorrir", "italico": false },
        { "texto": "Deu-me parte em Sua herança,", "italico": false },
        { "texto": "Vestimenta, vinho e pão", "italico": false },
        { "texto": "Porque tinha um lugar para mim no Seu coração.", "italico": false }
      ]
    ]
  },
  {
    "id": 100,
    "numero": 100,
    "titulo": "MEU UNIVERSO",
    "estrofes": [
      [
        { "texto": "Que sejas meu universo", "italico": false },
        { "texto": "Não quero dar-Te só um pouco do meu tempo", "italico": false },
        { "texto": "Não quero dar-Te um dia apenas da semana", "italico": false },
        { "texto": "Que sejas meu universo", "italico": false },
        { "texto": "Não quero dar-Te as palavras como gotas", "italico": false },
        { "texto": "Quero que saia um dilúvio de bênçãos da minha boca", "italico": false }
      ],
      [
        { "texto": "Que sejas meu universo", "italico": true },
        { "texto": "Que sejas tudo o que sinto e o que penso", "italico": true },
        { "texto": "Que, de manhã, seja o primeiro pensamento", "italico": true },
        { "texto": "E a luz em minha janela", "italico": true },
        { "texto": "Que sejas meu universo", "italico": true },
        { "texto": "Que enchas cada um dos meus pensamentos", "italico": true },
        { "texto": "Que a Tua presença e o Teu poder seja o alimento", "italico": true },
        { "texto": "Jesus, este e o meu desejo!", "italico": true }
      ],
      [
        { "texto": "Que sejas meu universo", "italico": false },
        { "texto": "Não quero dar-Te só uma parte dos meus anos", "italico": false },
        { "texto": "Te quero dono do meu tempo e dos meus planos", "italico": false },
        { "texto": "Que sejas meu universo", "italico": false },
        { "texto": "Não quero a minha vontade, quero agradar-Te", "italico": false },
        { "texto": "E cada sonho que há em mim, quero entregar-Te.", "italico": false }
      ]
    ]
  },
  {
    "id": 101,
    "numero": 101,
    "titulo": "SEGUNDO A VONTADE DE DEUS",
    "estrofes": [
      [
        { "texto": "Não é minha vontade, mas é Tua;", "italico": false },
        { "texto": "Não são meus os caminhos, mas são Teus.", "italico": false },
        { "texto": "Que eu comece uma nova caminhada,", "italico": false },
        { "texto": "Pensando segundo a vontade de Deus.", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Não a minha verdade,", "italico": true },
        { "texto": "mas a Tua verdade;", "italico": true },
        { "texto": "Não a minha vontade,", "italico": true },
        { "texto": "mas a Tua vontade;", "italico": true },
        { "texto": "Não os meus descaminhos,", "italico": true },
        { "texto": "mas os caminhos Teus", "italico": true },
        { "texto": "Que eu reflita e proclame aos amigos e ao mundo", "italico": true },
        { "texto": "Que só vivo segundo a vontade de Deus.", "italico": true },
        { "texto": "(2x)", "italico": true }
      ],
      [
        { "texto": "Seja a Tua palavra como a estrela", "italico": false },
        { "texto": "Que brilhou lá na pátria dos judeus,", "italico": false },
        { "texto": "E que eu fale de Cristo a todo o mundo,", "italico": false },
        { "texto": "Agindo segundo a vontade de Deus.", "italico": false },
        { "texto": "(2x)", "italico": false }
      ],
      [
        { "texto": "Que eu me torne uma benção permanente", "italico": false },
        { "texto": "Para mim, para os outros, para os meus", "italico": false },
        { "texto": "Vejam todos assim que sou um crente,", "italico": false },
        { "texto": "Vivendo segundo a vontade de Deus.", "italico": false },
        { "texto": "(2x)", "italico": false }
      ]
    ]
  },
  {
    "id": 102,
    "numero": 102,
    "titulo": "QUERO BUSCAR TEU CAMINHO",
    "estrofes": [
      [
        { "texto": "Quero buscar Teu caminho, Senhor", "italico": false },
        { "texto": "Quero contigo andar", "italico": false },
        { "texto": "Vivo o que eu não queria viver", "italico": false },
        { "texto": "Pois em mim justiça não há", "italico": false },
        { "texto": "Vem dirigir-me em todo o viver", "italico": false },
        { "texto": "Que Tua justiça se mostre em meu ser", "italico": false },
        { "texto": "Vida, caminho e verdade Tu és", "italico": false },
        { "texto": "Faz-me chegar aos Teus pés.", "italico": false }
      ],
      [
        { "texto": "Rendo-me a Ti, Senhor, em adoração", "italico": true },
        { "texto": "Tu sabes todos os meus maus caminhos", "italico": true },
        { "texto": "Pois diante de Ti estão", "italico": true },
        { "texto": "Rendo-me a Ti, Senhor", "italico": true },
        { "texto": "Dá-me o Teu perdão", "italico": true },
        { "texto": "Guia os meus passos por onde eu andar", "italico": true },
        { "texto": "Te peço em oração.", "italico": true }
      ],
      [
        { "texto": "Quero buscar Teu caminho, Senhor", "italico": false },
        { "texto": "Quero Teus passos seguir", "italico": false },
        { "texto": "Mesmo que seja difícil", "italico": false },
        { "texto": "Contigo irei andar até o fim", "italico": false },
        { "texto": "Sempre há barreiras para atravessar", "italico": false },
        { "texto": "Mas sei que Tu não me hás de deixar", "italico": false },
        { "texto": "Em todo tempo Tu és minha luz", "italico": false },
        { "texto": "Vou te seguir, ó Jesus.", "italico": false }
      ]
    ]
  },
  {
    "id": 103,
    "numero": 103,
    "titulo": "PERTO QUERO ESTAR",
    "estrofes": [
      [
        { "texto": "Perto quero estar,", "italico": false },
        { "texto": "Junto aos Teus pés", "italico": false },
        { "texto": "Pois prazer maior não há,", "italico": false },
        { "texto": "Que me render e Te adorar.", "italico": false }
      ],
      [
        { "texto": "Tudo que há em mim", "italico": false },
        { "texto": "Quero Te ofertar.", "italico": false },
        { "texto": "Mas ainda é pouco, eu sei", "italico": false },
        { "texto": "Se comparado ao que ganhei.", "italico": false }
      ],
      [
        { "texto": "Não sou apenas servo,", "italico": false },
        { "texto": "Teu amigo me tornei.", "italico": false }
      ],
      [
        { "texto": "Te louvarei", "italico": false },
        { "texto": "Não importam as circunstâncias.", "italico": false },
        { "texto": "Adorarei somente a Ti, Jesus.", "italico": false }
      ],
      [
        { "texto": "Mulheres: Perto quero estar...", "italico": false },
        { "texto": "Homens: Tudo que há em mim...", "italico": false },
        { "texto": "Todos: Não sou apenas servo...", "italico": false }
      ]
    ]
  },
  {
    "id": 104,
    "numero": 104,
    "titulo": "PAZ ÀS NAÇÕES",
    "estrofes": [
      [
        { "texto": "Há muito ainda por fazer", "italico": false },
        { "texto": "Neste mundo que o Senhor amou", "italico": false },
        { "texto": "Há tantos corações sofrendo, sem paz.", "italico": false }
      ],
      [
        { "texto": "É preciso anunciar", "italico": false },
        { "texto": "Não podemos nos calar", "italico": false },
        { "texto": "Pois temos a mensagem certa pra salvar!", "italico": false }
      ],
      [
        { "texto": "Salvar os que estão perdidos,", "italico": false },
        { "texto": "Mostrando o caminho, Jesus.", "italico": false },
        { "texto": "Salvar os que estão em trevas,", "italico": false },
        { "texto": "Fazer brilhar no mundo a luz", "italico": false },
        { "texto": "Salvar, soltando as amarras", "italico": false },
        { "texto": "Das falsas religiões", "italico": false },
        { "texto": "Mostrar que só em Jesus há paz", "italico": false },
        { "texto": "Para as nações.", "italico": false }
      ],
      [
        { "texto": "Anunciai paz as nações!", "italico": false },
        { "texto": "A paz que Cristo nos deixou!", "italico": false },
        { "texto": "Alcançando corações no mundo inteiro!", "italico": false }
      ]
    ]
  },
  {
    "id": 105,
    "numero": 105,
    "titulo": "COMO UM MANANCIAL",
    "estrofes": [
      [
        { "texto": "Homens:", "italico": false },
        { "texto": "Como a terra seca muitos vivem sem saber", "italico": false },
        { "texto": "Em escassez da água divinal", "italico": false },
        { "texto": "Homens sem esperança e sem Deus no seu viver", "italico": false },
        { "texto": "Nada produzem de valor eternal.", "italico": false }
      ],
      [
        { "texto": "Todos:", "italico": false },
        { "texto": "Como um manancial é quem confia no Senhor", "italico": false },
        { "texto": "E na Palavra Dele se compraz", "italico": false },
        { "texto": "Deus cobrirá de bênçãos sua vida por amor", "italico": false },
        { "texto": "Em provações terá consolo e paz.", "italico": false }
      ],
      [
        { "texto": "Pois a Palavra do Senhor é pura e leal", "italico": true },
        { "texto": "É água que sacia a sede espiritual", "italico": true },
        { "texto": "Jorremos bênçãos do Senhor", "italico": true },
        { "texto": "Anunciando sem temor", "italico": true },
        { "texto": "A pura Palavra como um manancial.", "italico": true }
      ],
      [
        { "texto": "Mulheres:", "italico": false },
        { "texto": "No interior do salvo há uma fonte a jorrar", "italico": false },
        { "texto": "Água da vida dada por Jesus", "italico": false },
        { "texto": "Quem beber desta água, sede nunca mais terá", "italico": false },
        { "texto": "Diz o Divino Mestre que nos conduz.", "italico": false }
      ],
      [
        { "texto": "Todos:", "italico": false },
        { "texto": "Sua Palavra é firme, permanente e veraz", "italico": false },
        { "texto": "Revelação do Espírito de Deus", "italico": false },
        { "texto": "Fonte de toda bênção que conforta e satisfaz", "italico": false },
        { "texto": "É a mensagem santa vinda do céu.", "italico": false }
      ],
      [
        { "texto": "Pois a Palavra do Senhor...", "italico": true }
      ]
    ]
  },
  {
    "id": 106,
    "numero": 106,
    "titulo": "CONFIO EM TI",
    "estrofes": [
      [
        { "texto": "Misteriosos feitos são as obras do meu Deus.", "italico": false },
        { "texto": "Caminha sobre o temporal.", "italico": false },
        { "texto": "O vento e o mar são seus.", "italico": false },
        { "texto": "Está no oculto a trabalhar,", "italico": false },
        { "texto": "mui hábil, sem falhar.", "italico": false },
        { "texto": "Os Seus desígnios faz valer.", "italico": false },
        { "texto": "Quão grande é seu poder!", "italico": false }
      ],
      [
        { "texto": "Meu Deus, confio em Ti. (2x)", "italico": false }
      ],
      [
        { "texto": "Oh, crentes que temeis a Deus,", "italico": false },
        { "texto": "só Nele confiai", "italico": false },
        { "texto": "Por trás das nuvens negras vem", "italico": false },
        { "texto": "o amor do vosso Pai", "italico": false },
        { "texto": "Não julgues pelo teu sentir,", "italico": false },
        { "texto": "Sua graça há de suster", "italico": false },
        { "texto": "Por trás do Seu penoso agir,", "italico": false },
        { "texto": "Sua face podes ver.", "italico": false }
      ],
      [
        { "texto": "Meu Deus, confio em Ti. (2x)", "italico": false },
        { "texto": "Se eu chorar, me entristecer", "italico": false },
        { "texto": "Em Tua paz continuarei", "italico": false },
        { "texto": "Confio em Ti.", "italico": false }
      ],
      [
        { "texto": "Propósitos vão se mostrar", "italico": false },
        { "texto": "em todo o acontecer", "italico": false },
        { "texto": "Sementes podem amargar,", "italico": false },
        { "texto": "pra doce fruto ser", "italico": false },
        { "texto": "O homem cego há de errar,", "italico": false },
        { "texto": "juízo vão é seu", "italico": false },
        { "texto": "Só Deus lhe pode interpretar", "italico": false },
        { "texto": "história que escreveu.", "italico": false }
      ],
      [
        { "texto": "Meu Deus, confio em Ti. (2x)", "italico": false },
        { "texto": "Se eu chorar, me entristecer", "italico": false },
        { "texto": "Em Tua paz continuarei", "italico": false },
        { "texto": "Confio em Ti.", "italico": false }
      ]
    ]
  },
  {
    "id": 107,
    "numero": 107,
    "titulo": "CRISTO SALVA",
    "estrofes": [
      [
        { "texto": "Conhecemos as boas novas: Cristo salva!", "italico": false },
        { "texto": "Espalhe essa mensagem de luz: Cristo salva!", "italico": false },
        { "texto": "Essa é nossa missão,", "italico": false },
        { "texto": "a verdade proclamar", "italico": false },
        { "texto": "Ide, pois, anunciai: Cristo salva!", "italico": false }
      ],
      [
        { "texto": "Proclame a Cristo: Ele vivo está!", "italico": true },
        { "texto": "A cruz e a tumba vagas já estão.", "italico": true },
        { "texto": "Ele salva o pecador e o leva a Deus", "italico": true },
        { "texto": "Anuncie a salvação!", "italico": true }
      ],
      [
        { "texto": "Conte a todos em alta voz: Cristo salva!", "italico": false },
        { "texto": "Sua morte em nosso favor: Cristo salva!", "italico": false },
        { "texto": "Ao cansado, oprimido,", "italico": false },
        { "texto": "a quem não tem esperança", "italico": false },
        { "texto": "Cante o verso triunfante: Cristo salva!", "italico": false }
      ],
      [
        { "texto": "Por todo o mundo a pregar: Cristo salva!", "italico": false },
        { "texto": "Leve alegria aos corações: Cristo salva!", "italico": false },
        { "texto": "Salvação e eterna paz, livre a todos pela graça", "italico": false },
        { "texto": "Esta é nossa vitória: Cristo salva!", "italico": false }
      ]
    ]
  },
  {
    "id": 108,
    "numero": 108,
    "titulo": "MAPA DA MINA",
    "estrofes": [
      [
        { "texto": "Todos buscam a felicidade,", "italico": false },
        { "texto": "Todos querem receber amor.", "italico": false },
        { "texto": "Todos buscam a prosperidade,", "italico": false },
        { "texto": "Um tesouro de grande valor.", "italico": false },
        { "texto": "Muitos acham que a riqueza do mundo", "italico": false },
        { "texto": "Pode lhes oferecer a paz", "italico": false },
        { "texto": "Estão em busca desse tal tesouro", "italico": false },
        { "texto": "Que nunca lhe satisfaz.", "italico": false }
      ],
      [
        { "texto": "Nós temos o Mapa da Mina", "italico": true },
        { "texto": "Que é a Palavra de Deus.", "italico": true },
        { "texto": "Ela nos mostra o melhor tesouro", "italico": true },
        { "texto": "Que é a salvação em Jesus.", "italico": true }
      ],
      [
        { "texto": "As crianças querem alegria", "italico": false },
        { "texto": "E os jovens querem diversão", "italico": false },
        { "texto": "Nossos pais trabalham todo dia", "italico": false },
        { "texto": "Nesse tesouro põe seu coração.", "italico": false },
        { "texto": "E assim caminham nessa vida,", "italico": false },
        { "texto": "Estão em busca de algo mais,", "italico": false },
        { "texto": "Mas, não conhecem o Mapa da Mina", "italico": false },
        { "texto": "Que oferece a verdadeira paz.", "italico": false }
      ],
      [
        { "texto": "Nós temos o Mapa da Mina...", "italico": false }
      ]
    ]
  },
  {
    "id": 109,
    "numero": 109,
    "titulo": "CONFIANÇA",
    "estrofes": [
      [
        { "texto": "Sei que observas o meu coração", "italico": false },
        { "texto": "Por vezes aflito está", "italico": false },
        { "texto": "São circunstâncias tão adversas", "italico": false },
        { "texto": "Mas Tu já conheces, Senhor.", "italico": false }
      ],
      [
        { "texto": "Por isso entrego", "italico": false },
        { "texto": "Tudo em Tuas mãos", "italico": false },
        { "texto": "Confio somente em Ti.", "italico": false },
        { "texto": "O melhor, sim, eu sei", "italico": false },
        { "texto": "Preparado está!", "italico": false }
      ],
      [
        { "texto": "Tua palavra jamais mudará", "italico": false },
        { "texto": "Como posso Te agradecer", "italico": false },
        { "texto": "Sei que cuidas de mim", "italico": false },
        { "texto": "Infinito em amor", "italico": false },
        { "texto": "Sempre Te bendirei, Meu Senhor!", "italico": false }
      ]
    ]
  }
];