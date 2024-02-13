import { memo } from 'react';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { Github, LinkedIn } from '../assets/svg';

function NavigationTabs() {
	const navigate = useNavigate();
	const tabs = [
		{ name: 'Intro', href: '/intro' },
		{ name: 'About', href: '/about' },
		{ name: 'Experiences', href: '/experiences' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className="flex w-full shadow-xl font-mono font-bold fixed top-0 left-0">
			<div className="flex w-1/4  items-center">
				<div className="text-slate ml-8 mr-6 pointer-events-none select-none stack">
					<span style={{ '--index': 0 }}>Grégoire Duquenne</span>
					<span style={{ '--index': 1 }}>Grégoire Duquenne</span>
					<span style={{ '--index': 2 }}>Grégoire Duquenne</span>
				</div>
				<a
					href="https://github.com/gduquenne"
					target="_blank"
					className="mx-4">
					<Github />
				</a>
				<a
					href="https://www.linkedin.com/in/gr%C3%A9goire-duquenne-295027163/"
					target="_blank"
					className="mx-4">
					<LinkedIn />
				</a>
			</div>
			<Tab.Group>
				<Tab.List className="flex w-3/4 justify-end p-1 space-x-1 mr-5">
					{tabs.map(tab => (
						<Tab
							key={tab.name}
							className={({ selected }) =>
								`outline-none select-none w-1/6 py-2.5 text-sm leading-5 rounded-lg text-slate
                                transition ease-in-out duration-500 
                                focus-visible:ring-transparent 
                                focus-visible:ring-0 
                                ${
									selected
										? 'text-white scale-105'
										: 'hover:bg-white/[0.12] ' +
										  'hover:text-white hover:shadow-inner ' +
										  'hover:scale-105'
								}`
							}
							onClick={() => navigate(tab.href)}>
							{tab.name}
						</Tab>
					))}
				</Tab.List>
			</Tab.Group>
		</header>
	);
}

const MemoizedNavigationTabs = memo(NavigationTabs);
export default MemoizedNavigationTabs;
