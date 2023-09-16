var currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
var displayUser = document.getElementById("displayUser");
if(displayUser){
    displayUser.textContent= "Wellcome "+ currentUser.NAME ;
}

const body = document.querySelector('body');

body.onload = searchArea;


function searchArea() {
    document.getElementById('searchItems').style.display = 'block';
    document.getElementById('addItems').style.display = 'none';
    document.getElementById('updateItems').style.display = 'none';
    document.getElementById('deleteItems').style.display = 'none';
}


function search_items() {
    document.getElementById('searchItems').style.display = 'block';
    document.getElementById('addItems').style.display = 'none';
    document.getElementById('updateItems').style.display = 'none';
    document.getElementById('deleteItems').style.display = 'none';

}



function add_items() {
    document.getElementById('searchItems').style.display = 'none';
    document.getElementById('addItems').style.display = 'block';
    document.getElementById('updateItems').style.display = 'none';
    document.getElementById('deleteItems').style.display = 'none';

}

function update_items() {
    document.getElementById('searchItems').style.display = 'none';
    document.getElementById('addItems').style.display = 'none';
    document.getElementById('updateItems').style.display = 'block';
    document.getElementById('deleteItems').style.display = 'none';

}

function delete_items() {
    document.getElementById('searchItems').style.display = 'none';
    document.getElementById('addItems').style.display = 'none';
    document.getElementById('updateItems').style.display = 'none';
    document.getElementById('deleteItems').style.display = 'block';

}

// var search_items = document.getElementById("search_items");
var add_items = document.getElementById("add_items");
// var update_items = document.getElementById("update_items");
// var delete_items = document.getElementById("delete_items");

function add(){
    var add_items = add_items.value;

}





























function logout(){
    localStorage.removeItem("currentUser");
    location.href = "../signup.html";
    
}