
//public vars
var foodArr = [];
var history =[];
var counter = 0;                                
var food  = [ //array of objects
   { "name":"","img":"","recipe":""},
   { "name":"","img":"","recipe":""},
   { "name":"","img":"","recipe":""},
   { "name":"","img":"","recipe":""}
];
//html vars
//9.change text output and image output to be arrays; ex.text_output[i] = food[i].name;"       
var text_output1 = document.getElementById("name1");
var img_output1 = document.getElementById("img1");
var text_output2 = document.getElementById("name2");
var img_output2= document.getElementById("img2");
var text_output3 = document.getElementById("name3");
var img_output3 = document.getElementById("img3");
var text_output4 = document.getElementById("name4");
var img_output4 = document.getElementById("img4");


//functions

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
/*ACTIVE LINK THING 
html
<a id="nav-arrow"class="arrow right" onclick="toggleDisplayLinks()"></a>
<div id="bfast-link"class="link link-active"><li><a href="#links" onclick="toggleLinkActive('bfast-link')"</a></a>>Breakfast</a></li></div>
<div id="dinner-link"class="link"><li><a href="" onclick="toggleLinkActive('dinner-link')">Dinner</a></li></div>
<div id="learn-link"class="link"><li><a href="" onclick="toggleLinkActive('learn-link')">Learn More</a></li></div>
<div id="bout-link"class="link"><li><a href="" onclick="toggleLinkActive('bout-link')">About Me</a></li></div>
function toggleLinkActive(div_id){
    document.getElementById(div_id).classList.toggle("link-active");
   // document.getElementById(div_id).style.backgroundColor = "yellow";
}*/
/*function displayLinks(){
   
   console.log(window.innerWidth);
   var arrow = document.getElementById("nav-arrow");
   if (arrow.className === "arrow left")
   {
      hideLinks();
   }
   else{
      arrow.className="arrow left";
      document.getElementById("bfast-link").style.display = "block";
      document.getElementById("dinner-link").style.display = "block";
      document.getElementById("bout-link").style.display = "block";
      document.getElementById("learn-link").style.display = "block";
      document.getElementById("links").style.width = "100%";
   }
}
 function hideLinks(){
   document.getElementById("nav-arrow").className="arrow right";
   document.getElementById("bfast-link").style.display = "none";
   document.getElementById("dinner-link").style.display = "none";
   document.getElementById("bout-link").style.display = "none";
   document.getElementById("learn-link").style.display = "none";
   // document.getElementsByClassName("link").style.display = "none";
   document.getElementById("links").style.width = "unset";
 }*/
function main(){
    //storing the html input file
   var file = document.getElementById('file'); //removed the 'change' event listener so the user wont have to select the file to execute the program(user will have to refresh page if new file is selected)
   var reader =new FileReader(); 
   reader.onload=function(){ //must deal with onload before reading the file//cant accesss result outside of the onload function
      foodArr = reader.result.split("\n");
      let size = foodArr.length;
      console.log(foodArr);
      for(let i = 0; i < 4; i++)
        {
            food[i].name = foodArr[getNum(size)];
            food[i].img = "img/"+food[i].name+".jpg";
            food[i].recipe = "recipes/"+food.name+".txt";

            console.log(food[i].name);
            console.log("\n");
        }
      //9.change text output and image output to be arrays; ex.text_output[i] = food[i].name;"
        text_output1.innerHTML = food[0].name;
        img_output1.src = food[0].img;
        text_output2.innerHTML = food[1].name;
        img_output2.src = food[1].img;
        text_output3.innerHTML = food[2].name;
        img_output3.src = food[2].img;
        text_output4.innerHTML = food[3].name;
        img_output4.src = food[3].img;
        //displaying the output
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

// function setFood(string){ //can be replaced by just doing 'food = reader.result.split("\n");'
//     food = string.split('\n');//dividing the file into smaller string by '\n'
//     return food;
// }


function getNum(size){//keeps track of the the last 4 values of num (the last 4 meals). Updates the counter
   if(counter == 4) // the history keeps only the last 4 values and resets when counter is 4
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