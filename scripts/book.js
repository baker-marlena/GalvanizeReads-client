$(document).ready(function() {
  const API_URL = "https://shrouded-spire-22810.herokuapp.com/"

$.get(`${API_URL}books`, data=>{
    data.forEach(book=>{
      let bookSource = $("#book-template").html();
      let bookTemplate = Handlebars.compile(bookSource);
      let bookContext = {
        "TITLE": book.title,
        "GENRE": book.genre,
        "DESCRIPTION": book.description,
        "COVER_URL": book.cover_url,
        "ID": book.id
      }
      $(".book-list").append(bookTemplate(bookContext))
      $(`.edit-${book.id}-button`).click((event) => {
        window.location.replace(`editbook.html?id=${book.id}`)
      })
      $(`.delete-${book.id}-button`).click((event) => {
        deleteBook(book.id, API_URL);
      })
    })
  })
})

function deleteBook(id, url) {
  console.log("delete firing")
  $.ajax({
    url:`${url}delete/${id}`,
    type: 'DELETE'
  })
  .then(()=>{
    window.location.reload();
  })
}
