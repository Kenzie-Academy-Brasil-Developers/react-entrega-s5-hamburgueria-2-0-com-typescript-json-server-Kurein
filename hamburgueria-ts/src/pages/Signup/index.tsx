import { Container } from "../Login/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAPI } from "../../providers/Api";
import { useHistory } from "react-router";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const history = useHistory();

  const token = localStorage.getItem("Hamburgueria_token");

  if (token) {
    history.push("/");
  }

  const { signup } = useAPI();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
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
    signup(data);
  };

  const toLogin = () => {
    history.push("/login");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={toLogin}>Login</button>
    </Container>
  );
};

export default Signup;
