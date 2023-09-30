import { ERolesToUsers } from "../enums/roles-to-users.enum";

export interface IUsersEntity {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    document?: string;
    role?: ERolesToUsers;
    masked_document?: string;
    masked_email?: string;
    sales_count?: number;
}