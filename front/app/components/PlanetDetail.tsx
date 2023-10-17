interface PlanetDetailProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  population,
}) => {
  return (
    <>
      <span className="text-2xl font-semibold">{name}</span>
      <span className="text-white mt-2">
        Periodo de rotación: {rotation_period}
      </span>
      <span className="text-white mt-2">Periodo orbital: {orbital_period}</span>
      <span className="text-white mt-2">Diametro: {diameter}</span>
      <span className="text-white mt-2">Clima:{climate}</span>
      <span className="text-white mt-2">Gravedad:{gravity} </span>
      <span className="text-white mt-2">Terreno: {terrain}</span>
      <span className="text-white mt-2">Habitantes: {population}</span>
    </>
  );
};

export default PlanetDetail;
