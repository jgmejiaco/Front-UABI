import axios, { AxiosResponse } from 'axios';
import {
	IProjectResponse,
	IProjectsResponse,
} from '../utils/interfaces/components.interfaces';

const URI_SERVICE_UABI = 'http://127.0.0.1:3001/';

export const getProjects = async (): Promise<IProjectsResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}projects/lists`;
		let res: AxiosResponse<IProjectsResponse> = await axios.get(URI);
		console.log(res);

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const getProject = async (
	id: string
): Promise<IProjectResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}projects`;
		let res: AxiosResponse<IProjectResponse> = await axios.get(URI, {
			params: { id },
		});

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const createProject = async (
	name: string,
	description: string
): Promise<IProjectResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}projects`;
		let res: AxiosResponse<IProjectResponse> = await axios.post(URI, {
			name,
			description,
		});

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};
