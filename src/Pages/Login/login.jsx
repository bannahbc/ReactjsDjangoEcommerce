// import React, { useEffect, useState } from 'react'
// import { company_name } from '../../Constants'

// const Login = ()=>{
//     let [loginSwitch,setLoginSwitch]=useState(true)
//     useEffect(()=>{
//     })
//     const change_form =()=>{
//         setLoginSwitch(!loginSwitch)
//     }
//     return(
//         <div className="login-register">
//             {
//                 loginSwitch ?
//                 <div className="login">
//                     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//     <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600 max-w">
//             Or
//             <a href="#" onClick={change_form}  className="font-medium text-blue-600 hover:text-blue-500">
//                 create an account
//             </a>
//         </p>
//     </div>

//     <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <form className="space-y-6" action="#" method="POST">
//                 <div>
//                     <label for="email" className="block text-sm font-medium text-gray-700">
//                         Email address
//                     </label>
//                     <div className="mt-1">
//                         <input id="email" name="email" type="email" autocomplete="email" required
//                             className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                             placeholder="Enter your email address"/>
//                     </div>
//                 </div>

//                 <div>
//                     <label for="password" className="block text-sm font-medium text-gray-700">
//                         Password
//                     </label>
//                     <div className="mt-1">
//                         <input id="password" name="password" type="password" autocomplete="current-password" required
//                             className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                             placeholder="Enter your password"/>
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         <input id="remember_me" name="remember_me" type="checkbox"
//                             className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
//                         <label for="remember_me" className="ml-2 block text-sm text-gray-900">
//                             Remember me
//                         </label>
//                     </div>

//                     <div className="text-sm">
//                         <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                             Forgot your password?
//                         </a>
//                     </div>
//                 </div>

//                 <div>
//                     <button type="submit"
//                         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

//                         Sign in
//                     </button>
//                 </div>
//             </form>
//             <div className="mt-6">

//                 <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-300"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                         <span className="px-2 bg-gray-100 text-gray-500">
//                             Or continue with
//                         </span>
//                     </div>
//                 </div>

//                 <div className="mt-6 grid grid-cols-3 gap-3">
//                     <div>
//                         <a href="#"
//                             className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                             <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
//                                 alt=""/>
//                         </a>
//                     </div>
//                     <div>
//                         <a href="#"
//                             className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                             <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
//                                 alt=""/>
//                         </a>
//                     </div>
//                     <div>
//                         <a href="#"
//                             className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                             <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
//                                 alt=""/>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//                 </div>
//                 :
//                 <div className="register h-screen">
//                     <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//     <div class="sm:mx-auto sm:w-full sm:max-w-md">
//         <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
//         <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
//             Create a new account
//         </h2>
//         <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
//             Or
//             <a href="#" onClick={change_form}
//                 class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
//                 login to your account
//             </a>
//         </p>
//     </div>

//     <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <form method="POST" action="#">
//                 <div>
//                     <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Name</label>
//                     <div class="mt-1 relative rounded-md shadow-sm">
//                         <input id="name" name="name" placeholder="John Doe" type="text" required=""
//                             class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
//                         <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                             <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd"
//                                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                                     clip-rule="evenodd">
//                                 </path>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="mt-6">
//                     <label for="phoneNumber" class="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
//                     <div class="mt-1 flex rounded-md shadow-sm">
//                         <span
//                             class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
//                             +91
//                         </span>
//                         <input id="phoneNumber" name="phoneNumber" placeholder="john" type="text" required=""
//                             class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
//                     </div>
//                 </div>

//                 <div class="mt-6">
//                     <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
//                         Email address
//                     </label>
//                     <div class="mt-1 relative rounded-md shadow-sm">
//                         <input id="email" name="email" placeholder="user@example.com" type="email"
//                             required=""
//                             class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
//                         <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                             <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd"
//                                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                                     clip-rule="evenodd"></path>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="mt-6">
//                     <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
//                         Password
//                     </label>
//                     <div class="mt-1 rounded-md shadow-sm">
//                         <input id="password" name="password" type="password" required=""
//                             class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
//                     </div>
//                 </div>

//                 <div class="mt-6">
//                     <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
//                         Confirm Password
//                     </label>
//                     <div class="mt-1 rounded-md shadow-sm">
//                         <input id="password_confirmation" name="password_confirmation" type="password" required=""
//                             class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
//                     </div>
//                 </div>

