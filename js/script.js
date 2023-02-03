function hapus() {
    document.getElementById("hasil").value = "";
}

function tampilan(value) {
    document.getElementById("hasil").value += value;
}
function hitung() {
    let p = document.getElementById("hasil").value;
    p = p.replace('%','/100')
    let q = eval(p);
    document.getElementById("hasil").value = q;
}
function backspace(){
    let z = document.getElementById("hasil").value
    z = z.slice(0, -1)
    document.getElementById("hasil").value = z
}