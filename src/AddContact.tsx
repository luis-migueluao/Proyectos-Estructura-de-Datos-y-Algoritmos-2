import { useState } from "react";

interface Props {
  onAdd: (name: string, phone: string) => void;
}

function AddContact({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = () => {
    if (name.trim() === "" || phone.trim() === "") return;

    onAdd(name, phone);

    setName("");
    setPhone("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      <button onClick={handleAdd}>
        Agregar
      </button>
    </>
  );
}

export default AddContact;
