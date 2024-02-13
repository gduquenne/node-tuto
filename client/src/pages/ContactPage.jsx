import { memo, useEffect } from 'react';

const ContactPage = () => {
	console.log('hello');
	useEffect(() => {
		console.log('hello');
	}, []);
	return (
		<div className="flex justify-center items-center w-full h-full">
			<h1>Bonjour</h1>
		</div>
	);
};

const MemoizedContactPage = memo(ContactPage);
export default MemoizedContactPage;
