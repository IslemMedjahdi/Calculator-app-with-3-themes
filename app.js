let input = document.getElementById("result");
let equal = document.querySelector(".equal");
let keys = document.querySelectorAll(".grid div");
let theme = document.querySelector(".circle-container");
function themeThree() {
    theme.firstElementChild.style.transform = "translateX(1.5rem)";
    document.documentElement.style.setProperty('--bg-color', 'hsl(268, 75%, 9%)');
    document.documentElement.style.setProperty('--keypad-color', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--del-bg', 'hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--del-shadow', 'hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty('--key-bg', 'hsl(268, 47%, 21%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
    document.documentElement.style.setProperty('--text-color', 'hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--title-color', ' hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--screen-color', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--eq-shadow', 'hsl(177, 92%, 70%)');
    document.documentElement.style.setProperty('--toggle', 'hsl(176, 100%, 44%)');
}
function themeTwo() {
    theme.firstElementChild.style.transform = "translateX(0.75rem)";
    document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 90%)');
    document.documentElement.style.setProperty('--keypad-color', 'hsl(0, 5%, 81%)');
    document.documentElement.style.setProperty('--del-bg', 'hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--del-shadow', 'hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty('--key-bg', 'hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--text-color', 'hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--title-color', ' hsl(0, 0, 100%)');
    document.documentElement.style.setProperty('--screen-color', 'hsl(0, 0%, 93%)');
    document.documentElement.style.setProperty('--eq-shadow', 'hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--toggle', 'hsl(25, 98%, 40%)');
}
function themeOne() {
    theme.firstElementChild.style.transform = "translateX(0rem)";
    document.documentElement.style.setProperty('--bg-color', 'hsl(222, 26%, 31%)');
    document.documentElement.style.setProperty('--keypad-color', 'hsl(223, 31%, 20%)');
    document.documentElement.style.setProperty('--del-bg', 'hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--del-shadow', 'hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty('--key-bg', 'hsl(30, 25%, 89%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
    document.documentElement.style.setProperty('--text-color', 'hsl(221, 14%, 31%)');
    document.documentElement.style.setProperty('--title-color', ' hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--screen-color', 'hsl(224, 36%, 15%)');
    document.documentElement.style.setProperty('--eq-shadow', 'hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--toggle', 'hsl(6, 63%, 50%)');
}
if (window.localStorage.getItem("theme")){
    theme.classList.add(window.localStorage.getItem("theme"));
    if (theme.classList.contains("three")){
        themeThree()
    }
    if (theme.classList.contains("two")){
        themeTwo();
    }
}else{
    theme.classList.add("one");
}
theme.onclick = () =>{
    if (theme.classList.contains("one")){
        theme.classList.add("two");
        theme.classList.remove("one");
        themeTwo();
        window.localStorage.setItem("theme","two");

    }
    else if (theme.classList.contains("two")){
        theme.classList.add("three");
        theme.classList.remove("two");
        themeThree();
        window.localStorage.setItem("theme","three");
    }
    else{
        theme.classList.add("one");
        theme.classList.remove("three");
        themeOne();
        window.localStorage.setItem("theme","one");
    }
}
keys.forEach(elem => {
    if (elem.classList.contains("del")){
        elem.onclick = () =>{
            if (input.classList.contains("active")){
                input.value = "";
                input.classList.remove("active");

            }else{
                input.value = input.value.slice(0,-1);
            }
        }
    }
    else if (elem.classList.contains("reset")){
        elem.onclick = () =>{
            input.value = "";
        }
    }
    else if (elem.classList.contains("equal")){
        elem.onclick = () => {
            try {
                input.value = eval(input.value);
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    input.value = "Error";
                } else {
                    throw e;
                }
            }
            keys.forEach(elem=> {
                input.classList.add("active");
            })
        }
        
    }
    else{
        elem.onclick = () => {
            if (input.classList.contains("active")){
                input.value = elem.innerHTML;
                input.classList.remove("active");

            }else{
                input.value += elem.innerHTML; 
            }  
        }
    }
})
