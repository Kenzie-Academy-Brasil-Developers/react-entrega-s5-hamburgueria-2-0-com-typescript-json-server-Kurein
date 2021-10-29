import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const token = localStorage.getItem("Hamburgueria_token");

  if (!token) {
    history.push("/login");
  }

  return <></>;
};

export default Home;
