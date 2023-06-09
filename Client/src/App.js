import { Route, Routes } from 'react-router-dom'
import pages from './utils/pages'
import Layout from './components/site-layout/Layout'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Reservations from './components/pages/Reservations'
import ReservationSubmit from './components/pages/Reservations/ReservationSubmit'
import ConfirmedReservation from './components/pages/Reservations/ConfirmedReservation'
import PreviousReservations from './components/pages/Reservations/PreviousReservations'
import NotFound from './components/pages/NotFound'
import UnderConstruction from './components/pages/UnderConstruction'

function App() {
	return (
		<Layout>
			<Routes>
				<Route
					path={ pages.get('home').path }
					element={ <Home /> }
				/>
				<Route 
					path={ pages.get('about').path }
					element={ <About /> }
				/>
				<Route 
					path={ pages.get('menu').path }
					element={ <UnderConstruction /> }
				/>
				<Route 
					path={ pages.get('reservations').path }
					element={ <Reservations /> }
				/>
				<Route 
					path={ pages.get('reservationSubmit').path }
					element={ <ReservationSubmit /> }
				/>
				<Route 
					path={ pages.get('confirmedReservation').path }
					element={ <ConfirmedReservation /> }
				/>
				<Route 
					path={ pages.get('previousReservations').path }
					element={ <PreviousReservations /> }
				/>
				<Route 
					path={ pages.get('orderOnline').path }
					element={ <UnderConstruction /> }
				/>
				<Route 
					path={ pages.get('login').path }
					element={ <UnderConstruction /> }
				/>
				<Route 
					path="*"
					element={ <NotFound /> }
				/>
			</Routes>
		</Layout>
	);
}

export default App;
