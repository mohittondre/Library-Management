import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="home-book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>⭐ {book.rating}</p>
      <Link to={`/book/${book.id}`} className="home-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
