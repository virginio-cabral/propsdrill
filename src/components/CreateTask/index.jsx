import "./styles.css";
import { useState } from "react";

export default function CreateTask() {
  const { task, setTask } = useState("");
  const { date, setDate } = useState("");
  const { description, setDescription } = useState("");

  return (
    <>
      <div className="container-list">
        <input type="text" name="task" id="task" />
        <input type="date" name="date" id="date" />
        <input type="text" name="description" id="description" />

        <button type="button"></button>
      </div>
    </>
  );
}
