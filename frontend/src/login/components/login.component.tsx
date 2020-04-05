import React, { useRef, useState } from "react";
import loginStyle from "./login.module.css";

import userService, { loginResponse$ } from "../../services/user-service";

const LoginForm: React.FC = props => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [usernameText, setUsername] = useState<string>("");
  const [passwordText, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const loginSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    userService.login(username, password);
    loginResponse$.subscribe(result => {
      if (result) {
        window.location.href = "/";
      } else {
        setErrorMsg("Invalid username or password");
      }
    });
  };

  return (
    <div className="container h-100 d-flex justify-content-center mt-5">
      <div className={loginStyle.logoWidth}>
        <form onSubmit={loginSubmitHandler}>
          {errorMsg && <p className="text-danger text-center">{errorMsg}</p>}
          <h3 className="text-center mb-2 mt-2">Login Form</h3>
          <div>
            <input
              type="text"
              className="form-control"
              ref={usernameRef}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              className="form-control"
              ref={passwordRef}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mt-4"
              disabled={!usernameText || !passwordText}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
