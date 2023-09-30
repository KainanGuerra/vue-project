import { TSendRequestToBackEndWithToken } from '@/shared/types/general/send-request-to-back.type';
import axios from 'axios'

export class MakeRequest {


 async WithToken({route, token}: TSendRequestToBackEndWithToken) {
  try{
    const response = await axios.create({
      baseURL: 'localhost:3000/api/v1' + route,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    console.log(response)
    return response
  }catch(err){
    console.log(err)
  }

}
}
