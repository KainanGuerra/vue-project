import type { TSendRequestToBackEndWithToken } from '@/shared/types/send-request-to-back.type';
import axios from 'axios'

export class MakeRequest {


 async WithToken({route, token}: TSendRequestToBackEndWithToken) {
  return await axios.create({
    baseURL: 'localhost:3000/api/v1' + route,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });

}
}
