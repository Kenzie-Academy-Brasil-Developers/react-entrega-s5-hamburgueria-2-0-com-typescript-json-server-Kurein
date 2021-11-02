import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAPI } from "../../providers/Api";
import { useHistory } from "react-router";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();

  const token = localStorage.getItem("Hamburgueria_token");

  if (token) {
    history.push("/");
  }

  const { login } = useAPI();

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: UserData) => {
    login(data);
  };

  const toSingup = () => {
    history.push("/singup");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Logar</button>
      </form>
      <button onClick={toSingup}>Cadastre-se</button>
    </Container>
  );
};

export default Login;
