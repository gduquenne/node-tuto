import { memo } from 'react';

const HomePage = () => {
	return <h1></h1>;
};

const MemoizedHomePage = memo(HomePage);
export default MemoizedHomePage;
