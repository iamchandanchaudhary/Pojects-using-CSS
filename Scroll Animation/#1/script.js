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

hiddenElementsO.forEach((e1) => observer.observe(e1));
hiddenElementsE.forEach((e1) => observer.observe(e1));