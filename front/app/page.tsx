import Container from "./components/Container";
import CardsSection from "./components/CardsSection";
import { CategoryEnum } from "./common/enums";

interface HomeProps {
  searchParams: {
    category: CategoryEnum;
    page?: number;
    search?: string;
  };
}

const Home = ({
  searchParams: { category = CategoryEnum.films, page = 1, search = undefined },
}: HomeProps) => {
  return (
    <div data-testid="home-page">
      <Container>
        <CardsSection searchParams={{ category, page, search }} />
      </Container>
    </div>
  );
};

export default Home;
