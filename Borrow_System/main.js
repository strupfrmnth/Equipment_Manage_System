function checkForm() {
    oform = document.forms['formPost'];
    if(oform.elements["contact-num"].value.length!=10) {
        alert("請輸入正確手機號碼")
        return false;
    }
    if(!Number.isInteger(oform.elements["number"].value) || oform.elements["number"].value.length>2) {
        alert("請輸入正確數量")
        return false;
    }
    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    if(!filter.test(oform.elements["email"].value)) {
        alert("請輸入正確電子郵件")
        return false;
    }
}