"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      data-testid="container-component"
      className="max-w-[2520px] mx-auto md:px-10 sm:px-2 px-4"
    >
      {children}
    </div>
  );
};

export default Container;
