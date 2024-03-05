const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  axios
    .get("https://crudcrud.com/api/4f30ef978b0a425d841666ca864aa4a6/todo")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function postTodo() {
  axios
    .post("https://crudcrud.com/api/4f30ef978b0a425d841666ca864aa4a6/todo", {
      title: "Meet Doctor",
      completed: false,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function putTodo() {
  axios
    .put(
      "https://crudcrud.com/api/4f30ef978b0a425d841666ca864aa4a6/todo/65e72f3c1d380403e8714923",
      {
        title: "Meet Doctor",
        completed: true,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function deleteTodo() {
  axios
    .delete(
      "https://crudcrud.com/api/4f30ef978b0a425d841666ca864aa4a6/todo/65e72f3c1d380403e8714923",
      {
        title: "Meet Doctor",
        completed: true,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
