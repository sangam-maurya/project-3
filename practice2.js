let user = prompt("guess your number")
const random =Math.floor(Math.random()*user+1);
let guess = prompt("guess your number")

while(true){
    if(guess =="quit"){
        console.log("quit this game")
        break;
    } else if (guess==random){
        console.log("you are right congrats!!" , random)
        break;
    }else if(guess<random){
        guess=prompt("your number is to small")
    }else {
        guess=prompt("your number is to large")
    }
}