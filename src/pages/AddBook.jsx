import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/books/${form.category}`);
  };

  return (
    <div className="add-book-container">
      <h2>Add Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Author" onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Rating" onChange={(e) => setForm({ ...form, rating: e.target.value })} />
        <input placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
