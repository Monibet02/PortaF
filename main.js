let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:130F7E;">Soy estudiante de ISC, estoy en un curso de Front-end junior.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
