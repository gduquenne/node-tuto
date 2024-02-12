import { memo } from 'react';

const ContactPage = () => {
	return <h1>Contact</h1>;
};

const MemoizedContactPage = memo(ContactPage);
export default MemoizedContactPage;
