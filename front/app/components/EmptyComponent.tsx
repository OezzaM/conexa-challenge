import { BsExclamationTriangle } from "react-icons/bs";
import { categories } from "../common/constants";

interface EmptyComponentProps {
  category: string;
}

const EmptyComponent: React.FC<EmptyComponentProps> = ({ category }) => {
  const categoryName = categories.find(
    (categoryMap) => categoryMap.key === category
  )?.name;
  return (
    <div className="flex flex-col items-center mt-10">
      <BsExclamationTriangle size={40} />
      <span className="text-center text-white mt-4">
        No hay {categoryName} disponibles para esta búsqueda
      </span>
    </div>
  );
};

export default EmptyComponent;
