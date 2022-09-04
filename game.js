let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    
    // variables
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const boundaries = document.getElementsByClassName("boundary");
    const status = document.getElementById("status");
    let score = 0 ;

    // functions
    function color(list) {
      for (let i = 0; i< list.length; i++){
        list[i].style.borderColor = "red"; };
    };

    function resetBorder(list) {
      for (let i = 0; i< boundaries.length; i++){
        boundaries[i].style.borderColor = "black";
      }
    };

    function refresh() {
      start.addEventListener("click", ()=>{
        window.location.reload();  
        });
    };
    
    // greeding user
    var name = prompt("Enter your name");  
    //var save = prompt("Do you want to save your score? (Y)es or (N)o").toLowerCase
    if (name != null) {  alert("Welcome " + name);} ; 

    // start the game 
    start.addEventListener("mouseover", mouseOver) ;
    function mouseOver() {
      let start_counter = 0;
      let boundary_counter = 0;
      let end_counter = 0;
      // counter is a variable set to make sure the end button and borders are hoovered once after hoovering the start 
      start_counter +=1 ;
      // colors borders when hoovered , with the example div
      const boundaries1 = document.querySelectorAll(".boundary");
      boundaries1.forEach(boundary => {
        boundary.addEventListener("mouseover", mouseOver) ;
        function mouseOver() {
          boundary_counter += 1;
          if (boundary_counter == start_counter) { 
            score = score -10;
            status.textContent = "You lost! Your score is " + score;
            color(boundaries);
            start_counter = 0;
            boundary_counter = 0;
          };
        }; 
      });
      // reset the colors of the boundries
      resetBorder(boundaries)
      // end game
      end.addEventListener("mouseover", mouseOver) ;
      function mouseOver() {
        end_counter += 1; 
        if (end_counter == start_counter) {
          score = score + 5;
          status.textContent = "You Won! Your score is " + score;
          start_counter = 0;
          end_counter = 0;
        };
      };
    // refresh the page on start click
    refresh();
  };
  };
}, 100);


  






