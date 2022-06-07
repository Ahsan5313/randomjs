const students = {


   '101' :  {

        id : 101,
        name : 'Ahsanul Huq',
        email : 'ahsanuhuq17@gmail.com'
    },

   '102': {

        id : 102,
        name : 'Bulbul Ahmed',
        email : 'bulbul@gmail.com'
    },

    '103': {

        id : 103,
        name : 'Saiful Islam',
        email : 'saiful@gmail.com'
    }
};

// Let's see how to create an object element;

const newAddedDate = {

    id : 104,
    name : 'Kafi Ahmde',
    email : 'kafi@gmail.com'
}
students[newAddedDate['id']]  = newAddedDate;

const idToBeUpdate = '102';
const updateDate = {

    name : 'Kafi Ahmed',
   // email : 'kafi@gmail.com'
}
students[idToBeUpdate] = {

    ...students[idToBeUpdate],
    ...updateDate

}

delete students[idToBeUpdate]

// Object.keys(students).forEach((key) => {

//     const student = students[key];
//     console.log( student.id, student.name, student.email)
// })

Object.values(students).forEach((value) => {

    console.log(value.id, value.name, value.email)
})



function awake(name){

    console.log(`${name} is awake`)
}
function eat(name, time){

    console.log(`${name} is eating in the ${time}`)
}
function study(name){

    console.log(`${name} is studying`)
}
function GoSchool(name){

    console.log(`${name} is going at school`)
}
function backHome(name, where){

    console.log(`${name} is back from ${where}`)
}
function sleep(name){

    console.log(`${name} is gonna sleep`)
}
function goOffice(name, where){

    console.log(`${name} is gonna ${where}`)
}
function work(name, country){

    console.log(`${name} is doing job in ${country}`)

}

// Function for student lifecycle
// params : name;
// awake : name;
// eat : name , time;
// study : name;
// GoSchool : name;
// backHome : name;
// sleep : name;

function studentLifeCycle(name){

    awake(name);
    eat(name, 'breakfast');
    study(name);
    GoSchool(name);
    backHome(name, 'school');
    eat(name, 'dinner')
    sleep(name)
}


studentLifeCycle('Ahsanul Huq');
console.log('------')
studentLifeCycle('Bulbul Ahamed')

// Function for job holder
// params : name;
// awake : name;
// eat : name , time;
// goOffice : name;
// backHome : name;
// eat : name, time;
// sleep : name;

function jobHolder(name){

    awake(name);
    eat(name, 'breakfast');;
    goOffice(name, 'at office');
    backHome(name, 'office');
    eat(name, 'dinner')
    sleep(name)

}
console.log('------')
jobHolder('Ahsanul Huq');
console.log('------')
jobHolder('Saiful Islam')

// Function for remote job holder;
// params : name;
// awake : name;
// eat : name , time;
// work : name, 'where';
// eat : name, time;
// sleep : name;

function remoteJobHolder(name){

    awake(name);
    eat(name, 'breakfast');;
    work(name, 'Canada')
    eat(name, 'dinner')
    sleep(name)

}

console.log('------');
remoteJobHolder('AhsanuL Huq');
console.log('------');
remoteJobHolder('Anas');

function sum(a, b){

    return a + b
}

function sub(a, b){

    return a - b
}

function mul(a, b){

    return a * b
}

const a = 10;
const b = 20;

const r3 = Math.abs(mul(sum(a, b), sub(a, b)));


console.log(r3)

function num(a, b){

    return a + b
}

function num1(a, b){

    console.log(a + b)
}

console.log(num(10, 20));
num1(10, 20)


const ft = new Function('Hello', 'world', `

   const a = 10;
   const b = 20;
   const c = a + b;
   return Hello , world, c

`)

console.log(ft('Hello', 'World'))

const operations = [


    {
        args : [10, 20],
        params : ['a', 'b'],
        body : 'console.log("a + b =", a + b)'
    },

    {
        args : [10, 20],
        params : ['a', 'b'],
        body : 'console.log("a - b =", a - b)'
    },
    {
        args : [10, 20],
        params : ['a', 'b'],
        body : 'console.log("a * b =", a * b)'
    }
]

operations.forEach(operation => {

    const ft = new Function(...operation.params, operation.body);
    ft(...operation.args)


    
})

const ft = new Function('a', 'b', `

        console.log(a + b)
`);

ft(10,20)

// Pure function;
// A pure function can changes an other variable data;
// It's called a pure function;
// If a function can not change an other variable date;
// That's function can not be pure function in this case;
// That's function has site effect;


var limit = 100;
function changeLimit(limit){

    limit = 500;
    console.log(limit)
}
console.log(changeLimit(limit))

const arr = [1,2,3];

function myArr(arr, data){

   return arr.push(data)
}

console.log(myArr(arr))

