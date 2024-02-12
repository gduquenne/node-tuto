const customFetch = async ({
	url,
	method = 'GET',
	datas = {},
	contentType = 'application/json',
}) => {
	const init = {
		method,
		mode: 'cors',
		headers: {
			'Content-Type': contentType,
		},
	};
	// const jwt = store.getState().auth.jwt;
	// if (!!jwt) init['headers']['Authorization'] = `Bearer ${jwt}`;
	if (method !== 'GET') init['body'] = JSON.stringify(datas);
	return fetch(url, init)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res);
		})
		.then(datas => datas)
		.catch(error => error.json().then(e => Promise.reject(e)));
};

export default customFetch;
