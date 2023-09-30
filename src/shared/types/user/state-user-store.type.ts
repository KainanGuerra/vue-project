import { IUsersEntity } from "@/shared/interface/user-entity.interface";

export type TUserStore = {
    token: string;
    user: IUsersEntity;
}