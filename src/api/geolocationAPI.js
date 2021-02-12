import axios from "axios";


export const getGeoLocation = async () => {
  let resp = await axios.get(`https://freegeoip.app/${'json'}/`)
  console.log(resp.data)
  return resp.data
}