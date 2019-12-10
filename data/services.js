export default {
  services: {
    en: [
      {
        title: 'Personalized assistance',
        subtitle: 'Ready to help you anytime, any moment (24h)',
        sub_action:
          'We will provide you with advice and support throughout your vacation. We will share first-hand advice, tips and information about Cuba as well as answer any questions you might have. We will help you make the most of your trip. Available for you 24/7. ',
        image: require('assets/services/contact_us.svg'),
        icon: 'mdi-phone-message',
        id: 1
      },
      {
        title: 'Custom-made itineraries',
        subtitle: 'We plan your trip for you…the way you like it',
        sub_action:
          'Dream vacations are not one-size-fits-all. We can design a day-by-day program tailored to meet your needs, taking care of every single detail. We give you the opportunity to go over the design as many times as you consider necessary to ensure that your adventure will be perfect. We will find the best routes and schedules based on your preferences and interests. ',
        image: require('assets/services/events.svg'),
        icon: 'mdi-calendar',
        id: 2
      },
      {
        title: 'Specialized guided tours',
        subtitle: 'Enjoy Havana without going around in circles',
        sub_action:
          'We offer the opportunity to get to know Cuba with personalized guiding service. Sites of high historical, cultural, natural and, patrimonial value are integrated into our excursions. We make sure that you get the real Cuba by the hand of our specialized guides.  ',
        image: require('assets/services/directions.svg'),
        icon: 'mdi-walk',
        id: 3
      },
      {
        title: 'Transfer from/to the airport',
        subtitle: 'Reliable taxi services ready to pick you up',
        sub_action:
          'We guarantee a safety and relaxed transfer from/to any city or airport. Comfortable and air conditioned cars of different sizes –both modern and classic ones– are available to your liking. Punctuality is of the essence.  ',
        image: require('assets/services/taxi.svg'),
        icon: 'mdi-taxi',
        id: 4
      },
      {
        title: 'Bookings',
        subtitle: 'So many places, so many options… we pick for you',
        sub_action:
          'We find for you the best places to eat, to have fun and to get closer to the Cuban culture. Our recommendations are based on our own experiences. Shows, restaurants, night clubs are just within easy reach of our call.',
        image: require('assets/services/pick-for-you.svg'),
        icon: ' mdi-checkbox-marked-circle-outline',
        id: 5
      },
      {
        title: 'Lodging',
        subtitle: 'So many places, so many options… we pick for you',
        sub_action: 'not implement yet',
        image: require('assets/services/sleep_analysis.svg'),
        icon: ' mdi-hotel',
        id: 6
      }
    ],
    es: [
      {
        title: 'Asistencia personalizada ',
        subtitle:
          'Listos para ayudarte a cualquier hora y en todo momento (24h)',
        sub_action:
          'Te brindaremos asesoramiento y apoyo durante tus vacaciones. Compartiremos consejos de primera mano e información sobre Cuba, así como también responderemos cualquier pregunta que puedas tener. Te ayudaremos a aprovechar al máximo tu viaje. Disponible para ti 24/7.',
        image: require('assets/services/contact_us.svg'),
        icon: 'mdi-phone-message',
        id: 1
      },
      {
        title: 'Itinerarios personalizados',
        subtitle: 'Planificamos tu viaje para ti...como a ti te gusta',
        sub_action:
          'Las vacaciones de ensueño no tienen formula universal. Podemos diseñar un programa diario adaptado a tus necesidades, cuidando cada detalle. Te brindamos la oportunidad de repasar el diseño tantas veces como lo consideret necesario para garantizar que su aventura sea perfecta. Encontraremos las mejores rutas y horarios según tus preferencias e intereses.',
        image: require('assets/services/events.svg'),
        icon: 'mdi-calendar',
        id: 2
      },
      {
        title: 'Excursiones especializadas guiadas',
        subtitle: 'Disfruta la Habana sin dar vueltas en círculos',
        sub_action:
          'Ofrecemos la oportunidad de conocer Cuba con un servicio de guía personalizado. Sitios de alto valor histórico, cultural, natural y patrimonial están integrados en nuestras excursiones. Nos aseguramos de que experimentes la Cuba real de la mano de nuestros guías especializados.',
        image: require('assets/services/directions.svg'),
        icon: 'mdi-walk',
        id: 3
      },
      {
        title: 'Traslado desde y hacia el aeropuerto',
        subtitle: 'Servicios de taxi confiables listos para recogerte',
        sub_action:
          '\n' +
          'Te garantizamos un traslado seguro y relajado desde y hacia cualquier ciudad o aeropuerto. Autos de diferentes tamaños, cómodos y con aire acondicionado, tanto modernos como clásicos, están disponibles para tu gusto. La puntualidad es esencial\n',
        image: require('assets/services/taxi.svg'),
        icon: 'mdi-taxi',
        id: 4
      },
      {
        title: 'Bookings',
        subtitle: 'So many places, so many options… we pick for you',
        sub_action:
          'Encontramos para ti los mejores lugares para comer, divertirte y acercarte a la cultura cubana. Nuestras recomendaciones se basan en nuestras propias experiencias. Espectáculos, restaurantes, clubes nocturnos están al alcance de nuestra llamada',
        image: require('assets/services/pick-for-you.svg'),
        icon: ' mdi-checkbox-marked-circle-outline',
        id: 5
      },
      {
        title: 'Reservas',
        subtitle: 'Tantos lugares, tantas opciones... Elegimos para ti',
        sub_action: 'no implementado todavia',
        image: require('assets/services/sleep_analysis.svg'),
        icon: ' mdi-hotel',
        id: 6
      }
    ]
  },
  getServices(locale) {
    return this.services[locale]
  }
}
