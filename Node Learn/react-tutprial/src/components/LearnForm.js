import { useState } from "react";

function LearnForm() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name :  <input onChange={(e) => { setName(e.target.value) }} /></label>
                <input type="submit" value="submit" />
            </form>
        </>
    );
}
export default LearnForm;