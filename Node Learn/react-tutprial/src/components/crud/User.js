import React, { useEffect, useState } from "react";
import { Button,EditableText,InputGroup,Toaster } from "@blueprintjs/core";

const toster=Toaster.create(
    {
        position:"top"
    }
)

export default function User(){

    const [users,setUser]=useState([]);
    const [newName,setNewName]=useState("");
    const [newEmail,setNewEmail]=useState("");
    const [newWebSite,setNewWebSite]=useState("");

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((response)=> response.json())
       .then((json)=>setUser(json))
    },[]);

    function nameSet (e){
        setNewName(e.target.value)
    }
    function emailSet (e){
        setNewEmail(e.target.value)
    }
    function webSiteSet (e){
        setNewWebSite(e.target.value)
    }

    function addUser(){
         const name=newName.trim();
         const email=newEmail.trim();
         const website=newWebSite.trim();

         if(name && email && website){
              fetch('https://jsonplaceholder.typicode.com/users',
              {
                method:"POST",
                body:JSON.stringify({
                    name,
                    email,
                    website
                }),
                headers:({
                    "Content-Type":"application/json;charset=UTF-8"
                })
              }
              )
              .then((response)=> response.json())
              .then(json=>{
                setUser([...users,json]);
                toster.show({
                    message:"user added sucessfully",
                    intent:'success',
                    timeout:3000
                })
                setNewName("");
                setNewEmail("");
                setNewWebSite("");
              }
              )
         }
    }

    function onChangeHandler(id,key,value){

        setUser((users)=>{
            return users.map(user=>{
                return user.id ===id?{...user,[key]:value}:user;
            })
        });
     
    }

    function updateUser(id){
     const user=users.find(user=>user.id===id);

     fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
     {
       method:"PUT",
       body:JSON.stringify(user),
       headers:({
           "Content-Type":"application/json;charset=UTF-8"
       })
     }
     )
     .then((response)=> response.json())
     .then(json=>{
       toster.show({
           message:"user updated sucessfully",
           intent:'success',
           timeout:3000
       })
     }
     )

    }

    function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method:"DELETE",
        }
        )
        .then((response)=> response.json())
        .then(json=>{
            setUser((user)=>{
                return user.filter(user => user.id !== id)
            })
          toster.show({
              message:"user Delete sucessfully",
              intent:'success',
              timeout:3000
          })
        }
        )
   
    }

    return(
        <table className="bp4-html-table modifier">
            <thead>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>WEBSITE</th>
              <th>ACTION</th>
            </thead>
            <tbody>
                {users.map(user=>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><EditableText onChange={value=>onChangeHandler(user.id,'name',value)} value={user.name}/></td>
                  <td><EditableText onChange={value=>onChangeHandler(user.id,'email',value)} value={user.email}/></td>
                  <td><EditableText onChange={value=>onChangeHandler(user.id,'website',value)} value={user.website}/></td>
                  <td>
                    <Button intent='primary' onClick={()=>updateUser(user.id)}>UPDATE</Button>
                    <Button intent='danger'onClick={()=>deleteUser(user.id)}>DELETE</Button>
                  </td>
                </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                <td></td>
                 <td>
                    <InputGroup value={newName} onChange={nameSet} placeholder="Enter Name"/>
                 </td>
                 <td>
                    <InputGroup value={newEmail} onChange={emailSet} placeholder="Enter email"/>
                 </td>
                 <td>
                    <InputGroup value={newWebSite} onChange={webSiteSet} placeholder="Enter website"/>
                 </td>
                 <td><Button intent="success" onClick={addUser}>Add user</Button></td>
                </tr>
            </tfoot>
        </table>
    );
}