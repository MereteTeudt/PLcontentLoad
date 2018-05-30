function updateBookAJAX() 
{
    var container = document.getElementById("contentContainer");
    container.textContent = "";
    var form = "<form id='Book'><div class='form-group'>" + 
    "<label>Select book: <select name='selectBook'><option value=''> --- </option></select></label></div>" + 
    "<div class='form-group'><label>ISBN: <input name='isbn' readonly='readonly' /></label></div>" + 
    "<p><label>Title: <input name='title' /></label></p>" + 
    "<p><label>Year: <input name='year'/></label></p>" + 
    "<p><button type='button' onclick='saveChanges()'>Save Changes</button></p></form>"

    container.insertAdjacentHTML('beforeend', form);

    var formEl = document.forms['Book'],
    selectBookEl = formEl.selectBook;
var i=0, key="", keys=[], book=null, optionEl=null; 
// load all book objects
Book.loadAll();
// populate the selection list with books
keys = Object.keys(Book.instances);
for (i=0; i < keys.length; i++)
{
    key = keys[i];
    book = Book.instances[key];
    optionEl = document.createElement("option");
    optionEl.text = book.title;
    optionEl.value = book.isbn;
    selectBookEl.add(optionEl, null);
}
selectBookEl.addEventListener("change", function()
        {
        var book=null, key = selectBookEl.value;
        if(key) 
        {
            book = Book.instances[key];
            formEl.isbn.value = book.isbn;
            formEl.title.value = book.title;
            formEl.year.value = book.year;
        }
        else 
        {
            formEl.isbn.value = "";
            formEl.title.value = "";
            formEl.year.value = ""; 
        }
    });
}
function saveChanges()
{
    var formEl = document.forms['Book'];
    var slots = { isbn: formEl.isbn.value,
        title: formEl.title.value,
        year: formEl.year.value};
    Book.update(slots);
    Book.saveAll();
    formEl.reset();
}