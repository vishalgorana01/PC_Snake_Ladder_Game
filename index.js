console.log("This is snake ladder game");

let congratulations_card = document.querySelector(".congratulations_card");
let congratulations_star = document.querySelector(".congratulations_star");

let playerPieces = document.createElement("div");
playerPieces.setAttribute("class", "playerPieces");
playerPieces.style.display = "flex";
playerPieces.style.alignItems = "center";
playerPieces.style.justifyContent = "center";
// playerPieces.style.border = "2px solid black";
playerPieces.style.position = "absolute";
playerPieces.style.top = "697px";
playerPieces.style.left = "2px";

let table = document.querySelector(".table");


let display = document.getElementById("display");
display.appendChild(playerPieces);

let previous_position = 0;

class player {

    steps = 0;

    constructor(givenName, givenPiece) {
        this.has_start = true;
        this.name = givenName;
        this.img = givenPiece;
        let ele = document.createElement("div");
        ele.innerHTML = this.img;
        ele.children[0].style.position = "relative";
        ele.children[0].style.margin = "0px 20px";
        ele.children[0].style.height = "78px";

        this.ele = ele;
        playerPieces.appendChild(ele);
    }

    steps_of_player(total_steps, current_step) {
        console.log(this.ele);

        if (this.has_start) {
            this.ele.style.position = "absolute";
            this.ele.style.top = "-80px";
            this.ele.style.left = "-30px";
            this.has_start = false;
        }

        if (total_steps == 100) {
            this.ele.style.top = `${10 * (-70) + (-10)}px`;
            this.ele.style.left = `${0}px`;

            table.children[1].children[0].children[3].innerHTML = "Winner";
            congratulations_card.children[2].innerHTML = `${this.name}, you won the game`;
            congratulations_card.style.display = "flex";
            congratulations_card.style.animation = "card_display 0.4s 1 linear forwards"
            congratulations_star.style.display = "flex";

            // setInterval(alert(`${this.name} is winner`), 1000);
            return total_steps;
        }

        if (total_steps < 100) {

            if (total_steps == 5) {
                this.ele.style.top = `${3 * (-70) + (-10)}px`;
                this.ele.style.left = `${5 * (70)}px`;
                this.steps = 26;
                return total_steps;
            }
            else if (total_steps == 22) {
                this.ele.style.top = `${5 * (-70) + (-10)}px`;
                this.ele.style.left = `${2 * (70)}px`;
                this.steps = 43;
                return total_steps;
            }
            else if (total_steps == 68) {
                this.ele.style.top = `${10 * (-70) + (-10)}px`;
                this.ele.style.left = `${5 * (70)}px`;
                this.steps = 95;
                return total_steps;
            }
            else if (total_steps == 33) {
                this.ele.style.top = `${1 * (-70) + (-10)}px`;
                this.ele.style.left = `${9 * (70)}px`;
                this.steps = 10;
                return total_steps;
            }
            else if (total_steps == 90) {
                this.ele.style.top = `${5 * (-70) + (-10)}px`;
                this.ele.style.left = `${6 * (70)}px`;
                this.steps = 47;
                return total_steps;
            }
            else if (total_steps == 99) {
                this.ele.style.top = `${2 * (-70) + (-10)}px`;
                this.ele.style.left = `${6 * (70)}px`;
                this.steps = 14;
                return total_steps;
            }

            let top;
            top = Math.ceil((total_steps / 10));


            console.log(this.name ," ----> ", total_steps);
            let left = (total_steps) % 10;


            this.ele.style.top = `${top * (-70) + -10}px`;

            if ((Math.floor(total_steps / 10)) % 2 == 0) {
                if (total_steps % 10 == 0) {
                    this.ele.style.left = `${left * 70}px`;
                }
                else {
                    this.ele.style.left = `${left * 70 - 70}px`;
                }
            }
            else {
                if (left == 0) {
                    left = 9;
                }
                else {
                    left = 10 - left;
                }

                console.log("left = ", left);
                this.ele.style.left = `${left * 70}px`;
            }
        }

    }

    position(current_pos) {
        if ((this.steps + current_pos) <= 100) {
            this.steps = this.steps + current_pos;
            this.steps_of_player(this.steps, current_pos);
        }
    }
}

function compare(a, b) {
    if (a.steps > b.steps) {
        return 1;
    }
    else {
        return -1;
    }

    return 0;
}



