import { memo, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
	HomePage,
	RoomsPage,
	AboutPage,
	ContactPage,
	NotFoundPage,
} from './pages';
import { Tab } from '@headlessui/react';

const App = () => {
	const [currentTab, setCurrentTab] = useState('home');

	return (
		<Tab.Group as="div" className="flex flex-col h-screen">
			<div
				className="fixed top-0 left-0 right-0 shadow-lg"
				style={{ backgroundColor: '#0a192f' }}>
				<Tab.List as="div" className="flex justify-center">
					<Tab as="div" className="px-6 py-2">
						<Link
							to="/"
							onClick={() => setCurrentTab('home')}
							className={`${
								currentTab === 'home'
									? 'text-color-tab-active'
									: 'text-color-tab-inactive'
							}`}>
							Home
						</Link>
					</Tab>
					<Tab as="div" className="px-6 py-2">
						<Link
							to="/rooms"
							onClick={() => setCurrentTab('rooms')}
							className={`${
								currentTab === 'rooms'
									? 'text-color-tab-active'
									: 'text-color-tab-inactive'
							}`}>
							Rooms
						</Link>
					</Tab>
					<Tab as="div" className="px-6 py-2">
						<Link
							to="/about"
							onClick={() => setCurrentTab('about')}
							className={`${
								currentTab === 'about'
									? 'text-color-tab-active'
									: 'text-color-tab-inactive'
							}`}>
							About
						</Link>
					</Tab>
					<Tab as="div" className="px-6 py-2">
						<Link
							to="/contact"
							onClick={() => setCurrentTab('contact')}
							className={`${
								currentTab === 'contact'
									? 'text-color-tab-active'
									: 'text-color-tab-inactive'
							}`}>
							Contact
						</Link>
					</Tab>
				</Tab.List>
			</div>
			<div
				className="bg-cyan-100 max-h-svh min-h-svh"
				style={{ backgroundColor: '#0a192f' }}>
				<Tab.Panels as="div" className="flex-1">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/rooms" element={<RoomsPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Tab.Panels>
			</div>
		</Tab.Group>
	);
};

const MemoizedApp = memo(App);
export default MemoizedApp;
