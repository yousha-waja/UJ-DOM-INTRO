const myIncrement = document.querySelector('.Increment');
const myDecrement = document.querySelector('.Decrement');
const myNumber = document.querySelector(".number");

let count = 1;
myNumber.innerText = count;
myIncrement.addEventListener("click", function(){
   count += 2;
   myNumber.innerText = count;
});

myDecrement.addEventListener("click", function(){
    if (count>0)
    {count--;
    myNumber.innerHTML = count;}
});

const Input = document.querySelector(".input");
const Submit = document.querySelector(".submit");
const Answer = document.querySelector(".answer");

Submit.addEventListener("click", function(){
   if(Input.value.trim().length>0){
   const li = document.createElement('li');
   li.innerText = Input.value;
   animal.appendChild(li);
   Answer.classList.remove("hidden");
   setTimeout(()=>{
      Answer.classList.add("hidden")
   },4000);
   Input.value=''   
}
   else {
      alert("Please enter a Name before clicking 'Submit'")
   }
});


const basket = ['Lions','Hyenas','Cheetahs', 'Leopards','Zebra','Snakes','Rats',"Pigs"];
const animal = document.querySelector(".animals");
for(let i=0; i<basket.length;i++ ){
   const li = document.createElement('li');
   li.innerText = basket[i];
   animal.appendChild(li)
}