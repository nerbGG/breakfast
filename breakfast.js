//public vars
// var foodArr = JSON.parse(localStorage.getItem('listoffood'));//if local storage isnt empty, then fod arr  = json.parsegetItem
// console.log(foodArr.length)                                //else call getfileonew 
// var foodArr=[];
var foodArr = localStorage.getItem('listoffood')===null? getFile() : JSON.parse(localStorage.getItem('listoffood'));
var foodHis = new Array(6);
if(localStorage.getItem('localHistory') === null){
   // history = [];
   setLocalHistory(foodHis);
}
else{
   foodHis = JSON.parse(localStorage.getItem("localHistory"));
   console.log(foodHis);
}
var counter;
if(localStorage.getItem('localCounter') === null){
   counter =0;
   setLocalCounter(counter);
}
else{
   counter = JSON.parse(localStorage.getItem("localCounter"));
}
var food  = //array of objects
[ 
   { "name":"","img":"","recipe":""},//0
   { "name":"","img":"","recipe":""},//1
   { "name":"","img":"","recipe":""},//2
   { "name":"","img":"","recipe":""} //3
];
var text_output= [4];
var img_output =[4];

var localFoodName = localStorage.getItem('localFoodName')? JSON.parse(localStorage.getItem('localFoodName')): [];
var localFoodImg = localStorage.getItem('localFoodImg')? JSON.parse(localStorage.getItem('localFoodImg')): [];
// localStorage.getItem('localCounter') === null? localStorage.setItem('localCounter',JSON.stringify(0)) : JSON.parse(localStorage.getItem("localCounter"));                              
//console.log(foodArr);
//script
//getFile();
function getFile(){
   var file =document.getElementById('file');
   var reader =new FileReader(); 
   
   reader.onload=function() { //must deal with onload before reading the file//cant accesss result outside of the onload function
      // var storedFoodArr = [];
      foodArr = reader.result.split("\n");
      localStorage.setItem("listoffood", JSON.stringify(foodArr));
      foodArr = JSON.parse(localStorage.getItem('listoffood'));
      console.log(foodArr);
      // main();//should be called by a button -done
      return foodArr;
   } 
   //can read multiple files but only want the first one
   //the there are no files alert, else read
   if(!file.files[0]){
      alert("Must pick a file\n\n\n\n\n\n");
   }
   else{
      reader.readAsText(file.files[0]);
   }
   //removed the 'change' event listener so the user wont have to select the file to execute the program(user will have to refresh page if new file is selected)
  
}
function recipeCheckbox0(){//when clicked, the div will become dark and the next div will brighten up
   // var checkBox = document.getElementsByClassName('recipe-checkbox');
   var cover= document.getElementsByClassName('cover');
   cover[1].classList.toggle("no-opacity");
   cover[0].classList.toggle("high-opacity");
   
   var checkMark = document.getElementsByClassName('nosee-check');
   checkMark[0].classList.toggle('see-check');
     
      /*if(checkBox[0].checked){ DOESNT WORK BC/ THAT THEN HOVER EFFECT DOESNT WORK SINCE THE OPACITY IS SET BY JS
         cover[1].style.opacity = "0";
         cover[0].style.opacity = ".7";
      }
      else{
         cover[1].style.opacity = ".7";
         cover[0].style.opacity = "0";
      }*/
}
function recipeCheckbox1(){
   // var checkBox = document.getElementsByClassName('recipe-checkbox');
   var cover= document.getElementsByClassName('cover');
   cover[2].classList.toggle("no-opacity");
   cover[1].classList.toggle("high-opacity");

   var checkMark = document.getElementsByClassName('nosee-check');
   checkMark[1].classList.toggle('see-check');
}
function recipeCheckbox2(){
   // var checkBox = document.getElementsByClassName('recipe-checkbox');
   var cover= document.getElementsByClassName('cover');
   cover[3].classList.toggle("no-opacity");
   cover[2].classList.toggle("high-opacity");
   
   var checkMark = document.getElementsByClassName('nosee-check');
   checkMark[2].classList.toggle('see-check');
}
function recipeCheckbox3(){
   // var checkBox = document.getElementsByClassName('recipe-checkbox');
   var cover= document.getElementsByClassName('cover');
      // cover[2].classList.toggle("no-opacity");
   cover[3].classList.toggle("high-opacity");
   var checkMark = document.getElementsByClassName('nosee-check');
   checkMark[3].classList.toggle('see-check');
}
function setOutput(){
   for(let i =0; i <4;i++){
      let n = i.toString();
      let text_id  = "name"+n;
      let img_id = "img"+n;
      text_output[i] = document.getElementById(text_id);
      img_output[i]=document.getElementById(img_id);
   }
   for(let i =0; i < 4; i++){
      // text_output[i].innerHTML = food[i].name;
      // img_output[i].src = food[i].img;
      text_output[i].innerHTML = localFoodName[i];
      img_output[i].src = localFoodImg[i];
   }
}
function changeArrow(){
   var arrow = document.getElementsByClassName("arrow");
   arrow[1].classList.toggle('up');
}
function displayOutput(){//will display the old 4 sets of food
   // document.getElementById("output-div").style.display = "inline-flex";
   var file = document.getElementById('file');
   
   if(!file.files[0]){
      alert("Must pick a file\n\n\n\n\n\n");
      return 0;
   }
   else if(localFoodName.length <= 0){
      alert("generate B-fast first");
      return 0;
   }
   // if(text_output[0].innerHTML) add a rul ehere bc its inefficient to call setoutput when main already calls it
      setOutput();
      // main();
      // setOutput();
      // displayOutput();
   document.getElementById("output-div").classList.toggle("output-display");
   changeArrow();
   
}

