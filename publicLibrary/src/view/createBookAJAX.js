function createBookAJAX() 
{
    var container = document.getElementById("contentContainer");
    container.textContent = "";
    Book.loadAll();
    var form = "<form id='Book'><p><label>ISBN: <input name='isbn'/></label></p><p><label>Title: <input name='title'/></label></p><p><label>Year: <input name='year'/></label></p><p><button type='button' onclick='saveBook()'>Save</button></p>";
    container.insertAdjacentHTML('beforeend', form);
}
function saveBook()
{
    var formEl = document.forms['Book'];
    var slots = {isbn: formEl.isbn.value, 
        title: formEl.title.value,
        year: formEl.year.value};
    Book.add(slots);
    Book.saveAll();
    formEl.reset();
}