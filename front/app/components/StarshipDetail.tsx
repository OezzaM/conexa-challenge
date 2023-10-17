interface StarshipDetailProps {
  name: string;
  model: string;
  manufacturer: string;
  crew: string;
  passengers: string;
  consumables: string;
  starship_class: string;
}

const StarshipDetail: React.FC<StarshipDetailProps> = ({
  name,
  model,
  manufacturer,
  crew,
  passengers,
  consumables,
  starship_class,
}) => {
  return (
    <>
      <span className="text-2xl font-semibold text-center md:text-start">{name}</span>
      <span className="text-white mt-2 text-center md:text-start">Modelo: {model}</span>
      <span className="text-white mt-2 text-center md:text-start">Creador: {manufacturer}</span>
      <span className="text-white mt-2 text-center md:text-start">Tripulación: {crew}</span>
      <span className="text-white mt-2 text-center md:text-start">Pasajeros:{passengers}</span>
      <span className="text-white mt-2 text-center md:text-start">Consumibles:{consumables} </span>
      <span className="text-white mt-2 text-center md:text-start">Clase de nave: {starship_class}</span>
    </>
  );
};

export default StarshipDetail;
