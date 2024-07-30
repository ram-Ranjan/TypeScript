
const num1Elem = document.getElementById('num1') as HTMLInputElement;
const num2Elem = document.getElementById('num2') as HTMLInputElement;

function addNums(num1:number,num2:number){
    return num1 + num2;
}
                                            //Adding a ! tells dont take null value from it.
const submitBtn = document.querySelector('button')!;//Typescript ables to infer i.e know which type is the const is.  
submitBtn.addEventListener('click',() => {
    const num1 = num1Elem.value;
    const num2 = num2Elem.value;
    console.log('Helloo Typescript',addNums(+num1, +num2))//+num1  <=> parseInt
})                                     //Expecting a string
 

// console.log(addNums(1,6))

// console.log(addNums("1","6"))//Gives error because It is asking for number type we defined before.