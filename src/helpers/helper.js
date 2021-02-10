


export const clockHelper = (number) => {
  let render = number.toString()
  if(render.length < 2){
    render = '0' + render
  }
  return render
}

