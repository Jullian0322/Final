function RPS(user) {
    let computer = Math.floor(Math.random() * 3);
    let output = document.getElementsByClassName("result");

    if (computer == 0) {

        if (user == 2) {
            output.innerHTML = "you win";
        }
        else if (user == 1) {
            output.innerHTML = "you lose";
        }
        else {
            output.innerHTML = "draw";
        }
    }
    else if (computer == 1) {
        if (user == 0) {
            output = "you win";
        }
        else if (user == 2) {
            output = "you lose";
        }
        else {
            output = "draw";
        }
    }
    else if (computer == 2) {
        if (user == 1) {
            output = "you win";
        }
        else if (user == 0) {
            output = "you lose";
        }
        else {
            output = "draw";
        }
    }
}