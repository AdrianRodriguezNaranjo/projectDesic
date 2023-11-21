import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <form className="formSingUp">
      <label htmlFor="name">Sing Up</label>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="username" placeholder="User name" />

      <input type="password" name="name" placeholder="Password" />
      {/* <input type="password" name="name" placeholder="Password" /> */}

      <Link to="/">
        <button type="button" className="bordered medium">
          Sing Up
        </button>
      </Link>
    </form>
  );
}

export default Signup;