// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitud = 0;

    //Buttons
   const takeOffButton = document.getElementById('takeoff');
   const landButton = document.getElementById('landing');
   const abortButton = document.getElementById('missionAbort');


   //Areas
   const flightStatus = document.getElementById('flightStatus');
   const shuttleBackground = document.getElementById('shuttleBackground');
   const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

   //Rocket Img
   const rocket = document.getElementById('rocket');


   takeOffButton.addEventListener("click", function() {
    let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff");
    if(shouldTakeOff) {
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleBackground.style.backgroundColor = "blue";
        altitud = 10000;
        spaceShuttleHeight.innerHTML = altitud;
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + "px";
    }
   });

   landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
   });


   abortButton.addEventListener("click", function(){
    let shouldAbort = confirm("Confirm that you want to abort the mission.");
    if(shouldAbort) {
        flightStatus.innerHTML = "Mission aborted.";
        resetRocket(); 
    }
   });

   document.addEventListener("click", function(event){
    if(event.target.id === "up" && altitud < 250000) {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + "px";
        altitud += 10000;
        spaceShuttleHeight.innerHTML = altitud;
    }
    if(event.target.id === "down" && altitud > 0) {
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + "px";
        altitud -= 10000;
        spaceShuttleHeight.innerHTML = altitud;
    }
    if(event.target.id === "right") {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + "px";
    }
    if(event.target.id === "left") { 
        rocketPosX -= 10; 
        rocket.style.marginLeft = rocketPosX + "px"; 
    }
   });


   function resetRocket() {
    shuttleBackground.style.backgroundColor = "green";
    altitud = 0;
    spaceShuttleHeight.innerHTML = altitud;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + "px";
    rocket.style.marginBottom = rocketPosY + "px";
   }


});