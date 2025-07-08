/**
 * operatores:-
 * 
 * conditional statements in Javscript
 * 
 * it is a block of code  and it exicute the block of code ,until when condition fails
 * 
 * types of conditionals stetements
 * 
 * simple if
 * if else
 * ladder if
 *nested if
 * 
 * syntax:-
 * 
 * simple if
 * 
 * if(condition){
 * //statements
 * }
 * 
 * if(condition){
 * statemenmts
 *
 * }
 * else{
 * 
 * }
 * 
 * 
 * 
 * 
 */

var srinulaptop=true;

if(srinulaptop){
    console.log("he is able to attend the zoom");
    
}
if(!srinulaptop){
    console.log("he is no able to attend the zoom");
}
console.clear()

// grade A/B
//marks 75 above


var grade="c"
var score=75;


if(grade== "B" || grade == "A" && score >=75){
    console.log("eligible");
    
}
else{
    console.log("Not eligible");
    
}

console.clear()

// age =13 below child
// age=13 to 19 above teen
// age=19 above adult



var age=25;

if(age<13){
    console.log("child");
    
}else if(age>=13 && age<=19){
    console.log("teen");
    
}

else{
    console.log("adult");
    
}

// score 90 to 100 "A"
// score 80 to 89 "b"
// score 70 to 79 "c"
// score 60 to 69 "d"
// 60 below "fail"

console.clear()
var score=120;

if(score>=90 && score <=100){
    console.log("A");
    
}
else if(score >=80 && score <=89){
    console.log("B");
    
}
else if(score>=70 && score<=79){
    console.log("C");
    
}
else if (score>=60 && score<=69){
    console.log("D");
    
}
else if(score>=0 && score<=59){
    console.log("fail");
    
}
else{
    console.log("not a valid score");
    
}
