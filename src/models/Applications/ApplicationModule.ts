export class ApplicationModel {
    name!: string;
    description!: string;
    id!: number;
}

export class EnvironmentModel {
    name!: string;
    description!: string;
    id!: number;
    applicationId!: number;
}

export class AppSettingModel {
    name!: string;
    description!: string;
    id!: number;
    environmentId!: number;
}

export default ApplicationModel;
