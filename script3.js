console.log('BeFore prepare food')


function prepareFood(data) {
    let promise = new Promise((resolve,reject) =>{
      setTimeout(()=>{
          if(data !==2) {
            console.log('prepare food')
            resolve('food is ready')

          }
          else {
              reject('promises FaileD');
          }
      },10)



      

    });
    return promise;

}


function prepareFrenchToast() {
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('prepare FrenchToast')
            resolve('frenchToast is ready')
        },10);

    });
    return promise;
}

function prepareCoffee() {
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('prepare coffee')
            resolve('coffe is ready')
        },10);

    });
    return promise;

}
async function startProcess() {

    let foodValue = await prepareFood();
    console.log("food promise =" , foodValue)
    let frenchValue = await prepareFrenchToast();
    console.log("food promise =" , frenchValue)
    let coffeeValue = await prepareCoffee();
    console.log("food promise =" , coffeeValue)
     
    
 
}
startProcess();  


/* let promise=prepareFood(2);
//console.log('promise =' promise)
promise.then((value)=>{
    console.log('Food  promise =' ,value)
    return prepareFrenchToast();
})
.then((FrenchValue)=>{
    console.log('frenchToast promise =', FrenchValue)
    return prepareCoffee();

})
.then((CoffeeValue)=>{
    console.log('Coffee promise =' ,CoffeeValue)
})

.catch((error)=>{
    console.log('FooD promise Error =' ,error)

});  */
console.log('After prpare Food dinner is ready in promise')