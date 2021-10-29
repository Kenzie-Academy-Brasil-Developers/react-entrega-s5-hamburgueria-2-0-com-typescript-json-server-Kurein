import { ReactNode } from "react";
import { APIProvider } from "./Api";

interface ProvidersData {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersData) => {
  return <APIProvider>{children}</APIProvider>;
};

export default Providers;
