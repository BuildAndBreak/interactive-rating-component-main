//Hides the div with the id #thanks-container
document.querySelector("#thanks-container").classList.add("hide");

let clickedNum = null;
const ratingNumbers = document.querySelectorAll("li");

ratingNumbers.forEach((liElement) => {
  liElement.addEventListener("click", function () {
    clickedNum = this.innerHTML;

    // Remove 'pressed' class from all elements
    ratingNumbers.forEach((li) => {
      li.classList.remove("pressed");
    });

    // Add 'pressed' class to the clicked element
    liElement.classList.add("pressed");
  });
});

document.querySelector("#submit").addEventListener("click", function () {
  if (clickedNum !== null) {
    // Hide the rating container and show the 'thank-you' container
    document.querySelector("#rating-container").classList.add("hide");
    document.querySelector("#thanks-container").classList.remove("hide");

    // Display the selected rating in the 'thank-you' message
    document.querySelector(
      "#rating"
    ).innerHTML = `You selected ${clickedNum} out of 5`;
  }
});
