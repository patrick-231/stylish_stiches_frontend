import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Set isLoading to true when the form is submitted

    try {
      const response = await fetch(
        "https://stylish-stiches.onrender.com/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false); // Set isLoading to false if the response is not ok
        setError(data.error);
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        setIsLoading(false); // Set isLoading to false when the response is ok
        setUser(data);
      }
    } catch (error) {
      setIsLoading(false); // Set isLoading to false if there is an error
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="max-padd-container flexCenter flex-col pt-32 bg-primary">
        <div className="w-full max-w-[666px] h-[600px] bg-primary m-auto px-14 py-10 rounded-full">
          <h3 className="h3">Sign up</h3>
          <div className="flex flex-col gap-4 mt-7">
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              required
              className="h-8 w-full pl-5 bg-white outline-none text-sm focus:border-black border-2"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email Address"
              required
              className="h-8 w-full pl-5 bg-white outline-none text-sm focus:border-black border-2"
            />
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              required
              className="h-8 w-full pl-5 bg-white outline-none text-sm focus:border-black border-2"
            />
          </div>
          <button
            className="btn-dark rounded-xl my-5 !py-1"
            disabled={isLoading} // Disable the button while isLoading is true
          >
            {isLoading ? "Loading..." : "Continue"}
          </button>
          {error && <div>{error}</div>}

          <p className="text-tertiary font-bold">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>

          <div className="flexStart ml-6 gap-3">
            <input type="checkbox" name="" id="" />
            <p className="mt-xl">
              By continuing, I agree to the term of use & privacy policy.
            </p>
          </div>
        </div>
      </section>
    </form>
  );
}
