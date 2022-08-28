const contant = document.querySelector(".contant");
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const autoCom = document.querySelector(".autoCom");

icon.onclick = () => {
    search.classList.toggle("active");
};
clear.onclick = () => {
    input.value = "";
};
input.onkeyup = () => {
    if (input.value == "") {
        autoCom.style.display = "none";
    } else {
        let found = false;
        autoCom.style.display = "block";
        autoCom.innerHTML = "";
        data.forEach((element) => {
            let title = new String(element.title);
            if (title.toUpperCase().includes(input.value.toUpperCase())) {
                autoCom.innerHTML += `<li onclick=showCode(${element.num})>${title}</li>`;
                found = true;
            }
        });
        if (!found) {
            autoCom.innerHTML = `<li>Not Found</li>`;
        }
    }
};
let dataCurrent = new Object();

function showCode(num) {
    for (let index = 0; index < data.length; index++) {
        if (data[index].num == num) {
            dataCurrent = data[index];
            let li = "";
            let langs = Object.keys(dataCurrent.code);
            for (let i = 0; i < langs.length; i++) {
                li += `<li data-lang="${langs[i]}" data-line="${
                    (100 / langs.length) * i
                }%">${langs[i].toUpperCase()}</li>`;
                console.log(langs[i]);
            }
            contant.innerHTML = `<ul>
            ${li}
            <span> <span> </span></span>
        </ul>
            <img src="${getSrcImg(dataCurrent.code[langs[0]])}">
        <a href="${
            dataCurrent.link
        }" target="_blank"><button>Watch Video</button></a>`;
            tabs = document.querySelectorAll("ul li");
            line = document.querySelector("ul span span");
            line.style.width = 100 / langs.length + "%";
            img = document.querySelector(".contant img");
            tabs[0].classList.add("active");
            tabs.forEach((ele) => forTabs(ele));
            break;
        }
    }
}
let tabs, line, img;
function forTabs(ele) {
    ele.addEventListener("click", function (e) {
        tabs.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        line.style.left = e.currentTarget.getAttribute("data-line");
        img.src = getSrcImg(
            dataCurrent.code[e.currentTarget.getAttribute("data-lang")]
        );
    });
}

function getSrcImg(img) {
    return "https://drive.google.com/uc?export=view&id=" + img.split("/")[5];
}

// Cover Typing

var typed = new Typed(".hash", {
    strings: ["#1", "#2", "#3"],
    typeSpeed: 300,
    backSpeed: 300,
    loop: true,
});
var typed = new Typed(".type", {
    strings: ["Array", "String", "Math"],
    typeSpeed: 150,
    backSpeed: 90,
    loop: true,
});
var typed = new Typed(".list", {
    strings: ["Problem Solving", "Built-In Function"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
