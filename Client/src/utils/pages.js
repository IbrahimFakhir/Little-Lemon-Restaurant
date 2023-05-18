const pages = new Map()

pages.set('home', { name: 'Home', path: '/', anchorable: true })

pages.set('about', { name: 'About', path: '/about', anchorable: true })

pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true })

pages.set('reservations', { name: 'Reservations', path: '/reservations', anchorable: true })
pages.set('reservationSubmit', { name: 'Reservation Submit', path: '/reservation-submit', anchorable: false })
pages.set('confirmedReservation', { name: 'Confirmed Reservation', path: '/confirmed-reservation', anchorable: false })

pages.set('orderOnline', { name: 'Order Online', path: '/order-online', anchorable: true })

pages.set('login', { name: 'Login', path: '/login', anchorable: true })

export default pages;
