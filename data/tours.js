export default {
  tours: {
    summary: {
      en:
        'We endeavor to make your trip an unforgettable experience. Our excursions are specially designed to help you enjoy the island with a historical, cultural and patrimonial approach. We will give you the opportunity to get to know Cuba from the inside in a more personal way. ',
      es:
        'We endeavor to make your trip an unforgettable experience. Our excursions are specially designed to help you enjoy the island with a historical, cultural and patrimonial approach. We will give you the opportunity to get to know Cuba from the inside in a more personal way. '
    },

    en: [
      {
        subtitle: '(3hrs/6hrs)',
        trendy: true,
        title: 'Havana Day Tour ',
        imgUrl: require('@/assets/tours/havana.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'This is a fully customizable private day tour in Havana for you and your group. You will discover Havana’s treasures and culture with the assistance of specialized local guiding service. Both Modern and Old Havana will be within easy reach with both driving and walking portions. ',
        description:
          'After 500 years Havana continues to amaze both foreign visitors and locals. Being considered to be the political, economic and cultural center of the island, Havana possesses a vintage ambiance hard to match. The piecing back together of Old Havana has been the greatest achievement in Cuba over the last 50 years. Cobbled streets, beautifully restored architectural gems together with street characters and performers will take you back in time to evoke ghosts of onetime sugar barons and saber-rattling pirates. This tour includes visits to both Old and Modern Havana, covering the highlights of the city. Learning about history, arquitecture, restoration, social work and, different topics related to the Cuban society such as religion, housing, economy, among many others will be the core of this excursion.',
        id: 1,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 9.00 am',
            sub_action: []
          },
          {
            action: 'Driving tour of Modern Havana',
            sub_action: [
              '•Central Park –the first statue of Jose Marti to be erected in Cuba',
              '•Grand Theater of Havana Alicia Alonso –considered to be one of the architectural icons of the city and the seat of ballet and opera  ',
              '•Capitol Building –distinctive landmark in the city ',
              '•Centro Havana neighborhood –diverse range of vibrant colors in every building façades.',
              '•University of Havana –considered to be the oldest and the most prestigious university in Cuba ',
              '•Christopher Columbus Cemetery',
              '•Forest of Havana',
              '•Vedado & Miramar neighborhoods',
              '•Malecon',
              '•Fusterland'
            ]
          },
          {
            action:
              'Walking tour in Old Havana –declared a UNESCO World Heritage Site in 1982',
            sub_action: [
              '•Arms’ Square –the oldest square in Havana where the foundation place, the first fortress built and, government palaces can be found',
              '•St. Francis of Assisi’s Square – the St. Francis of Assisi Basilica has the highest bell tower in the city',
              '•Old Square –mansion-style houses with wide arches, beautiful stain glasses and columns leap to your eye. ',
              '•Cathedral Square –beautiful Cuban baroque style in all the buildings façades ',
              '•Ambos Mundos Hotel –place where Ernest Hemingway stayed during the 30’s ',
              '•Floridita & Bodeguita del Medio bars –Hemingway’s favorite spots for Mojitos and Daiquiris '
            ]
          },
          {
            action: 'Free time for lunch',
            sub_action: ['places and prices according to client preference']
          },
          {
            action: 'Free time for shopping',
            sub_action: ['souvenirs, cigars, rum, coffee']
          },
          {
            action: 'Free time for shopping',
            sub_action: ['souvenirs, cigars, rum, coffee']
          },
          {
            action: 'Return to your hotel or accommodation ',
            sub_action: []
          }
        ]
      },
      {
        subtitle: '(5hrs)',
        title: 'Hemingway Tour',
        trendy: true,
        imgUrl: require('@/assets/tours/hemingway.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'We take you on a journey following in Ernest Hemingway’s footsteps in Havana. Places where he lived and other spots he used to frequent will be toured during driving and walking portions.',
        description:
          'Ernest Hemingway was a writer who excelled at breaking all the rules.   Although he was the most famous member of the post-World War I ‘lost generation’, Hemingway proved that a man is able to find himself as a big-game hunter, a bullfighter, and a devil-may-care guerrilla warrior at the same time. For the man known as "Papa", the human imagination had no limits. After spending his last 22 years in Cuba, the Nobel prize-winner gave Cubans eccentric and picaresque stories to tell of. Almost 60 years after his suicide, visitors can go back over Hemingway’s footsteps in Havana and immerse in a rich ambiance of nostalgia. ',
        id: 2,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 9.00 am',
            sub_action: []
          },
          {
            action:
              'Visit to La Vigia Farmhouse –former residence of the American writer and first museum devoted to him',
            sub_action: ['(you must pay an entrance fee)']
          },
          {
            action:
              'Walking tour of Cojimar fishing town –place of inspiration for ‘The Old Man and the Sea’',
            sub_action: []
          },
          {
            action:
              'Visit to Hemingway’s monument –homage paid by his fishermen friends',
            sub_action: []
          },
          {
            action:
              'Visit to La Terraza Restaurant –temple of the author and the late captain of his boat, Gregorio Fuentes',
            sub_action: [
              'you must pay an entrance fee which includes the cocktail of the house'
            ]
          },
          {
            action: 'Visit to Floridita Bar-restaurant –cradle of the Daiquiri',
            sub_action: ['souvenirs, cigars, rum, coffee']
          },
          {
            action:
              'Visit to Ambos Mundos Hotel –place where Hemingway stayed in the 30’s',
            sub_action: []
          },
          {
            action:
              'Visit to Bodeguita del Medio Bar-restaurant –Hemingway’s favorite spot for Mojitos',
            sub_action: []
          },
          {
            action: 'Return to your hotel or accommodation ',
            sub_action: []
          }
        ]
      },
      {
        subtitle: '(5hrs)',
        title: 'Religion Tour',
        imgUrl: require('@/assets/tours/religion.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'You will acquire a comprehensive knowledge of the wide spectrum of religions practiced in Cuba and the emergence of syncretism. Both driving and walking portions will allow you to visit places exemplifying each type of religion.',
        description:
          'Eclectic not only in architecture but also in religion, Cuba is a mixture of a complex skein of beliefs that have been coexisting since the 18th century. A place in which everyone believes in their own way and where everybody feels comfortable with any kind of religious practices chosen by others, discrimination doesn’t make sense. Going from Catholicism brought by the Spanish to Santeria as part of the Afro-Cuban religion, visitors can also find Islam, Judaism and Spiritualism being practiced in Cuba.  Getting closer to how all these religious practices work allow you to understand better the island.',
        id: 3,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 9.00 am',
            sub_action: []
          },
          {
            action: 'Visit to Regla Museum –devoted to Afro-Cuban religion',
            sub_action: []
          },
          {
            action:
              'Visit to Sanctuary of the Virgen of Regla –the only black saint in Catholicism ',
            sub_action: []
          },
          {
            action:
              'Visit to Callejon de Hamel –unofficial HQ of Havana’s Afro-Cuban community',
            sub_action: []
          },
          {
            action:
              'Visit to Las Mercedes Church –Catholic saint which has Obatala as counterpart in Afro-Cuban religion',
            sub_action: [
              'you must pay an entrance fee which includes the cocktail of the house'
            ]
          },
          {
            action:
              'Visit to St. Nicholas Greek Orthodox Cathedral –consecrated in a ceremony attended by Fidel Castro in 2004',
            sub_action: ['souvenirs, cigars, rum, coffee']
          },
          {
            action:
              'Visit to Religious Art Museum at St. Francis of Assisi’s Basilica',
            sub_action: []
          },
          {
            action: 'Visit to Abdallah Mosque',
            sub_action: []
          },
          {
            action: 'Visit to one of the Synagogues',
            sub_action: []
          },
          {
            action: 'Visit to a Protestant Church',
            sub_action: []
          },
          {
            action:
              'Visit to Holy Heart of Jesus Church –one of the best neo-gothic style buildings in the city',
            sub_action: []
          },
          {
            action: 'Visit to Cathedral –best example of Cuban baroque style',
            sub_action: []
          },
          {
            action: 'Return to your hotel or accommodation',
            sub_action: []
          }
        ]
      },
      {
        subtitle: '(5hrs)',
        title: 'Architecture & City Expansion Tour',
        imgUrl: require('@/assets/tours/architecture.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'You will appreciate the rich architectural variety of Havana and learn about how the city expanded, how the different styles adapt to the Cuban conditions and, what the current situation of arquitecture in Cuba is.',
        description:
          'Eclectic not only in architecture but also in religion, Cuba is a mixture of a complex skein of beliefs that have been coexisting since the 18th century. A place in which everyone believes in their own way and where everybody feels comfortable with any kind of religious practices chosen by others, discrimination doesn’t make sense. Going from Catholicism brought by the Spanish to Santeria as part of the Afro-Cuban religion, visitors can also find Islam, Judaism and Spiritualism being practiced in Cuba.  Getting closer to how all these religious practices work allow you to understand better the island.',
        id: 4,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 9.00 am',
            sub_action: []
          },
          {
            action:
              'Driving through Paseo del Prado, Reina and Carlos III streets –examples of eclecticism, Art Deco, Art Nouveau, Neoclassicism, Neo-gothic style',
            sub_action: []
          },
          {
            action:
              'Driving through Vedado neighborhood –University of Havana, Revolution Square, Paseo street, Focsa and Lopez Serrano buildings',
            sub_action: []
          },
          {
            action:
              'Visit to the Casa de La Amistad –former residence of Catalina Laza and example of 20th century residential Art Deco',
            sub_action: []
          },
          {
            action:
              'Driving through Miramar quarter –mansions from the 40’s and 50’s',
            sub_action: []
          },
          {
            action: 'Driving along Malecon ',
            sub_action: []
          },
          {
            action: 'Visit to El Templete –foundational place of the city',
            sub_action: []
          },
          {
            action:
              'Visit to the Castle of the Royal Guard –first type of architecture in Havana: military architecture',
            sub_action: []
          },
          {
            action:
              'Visit to the Palace of the Capitan General –1700’s Cuban Baroque style',
            sub_action: []
          },
          {
            action:
              'Visit to the Lonja del Comercio –one of the most outstanding eclectic building from the beginning of the 1900’s',
            sub_action: []
          },
          {
            action:
              'Visit to Saint Francis of Assisi’s Basilica –1700’s Cuban Baroque style',
            sub_action: []
          },
          {
            action:
              'Visit to Cueto Palace –one of the best examples of Art Nouveau',
            sub_action: []
          },
          {
            action: 'Return to your hotel or accommodation',
            sub_action: []
          }
        ]
      },
      {
        subtitle: '(3hrs/5hrs)',
        title: 'Art Tour',
        imgUrl: require('@/assets/tours/art.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'You will step into the fascinating world of Cuban art. Museum of Fine Arts, art galleries and, workshops in the Historical Center will delight you with excellent pieces of art. ',
        description:
          'Havana is not only the political and economic capital of Cuba, but also the cultural one. It’s a place in which art can be found in the most unlikely places, where artists mingle with pedestrians in any corner, where valuable pieces of art are displayed publicly on the streets. Going from detailed portraits and almost-photographed landscapes up to the most complex abstract pieces, Cuban art is eclectically vibrating. Come and enjoy a city that stepped up into the echelon of the world’s great art cities.',
        id: 5,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 9.00 am',
            sub_action: []
          },
          {
            action:
              'Visit to the Fine Arts Museum –one of the most important collections of paintings and sculptures of Latin America',
            sub_action: ['you must pay an entrance fee']
          },
          {
            action: 'Visit to the Engraving Workshop at Callejon del Chorro',
            sub_action: []
          },
          {
            action: 'Visit the Hand-made Paper Workshop',
            sub_action: []
          },
          {
            action: 'Visit to art galleries',
            sub_action: []
          },
          {
            action: 'Visit to Fusterland (5hrs) ',
            sub_action: []
          }
        ]
      },
      {
        subtitle: '3hrs',
        title: 'Habano Tour ',
        imgUrl: require('@/assets/tours/tabaco.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'You will discover the secrets of a tradition that has distinguished Cuba for centuries as the land of the world’s finest cigars',
        description:
          'While talking about Cuba, cigars are a must. Being tobacco considered to be one of the main staples of the Cuban economy, it treasures up a tradition that goes more than 500 years back. Indigenous of the island, Cuban tobacco has a unique aroma, color, texture and flavor.  A perfect combination of soil, weather and humidity turn Cuba into the land of the world’s finest cigars. Don’t miss the chance to take home the most famous Cuban souvenir –a must-have for every person visiting the island.',
        id: 6,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 9.00 am',
            sub_action: []
          },
          {
            action: 'Tour in a Cigar Factory',
            sub_action: []
          },
          {
            action: 'Visit to the Cigar’s Museum',
            sub_action: []
          },
          {
            action:
              'Visit to the Cigar Smoker’s Hotel –where you can meeting with the roller of the house and tasting of a Habano',
            sub_action: []
          },
          {
            action: 'Shopping opportunity at specialized cigar stores',
            sub_action: []
          },
          {
            action: 'Return to your hotel or accommodation',
            sub_action: []
          }
        ]
      },
      {
        subtitle: 'whole-day trip',
        title: 'Viñales & Soroa Day Tour',
        trendy: true,
        imgUrl: require('@/assets/tours/vinnales.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'Enjoy a one-day trip to the westernmost province in Cuba. Together with a stop at Soroa, Viñales will offer you a unique and memorable nature experience. ',
        description:
          'While visiting Cuba, Viñales is a must. Amazing limestone formations, green landscapes and rural culture are part of the pure and relaxing atmosphere this UNESCO World Heritage Site allows you to enjoy. Known for being the epicenter of the tobacco production of the island, Viñales invites you to discover another way to feel Cuba.',
        id: 7,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 8.00 am',
            sub_action: []
          },
          {
            action:
              'Visit to Soroa –you can enjoy the Garden of Orquids or the Waterfall',
            sub_action: ['you must pay an entrance fee in both places']
          },
          {
            action: 'Continue driving to Viñales Valley',
            sub_action: []
          },
          {
            action:
              'Visit to ‘Los Jazmines’ viewpoint –best view of the Valley and excellent spot for pictures',
            sub_action: []
          },
          {
            action:
              'Visit to a tobacco farm – you will receive a comprehensive explanation about tobacco by the hand of a farmer',
            sub_action: []
          },
          {
            action:
              'Enjoy a horseback riding (optional) –you will go through the heart of the Valley',
            sub_action: ['you must pay the service']
          },
          {
            action: 'Visit to the town of Viñales',
            sub_action: []
          },
          {
            action: 'Free time for lunch',
            sub_action: ['places and prices according to client preference']
          },
          {
            action:
              'Visit to the Cave of the Indian –a ride in a boat will take you out of the cave ',
            sub_action: ['you must pay an entrance fee']
          },
          {
            action: 'Visit to the Prehistory Mural',
            sub_action: []
          },
          {
            action: 'Return to your hotel or accommodation in Havana',
            sub_action: []
          }
        ]
      },
      {
        subtitle: 'whole-day trip',
        title: 'Las Terrazas & Soroa Day Tour (whole-day trip)',
        imgUrl: require('@/assets/tours/terrazas.png'),
        services: [
          { tooltip_text: 'hotel', icon: 'mdi-taxi' },
          { tooltip_text: 'walk', icon: 'mdi-walk' },
          { tooltip_text: 'Lunch', icon: 'mdi-food' }
        ],
        summary:
          'Enjoy a one-day trip to Havana’s neighboring province. Together with a stop at Soroa, Las Terrazas will allow you to enjoy nature in a rural community.',
        description:
          'Built in 1971, Las Terrazas is considered to be one of the biggest successful environmental and social projects. Known for being in the past one of the poorest areas in the country, this self-sustained community will allow you learn how economic and social growth can be effectively combined with environmental conservation. Green landscapes, well-integrated architecture and, rural culture are some of the elements this Natural Reserve has to show.',
        id: 8,
        program: [
          {
            action: 'Pick up at your hotel or accommodation at 8.00 am',
            sub_action: []
          },
          {
            action:
              'Visit to Soroa –you can enjoy the Garden of Orquids or the Waterfall',
            sub_action: ['you must pay an entrance fee in both places']
          },
          {
            action: 'Continue driving to Las Terrazas',
            sub_action: []
          },
          {
            action: 'Visit to the community',
            sub_action: []
          },
          {
            action: 'Visit to Buena Vista coffee plantations',
            sub_action: []
          },
          {
            action:
              'Visit to the Moka Hotel –well-integrated architecture into nature where trees go through the roof',
            sub_action: []
          },
          {
            action: 'Free time for lunch ',
            sub_action: ['places and prices according to client preference']
          },
          {
            action: 'Visit to an artist studio',
            sub_action: []
          },
          {
            action: 'Visit to Maria’s Café ',
            sub_action: []
          },
          {
            action: 'Visit to San Juan river –where you can enjoy a swim',
            sub_action: []
          },
          {
            action: 'Return to your hotel or accommodation in Havana',
            sub_action: []
          }
        ]
      }
    ],

    es: [
      {
        subtitle: 'January 13th - 18th, 2020',
        title: 'Havana International Jazz Plaza Festival 2020',
        imgUrl: require('@/assets/tours/places/havana-day.png'),
        rating: 5,
        description:
          'JauntingCuba invites you to the most popular and important jazz music event in Cuba! The Havana International Jazz Plaza Festival –created in 1978 by the famed Cuban musician Bobby Carcasses– will be taking place in Havana from January 13th through 18th, 2020. Enjoy Cuba to the beat of the music! Get jazzy in Havana!',
        id: 1,
        program: [
          {
            day: 'DÍA 1 (14 noviembre)',
            sub_action: ['- Alojamiento en el hotel Tryp Habana Libre']
          },
          {
            day: 'DÍA 2 (14 noviembre)',
            sub_action: [
              '- Alojamiento en el hotel Tryp Habana Libre',
              '- Alojamiento en el hotel Tryp Habana Libre',
              '- Alojamiento en el hotel Tryp Habana Libre'
            ]
          },
          {
            day: 'DÍA 3 (14 noviembre)',
            sub_action: [
              '- Alojamiento en el hotel Tryp Habana Libre',
              '- Alojamiento en el hotel Tryp Habana Libre'
            ]
          }
        ]
      }
    ]
  },
  offerHash: {},
  offerHashEmpty: true,
  locale: '',
  getTours(locale) {
    return this.tours[locale]
  },
  getTrendy(locale) {
    return this.tours[locale].filter((tour) => tour.trendy)
  },
  getTourSummary(locale) {
    return this.tours.summary[locale]
  },

  tourById(id, locale) {
    if (this.offerHashEmpty || locale !== this.locale) {
      this.locale = locale
      for (let i = 0, len = this.tours[locale].length; i < len; i++) {
        this.offerHash[this.tours[locale][i].id] = this.tours[locale][i]
      }
      this.offerHashEmpty = false
    }
    return this.offerHash[id]
  }
}
