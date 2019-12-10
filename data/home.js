export default {
  header_title: {
    en: 'Welcome to JauntingCuba',
    es: 'Bienvenido a JauntingCuba'
  },
  header_subtitle_1: {
    en: 'We can show you what others only tell you',
    es: 'Podemos mostrarte lo que otros solo te dicen'
  },
  header_subtitle_2: {
    en: 'FEEL CUBA OUR WAY',
    es: 'SIENTE CUBA A NUESTRA MANERA'
  },
  getHeaderInfo(locale) {
    return {
      header_title: this.header_title[locale],
      header_subtitle_1: this.header_subtitle_1[locale],
      header_subtitle_2: this.header_subtitle_2[locale]
    }
  }
}
