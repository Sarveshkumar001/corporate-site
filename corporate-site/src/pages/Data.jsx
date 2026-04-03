import { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const fetchData = () => {
    fetch("http://localhost:5000/contacts")
      .then(res => res.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/contact/${id}`, {
      method: "DELETE"
    });
    fetchData();
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm(item);
  };

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/contact/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setEditId(null);
    setForm({ name: "", email: "", message: "" });
    fetchData();
  };

  return (
    <div className="container">
      <h1>Contacts</h1>

      {editId && (
        <div className="card">
          <h3>Edit Contact</h3>

          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <br /><br />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <br /><br />

          <input
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <br /><br />

          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      {data.map((item) => (
        <div className="card" key={item._id}>
          <p><b>{item.name}</b></p>
          <p>{item.email}</p>
          <p>{item.message}</p>

          <button className="edit-btn" onClick={() => handleEdit(item)}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => handleDelete(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Data;