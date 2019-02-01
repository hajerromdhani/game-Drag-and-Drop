function drag01(ev) {
    ev.currentTarget.style.border = "dashed";
    ev.dataTransfer.setData("text1", ev.target.id)
}
function dragover01(ev) {
    ev.preventDefault();
}
function drop01(ev) {
    ev.preventDefault();
    console.log(ev.target.parentElement.id);
    var data = ev.dataTransfer.getData("text1");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
    var s = document.getElementById("score")
    if (ev.target.parentElement.id == "name-fruit")
        s.innerHTML--
    else
        s.innerHTML++
}
function drag02(ev) {
    ev.currentTarget.style.border = "dashed";
    ev.dataTransfer.setData("text2", ev.target.id);
}
function dragover02(ev) {
    ev.preventDefault();
}
function drop02(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text2");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
    var s = document.getElementById("score")
    if (ev.target.parentElement.id == "name-fruit")
        s.innerHTML--
    else
        s.innerHTML++
}

function drag03(ev) {
    ev.currentTarget.style.border = "dashed";
    ev.dataTransfer.setData("text3", ev.target.id);
}
function dragover03(ev) {
    ev.preventDefault();
}
function drop03(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text3");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
    var s = document.getElementById("score")
    if (ev.target.parentElement.id == "name-fruit")
        s.innerHTML--
    else
        s.innerHTML++
}

function drag04(ev) {
    ev.currentTarget.style.border = "dashed";
    ev.dataTransfer.setData("text4", ev.target.id);
}
function dragover04(ev) {
    ev.preventDefault();
}
function drop04(ev) {
    var data = ev.dataTransfer.getData("text4");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
    var s = document.getElementById("score")
    if (ev.target.parentElement.id == "name-fruit")
        s.innerHTML--
    else
        s.innerHTML++
}

function submitTest() {
    return document.getElementById("score").innerHTML
}

$(document).ready(function () {
    $("#btn-submit").click(function () {
      
        if (submitTest() == 4) {
            $("#img-felicitation").animate({
                left: '500px',
                top: '150px',
                opacity: '1',
                height: '500px',
                width: '500px'
            });
        }
    });
});

document.addEventListener("click", function (ev) {
    if (ev.target.className == "btn-reset") {
        location.reload();
    }
})
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
