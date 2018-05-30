function deleteBookAJAX() 
{
    var container = document.getElementById("contentContainer");
    container.textContent = "";
    var form = "<form id='Book'><p>" + 
    "<label>Select book:<select name='selectBook'>" + 
    "<option value=''> --- </option></select></label></p>" + 
    "<p><button type='button' onclick='deleteBook()'>Delete</button>" +
    "</p></form>";

    container.insertAdjacentHTML("beforeend", form);

    var selectEl = document.forms['Book'].selectBook;
        var i=0, key="", keys=[], book=null, optionEl=null;
        //load all book objects
        Book.loadAll();
        keys = Object.keys(Book.instances);
        //populate the selection list with books
        for (i=0; i < keys.length; i++)
        {
            key = keys[i];
            book = Book.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = book.title;
            optionEl.value = book.isbn;
            selectEl.add(optionEl, null);
        }
}
function deleteBook()
{
    var selectEl = document.forms['Book'].selectBook;
        var isbn = selectEl.value;
        if(isbn)
        {
            Book.destroy(isbn);
            selectEl.remove(selectEl.selectedIndex);
            console.log("deleted");
        }
        Book.saveAll(); 
}