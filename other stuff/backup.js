var counter  =0;//when the user clicks the button, counter will be icremented
var history = [];
var arr = [];
var output_sat = document.getElementById("sat");
var output_sun = document.getElementById("sun");
var output_sat_img = document.getElementById("sat-output-img");
var output_sun_img = document.getElementById("sun-output-img");
const btn = document.getElementById("btn");
main();

 function main()
 {
    fetch('files/food.txt')
    .then(response => response.text())
    .then(data => {  
        arr=data.split("\n");
        console.log(arr);//cannot access array outside of this block/ may try using getFile in the future
        const size = arr.length;
      //   for(let i =0; i < 9; i++)
      //   { } 
         let sun=0, sat =0;
         btn.addEventListener("click", function(){
            // var sat = {name : arr[getFood(size)], img:sat.name+".jpg",recipe:""};
            // var sun = {name : arr[getFood(size)], img:sun.name+".jpg",recipe:""};
            var sat = arr[getFood(size)];
            var sun = arr[getFood(size)];
            sun = check(sat,sun,size);
            output_sat_img.src = "img/"+sat+".jpg";
            output_sun_img.src = "img/"+sun+".jpg";
            console.log("saturday "+sat+" sunday "+sun);
            output_sat.innerHTML = "Saturday: "+sat;
            output_sun.innerHTML = "Sunday: "+sun;
            
            console.log("\n");
         });
    }); 
 }


function check(sat, sun, size)
 {
    if(sun==sat)
    {
       console.log("sat is "+sat+" sun is: "+sun);
       console.log("getting new sun value\n");
       sun = arr[getFood(size)];
       console.log("sun is now: "+sun);
       check(sat,sun,size);
    }
    return sun; 
 }
 
 function getFood(size)
 {
    if(counter == 4)
       counter = 0;
    var num = Math.floor(Math.random()*size);
    console.log("num: "+num);
    //System.out.println("possible value: "+arr[num]);
    
    num = checkHis(history,num,size);  
    history[counter] = num;
    
    console.log("counter: "+counter);
    console.log(history);
    
    
    counter++;   
    console.log("\n");
    return num;
 }   

function check(history, num,size)
 {
    for(let i =0; i <= counter; i++)
    {
       if(num == history[i])
       {
         console.log("num : "+num+" getting a new num");
         num = Math.floor(Math.random()*size)
         num = checkNum(history,num,size); 
         console.log("num is now: "+num);
       }  
    }
    
    return num;
 }



//  function getfile()
//  {
//     document.getElementById('file').addEventListener('change', function selectedFileChanged() {
//         if (this.files.length === 0) {
//           console.log('No file selected.');
//           return;
//         }
      
//         const reader = new FileReader();
//         reader.onload = function fileReadCompleted() {
//           // when the reader is done, the content is in reader.result.
//           //console.log(reader.result);
//           arr=reader.result.split("\n");
//           console.log(arr);
//         };
//         reader.readAsText(this.files[0]);
//       });
//   }

//  function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }