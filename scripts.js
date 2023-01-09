var button = document.querySelector(".submit-btn").addEventListener("click", function () {
    var title = document.querySelector("#display1").value
    var note = document.querySelector("#display2").value
    console.log(title)
    console.log(note)
    var obj = {
        title:title, note:note
    }
    console.log(obj);
});
noteArray= emptyArray