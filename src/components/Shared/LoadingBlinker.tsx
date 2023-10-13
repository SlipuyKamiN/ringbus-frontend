import { LoaderWrapper } from "./LoadingBlinker.styled";

const LoadingBlinker = ({
  children,
  isLoading = true,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
}) => {
  return (
    <LoaderWrapper className={isLoading ? "is-loading" : ""}>
      {children}
    </LoaderWrapper>
  );
};

export default LoadingBlinker;
