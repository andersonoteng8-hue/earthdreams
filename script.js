function playVideo(id){
 document.getElementById("heroVideo").src =
 `https://www.youtube.com/embed/${id}?autoplay=1`;
}

function toggleTheme(){
 document.body.classList.toggle("light");
 document.body.classList.toggle("dark");
}

function toggleVideos(){
 const m=document.getElementById("movies");
 m.style.display=m.style.display==="none"?"grid":"none";
}

function scrollToSection(id){
 document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
