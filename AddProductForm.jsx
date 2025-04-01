import { useState } from "react";
import "./AddProductForm.css";
import Button from "../Button/Button";

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      category,
    };

    if (thumbnail.trim() !== "") {
      newProduct.thumbnail = thumbnail;
    } else {
      // Optional fallback, if you want to show a default image
      newProduct.thumbnail =
        "https://via.placeholder.com/200x150?text=No+Image";
    }

    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(
          "Failed to add product: " + (errorData.message || "Unknown error")
        );
        return;
      }

      const data = await res.json();
      setSuccess(true);
      setTitle("");
      setPrice("");
      setCategory("");
      setThumbnail("");
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert("Failed to add product :(");
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add new Product</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Image URL (optional)"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <Button type="submit">Add Product</Button>

      {success && <p className="success-msg">Product added!</p>}
    </form>
  );
};

export default AddProductForm;
