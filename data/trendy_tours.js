export default {
  servicesList: [
    {
      title: 'Havana Day Tour',
      imgUrl: require('@/assets/tours/places/havana-day.png'),
      description:
        'After 500 years Havana continues to amaze both foreign visitors and locals. Being considered to be the political, economic and cultural center of the island, Havana possesses a vintage ambiance hard to match. With a UNESCO- declared-World-Heritage-Site historical center and onetime wealthy mansions from the 40’s and 50’s, Havana is a fascinating mixture of folklore and glamour. Let the city take you back in time.  ',
      id: 1
    },
    {
      title: 'Viñales & Soroa Day Tour',
      imgUrl: require('@/assets/tours/places/havana-day.png'),
      description:
        'While visiting Cuba, Viñales is a must. Amazing limestone formations, green landscapes and rural culture are part of the pure and relaxing atmosphere this UNESCO World Heritage site allows you to enjoy. Known for being the epicenter of the tobacco production of the island, Viñales invites you to discover another way to feel Cuba.',
      id: 2
    },
    {
      title: 'Hemingway Tour',
      imgUrl: require('@/assets/tours/places/havana-day.png'),
      description:
        'Ernest Hemingway was a writer who excelled at breaking all the rules. For the man known as "Papa", the human imagination had no limits. After spending his last 22 years in Cuba, the Nobel prize-winner gave Cubans eccentric and picaresque stories to tell of. Almost 60 years after his suicide, visitors can go back over Hemingway’s footsteps in Havana and immerse in a rich ambiance of nostalgia.',
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
