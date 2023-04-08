import { Route, Routes } from 'react-router-dom'
import pages from './utils/pages'

import Layout from './components/site-layout/Layout'
import Home from './components/pages/Home'
import Reservations from './components/pages/Reservations'
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
					element={ <UnderConstruction /> }
				/>
			</Routes>
		</Layout>
	);
}

export default App;
