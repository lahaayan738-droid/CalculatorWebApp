let boxes = document.querySelectorAll(".box");

let displayAnswer = document.querySelector("#value");

let displayFirst = document.querySelector(".answer");

let cursor = document.querySelector(".cursor");

let clearBtn = document.querySelector(".c");

let darkModeBtn = document.querySelector(".darkModeBtn");

let currMode = "light"

darkModeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})


let string = "";
let turn = true;
boxes.forEach((box) =>{
    box.addEventListener("click", (e)=>{
        if(e.target){
            cursor.style.display = "none";
            cursor.style.animation = "none";
        }
        // console.log(e.target.innerText);
        buttons = e.target.innerText;

        if(buttons == "="){
            try{
            let result = eval(string);
            displayAnswer.textContent = result;
            }catch{
                console.log("Error in Calculation");
                displayAnswer.textContent = "Error"
            }
            return;
        }
        if(buttons == "%"){
            string += "/100";
            displayFirst.textContent = string;
            return;
        }

        string += buttons;
        displayFirst.textContent = string;

    });
});

let delBtn = document.querySelector(".deleteIcon");

clearBtn.addEventListener("click", ()=>{
    string ="";
    displayAnswer.textContent = "";
    displayFirst.textContent = "0";
    cursor.style.display = "flex";
    cursor.style.animation = "blink 1s steps(1) infinite";
})

delBtn.addEventListener("click", ()=>{
    string = string.slice(0, -1);
    displayFirst.textContent =string ||"0";

    if(string =="0"|| string ==""){
        displayAnswer.textContent = "";
        cursor.style.display = "flex";
        cursor.style.animation = "blink 1s steps(1) infinite";
    }else{
        cursor.style.animation = "none";
        cursor.style.display = "none";
    }
})