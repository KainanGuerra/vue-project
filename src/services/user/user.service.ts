import type { MakeRequest } from "@/shared/utils/services/axios-instance";

export class UserService {
    constructor(
        private readonly makeRequest: MakeRequest,
    )
    {}

    async login(token: string){
        const route = 'auth' 
        const request = {
            route,
            token,
        }
        return await this.makeRequest.WithToken(request)
    }
}