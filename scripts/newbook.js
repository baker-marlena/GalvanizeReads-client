$(document).ready(function() {
  const API_URL = "https://shrouded-spire-22810.herokuapp.com/"

  // $.get(`${API_URL}newbook`, (data) => {
  //   data.forEach(author=>{
  //     let authorSource = $("#author-list-template").html();
  //     let authorTemplate = Handlebars.compile(authorSource);
  //     let authorContext = {
  //       "NAME": author.name,
  //     }
  //     $("#author-selector").append(authorTemplate(authorContext))
  //   })
  // })

  $("#add-author-button").click((event) => {
    event.preventDefault();
    let authorList = $("#authors")
    $("#authors").append(`<li>${$("#author-selector").val()}</li>`)
  })

  $("#newbook-form").submit((event)=>{
    event.preventDefault();
    let title = validateTitle();
    let genre = validateGenre();
    let cover_url = validateURL();
    let description = validateDescription();
    if (title == false || genre == false || cover_url == false || description == false) {
      alert("Please make sure the form is complete with a valid URL before submitting.")
    }
    else{
      let authors = $("#authors");
    }
  })

  function validateTitle(){
    let title = $("#title").val()
    let validTitle = title.trim() !== ""
    if (validTitle == true) {
      return title;
    }
    return validTitle;
  }

  function validateGenre(){
    let genre = $("#genre").val()
    let validGenre = genre.trim() !== ""
    if (validGenre == true) {
      return genre;
    }
    return validGenre;
  }

  function validateURL(){
    let url = $("#cover_url").val()
    console.log(url)
    let urlTest = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    let existsURL = url.trim() !== ""
    let validURL = urlTest.test(url);
    if (validURL == true && existsURL == true) {
      return url;
    }
    return validURL;
  }

  function validateDescription(){
    let description = $("#description").val()
    let validDescription = description.trim() !== ""
    if (validDescription == true) {
      return description;
    }
    return validDescription;
  }
})
