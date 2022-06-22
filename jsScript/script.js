var typed = new Typed(".typing",{
    strings:["","Web designer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    toyalNavList = navList.length;
    for(let i=0; i<toyalNavList; i++){
        
        const a=navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j=0; j<toyalNavList;j++){
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")

        })
    }
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".navbar");
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })
    function  asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        
    }