function calculateResult() {
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;
    const q6 = document.querySelector('input[name="q6"]:checked')?.value;
    const q7 = document.querySelector('input[name="q7"]:checked')?.value;
    const q8 = document.querySelector('input[name="q8"]:checked')?.value;
    const q9 = document.querySelector('input[name="q9"]:checked')?.value;
    const q10 = document.querySelector('input[name="q10"]:checked')?.value;
  
    let elevenScore = 0;
    let mikeScore = 0;
    let dustinScore = 0;
    let lucasScore = 0;
  
    if (q1 === "loyal") mikeScore++;
    if (q1 === "curious") dustinScore++;
  
    if (q2 === "gaming") mikeScore++;
    if (q2 === "exploring") elevenScore++;
  
    if (q3 === "losing") mikeScore++;
    if (q3 === "monsters") lucasScore++;
  
    if (q4 === "red") elevenScore++;
    if (q4 === "blue") lucasScore++;
  
    if (q5 === "leader") mikeScore++;
    if (q5 === "brain") dustinScore++;
  
    if (q6 === "calm") elevenScore++;
    if (q6 === "panic") lucasScore++;
  
    if (q7 === "arcade") dustinScore++;
    if (q7 === "forest") elevenScore++;
  
    if (q8 === "telekinesis") elevenScore++;
    if (q8 === "super_strength") lucasScore++;
  
    if (q9 === "curious") dustinScore++;
    if (q9 === "scared") mikeScore++;
  
    if (q10 === "fight") elevenScore++;
    if (q10 === "run") mikeScore++;
  
    let result = "";
    if (
      elevenScore >= mikeScore &&
      elevenScore >= dustinScore &&
      elevenScore >= lucasScore
    ) {
      result = "You are Eleven!";
    } else if (
      mikeScore >= elevenScore &&
      mikeScore >= dustinScore &&
      mikeScore >= lucasScore
    ) {
      result = "You are Mike!";
    } else if (
      dustinScore >= mikeScore &&
      dustinScore >= elevenScore &&
      dustinScore >= lucasScore
    ) {
      result = "You are Dustin!";
    } else if (
      lucasScore >= mikeScore &&
      lucasScore >= elevenScore &&
      lucasScore >= dustinScore
    ) {
      result = "You are Lucas!";
    }
  
    document.getElementById("result").innerText = result;
  }
  