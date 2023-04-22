// resize navbar
let navbar = document.querySelector(".navbar")
//when the scroll is heigher than 20 viewport height, add the sticky classs along with navbar
window.onscroll=()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}
//skill animator
const skills_wrap = document.querySelector(".about-skills"),
    skills_bar=document.querySelectorAll(".progress-line")
    window.addEventListener("scroll",()=>{
        skillsEffect()
    })
    //every time we scroll checking , we exceeded the about-skills or not
    function checkScroll(el){
        //getting the top position of about-skills relative to view port, in other words
        //we need to get amount of pixels b/w about-skills and top edge of window
        let rect = el.getBoundingClientRect()
        
        //after knowing the amount of pixels between the top edge of about skilss and top edge of window
        //now we will check we exceeded the bottom edge of about skills or not
        //windows height>=element's top position +element's height
        if(window.innerHeight >= rect.top + el.offsetHeight)return true;
        return false;
               
    }
    function skillsEffect(){
        if(!checkScroll(skills_wrap)) return;
        skills_bar.forEach((skill)=>(skill.style.width=skill.dataset.progress))
    }
//=============== Portfolio Item Filter===================
const FilterContainer = document.querySelector(".portfolio-filter"),
filterBtns = FilterContainer.children
// console.log(filterBtns)
totalFilterBtn = filterBtns.length
PortfolioItems = document.querySelectorAll(".portfolio-item"),
totalPordtfolioItem = PortfolioItems.length
// console.log(totalPordtfolioItem)
for(let i=0;i<totalFilterBtn;i++)
{
    // console.log(filterBtns[i])
    filterBtns[i].addEventListener("click",function () 
    {
        // console.log(this.innerHTML)
        FilterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active")
        const filterValue = this.getAttribute("data-filter")
        // console.log(filterValue)
        for(let k=0;k<totalPordtfolioItem;k++)
        {
             if(filterValue===PortfolioItems[k].getAttribute("data-category"))
             {
                PortfolioItems[k].classList.remove("hide")
                PortfolioItems[k].classList.add("show")
             }
             else
             {
                PortfolioItems[k].classList.add('hide')
                PortfolioItems[k].classList.remove("show")
             }
             if (filterValue==="all") {
                PortfolioItems[k].classList.remove("hide")
                PortfolioItems[k].classList.add("show")
             } 
        }
    })
}

//===============Light Box=======================
const lightBox = document.querySelector(".lightbox"),
lightBoxImg=lightBox.querySelector(".lightbox-img"),
lightBoxText = lightBox.querySelector(".caption-text"),
lightBoxCounter = lightBox.querySelector(".caption-counter")
let itemIndex = 0
for(let i=0;i<totalPordtfolioItem;i++)
{
    // console.log(PortfolioItems[i])
    PortfolioItems[i].addEventListener("click",function () {
        // console.log(i)
        itemIndex=i
        changeItem()
        toggleLightBox()
    })
}
function nextItem() {
    if (itemIndex==totalPordtfolioItem-1) 
    {
        itemIndex=0
    } 
    else {    
           itemIndex++
        
    }
    // console.log(itemIndex)
    changeItem()
}
function prevItem() {
    if (itemIndex==0) {
        itemIndex=totalPordtfolioItem-1
    } else {       itemIndex--
        
    }
    // console.log(itemIndex)
    changeItem()
}
function toggleLightBox() {
    lightBox.classList.toggle("open")
}
function changeItem() {
    imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src")
    // console.log(imgSrc)
    lightBoxImg.src=imgSrc
    lightBoxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML
    lightBoxCounter.innerHTML=(itemIndex+1) + " of " + totalPordtfolioItem
}
//===================Close Light Box========================
const lightBoxClose = lightBox.querySelector(".lightbox-close")
lightBox.addEventListener("click",function (event) {
    // console.log(event.target)
    if(event.target===lightBoxClose || event.target===lightBox)
    {
        toggleLightBox()
    }
})

//===================Nav Toggler=======================
const navMenu = document.querySelector(".menu")
navToggle = document.querySelector(".menu-btn")
if(navToggle)
{
    navToggle.addEventListener("click",()=>{
        navMenu.classList.toggle("active")
    })
}
//closing menu when link is clicked
const navLink = document.querySelectorAll(".nav-link")
function linkAction(){
    const navMenu = document.querySelector(".menu")
    navMenu.classList.remove("active")
}
navLink.forEach(n=>n.addEventListener("click",linkAction))

//scroll section active link==================
const Section = document.querySelector('section[id]')
function scrollActive()
{
    const scrollY=window.pageYOffset
    Section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if (scrollY>sectionTop && scrollY <=sectionTop+sectionHeight)
        {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
        }
        else{
            document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll',scrollActive)