// laterly uncomment this 
let a;
let name_of_all_players = document.querySelector(".no_of_players");
let k = 0;
let all_players = [];
let table_of_all_players = [];

let start = document.querySelector(".start");
start.addEventListener("click", function () {

    document.location.href = "index.html";
    // start.disabled = "true";
})

let restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
    document.location.href = "index.html";
})

a = prompt("Enter no. of players\n note* :- no.of players should be less than 5 ");

if (a > 4) {
    a = prompt("Enter no. of players\n note* :- no.of players should be less than 5 ");
}

while (a--) {
    let name = prompt("Enter name of players");
    table.children[1].children[k].style.display = "table-row";
    table.children[1].children[k].children[1].innerHTML = name;
    name_of_all_players.children[k].style.display = "flex";
    name_of_all_players.children[k].children[1].textContent = name;
    let img = name_of_all_players.children[k].children[0].outerHTML;
    let newName = name;
    newName = new player(`${name}`, `${img}`);
    all_players.push(newName);
    table_of_all_players.push(newName);
    console.log(newName);
    k++;
}


/* Make Canvas of Snake and Ladder */
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
console.log(ctx);

let x = 0, y = 0;
let check1 = true;
let check2 = true;

for (let i = 100; i >= 1; i--) {
    if (x == 700) {
        check2 = false;
        y = y + 70;
    }

    if (x == 0 && check2 == false) {
        check2 = true;
        check1 = true;
        y = y + 70;
    }

    if (!check2) {
        x = x - 70;
    }

    if (check1) {
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, 70, 70);
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText(`${i}`, x, y + 18);
        check1 = false;
    }
    else {
        ctx.fillStyle = "#15b211";
        ctx.fillRect(x, y, 70, 70);
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText(`${i}`, x, y + 18);
        check1 = true;
    }

    if (check2) {
        x = x + 70;
    }

}



/* dice roll */
let dice = document.querySelector(".dice");
console.log(dice);

let none = document.querySelector(".none")
let check = true;

roll = () => {
    // console.log("dice");
    // dice.style.animation = "roll 0.2s linear 2 backwards";
}

let no_of_players = all_players.length;
let count = 0;
// let x=0, y=0;

let check_for_last_element = true;
let roll_btn = document.querySelector(".roll_btn");
roll_btn.addEventListener("click", function () {
    dice.style.animation = "";

    // all_players.sort(c,d =>{
    //     return c.steps - d.steps;
    // });
    roll();
    
    for (let i = 0; i < table_of_all_players.length; i++) {
        for (let j = 0; j < table_of_all_players.length -i- 1; j++) {
            if (table_of_all_players[j].steps < table_of_all_players[j + 1].steps) {
                let temp = table_of_all_players[j];
                table_of_all_players[j] = table_of_all_players[j + 1];
                table_of_all_players[j + 1] = temp;
            }
        }
    }
    console.log(all_players);
    console.log(table_of_all_players)

    for (let k = 0; k < table_of_all_players.length; k++) {
        table.children[1].children[k].children[1].innerHTML = table_of_all_players[k].name;
    }

    if (check_for_last_element == false) {
        // console.log("yes");
        name_of_all_players.children[no_of_players - 1].style.border = "none";
        name_of_all_players.children[no_of_players - 1].style.boxShadow = "none";
    }


    let a = Math.floor(Math.random() * 100);

    if(a%6 == 0){
        a = 1;
    }
    else if(a%6 == 1){
        a = 2;
    }
    else if(a%6 == 2){
        a = 3;
    }
    else if(a%6 == 3){
        a = 4;
    }
    else if(a%6 == 4){
        a = 5;
    }
    else if(a%6 == 5){
        a = 6;
    }

    for (let i = 1; i <= 6; i++) {
        if (a == i) {
            // dice.style.display = "none";
            dice.children[1].innerHTML = `${i}`;

            name_of_all_players.children[count].style.border = "4px solid rgb(21 178 17)";
            name_of_all_players.children[count].style.boxShadow = "0 0 50px #26bf47";
            console.log(count);
            all_players[count].position(i);
        }
    }


    if (count > 0) {
        name_of_all_players.children[count - 1].style.border = "none";
        name_of_all_players.children[count - 1].style.boxShadow = "none";
    }



    count++;
    if (count == no_of_players) {
        count = 0;
        check_for_last_element = false;
    }

})




