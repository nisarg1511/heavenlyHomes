export interface IUser {
    id?: string;
    user_id: string;
    user_name: string;
    email: string
}
export interface IProfessional extends IUser {
    phone_number: number;
    profile_picture: string;
    mobile_number: number;
    company_name: string;
    company_description: string;
    profession: string;
    linkedIn: string;
    instagram: string;
    facebook: string;
    whatsapp: string;
    profile_photo: string;
    images?: [];
    address: {
        street: string,
        locality: string,
        city: string,
        pincode: number
    };
}
export interface IUserProfile {
    user_id: string;
    user_name: string;
    phone_number?: number;
    company_name?: string;
    profession?: string;
    social_media?: [
        { app_name: string, link: string }
    ];
    profile_photo?: string;
    projects?: string[];
    address?: {
        street: string,
        locality: string,
        city: string
    };
}
