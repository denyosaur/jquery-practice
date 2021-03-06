// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log("Let’s get ready to party with jQuery!");
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");
// Remove the last paragraph in the article.
$("article p").last().remove();
// Set the font size of the title to be a random pixel size from 0 to 100.
let randomNum = Math.floor((Math.random() * 100) + 1);
$("h1").css(
    "font-size", `${randomNum}px`
)
// Add an item to the list; it can say whatever you want.
$("ol").append($("<li>", { text: "This is a new LI" }));
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append($("<p>", { text: "Sorry for the list’s existence" }));

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$("input").on("keyup", function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css(
        "background-color", `rgb(${red},${blue},${green})`
    )
})
// Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on("click", function () {
    $(this).remove();
})
