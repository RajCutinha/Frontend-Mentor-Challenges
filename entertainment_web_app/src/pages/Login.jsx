import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useNavigationType,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

import Logo from "../assets/logo.svg";
import Button from "../components/Button";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams({});
  const navigateType = useNavigationType();
  const signup = location.pathname.includes("signup");
  const [firstSign, setFirstSign] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPwd, setReapeatPwd] = useState("");

  function login(e) {
    e.preventDefault();

    if (password === repeatPwd) {
      fetch("http://localhost:3100/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => (res.status === 200 ? res.text() : null))
        .then((data) => {
          navigate("/login?success=true");
          setFirstSign(true);
          setEmail("");
          setPassword("");
          setReapeatPwd("");
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    setParams({ sucess: "true" });
    console.log(params);
  }, []);

  return (
    <div className="login">
      <img src={Logo} alt="Logo" />
      <form onSubmit={login}>
        {signup ? <h1>Sign Up</h1> : <h1>Login</h1>}
        {firstSign ? (
          <div>
            <h3 className="success">Account created</h3>
          </div>
        ) : (
          ""
        )}
        <div>
          <input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {signup && (
          <div>
            <input
              type="password"
              value={repeatPwd}
              placeholder="Repeat password"
              onChange={(e) => setReapeatPwd(e.target.value)}
            />
          </div>
        )}
        <Button text={signup ? "Sign Up" : "Login"} type={"submit"} />
        {signup ? (
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        ) : (
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
