//console.log(document);

// let text = document.getElementsByTagName("p");
// let text = document.getElementById("txt")
// text.innerHTML = "<b>Bye P126</b>"

// let text = document.querySelector("#container #txt")
// let texts = document.querySelectorAll("#container p")

// text.style.color = "white";
// text.style.backgroundColor = "teal";

// for (const item of texts) {
//     item.style.color = "teal";
// }

// console.log(text);
// console.log(texts);

// let sendBtn = document.getElementById("succes-btn");

// sendBtn.onclick = function() {
//     alert("Codes");
// }

// sendBtn.onclick = function() {
//     alert("Kodlar");
// }

// sendBtn.addEventListener("click", function() {
//     alert("Yeap");
// })

// sendBtn.addEventListener("click", function() {
//     alert("Nope");
// })


let txtInput = document.querySelector(".text-input");
let btn = document.getElementById("add-btn");
let parentLi = document.querySelector(".parent-li");

// textInput.className = "text";
// console.log(textInput);

// btn.onclick = function(){
//     if (txtInput.value.trim() != "") {
//         console.log(txtInput.value);

//     }
//     txtInput.value = "";
// }

btn.addEventListener("click", function () {
    if (txtInput.value == "") {
        alert("Zehmet olmasa, nese elave edin.");
        return;
    }

    let li = document.createElement("li");
    let icon = document.createElement("i");
    icon.className = "fas fa-times pt-1";
    icon.style.float = "right";
    li.classList.add("list-group-item");
    li.classList.add("test");
    li.innerText = txtInput.value;
    li.append(icon);
    parentLi.append(li);

    icon.onclick = function () {
        li.remove();
    }

    // parentLi.innerHTML += `<li class = "list-group-item">${txtInput.value}</li>`;

    txtInput.value = "";
})