import { ContainerWrapper } from "./Container.styled";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
