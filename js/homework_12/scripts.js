function showForm() {
    let showFormBtn = document.getElementById("showForm");
    document.body.removeChild(showFormBtn);
    let inputRadius = ('<input type="text" name="radius" id="radius" />');
    let inputColor = ('<input type="text" name="color" id="color" />');
    let drowCircle = ('<button id="drow" onclick="createCircle()">Нарисовать</button>');
    let form = document.createElement("div");
    form.id = "form";
    form.innerHTML = inputRadius + inputColor + drowCircle;

    document.body.appendChild(form);
}

function createCircle() {
    let radius = document.getElementById("radius").value;
    let color = document.getElementById("color").value;
    let circle = document.createElement('div');

    document.body.removeChild(document.getElementById("form"));

    circle.style.width = radius + "px";
    circle.style.height = radius + "px";
    circle.style.backgroundColor = color;
    circle.style.borderRadius = '50%';

    document.body.appendChild(circle);
}