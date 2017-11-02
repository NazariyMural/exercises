function playGame() {
    console.log('Playing game =)');
}

function limit(fn, num) {
    let counter = 0;
    return function(){
        if(counter >= num){
            return false;
        }
        return (
            counter++,
            fn()
        )
    }
}

let playGameLimited = limit(playGame, 3);
playGameLimited();
playGameLimited();
playGameLimited();
playGameLimited();
playGameLimited();
playGameLimited();
playGameLimited();