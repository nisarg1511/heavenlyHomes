import { USER_ROLES } from "./user.enum";

export interface IUser {
    id?: string;
    user_id: string;
    user_name: string;
    roles: USER_ROLES;
    permissions: IUserPermissions;
}
export interface IProfessional extends IUser {
    profession: string;
    social_media: [
        { app_name: string, link: string }
    ];
    profile_photo: string;
    projects: string[];
    address: {
        street_no: string,
        locality: string,
        city: string
    };
}

export interface IUserPermissions {
    admin_access?: boolean;
    professional_access: boolean;
    client_access: boolean;
}