import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite a título da tarefa"
        onChange={(event) => setDescription(event.target.value)}
        value={title}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <button
        className="bg-slate-600 rounded-md p-2 text-white"
        onClick={() => {
          if (!title || !description) {
            return alert("Preencha o titulo e a descriçao da tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
