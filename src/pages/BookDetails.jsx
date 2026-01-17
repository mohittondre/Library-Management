import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === id)
  );

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="container">
      <img src={book.image} width="200" />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>⭐ {book.rating}</p>
      <Link to={`/books/${book.category}`}>Back</Link>
    </div>
  );
};

export default BookDetails;
