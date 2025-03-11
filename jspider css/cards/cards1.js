// var tl = gsap.timeline();




// tl.from("img",{
   
//     duration:1,
   
//      scale:2,
//     opacity:100,
//     stagger:0.1,
   
// })


// tl.from("h4",{
   
//     duration:1,
//     delay:1,
//     duration:1,
//     scale:2,
//     opacity:10,
//     stagger:0.1,
   
// })

// tl.from("button",{
//     x:-500,
//     duration:1,
//     delay:1,
//     duration:1,
//     scale:2,
//     opacity:20,
//     stagger:0.1,
   
// })

document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const colorText = document.querySelector("p");
    const productImage = document.querySelector("img");

    input1.addEventListener("click", function () {
        colorText.innerHTML = "<b>color</b> / Deep Blue";
        productImage.src = "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/r/u/9/-original-imah5wxnktvffhgq.jpeg?q=70"; // Replace with actual image URL
    });

    input2.addEventListener("click", function () {
        colorText.innerHTML = "<b>color</b> / Gold";
        productImage.src = "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/z/t/-original-imah7hynztfzdgp9.jpeg?q=70"; // Replace with actual image URL
    });

    input3.addEventListener("click", function () {
        colorText.innerHTML = "<b>color</b> / Silver";
        productImage.src = "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/k/z/galaxy-a05-sm-a055fzsdins-samsung-original-imagvvwmswfznsgy.jpeg?q=70"; // Replace with actual image URL
    });
});
