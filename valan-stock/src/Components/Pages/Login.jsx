import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import bg from '../../assets/BG.jpg';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const bgobj = {
    backgroundImage: `url(${bg})`,
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const schema = yup.object().shape({
    clientcode: yup
      .string()
      .required("User ID required")
      .matches(/^[A-Z]\d+$/, "Enter correct User ID"),
    password: yup.string().required("Password required"),
    totp: yup
      .string()
      .required("TOTP required")
      .matches(/^\d{6}$/, "TOTP must be exactly 6 digits"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post('http://localhost:8080/api/login', data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log('Login Success:', data);
  //    localStorage.setItem('token', data.data.accessToken);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error('Login failed:', error);
      alert('Login failed. Please check credentials or server.');
    }
  });

  const onSubmit = (data) => {
    console.log("Login Clicked:", data);
    loginMutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center" style={bgobj}>
      <div className="shadow-xl shadow-red-500/50 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 bg-white rounded-xl flex flex-col items-center">
        <h1 className="font-bold text-2xl italic text-blue-600 text-center mb-4">Valan Stock Details</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
          <div className='w-full mb-4'>
            <TextField
              label="User ID"
              variant="outlined"
              fullWidth
              {...register("clientcode")}
              error={!!errors.clientcode}
              helperText={errors.clientcode?.message}
            />
          </div>
          <div className='w-full mb-4'>
            <TextField
              label="Password"
              variant="outlined"
              type='password'
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <div className='w-full mb-4'>
            <TextField
              label="TOTP"
              variant="outlined"
              fullWidth
              {...register("totp")}
              error={!!errors.totp}
              helperText={errors.totp?.message}
            />
          </div>

          <Button variant="contained" type='submit' className='w-full sm:w-1/2 mt-4'>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
