
//public vars
var foodArr = [];
var history =[];
var counter = 0;                                
var food  = //array of objects
[ 
   { "name":"","img":"","recipe":""},
   { "name":"","img":"","recipe":""},
   { "name":"","img":"","recipe":""},
   { "name":"","img":"","recipe":""}
];
//frontend-fucntions
function toggleDisplayLinks(){
   var arrow = document.getElementById("nav-arrow");
  arrow.classList.toggle("left");//only takes in 1 class anme
  document.getElementById("bfast-link").classList.toggle("active");
  document.getElementById("dinner-link").classList.toggle("active");
  document.getElementById("bout-link").classList.toggle("active");
  document.getElementById("learn-link").classList.toggle("active");
  
  document.getElementById("links").classList.toggle("wide");  
  // document.getElementById("links").style.transform="translateX(-0%)";
}
function setOutput(){
   var text_output= [4];
      var img_output =[4];
      for(let i =0; i <4;i++){
         let n =i.toString();
         let text_id  = "name"+n;
         let img_id = "img"+n;
         text_output[i] = document.getElementById(text_id);
         img_output[i]=document.getElementById(img_id);
      }
   for(let i =0; i < 4; i++){
      text_output[i].innerHTML = food[i].name;
      img_output[i].src = food[i].img;
   }
}
//backend-functions
function main(){
    //storing the html input file
   var file = document.getElementById('file'); //removed the 'change' event listener so the user wont have to select the file to execute the program(user will have to refresh page if new file is selected)
   var reader =new FileReader(); 
   reader.onload=function(){ //must deal with onload before reading the file//cant accesss result outside of the onload function
      foodArr = reader.result.split("\n");
      let size = foodArr.length;
      
      console.log(foodArr);
      setFoodObjs(size);
      setOutput();
      // displaying the output*/ 
      document.getElementById("output-div").style.display = "inline-flex";
    } 
    //can read multiple files but only want the first one
    //the there ae no files alret, else read
    if(!file.files[0]){
      alert("Must pick a file\n\n\n\n\n\n");
    }
    else{
      reader.readAsText(file.files[0]);
    }
} 

function setFoodObjs(size){
   for(let i = 0; i < 4; i++)
   {
      food[i].name = foodArr[getNum(size)];
      food[i].img = "img/"+food[i].name+".jpg";
      food[i].recipe = "recipes/"+food.name+".txt";

      console.log(food[i].name);
      console.log("\n");
   }
}


function getNum(size){//keeps track of the the last 4 values of num (the last 4 meals). Updates the counter
   if(counter == 6) // the history keeps only the last 4 values and resets when counter is 4
      counter = 0;
   var num = Math.floor(Math.random()*size);//letting the value of numbe random ( the range is set by multiplying it by size)
   console.log("num: "+num);
   //System.out.println("possible value: "+arr[num]);
   
   num = checkHis(history,num,size);  
   history[counter] = num;
   
   console.log("counter: "+counter);
   console.log(history);

   counter++;   
   return num;
}   

function checkHis(history, num,size)//checks to see if num is already in history
{
   for(let i =0; i <= 4; i++)
   {
      if(num == history[i])
      {
        console.log("num : "+num+" getting a new num");
        num = Math.floor(Math.random()*size)
        console.log("num is now: "+num);
        num = checkHis(history,num,size); 

      }  
   }
   
   return num;
}
