import React, { useState } from 'react';

const AdminPanel = ({ items = [], setItems }) => { 
  const [currentItem, setCurrentItem] = useState({ text: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedItems = [...items];
      updatedItems[editIndex] = currentItem;
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setItems([...items, currentItem]);
    }
    setCurrentItem({ text: '', image: '' });
  };

  const handleEdit = (index) => {
    setCurrentItem(items[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={currentItem.text}
          onChange={handleInputChange}
          placeholder="Text"
        />
        <input
          type="text"
          name="image"
          value={currentItem.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <button type="submit">{isEditing ? 'Edit' : 'Add'}</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.text}</p>
            {item.image && <img src={item.image} alt="item" />}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
