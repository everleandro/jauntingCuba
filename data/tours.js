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
        title: 'Havana Day Tour ',
        imgUrl: require('@/assets/tours/places/havana-day.png'),
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
