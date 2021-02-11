import axios from "axios";


export const getCitation = async () => {
  let resp = await axios.get('https://api.quotable.io/random')
  return resp.data
}