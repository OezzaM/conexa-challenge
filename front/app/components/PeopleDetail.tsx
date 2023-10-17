interface PeopleDetailProps {
  name: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

const PeopleDetail: React.FC<PeopleDetailProps> = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  gender,
}) => {
  return (
    <>
      <span className="text-2xl font-semibold">{name}</span>
      <span className="text-white mt-2">Altura: {height}cm</span>
      <span className="text-white mt-2">Masa: {mass}kg</span>
      <span className="text-white mt-2">Color de pelo: {hair_color}</span>
      <span className="text-white mt-2">Color de skin: {skin_color}</span>
      <span className="text-white mt-2">Color de ojos: {eye_color}</span>
      <span className="text-white mt-2">Genero: {gender}</span>
    </>
  );
};

export default PeopleDetail;
