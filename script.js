//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає

const inputText = document.getElementById("inputText");
const div1 = document.getElementById("div1");
const div2 = document.createElement('div2');

inputText.addEventListener("focus", () => {
    div1.appendChild(div2);
    div2.setAttribute("style", "border: 2px red solid; width: fit-content" )
    div2.textContent = '!! Div Ghost !!';

});

inputText.addEventListener("blur", () => {
    div1.removeChild(div2);
});