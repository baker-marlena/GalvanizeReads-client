$(document).ready(function() {
  const API_URL = "https://shrouded-spire-22810.herokuapp.com/"
  let id = parseQueryString(window.location.search)

$.get(`${API_URL}book/${id}`, data=>{
      let bookSource = $("#single-book-template").html();
      let bookTemplate = Handlebars.compile(bookSource);
      let bookContext = {
        "TITLE": data.title,
        "GENRE": data.genre,
        "DESCRIPTION": data.description,
        "COVER_URL": data.cover_url,
        "ID": data.id
      }
      $(".book-list").append(bookTemplate(bookContext))
      $(`.delete-${data.id}-button`).click((event) => {
        deleteBook(data.id, API_URL);
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
    window.location = "books.html"
  })
}

function parseQueryString(query) {
  let parse = query.substring(1).split('=')
  return parse[1];
}
