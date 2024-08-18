import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebaseAuth/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Registration = () => {
    const {createUser,updateUser,loginWithGoogle}=useContext(AuthContext)
    const handleGoogle= ()=>{
      loginWithGoogle()
      .then(res=>toast.success("You Have logged in Successfully"))
      .catch(error=>toast.error('Something went wrong'))
    }
    const handleRegister = async(e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
        const userData = {
            name,photoUrl,email,password
        }
        await createUser(userData.email,userData.password)
        .then(res=>{
         updateUser(name,photoUrl)
         .then(res=>{
          toast.success("You Have Registered Successfully")
         }
         
         )
        })
        .catch(error=>{console.log(error)
        toast.error('Something went wrong')
        })

    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src="https://i.postimg.cc/C5ZNM2Ps/9e2866d655b48b6000e2bc7d1bb73724.jpg" alt="" srcSet="" />
            <p className="py-6">
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 border py-2 border-primary rounded-3xl">
          <h1 className="text-5xl font-bold text-center pt-2 text-primary">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered border-primary text-primary" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photoUrl' placeholder="Your Photo Url" className="input input-bordered border-primary text-primary" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered border-primary text-primary" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered border-primary text-primary" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white font-bold text-xl">Register</button>
              </div>
            </form>
            <h2 className='text-center'>Don't have an account?? <span className='font-bold text-primary'><Link to='/register'>Register !!!</Link> </span></h2>
            <div className='flex items-center justify-center'>
            <button onClick={handleGoogle} className='p-2 text-3xl text-green-500 border border-green-500 rounded-full mt-2'><FaGoogle /></button>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;