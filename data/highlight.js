export default {
  subtitle: {
    en: 'subtitle',
    es: 'subtitulo'
  },
  list: {
    en: [
      {
        subtitle:
          'Latin American Rome where the past can be peeled off in layers',
        name: 'Old Havana',
        imgUrl: require('@/assets/highlights/old-havana.png'),
        id: 1
      },
      {
        subtitle: 'Cuba’s Gaudi-style masterpiece of tile work',
        name: 'Fusterland ',
        imgUrl: require('@/assets/highlights/fusterland.png'),
        id: 2
      },
      {
        subtitle: 'Century-old tradition of worldwide-known best cigars',
        name: 'Tobacco Factory',
        imgUrl: require('@/assets/highlights/tobacco.png'),
        id: 3
      },
      {
        subtitle: 'World-famous Las Vegas-style nightlife cabaret in Havana',
        name: 'Tropicana',
        imgUrl: require('@/assets/highlights/tropicana.png'),
        id: 4
      }
    ],
    es: [
      {
        subtitle: 'Lorem ipsum dolor sit amet, cons',
        name: 'Habana Vieja',
        imgUrl: require('@/assets/highlights/old-havana.png'),
        id: 1
      },
      {
        subtitle: 'Lorem ipsum dolor sit amet, cons',
        name: 'Fusterlandia',
        imgUrl: require('@/assets/highlights/fusterland.png'),
        id: 2
      },
      {
        subtitle: 'Lorem ipsum dolor sit amet, cons',
        name: 'Fabrica de Tabaco',
        imgUrl: require('@/assets/highlights/tobacco.png'),
        id: 3
      },
      {
        subtitle: 'Lorem ipsum dolor sit amet, cons',
        name: 'Tropicana',
        imgUrl: require('@/assets/highlights/tropicana.png'),
        id: 4
      }
    ]
  },
  getHighLight(locale) {
    return this.list[locale]
  },
  getSubtitle(locale) {
    return this.subtitle[locale]
  }
}