function math(p){

    return function(n){

        let result = 1;
        
        for(let i = 1; i <= p; i++){

            result *= n
        }

        return result
    }
}
const power = math(2);
console.log(power(2))

console.log(math(4)(4))

function A(){

    console.log('I am A')
}

function B(){

    A()
}

function C(){

    B()
    B()
}

function D(){

    C()
    A()
}
D()

function a(){

    const a = 10

  for(let i = 0; i < a; i++){

    console.log(i)
}
}
a()

function fun(){

    console.log('Hello world')
}

fun();

// JS CODE ---> Browser --->   V8   ---> Computer ---> Output.

var topic = 'this is gonna be dedecated for execution context';
 
function getTopic(){

    return topic;

}
    
getTopic();

Global execution context

     phase : loading / creation 
        window : global object;
        this : window;
        variable : undefine and function er reference er thake
        getTopic : fn();
        scope


        Phase : execution 
           window : global object;
           this : window
           variable : 'this is gonna be dedecated for execution context';

           scope 


              getTopic() execution context;
                 phase : loading / creation 
                this : window
                scope 

             getTopic() execution context
               phase : execution
               return o   
                                   

            function fun(){
                
            }

            fun()


var a = 20;

function one(){

    console.log(a)

    function two(){

        console.log(b);
        var b = 10;
        
        function three(d){

            console.log(c + d)

            let c = 30
        }
        three(40)
    }
    two()
}


one()


// Global execution context
//    phase : loading /creation 
//       window : global object
//       this : window
//       variable : undefine
//       function body
//       scope   
 
//    Phase : execution 
//         window : global object
//         this : window
//        variable : value
//        function body
//       scope   

//   function execution context
//     phase : loading
//       argument object
//         this : window
//        variable : undefine
//        function body
//       scope    

     
//      phase :execution  
//       argument object
//         this : window
//        variable : value
//        function body
//       scope 

function fun(){

    var msg = 'We are gonna discover scope by using execution context';
}

fun();

console.log(msg)


function myFun(a){

    return function(b){

        return a + b
    }
}

var sum = myFun(10);

console.dir(sum(10))

scope execution
   arg
   this: window
   a : 10


const lan = ['JavaScript', 'Python', 'PhP', 'C'];


function mapAhsan(arr, fn){

   const newArray = [];
   
   for(let i = 0; i < arr.length; i++){

      newArray.push(fn(arr[i]))
   }
   return newArray
}

console.log(mapAhsan(lan, (item) => item.length))

// What is recursion?
// ekta function tar nijer body te nije ke call kora ke e recursion bole like;

let myFun = function(){

   myFun()
}


0 + 1 = 1;  f(1)

     1 + 2 = 3;  f(2)
        
         3 + 3 = 6;  f(3)


         f(n - 1) + 1;


function sum(n){

   if(n === 0){

      return 0
   }else{

   return sum(n - 1) + n;
   }
}

console.log(sum(10000))

var n = 100000000;

console.log((n * (n + 1)/ 2))

Let's start primitive value vs reference value;

Primitive value
var a = 10;

var b = a;

a = 20;
console.log(a);
console.log(b);

Reference value
var a = {

   name : 'Ahsanul Huq',
   age : 21
}

var b = a;

a.job = 'Student';
console.log(a);
console.log(b);

var a = {

   name : 'Ahsanul Huq',
   age : 21
}                  

var b = a;

a.job = 'Student';

// object or reference value kokon e sorasori stack e jaiga ney ney na stack er moddy 
// heap er name a ekta jaiga ache oi jaigai reference value tar moto kore optimize 
// hoye bose thake . but stack er moddy ekta pointer thake j pointer oi heap er moddy 
// j value ache sei value gula ke point kore thake 


// jokon ami object create korlam tokon oi object ta stack er moddy heap e chole geche
// ar stack er moddy pointer ta oi heap ke point kore bose ache stack er moody 
// jokon ami ekta object ke copy kore onno ekta varible er moddy rakhi tokon hocce 
// stack er moddy ekta jaiga ney but ou jaiga to  pointer kore rakhe age value ta ke jar 
// jonno object er jaiga theke value change korle sei value onno jaigai change hoy 
// but jodi ami object ke copy korte chai and onno ekta variable er moddy rakhte chai 
// tahole ami spreed operator use korte pari like 

var c = {...a}

console.log('c')
console.log(c)

 let a = 1;

let change = (val) =>{


   

      val =  val + 2;
}

change(a)

console.log(a) 


let cricketer = [

   {
      name : 'Sakib',
      age : 35,
      avg : 35.36
   },
   {

      name : 'Tamim',
      age : 36,
      avg : 36.36
   }
]

let nameCricketer = [];

for(let i = 0; i < cricketer.length; i++){

   if(cricketer[i].age > 35){

      nameCricketer.push(cricketer[i].name)
   }
}

console.log(nameCricketer)

var a = 20;