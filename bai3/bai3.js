var id=0;
var total=0;
function myFunction1(){
    event.preventDefault();
    id++;
    var a = document.getElementById('na').value;
    var b = parseInt(document.getElementById('qu').value);
    var c = parseInt(document.getElementById('pr').value);
    var d = b*c;
    total +=d;
    var row= "<tr>";
    row += "<td>"+id+"</td>";
    row += "<td>"+a+"</td>";
    row += "<td>"+b+"</td>";
    row += "<td>"+c+"</td>";
    row += "<td>"+d+"</td>";
    row += "</tr>";
    document.getElementById('tbody').innerHTML +=row;
    document.getElementById('total').innerHTML =total;
}

