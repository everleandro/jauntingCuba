export default {
  servicesList: [
    {
      title: 'Havana Day Tour',
      imgUrl: require('@/assets/home/trendy_tours/havana.png'),
      description:
        'This is a fully customizable private day tour in Havana for you and your group. You will discover Havana’s treasures and culture with the assistance of specialized local guiding service. Both Modern and Old Havana will be within easy reach with both driving and walking portions. ',
      id: 1
    },
    {
      title: 'Viñales & Soroa Day Tour',
      imgUrl: require('@/assets/home/trendy_tours/vinnales.png'),
      description:
        'Enjoy a one-day trip to the westernmost province in Cuba. Together with a stop at Soroa, Viñales will offer you a unique and memorable nature experience. ',
      id: 2
    },
    {
      title: 'Hemingway Tour',
      imgUrl: require('@/assets/home/trendy_tours/hemingway.png'),
      description:
        'We take you on a journey following in Ernest Hemingway’s footsteps in Havana. Places where he lived and other spots he used to frequent will be toured during driving and walking portions. ',
      id: 3
    }
  ],
  offerHash: {},
  offerHashEmpty: true,
  services() {
    return this.servicesList
  },
  bestOffers() {
    const clone = [...this.servicesList]
    return clone
      .sort(function(a, b) {
        return b.rating - a.rating
      })
      .slice(0, 3)
  },
  offerById(id) {
    if (this.offerHashEmpty) {
      for (let i = 0, len = this.servicesList.length; i < len; i++) {
        this.offerHash[this.servicesList[i].id] = this.servicesList[i]
      }
      this.offerHashEmpty = false
    }
    return this.offerHash[id]
  }
}
