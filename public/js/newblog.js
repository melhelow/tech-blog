const newBlogForm = document.querySelector("#newblog-form");
const titleInput = document.querySelector("#input-title");
const contentInput = document.querySelector("#input-content");

newBlogForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // submit both using a fetch post request
    fetch("/api/blogs/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titleInput.value,
            content: contentInput.value
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = "/"
    })
})