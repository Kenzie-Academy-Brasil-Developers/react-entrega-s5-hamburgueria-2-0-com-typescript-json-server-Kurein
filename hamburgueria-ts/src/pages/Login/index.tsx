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

  console.log(token);

  if (token) {
    history.push("/");
  }

  const { login } = useAPI();

  const schema = yup.object().shape({
    email: yup.string().required(),
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

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Logar</button>
      </form>
      <button>Cadastre-se</button>
    </Container>
  );
};

export default Login;