function toggleDisplayLinks(){//for mobile view, instead of being hidden, they become visible 
   var arrow = document.getElementById("nav-arrow");
  arrow.classList.toggle("left");//only takes in 1 class anme
  document.getElementById("bfast-link").classList.toggle("active");
  document.getElementById("dinner-link").classList.toggle("active");
  document.getElementById("bout-link").classList.toggle("active");
  document.getElementById("learn-link").classList.toggle("active");
  
  document.getElementById("links").classList.toggle("moveX");  
  // document.getElementById("links").style.transform="translateX(-0%)";
} 
//backend-functions
function main(){
   // console.log(foodArr);
   let size = foodArr.length;
   //storing the html input file
    setFoodObjs(size);
    setOutput(); 
    // displaying the output*/ 
   //  displayOutput();
   //  document.getElementById("output-div").style.display = "inline-flex";
} 
function setFoodObjs(size){
   for(let i = 0; i < 4; i++)
   {
      food[i].name = foodArr[getNum(size)];
      food[i].img = "img/"+food[i].name+".jpg";
      food[i].recipe = "recipes/"+food[i].name+".txt";

      console.log(food[i].name);
      console.log("\n");
      
      localFoodName[i] = food[i].name;
      localFoodImg[i] = food[i].img;
   }
   setLocalHistory(foodHis);
   setLocalCounter(counter);//setting the local counter at the end
   setLocalFoodName(localFoodName);
   setLocalFoodImg(localFoodImg);

}
function getNum(size){//keeps track of the the last 4 values of num (the last 4 meals). Updates the counter
   if(counter == 6) // the history keeps only the last 6values and resets when counter is 4
      counter = 0;
   var num = Math.floor(Math.random()*size);//letting the value of numbe random ( the range is set by multiplying it by size)
   console.log("num: "+num);
   //System.out.println("possible value: "+arr[num]);
   
   num = checkHis(foodHis,num,size);  
   foodHis[counter] = num;
   
   console.log("counter: "+counter);
   console.log(foodHis);

   counter++;  
   return num;
}   
function checkHis(foodHis, num,size)//checks to see if num is already in history
{
   for(let i =0; i <= 6; i++)
   {
      if(num == foodHis[i])
      {
        console.log("num : "+num+" getting a new num");
        num = Math.floor(Math.random()*size)
        console.log("num is now: "+num);
        num = checkHis(foodHis,num,size); 

      }  
   }
   
   return num;
}
//local functions
function setLocalCounter(counter){
   localStorage.setItem('localCounter',JSON.stringify(counter));
}
function setLocalHistory(foodHis){
   localStorage.setItem('localHistory', JSON.stringify(Object.values(foodHis)));
}
function setLocalFoodName(localFoodName){
   localStorage.setItem('localFoodName', JSON.stringify(localFoodName));
}
function setLocalFoodImg(localFoodImg){
   localStorage.setItem('localFoodImg', JSON.stringify(localFoodImg));
}
