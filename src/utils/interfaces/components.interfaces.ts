export interface ICardProps {
	name: string;
	path: string;
}

export interface IItemProject {
	id: string;
	name: string;
	creationDate: string;
}

export interface IUpdatedValues {
	oldest?: IUpdatedValues | object;
	lastest?: IUpdatedValues | object;
	new: IUpdatedValues | object;
}

export interface IAuditTrail {
	created_by: string;
	created_on: string;
	updated_by: string | null;
	updated_on: string | null;
	updated_values: IUpdatedValues | null;
}

export interface IProjectAttributes {
	id: string;
	name: string;
	description: string;
	audit_trail: IAuditTrail;
	status: number;
}

export interface IProjectsResponse {
	data: IProjectAttributes[];
	message: string;
}
export interface IProjectResponse {
	data: IProjectAttributes;
	message: string;
}
