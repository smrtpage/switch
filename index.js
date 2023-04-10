const HomeLink = document.getElementById("home-link");
const AboutLink = document.getElementById("about-link");
const ContactLink = document.getElementById("contact-link");
const textContent = document.getElementById("content");
const imgContent = document.getElementById("img-content");

document.addEventListener("DOMContentLoaded", ()=>{
    textContent.innerText = "lorem ipsum dolor sit amen ancular tu cre";
    HomeLink.classList.add("active");
    ContactLink.classList.remove("active");
    AboutLink.classList.remove("active");
    imgContent.style.display = "none"
});

HomeLink.addEventListener("click", ()=>{
    textContent.innerText = "lorem ipsum dolor sit amen ancular tu cre";
    HomeLink.classList.add("active");
    ContactLink.classList.remove("active");
    AboutLink.classList.remove("active");
    imgContent.style.display = "none"
});

AboutLink.addEventListener("click", ()=>{
    textContent.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed. Nulla facilisi cras fermentum odio eu feugiat pretium. Commodo quis imperdiet massa tincidunt nunc. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Sapien et ligula ullamcorper malesuada proin libero. Integer eget aliquet nibh praesent tristique magna. Varius sit amet mattis vulputate enim. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Laoreet sit amet cursus sit amet. Elementum curabitur vitae nunc sed velit dignissim.";
    AboutLink.classList.add("active");
    HomeLink.classList.remove("active");
    ContactLink.classList.remove("active");
    imgContent.style.display = "none"
});


ContactLink.addEventListener("click", ()=>{
    textContent.innerText = "Our number: 32772387827";
    AboutLink.classList.remove("active");
    HomeLink.classList.remove("active");
    ContactLink.classList.add("active");
    imgContent.style.display = "block";
});
