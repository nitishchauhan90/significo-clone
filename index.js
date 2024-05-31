function homepageAnimation(){
    gsap.set(".homeline",{
        scale:4,
    })
    var tl = gsap.timeline({   // create timeline so multiple animation work together 
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub:1
        },
    })
    tl.to(".video",{          //class video div ke css --clip ko handle ker rhe hai scrolltrigger used to do with scrolling
        '--clip':"0%",
        ease:Power2,
    },'a')
    
    .to(".homeline",{          //class homeline ko scale 3 se 1 pe lejana hai
        scale:1,
        ease:Power2,
    },'a')              //passing a as a flag in single courts to specify that these function work together
    
    
    .to(".lft",{         
        xPercent:-10,
        stagger:0.3,
        ease:Power3,
    },'b') 
    
    .to(".rgt",{          
        xPercent:10,
        stagger:0.3,
        ease:Power3,
    },'b')
}
function realpageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom top",
            scrub:1
        },
        xPercent:-200,
        ease:Power4
    })
}
function teamAnimation(){
    document.querySelectorAll(".listitem").forEach((el)=>{
        el.addEventListener("mousemove",function(dets){
            
            gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX)
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                x: gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),    //utils.mapRange is used to  map the mouse postion to our desired range
                // y: gsap.utils.mapRange(0,120,-20,20,dets.clientY),
                ease:Power4,
                duration:0.5
            })
        })
        el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease:Power4,
                duration:0.5
            })
        })
    })
}
function paraAnimation(){
    var clutter="";
    document.querySelector(".textanimate").textContent.split("").forEach((e)=>{
        if( e === " ") clutter += `<span>&nbsp;</span>`
        clutter +=`<span>${e}</span>` 
    })
    document.querySelector(".textanimate").innerHTML=clutter;
    gsap.set(".textanimate span",{
        opacity:.1
    })
    gsap.to(".textanimate span",{
        scrollTrigger:{
            trigger:".para",
            start:"top 60%",
            end:"bottom 90%",
            scrub:1
        },
        opacity:1,
        stagger:.03,           //stagger is used to animate one after one each letter
        ease:Power4
    })
}
function locomotive(){    
    (function () {
        const locomotiveScroll = new LocomotiveScroll();       //for smooth scrolling
    })
}
function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:20,
        ease:Power4
    })
}
function bodyColorChange(){
    document.querySelectorAll(".section").forEach((e)=>{
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            onEnter:function(){
                document.body.setAttribute("theme",e.dataset.color)
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color)
            }
        })
    })
}
// var btn="";
// document.querySelector(".btnhover").textContent.split("").forEach((e)=>{
//     if(e===" ") btn += `<span>&nbsp;</span>`
//     btn += `<span>${e}</span>`
// })
// document.querySelector(".btnhover").innerHTML=btn;
// gsap.set(".btnhover",{
//     yPercent:-70,
// })

bodyColorChange();
locomotive()
paraAnimation();
teamAnimation();
realpageAnimation();
capsuleAnimation();  
homepageAnimation();