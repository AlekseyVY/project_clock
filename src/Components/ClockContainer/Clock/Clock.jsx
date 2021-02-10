import {clockHelper} from "../../../helpers/helper";


const Clock = ({ hours, minutes, seconds}) => {

  return (
    <div>
      <div>
        {clockHelper(hours)}
      </div>
      <div>
        {clockHelper(minutes)}
      </div>
      <div>
        {clockHelper(seconds)}
      </div>
    </div>
  )
}



export default Clock;