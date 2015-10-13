var obj = {
    arr : [0, 1, 2, 53425],
    func : function () {
        obj.arr = [];
        alert(obj.arr[3]);
    },
    func2 : function () { alert("retek"); }
}

f = function () { alert("retek111"); }

f2 = function () {
    $.each($(".h4class"), function (k, v) {
        alert(k + " - " + v.innerHTML);
    });

}
