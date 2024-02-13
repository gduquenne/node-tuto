import { memo } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
	ExperiencesPage,
	AboutPage,
	ContactPage,
	NotFoundPage,
	IntroPage,
} from './pages';
import { NavigationTabs } from './components';

const App = () => {
	return (
		<Router>
			<div className="bg-light-navy min-h-screen">
				<NavigationTabs />
				<Routes>
					<Route path="/intro" component={IntroPage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/experiences" component={ExperiencesPage} />
					<Route path="/contact" component={ContactPage} />
					<Route path="/*" component={NotFoundPage} />
					<Route path="/" exact component={IntroPage} />
				</Routes>
			</div>
		</Router>
	);
};

const MemoizedApp = memo(App);
export default MemoizedApp;
