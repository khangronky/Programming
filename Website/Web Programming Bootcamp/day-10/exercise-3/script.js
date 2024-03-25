document.querySelector("#item-list").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") e.target.classList.toggle("completed");
});
