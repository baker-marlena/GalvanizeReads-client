
  const API_URL = "https://shrouded-spire-22810.herokuapp.com/"
  let id = parseQueryString(window.location.search)

  $.get(`${API_URL}book/${id}`, (result) => {
    $("#editTitle").val(result.title)
    $("#editGenre").val(result.genre)
    $("#editCover_url").val(result.cover_url)
    $("#editDescription").val(result.description)
  })

  $("#editbook-form").submit((event)=>{
    event.preventDefault();
    let book = {
      title: validateTitle(),
      genre: validateGenre(),
      cover_url: validateURL(),
      description: validateDescription()
  }
    if (book.title == false || book.genre == false || book.cover_url == false || book.description == false) {
      alert("Please make sure the form is complete with a valid URL before submitting.")
    }
    else{
      sendBook(book);
    }
  })

function parseQueryString(query) {
  let parse = query.substring(1).split('=')
  return parse[1];
}

function sendBook(book) {
  $.ajax({
    url: `${API_URL}editbook/${id}`,
    type: 'PUT',
    data: book,
    sucess: () => {
      alert("Book Updated Sucessfully!")
  }
  })
}

function validateTitle(){
  let title = $("#editTitle").val()
  let validTitle = title.trim() !== ""
  if (validTitle == true) {
    return title;
  }
  return validTitle;
}

function validateGenre(){
  let genre = $("#editGenre").val()
  let validGenre = genre.trim() !== ""
  if (validGenre == true) {
    return genre;
  }
  return validGenre;
}

function validateURL(){
  let url = $("#editCover_url").val()
  let urlTest = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
  let existsURL = url.trim() !== ""
  let validURL = urlTest.test(url);
  if (validURL == true && existsURL == true) {
    return url;
  }
  return validURL;
}

function validateDescription(){
  let description = $("#editDescription").val()
  let validDescription = description.trim() !== ""
  if (validDescription == true) {
    return description;
  }
  return validDescription;
}
