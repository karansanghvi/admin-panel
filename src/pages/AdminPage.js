import React from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminPage = ({ items, setItems }) => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminPanel items={items} setItems={setItems} />
    </div>
  );
};

export default AdminPage;