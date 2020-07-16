
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
var text_output1 = document.getElementById("name1");
var img_output1 = document.getElementById("img1");
var text_output2 = document.getElementById("name2");
var img_output2= document.getElementById("img2");
var text_output3 = document.getElementById("name3");
var img_output3 = document.getElementById("img3");
var text_output4 = document.getElementById("name4");
var img_output4 = document.getElementById("img4");


//functions
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