interface FilmDetailProps {
  name: string;
  director: string;
  producer: string;
  opening_crawl: string;
}

const FilmDetail: React.FC<FilmDetailProps> = ({
  name,
  director,
  producer,
  opening_crawl,
}) => {
  return (
    <>
      <span className="text-2xl font-semibold">{name}</span>
      <pre className="whitespace-normal text-white mt-2 text-center md:text-start">{opening_crawl}</pre>
      <span className="text-white mt-2">Director: {director}</span>
      <span className="text-white mt-2">Productor: {producer}</span>
    </>
  );
};

export default FilmDetail;
