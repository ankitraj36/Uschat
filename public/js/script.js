document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll("button");

  for (let btn of btns) {
    btn.addEventListener("click", () => {
      console.log("button is clicked");
    });
  }
});
