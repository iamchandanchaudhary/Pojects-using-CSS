const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElementsO = document.querySelectorAll(".not-show-odd");
const hiddenElementsE = document.querySelectorAll(".not-show-even");
const hiddenElementsP = document.querySelectorAll(".not-show-pop");
const hiddenElementsT = document.querySelectorAll(".not-show-top");
const hiddenElementsB = document.querySelectorAll(".not-show-bottom");
const hiddenElementsR = document.querySelectorAll(".not-show-right");
const hiddenElementsL = document.querySelectorAll(".not-show-left");

hiddenElementsO.forEach((e1) => observer.observe(e1));
hiddenElementsE.forEach((e1) => observer.observe(e1));
hiddenElementsP.forEach((e1) => observer.observe(e1));
hiddenElementsT.forEach((e1) => observer.observe(e1));
hiddenElementsB.forEach((e1) => observer.observe(e1));
hiddenElementsR.forEach((e1) => observer.observe(e1));
hiddenElementsL.forEach((e1) => observer.observe(e1));