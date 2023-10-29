import type { IUsersEntity } from '@/shared/interface/user-entity.interface';

export type TUserStore = {
    token: string | null;
    user: IUsersEntity | null;
    clients: Array<any>;
}