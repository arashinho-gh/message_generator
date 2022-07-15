let max=2;
let round = 0;
for(let i=0; i<max; i++){
    let number = Math.round(Math.random()*10)
    switch (number){
        case 1:
            console.log("You are doing an amazing Job!");
            console.log("2 round bonus")
            max += 2;
            break;
        case 2:
            console.log("Bad Guess!");
            console.log("1 round lost");
            max--;
            break;
        case 3:
            console.log("not bad");
            console.log("0 round bonus");
            break;
        case 4:
            console.log("very good");
            console.log("1 round bonus");
            max++;
            break;
        case 5:
            console.log("terrible choice");
            console.log("2 round lost");
            max-=2;
            break;
        case 6:
            console.log("Jackpot!!!");
            console.log("3 round bonus");
            max+=3;
            break;
        case 7:
            console.log("good Choice!");
            console.log("1 round bonus");
            max++;
            break;
        case 8:
            console.log("nothing new");
            console.log("0 round bonus");
            break;
        case 9:
            console.log("not bad");
            console.log("0 round bonus");
            break;
        case 10:
            console.log("My condolences");
            console.log("3 round lost");
            max-=3;
            break;
    }
    round++;
    console.log(`Round ${round}`);
}
console.log(`You ended the match in ${round} rounds`);