import axios from 'axios';

export const createAxiosInstance = (baseURL: string, contentTypeHeader: boolean) => {
	const instance = axios.create({ baseURL });

	instance.interceptors.request.use(
		async (config) => {
			try {
				// await Authenticator.Instance.attachAuthHeader(config.headers);

				if (contentTypeHeader) config.headers['Content-Type'] = 'application/json';
			} catch (error) {
				console.error('Error during token refresh or header attachment:', error);
			}

			return config;
		},
		(error) => Promise.reject(error),
	);

	return instance;
};
