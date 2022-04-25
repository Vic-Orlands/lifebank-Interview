import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './utils/header/Header';

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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
