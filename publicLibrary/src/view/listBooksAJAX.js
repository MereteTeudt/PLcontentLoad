//En funktion der tager fat i vores book instancer 
function listBooksAJAX()
{
    var container = document.getElementById("contentContainer");
    container.textContent = "";
    //Load bøger
    Book.loadAll();
    keys = Object.keys(Book.instances);
    //Check om bøger er loadet
    if(Book.instances)
    {
        //Hvis de er loadet, så vil vi gerne have fat i et element på index siden
        //Og putte vores data ind i dette element
        var table = "<table class='table'><tr><th>ISBN</th><th>TITLE</th><th>YEAR</th></tr>";
        for (i=0; i < keys.length; i++)
        {
            key = keys[i];
            //alert(key);
            var isbn = Book.instances[key].isbn;
            //alert(isbn);
            table += "<tr><td>" + Book.instances[key].isbn +
            "</td><td>" + Book.instances[key].title + 
            "</td><td>" + Book.instances[key].year + "</td></tr>";
        }
        table += "</table>";
        container.insertAdjacentHTML('beforeend', table);
    }
    else
    {
        alert("not loaded");
    }
}
