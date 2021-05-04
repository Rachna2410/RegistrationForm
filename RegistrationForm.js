import React from 'react';
import {useDispatch} from 'react-redux';
import { useForm } from "react-hook-form";


 function RegistrationComponent() {
  const { register, handleSubmit, formState:{errors} }= useForm();
  const dispatch = useDispatch();
  const ls = require('local-storage');

  const onSubmit = (data) => {
    console.log(data);
    ls.set('reg',data)
    dispatch({type:'reg/add', newUser:data});
  };

 

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Username" {...register("username", { required: true, minLength:{value:5,message:"Minimum length is 5 "} })}/>
         {errors.username && <span>Username is required </span>}<br/>
        <input  type = "email" placeholder="User email" {...register("email", { required: true, 
        	pattern:{value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        	message:"Invalid Email id"}})}/>
        {errors.email && <span>Email is required</span>}<br/>
         <input type="password" placeholder="User password" {...register("password", { required: true, 
          minLength:{value:6,message:"Minimum length is 6"}, 
           validate: (value) => {
                        if(/[A-Z]+/.test(value)) {
                            if(/^(?=.*[!@#$%^&*])/.test(value)){
                                return true;
                            } else {
                                return "Atleast one special character"
                            }
                        } else {
                            return "Atleast one capital letter"
                        }
                    } })}/>
         {errors.password && <span>This field is required</span>}<br/>
          <input type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true, minLength: 6 })}/>
         {errors.confirmPassword  && <span>This field is required</span>}<br/>
        <button>Submit</button>
      </form>
    </div>
  );
}
 export default RegistrationComponent;