<<<<<<<< HEAD:bai1/bai1.js
var id=0;
function myFunction1(){
    event.preventDefault();
    id++;
    var a = document.getElementById('na').value;
    var b = parseInt(document.getElementById('qu').value);
    var c = parseInt(document.getElementById('un').value);
    var d = parseInt(document.getElementById('di').value);
    var e = b*c*(1-d/100);
    var row= "<tr>";
    row += "<td>"+id+"</td>";
    row += "<td>"+a+"</td>";
    row += "<td>"+b+"</td>";
    row += "<td>$"+c+"</td>";
    row += "<td>"+d+"</td>";
    row += "<td>$"+e+"</td>";
    row += "</tr>";
    document.getElementById('tbody').innerHTML +=row;
}
========
>>>>>>>> b36357a0fc30014cf74d74877b917e5e8d098d92:bai3/bai3.js
