import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Rooms from '../components/Rooms';

const RoomsPage = () => (
	<Routes>
		<Route path="/" element={<Rooms />} />
		<Route path=":id" element={<Rooms />} />
	</Routes>
);

const MemoizedRoomsPage = memo(RoomsPage);
export default MemoizedRoomsPage;
