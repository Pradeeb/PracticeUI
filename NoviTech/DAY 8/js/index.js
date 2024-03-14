function addToDo(){
    var getInputValue=document.getElementById("get_input").value.trim();

    if(getInputValue != ""){

        var list=document.createElement("li");
        list.innerText=getInputValue;
        list.classList.add("list_item");//class name create

        var deleteButtom=document.createElement("button");
        deleteButtom.innerText="Delete";
        deleteButtom.classList.add("delete-button");

        deleteButtom.onclick=function(){
            list.parentNode.removeChild(list);
        }
    }else{
        alert("please fill the ToDo ")
    }
    list.appendChild(deleteButtom);
    document.getElementById("list_todo").appendChild(list);
    
    document.getElementById("get_input").value="";
}