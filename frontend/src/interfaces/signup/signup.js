import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import UserService from "../../services/user/user.service";

function Signup() {
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  // const [isAdmin, setisAdmin] = useState("");

  // const [user, setUser] = useState(nameuser="",username="",password="",isAdmin="");


  const [voidLoginError, setVoidError] = useState("");

  const navCancel = () => {
    nav("/");
  }

  const validateInput = () => {
    if (!username && !password && !email && !passwordRepeat) {
      setVoidError("Faltan los campos");
      return false;
    } else if (!password) {
      setVoidError("Falta la contraseña");
      return false;
    } else if (!username) {
      setVoidError("Falta el usuario");
      return false;
    } else if (!email) {
      setVoidError("Falta el email");
      return false;
    } else if (!passwordRepeat) {
      setVoidError("Repite la contraseña");
      return false;
    } else {
      setVoidError("");
      return true;
    }
  }

  const submitUser = async () => {
    if (validateInput()) {
      const response = await UserService.create(email, username, password);
      if (response && response.access_token) {
        nav("/");
      } else {
        setVoidError("Fallo crear cuenta");
      }
    }
  }

  return (
    <div className="background-signup">
      <div className="container-signup">
        <h2>Sing up</h2>
        <Input className="newusername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
          prefix={<UserOutlined />} />
        <Input className="newname" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          prefix={<UserOutlined />} />
        <Input.Password className="newpasswordInput"
          placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Input.Password className="newpasswordRepeatInput"
          placeholder="Password"
          value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        {voidLoginError && <div className="new-error-mesage">{voidLoginError}</div>}
        <Button className="buttonSignup" type="primary" onClick={submitUser}>Sing up</Button>
        <div className="cancel" onClick={navCancel}>Cancelar</div>
      </div>
    </div>
  );
}

export default Signup;