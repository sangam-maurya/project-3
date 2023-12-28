let fav = "avatar"
let guess = prompt("enter guess my fav movi")


while (true){
    if (guess=="quit"){
        console.log("quiting this")
        break ;
    } if (guess!=fav){
        guess=prompt("guess again")
    } else if (guess ==fav){
        console.log("congrats you guess movi")
        break;


    }
}