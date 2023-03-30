const scriptURL = "https://script.google.com/macros/s/AKfycbzICw_FH_EJd2McZsXZerfRRTMmhX5mur11U24150Uq2iVLTP21GitnjAcOrNah7kMCtQ/exec";
const form = document.forms["comment-form"];
const commentsList = document.getElementById("comments-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      form.reset();
      fetchComments();
    })
    .catch((error) => console.error("Error!", error.message));
});

function fetchComments() {
  fetch(scriptURL + "?action=getComments")
    .then((response) => response.json())
    .then((data) => {
      commentsList.innerHTML = "";
      data.forEach((comment) => {
        var div = document.createElement("div");
        var name = comment.name;
        var commentText = comment.comment;
        var confirmed = comment.confirmed;
        var date = new Date(comment.timestamp);
        var dateString = date.toDateString();
        div.classList.add("comment-user");
        div.innerHTML = '<div class="username"><h4>' + name + '</h4></div><div class="status"><em>' + confirmed + "</em></div>";
        commentsList.appendChild(div);
        div = document.createElement("div");
        div.classList.add("comment-isi");
        div.innerHTML = "<p>" + commentText + '</p><div class="comment-date"><small>' + dateString + "</small></div><hr>";
        commentsList.appendChild(div);
      });
    })
    .catch((error) => console.error("Error!", error.message));
}

fetchComments();
