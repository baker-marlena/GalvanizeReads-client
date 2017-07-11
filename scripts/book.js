$(document).ready(function() {
  const API_URL = "http://localhost:3000/"

  $.get(`${API_URL}books`, data=>{
    console.log(data)
    data.forEach(book=>{
      let bookSource = $("#book-template").html();
      let bookTemplate = Handlebars.compile(bookSource);
      let bookContext = {
        "TITLE": book.title,
        "GENRE": book.genre,
        "DESCRIPTION": book.description,
        "COVER_URL": book.cover_url
      }
      console.log(bookContext)
      $(".book-list").append(bookTemplate(bookContext))
    })
  })
})
