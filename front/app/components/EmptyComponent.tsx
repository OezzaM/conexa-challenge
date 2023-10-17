import { BsExclamationTriangle } from "react-icons/bs";

interface EmptyComponentProps {
  text: string;
}

const EmptyComponent: React.FC<EmptyComponentProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <BsExclamationTriangle size={40} />
      <span className="text-center text-white mt-4">{text}</span>
    </div>
  );
};

export default EmptyComponent;
