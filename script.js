var ballBtn = document.getElementById("8-ball");
var answerOutEl = document.getElementById("answer");

ballBtn.addEventListener("click", magic8Ball);

function magic8Ball() {
  var userQuestion = document.getElementById("question").value.toLowerCase();
  var randResponse = Math.floor(Math.random() * 6 + 1);

  if (userQuestion == "") {
    answerOutEl.innerHTML = `Please ask a question`;
  } else if (
    userQuestion == "does a magic 8 ball actually work?" ||
    userQuestion == `does a magic 8 ball actually work`
  ) {
    answerOutEl.innerHTML = `How DARE you question ME!`;
  } else if (
    userQuestion == "what's javascript?" ||
    userQuestion == `what's javascript`
  ) {
    answerOutEl.innerHTML = `Look it up at wikipedia or something`;
  } else {
    if (randResponse == 1) {
      answerOutEl.innerHTML = `Without a Doubt.`;
    } else if (randResponse == 2) {
      answerOutEl.innerHTML = `As I see it, yes.`;
    } else if (randResponse == 3) {
      answerOutEl.innerHTML = `Concentrate and ask again.`;
    } else if (randResponse == 4) {
      answerOutEl.innerHTML = `Don't count on it`;
    } else if (randResponse == 5) {
      answerOutEl.innerHTML = `Outlook not so good`;
    }
  }
}
