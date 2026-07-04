
console.log("js is running");

let tabs = document.querySelectorAll(".tabs label");
let foods = document.querySelectorAll(".card");
let currentsec = "all";
let italian = document.getElementById("card italian")
let chinese = document.getElementById("card chinese")
let desi = document.getElementById("card desi")
let french = document.getElementById("card french")
let searchbar = document.getElementById("search")

tabs.forEach(tab => {
    tab.addEventListener("click", function () {


        tabs.forEach(t => {
            t.style.background = "";
            t.style.color = "";
        });


        this.style.background = "#94a878";
        this.style.color = "white";

        currentsec = this.id;
        console.log(currentsec);

        foods.forEach(card => {
            if (currentsec === "all" || card.classList.contains(currentsec)) {
                card.style.display = "block"
            }
            else {
                card.style.display = "none"
            }
        })

    });
});


searchbar.addEventListener("keyup", function () {
    let query = searchbar.value.toLowerCase().trim();
})