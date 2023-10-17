import Container from "@/app/components/Container";
import PostDetail from "@/app/components/PostDetail";

interface IParams {
  category: string;
  postId: number;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const { category, postId } = params;
  return (
    <Container>
      <div className="px-20">
        <PostDetail
          category={category}
          postId={postId}
        />
      </div>
    </Container>
  );
};

export default ListingPage;
