import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type the title of the task"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <Input
        type="text"
        placeholder="Type the description of the task"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <button
        className="bg-slate-600 rounded-md p-2 text-white"
        onClick={() => {
          if (!title || !description) {
            return alert("Fill title and description of the task");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
