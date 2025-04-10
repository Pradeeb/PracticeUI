//parent

// Node ---> Element Node, Text node, Attribute Note, Document 

function traversingParent(){
    
    let getParent =document.querySelector(".child1");

    console.log(getParent.parentElement);
    
    let getParentNode =document.querySelector(".child1");
    
    console.log(getParentNode.parentNode);
    console.log(getParentNode.parentElement);

}

//Child

function SelectChild(){

    let getParent=document.querySelector(".parent");
    console.log(getParent.childElementCount);
    console.log(getParent.childNodes);

}
SelectChild()



