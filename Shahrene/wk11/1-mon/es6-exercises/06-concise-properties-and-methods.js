// Fill in the following function with a single object literal with the format
// {make: "honda", model: "civic", drive: Function}, where the drive function
// logs "vroom" to the console

function car(make, model, options){
  return {
    make,
    model,
    options,

    ['make' + make]: true,


  }
  return car;
}

let auto = car("honda","civic")
function drive(){
  console.log('vroom')
}
// returns {make: "honda", model: "civic", drive: Function}
auto.drive()
// logs "vroom" to the console
