// Enter your code here: delete movies
const listItems = document.querySelectorAll('#movie-list ul li');
listItems.forEach(li => {
    li.querySelector(".delete").addEventListener("click", function () {
        li.remove();
    });
});

// Enter your code here: add movies
const form = document.querySelector("#add-movie");
let input = form.querySelector("input");
let button = form.querySelector("button");

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value.length > 0) {
        const list = document.querySelector('#movie-list ul');
        list.innerHTML +=
            `<li>
                <span class="name">${input.value}</span>
                <span class="delete">delete</span>
            </li>`;

        const listItems = document.querySelectorAll('#movie-list ul li');
        listItems.forEach(li => {
            li.querySelector(".delete").addEventListener("click", function () {
                li.remove();
            });
        });
    }
});


