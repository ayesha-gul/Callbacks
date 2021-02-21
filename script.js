console.log('BeFore prepare food')

function prepareFood(callback) {
    setTimeout(()=> {
        console.log('prepare food')
        callback('fooD is Ready');
    },20)
  
}

function prepareFrenchToast(callback) {
    setTimeout(()=> {
        console.log('prepare French Toast')
        callback('fooD is Ready');
    },20)
  
}

function preparCoffee(callback) {
    setTimeout(()=> {
        console.log('prepare Coffee')
        callback('coffee is Ready');
    },20)
  
}

function myCallBack(value) {
    console.log('Food callback =' , value)
    prepareFrenchToast(FrenchToastCallBack);
}

function FrenchToastCallBack(value) {
    console.log('French toast callback=' , value)
    preparCoffee(CoffeeCallBack);
}


function CoffeeCallBack(value) {
    console.log('Coffee callback=' , value)
}


prepareFood(myCallBack);


console.log('After prepare FooD Dinner is ready')