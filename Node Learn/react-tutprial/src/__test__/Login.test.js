import { render,screen  } from "@testing-library/react"
import Login from "../components/loginProject/Login"

test('login component loaded',()=>{
    render(<Login/>);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})

test('login email & password is empoty',()=>{
    render(<Login/>);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
    
})