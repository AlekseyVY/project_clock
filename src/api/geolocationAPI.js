import axios from "axios";


export const getGeoLocation = async () => {
  let resp = await axios.get(`https://freegeoip.app/${'json'}/`)
  return resp.data
}