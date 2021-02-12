import axios from "axios";


export const getTime = async () => {
  let resp = await axios.get('https://worldtimeapi.org/api/ip')
  return resp.data
}