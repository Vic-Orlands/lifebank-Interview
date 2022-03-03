import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './utils/header/Header';
// import Footer from './utils/footer/Footer';
// import AddUser from './components/AddUser';

const Home = lazy(() => import('./components/Home/Home'));

function App() {
	return (
		<div>
			<Router>
				<Header />

				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<p> Loading Homepage...</p>}>
								<Home />
							</Suspense>
						}
					/>

					{/* <Route path="/addUser" element={AddUser} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
