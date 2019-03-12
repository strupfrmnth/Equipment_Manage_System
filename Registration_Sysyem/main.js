function Delete(num) {
    var tbody = document.getElementById("tb");
    Changenum(tbody, num);  //修改編號
    tbody.deleteRow(num-1);  //刪除本tr  
}
function Changenum(tbody, num) {
    if(tbody.children[num].innerHTML!="") {     //判斷刪除tr後面是否還有tr
        var tr = tbody.children[num];
        tr.children[0].innerHTML -= 1;
        var btn = tr.children[5].children[0];
        btn.setAttribute("onclick","Delete(" + tr.children[0].innerHTML.toString() + ")");
        Changenum(tbody, num+1);
    }
}
function ShowForm(td) {
    var edit_form = document.getElementById("edit");
    edit_form.style.display = "block";
    var tr = td.parentNode;
    var borrow_name = tr.children[1].innerHTML;
    var equip_name = tr.children[2].innerHTML;
    var number = tr.children[3].innerHTML;
    document.getElementById("borrow-name").value = borrow_name;
    document.getElementById("equip-name").value = equip_name;
    document.getElementById("number").value = number;
}
// when the user click outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("edit")) {
        document.getElementById("edit").style.display = "none";
    }
}
function HideForm() {
    document.getElementById("edit").style.display = "none";
}