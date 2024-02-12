import { memo } from 'react';

const AboutPage = () => {
	return <h1>About</h1>;
};

const MemoizedAboutPage = memo(AboutPage);
export default MemoizedAboutPage;
