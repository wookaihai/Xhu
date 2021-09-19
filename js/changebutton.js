function touchup(i) {
    var arr = document.getElementById(i);
    var brr = document.getElementById(i + 5);
    arr.innerHTML = "<i> 已赞同 234</i>";
    arr.style.backgroundColor = '#34ce34';
    arr.style.color = '#fff';
    brr.style.backgroundColor = '#e9ffe9';
    brr.style.color = '#34ce34'
}
function touchdown(i) {
    var arr = document.getElementById(i);
    var brr = document.getElementById(i - 5);
    arr.style.backgroundColor = '#34ce34';
    arr.style.color = '#fff'
    brr.innerHTML = "<i> 赞同 233</i>";
    brr.style.backgroundColor = '#e9ffe9';
    brr.style.color = '#34ce34';
}


