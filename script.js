
const form = document.getElementById("commentForm");
const commentList = document.getElementById("comment-list");
const count = document.getElementById("comment-count");

let totalComment = 0;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const message =
    document.getElementById("message").value;

    const comment =
    document.createElement("div");

    comment.classList.add("comment-item");

    comment.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
    `;

    commentList.prepend(comment);

    totalComment++;

    count.textContent =
    `(${totalComment})`;

    form.reset();

});
