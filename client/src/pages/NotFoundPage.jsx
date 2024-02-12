import { memo } from 'react';

const NotFoundPage = () => {
	return <h1>404 Page Not Found!</h1>;
};

const MemoizedNotFoundPage = memo(NotFoundPage);
export default MemoizedNotFoundPage;
