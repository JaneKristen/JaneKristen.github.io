// Select Elements from the DOM
const questions = document.querySelectorAll('.question');

//Loop through all the elements and add an event listener to them
questions.forEach((question)=>
 question.addEventListener('click',()=>{
  if(question.parentNode.classList.contains('active')){
    question.parentNode.classList.toggle('active');
  }else{
    questions.forEach((question)=> question.parentNode.
    classList.remove('active'))
    question.parentNode.classList.add('active');
  }
})
);

const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=>{
    //Toggle nav
    nav.classList.toggle('nav-active');
    //Animate navLinks
    navLinks.forEach((link,index) => {
      if (link.style.animation){
        link.style.animation = '';
      } else{
        link.style.animation='navLinkFade 0.5s ease forwards ${index / 7 +1.5}s';
      }
    });
    //Burger animation
    burger.classList.toggle('toggle');
  });
}
navSlide();
