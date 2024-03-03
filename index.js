let tl=gsap.timeline();
tl.from("header",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1,
})
tl.from(".logo",{
    x:-100,
    duration:1,
    opacity:0,
})
tl.from(".navbar a",{
    y:-50,
    opacity:0,
    duration:0.4,
    stagger:0.3 
})
tl.from(".tbl_book",{
    y:-100,
    opacity:0,
    duration:0.8,
})
tl.from(".left-side,.right-side",{
    y:-50,
    duration:0.8,
    stagger:0.2,
    opacity:0

})
