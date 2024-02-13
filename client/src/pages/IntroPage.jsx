import React from 'react';

const IntroPage = () => {
	return <div>IntroPage</div>;
};

const MemoizedIntroPage = React.memo(IntroPage);
export default MemoizedIntroPage;
