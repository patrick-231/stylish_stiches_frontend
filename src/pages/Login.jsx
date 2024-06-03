import { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Login');
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('login button was clicked', formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData),
      });
      
      responseData = await response.json();
      console.log('DATA:', responseData)

      if (!response.ok) {
        setError(responseData.error)
      
      }


      if (response.ok) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        (responseData.error || 'Login failed');
      }
    } catch (error) {
      error
    }
  };
  const signup = async () => {
    console.log('signup button was clicked', formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      responseData = await response.json();
      console.log('DATA:', responseData)
      if (!response.ok) {
        setError(responseData.error)
      
      }


      if (response.ok) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        (responseData.error || 'Login failed');
      }
    } catch (error) {
      error
    }
  };


  return (
    <section className="max-padd-container flexCenter flex-col pt-32 bg-primary">
      <div className="w-full max-w-[666px] h-[600px] bg-primary m-auto px-14 py-10 rounded-full">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === 'Sign Up' && (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Enter Name"
              required
              className="h-8 w-full pl-5 bg-white outline-none text-sm focus:border-black border-2"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter Email Address"
            required
            className="h-8 w-full pl-5 bg-white outline-none text-sm focus:border-black border-2"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Enter Password"
            required
            className="h-8 w-full pl-5 bg-white outline-none text-sm focus:border-black border-2"
          />
        </div>
        <button
          onClick={() => {
            state === 'Login' ? login() : signup();
          }}
          className="btn-dark rounded-xl my-5 !py-1"
        >
          Continue
          
        </button>
        {error && <div>{error}</div> }
        {state === 'Sign Up' ? (
          <p className="text-tertiary font-bold">
            Already have an account?{' '}
            <span
              onClick={() => {
                setState('Login');
              }}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-tertiary font-bold">
            Create an account?{' '}
            <span
              onClick={() => {
                setState('Sign Up');
              }}
              className="text-secondary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
        <div className="flexStart ml-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p className="mt-xl">
            By continuing, I agree to the term of use & privacy policy.</p>

    </div>  
  </div>
</section>
  )
}

export default Login