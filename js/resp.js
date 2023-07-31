sand = document.querySelector('.sand')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')


sand.addEventListener('click',()=>{
     rightnav.classList.toggle('v-class-resp');
     navlist.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
})