document.querySelector('button').addEventListener('click',myClick)
 
function myClick(){
    const a = document.getElementById('name').value;
    document.getElementById('res').innerHTML = a;
    const b = document.getElementById('res');
    localStorage.setItem("имя", a);
}