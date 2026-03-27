import { LoginForm } from "@/components/login-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//pages handles logic -> components handles UI
export default function Login() {
  const navigate = useNavigate();

  async function handleLogin(data) {
    try {
      //Send data to the backend using an HTTP POST request.
      const res = await axios.post("http://localhost:3000/login", data);
      //log the response "success"
      console.log("Sending login data", res.data);

      if (res.data.success) {
        localStorage.setItem("employee", JSON.stringify(res.data.employee));
        navigate("/dashboard");
        console.log("Employee Saved", localStorage.getItem("employee"));
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  return <LoginForm onSubmit={handleLogin}></LoginForm>;
}
