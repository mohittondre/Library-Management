import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <h1>Welcome to Book Library</h1>
      <div className="home-card-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