//                 <div class="mt-6">
//                     <span class="block w-full rounded-md shadow-sm">
//                         <button type="submit"
//                             class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
//                             Create account
//                         </button>
//                     </span>
//                 </div>
//             </form>

//         </div>
//     </div>
// </div>
//                 </div>
//             }
//         </div>
//     )
// }
// export default Login
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { base_url } from '../../api';
import Swal from 'sweetalert2'

const Login = () => {
  const [loginSwitch, setLoginSwitch] = useState(true);

  const change_form = () => {
    setLoginSwitch(!loginSwitch);
  };
  useEffect(()=>{
    
    // axios.post(base_url+"api/token/")
    // .then(res=>console.log(res))
    // .catch(error=>console.log(error))
  },[])

  // Login formik
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async(values) => {
      try{
        const response = await axios.post(base_url+'api/token/',{
          email:values.email,
          password:values.password
        });
        // Save access token if login is successful
    const accessToken = response.data.access;
        return axios.get(base_url+'get_user/',{
          headers:{
            Authorization:`Bearer ${accessToken}`
          }
        }).then(userRes=>{
          localStorage.setItem("token",accessToken);
          localStorage.setItem("user",JSON.stringify(userRes.data))
          console.log('Login:', values);
          console.log(response.data)
          console.log(userRes.data)
        }).then(res=>{
          Swal.fire({
  title: "Login Successfully!",
  icon: "success",
  draggable: true
});
        })
      }
      catch(error){
        console.log(error)
        let m = error.response.data.detail
        console.log(m)
        Swal.fire({
  title: 'Error!',
  text: m,
  icon: 'error',
  confirmButtonText: 'Cool'
})
      }
    }
  });

  // Register formik
  const registerFormik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Enter valid phone').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: (values) => {
      console.log('Register:', values);
    }
  });

  return (
    <div className="login-register">
      {loginSwitch ? (
        // Login Form
        <form onSubmit={loginFormik.handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white shadow mt-10 rounded">
          <h2 className="text-2xl font-bold text-center">Sign in</h2>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              value={loginFormik.values.email}
              className="w-full border p-2 rounded"
            />
            {loginFormik.touched.email && loginFormik.errors.email && (
              <p className="text-red-500 text-sm">{loginFormik.errors.email}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              value={loginFormik.values.password}
              className="w-full border p-2 rounded"
            />
            {loginFormik.touched.password && loginFormik.errors.password && (
              <p className="text-red-500 text-sm">{loginFormik.errors.password}</p>
            )}
          </div>

          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded w-full">Login</button>

          <p className="text-center text-sm mt-4">
            Or{' '}
            <a href="#" onClick={change_form} className="text-blue-600">
              create an account
            </a>
          </p>
        </form>
      ) : (
        // Register Form
        <form onSubmit={registerFormik.handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white shadow mt-10 rounded">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.name}
              className="w-full border p-2 rounded"
            />
            {registerFormik.touched.name && registerFormik.errors.name && (
              <p className="text-red-500 text-sm">{registerFormik.errors.name}</p>
            )}
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phoneNumber"
              type="text"
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.phoneNumber}
              className="w-full border p-2 rounded"
            />
            {registerFormik.touched.phoneNumber && registerFormik.errors.phoneNumber && (
              <p className="text-red-500 text-sm">{registerFormik.errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.email}
              className="w-full border p-2 rounded"
            />
            {registerFormik.touched.email && registerFormik.errors.email && (
              <p className="text-red-500 text-sm">{registerFormik.errors.email}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.password}
              className="w-full border p-2 rounded"
            />
            {registerFormik.touched.password && registerFormik.errors.password && (
              <p className="text-red-500 text-sm">{registerFormik.errors.password}</p>
            )}
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              name="password_confirmation"
              type="password"
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.password_confirmation}
              className="w-full border p-2 rounded"
            />
            {registerFormik.touched.password_confirmation && registerFormik.errors.password_confirmation && (
              <p className="text-red-500 text-sm">{registerFormik.errors.password_confirmation}</p>
            )}
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>

          <p className="text-center text-sm mt-4">
            Or{' '}
            <a href="#" onClick={change_form} className="text-blue-600">
              login to your account
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
