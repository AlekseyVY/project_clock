import dayIcon from '../resources/desktop/icon-sun.svg';
import nightIcon from '../resources/desktop/icon-moon.svg'


export const clockHelper = (number) => {
  let render = number.toString()
  if(render.length < 2){
    render = '0' + render
  }
  return render
}

export const timeOfTheDayHelper = (hour) => {
  const greet = {
    morning: 'Good morning',
    afternoon: "Good afternoon",
    evening: "Good evening"
  }
  let obj = {}
  if(hour > 5 && hour < 12) {
    obj.greet = greet.morning
  }
  else if(hour >= 12 && hour <= 18) {
    obj.greet = greet.afternoon
  } else {
    obj.greet = greet.evening
  }
  if(hour > 5 && hour <= 18) {
    obj.icon = dayIcon
    obj.isDay = true
  } else {
    obj.icon = nightIcon
    obj.isDay = false
  }
  return obj
}