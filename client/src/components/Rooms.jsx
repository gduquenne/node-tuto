import { useEffect, useState, useRef, memo } from 'react';
import fetch from '../core/fetch';

const Rooms = () => {
	const isFirstRender = useRef(true);
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			console.log('fetching data');
			const fetchData = async () => {
				fetch({
					url: '/api/rooms',
				})
					.then(data => setRooms(data))
					.catch(() => {
						console.log('error');
					});
			};
			fetchData();
		}
	}, []);

	return (
		<div>
			<h1>Rooms</h1>
			<ul>
				{rooms.map((room, index) => (
					<li key={index}>{room.name}</li>
				))}
			</ul>
		</div>
	);
};
const MemoizedRooms = memo(Rooms);
export default MemoizedRooms;
