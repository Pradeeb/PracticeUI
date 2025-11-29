console.log("test");

function handleClick(){
        console.log("Button clicked");
}
    var num=0;
    
incrementbtn.addEventListener("click", () => {

    num++;

    const line = document.createElement("div");
    line.innerHTML = `${num}<br>`;

    countdive.append(line);
});