
const fieldCodes = [
    '#fff', '#003399', '#222222', '#8B0000', '#35682D'
]; /*white, blue, black, red, green*/
const cardTypes = [
    'Terre',
    'Creature',
    'Incantesimi',
    'Artefatti',
    'Instantanei',
    'Stregonerie',
    'Creature Leggendarie'
];
const cardNames=[];
const editions = {
    'BL': {
        edition: 'Boolean',
        rarity: 'blue'
    },
    'SP': {
        edition: 'Special',
        rarity: 'red'
    }
};
const powerValues = [1, 2, 3, 4, 5];
const cards=[{
    cardName: 'Grizzly Bears',
    cost: {
      genericCostNumber: 1,
      costFields: [
        fieldCodes[4]
      ]
    },
  
    picture: 'img.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',
  
    editionType: editions['BL'],
  
    description: 'Don\'t try to outrun one of Dominia\'s Grizzlies; it\'ll catch you, knock you down, and eat you. Of course, you could run up a tree.',
    story: 'In that case you\'ll get a nice view before it knocks the tree down and eats you.',
  
    score: {
      power: 2,
      toughness: 2
    }
  
    },
    {
      cardName: 'Sviluppatore guerriero',
      cost: {
        genericCostNumber: 3,
        costFields: [
          fieldCodes[3]
        ]
      },
  
      picture: 'img.png',
      cardType: cardTypes[1],
      cardObject: 'Bear',
  
      editionType: editions['BL'],
  
      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
  
      score: {
        power: 5,
        toughness: 3
      }

    },

    {
        cardName: 'Serafino dei Soli',
        cost: {
            genericCostNumber: 5,
            costFields: [
            fieldCodes[4]
            ]
        },

        picture: 'img.png',
        cardType: cardTypes[1],
        cardObject: 'Angel',

        editionType: editions['SP'],

        description: 'Indistruttibile',
        story: 'Il danno e gli effetti che dicono "distruggi" non distruggono questa creatura. Se la sua costituzione è pari o inferiore a 0, viene comunque messa nel cimitero del suo proprietario',

        score: {
        power: 1,
        toughness: 1
        }
    },

    {
        cardName: 'Yarok, il Profanato',
        cost: {
        genericCostNumber: 2,
        costFields: [
            fieldCodes[2]
        ]
        },
    
        picture: 'img.png',
        cardType: cardTypes[6],
        cardObject: 'Orrore Elementale',
    
        editionType: editions['BL'],
    
        description: 'Tocco letale, legame vitale',
        story: 'Se un permanente che entra nel campo di battaglia fa innescare un\'abilità innescata di un permanente che controlli, quell\'abilità si innesca una volta in più.',
    
        score: {
        power: 3,
        toughness: 5
        }
    },

    {
        cardName: 'Il Primo Tramutante',
        cost: {
            genericCostNumber: 5,
            costFields: [
            fieldCodes[1]
            ]
        },

        picture: 'img.png',
        cardType: cardTypes[6],
        cardObject: 'Tramutante',

        editionType: editions['SP'],

        description: 'Cascata',
        story: 'Quando lanci questa magia, esilia carte dalla cima del tuo grimorio finché non esili una carta non terra che costa meno. Puoi lanciarla senza pagare il suo costo di mana. Metti le carte esiliate in fondo al tuo grimorio in ordine casuale.',

        score: {
            power: 4,
            toughness: 7
        }
    },

    {
        cardName: 'Drago del Loch',
        cost: {
        genericCostNumber: 2,
        costFields: [
            fieldCodes[0]
        ]
        },

        picture: 'img.png',
        cardType: cardTypes[1],
        cardObject: 'Drago',

        editionType: editions['SP'],

        description: 'Volare',
        story: 'Ogniqualvolta il Drago del Loch entra nel campo di battaglia o attacca, puoi scartare una carta. Se lo fai, pesca una carta.',

        score: {
        power: 3,
        toughness: 2
        }
    },

    {
        cardName: 'Bandire con la Lama',
        cost: {
        genericCostNumber: 3,
        costFields: [
            fieldCodes[1]
        ]
        },
    
        picture: 'img/300.png',
        cardType: cardTypes[4],
        cardObject: 'Istantaneo',
    
        editionType: editions['SP'],
    
        description: 'Esilia una creatura bersaglio con forza pari o superiore a 4.',
        story: 'La Viandante ha viaggiato in molte direzioni. La sua lama solo in una.',
    
        score: {
        power: 0,
        toughness: 0
        }
    },

    {
        cardName: 'Forgia Mistica',
        cost: {
            genericCostNumber: 4,
            costFields: [
            fieldCodes[0]
            ]
        },
    
        picture: 'img.png',
        cardType: cardTypes[3],
        cardObject: 'Artefatto',
    
        editionType: editions['SP'],
    
        description: 'Puoi guardare la prima carta del tuo grimorio in qualsiasi momento. Puoi lanciare la prima carta del tuo grimorio se è una carta artefatto o una carta non terra incolore.',
        story: 'Paga 1 punto vita: esilia la prima carta del tuo grimorio.',
    
        score: {
            power: 0,
            toughness: 0
        }
    },

    {
        cardName: 'Rifugio di Lupusalix',
        cost: {
            genericCostNumber: 1,
            costFields: [
            fieldCodes[3]
            ]
        },
    
        picture: 'img.png',
        cardType: cardTypes[2],
        cardObject: 'Aura',
    
        editionType: editions['SP'],
    
        description: 'Ogniqualvolta la terra incantata viene TAPpata per attingere mana, il suo controllore aggiunge un albero addizionale.',
        story: 'Sacrifica il Rifugio di Lupusalix: crea una pedina creatura Lupo 2/2 verde. Attiva questa abilità solo durante il tuo turno.',
    
        score: {
            power: 0,
            toughness: 0
        }
    }
  ];
  function filterByPower(powerValue, array){
      return array.filter((element)=>{
          return element.score.power===powerValue
      })
  };
  function filterByType(cardTypeValue, array){
      return array.filter((element)=>{
          return element.cardType===cardTypeValue
      })
  };
  function filterByName(cardNameValue, array){
    return array.filter((element)=>{
        return element.cardName===cardNameValue
    })
};
  function render(DOMElement, array){
    const cardListHTMLElement=document.getElementById(DOMElement);
    cardListHTMLElement.innerHTML='';
    array.forEach((element)=>{
        cardListHTMLElement.innerHTML+=`<li>
        <div class="card-container" style="background-color:${element.cost.costFields}">
        <h2>${element.cardName}</h2>
        <span>${element.cost.genericCostNumber}</span>
        <div class="img"></div>
        <h3>${element.cardType}</h3>
        <div class="description-container">
            <p>${element.description}</p><br>
            <p>${element.story}</p>
        </div>
        <h4>Potere: ${element.score.power}
        </div>
        </li>`
    })
  };
  function renderSelect(DOMElement, array){
    const select=document.getElementById(DOMElement);
    array.forEach((element)=>{
        select.innerHTML+=`<option value="${element}">${element}</option>`
    })
  };
  function filteredNames(array, newArray){
    array.forEach((element)=>{
      newArray.push(element.cardName);
      return newArray
    })
  };
  render('cards-list', cards);
  renderSelect('power-select', powerValues);
  renderSelect('card-type-select', cardTypes);
  filteredNames(cards, cardNames);
  renderSelect('card-name-select', cardNames);
  $('#power-select').change(function(){
    const selectValue=$(this).val();
      if(isNaN(selectValue)){
        render('cards-list', cards);
        $('#all-cards-txt').removeClass('hide');
        $('#filtered-by-power-txt').addClass('hide')
      }else{
        const selectValue=parseInt($(this).val());
        const filteredArray=filterByPower(selectValue, cards);
        render('cards-list', filteredArray);
        $('#all-cards-txt, #filtered-by-type-txt').addClass('hide');
        $('#filtered-by-power-txt').removeClass('hide')
      }
  });
  $('#card-type-select').change(function(){
    const selectValue=$(this).val();
    const filteredArray=filterByType(selectValue, cards);
    if(!cardTypes.includes(selectValue)){
      render('cards-list', cards);
      $('#all-cards-txt').removeClass('hide');
      $('#filtered-by-type-txt').addClass('hide')
    }else{
      render('cards-list', filteredArray);
      $('#all-cards-txt, #filtered-by-power-txt, #filtered-by-name-txt').addClass('hide');
      $('#filtered-by-type-txt').removeClass('hide')
    }
  });
  $('#card-name-select').change(function(){
    const selectValue=$(this).val();
    // const filteredArray=filterByType(selectValue, cards);
    const filteredArray=filterByName(selectValue, cards);
    if(!cardNames.includes(selectValue)){
      render('cards-list', cards);
      $('#all-cards-txt').removeClass('hide');
      $('#filtered-by-type-txt, #filtered-by-name-txt, #filtered-by-power-txt').addClass('hide')
    }else{
      render('cards-list', filteredArray);
      $('#all-cards-txt, #filtered-by-power-txt, #filtered-by-type-txt').addClass('hide');
      $('#filtered-by-name-txt').removeClass('hide')
    }
  });
  $('#reset-button button').click(function(){
    location.reload();
  });