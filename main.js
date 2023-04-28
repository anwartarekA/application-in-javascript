let array = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F"];
let body =document.getElementById("body");
let div = document.getElementById("one");
document.getElementById("btn").onclick=function(){
    color = "#";
    for(let i = 0 ; i < 6 ; i++)
{   
    let randomvalue = array[Math.floor(Math.random()* array.length)];   
     color += randomvalue;
     if(color.length>= 7)
     {
        break;
     }
}
    body.style.background=color;
    div.innerHTML=`The Color Of The Page is : ${color}`
}

