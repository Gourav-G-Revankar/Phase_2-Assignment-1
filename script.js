var table = document.createElement("table");
for (var i = 0; i < 8; i++) {
    /*----------row----------*/
    var tr = document.createElement('tr');
    for (var j = 0; j < 8; j++) {
        /*----------col----------*/
        var td = document.createElement('td');
        if (i%2 == j%2) {
            /*---if equal(0==0 or 1==1)---*/
            td.className = "white";
        } else {
            /*---if not equal(0==1 or 1==0)---*/
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);