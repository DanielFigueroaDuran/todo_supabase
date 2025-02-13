import { ChangeEvent, useState } from "react";

interface Props {
  onClose: () => void;
  onCreate: (title: string, description: string) => void;
}

interface InputValues {
  title: string;
  description: string;
}

const TodoModal = ({ onClose, onCreate }: Props) => {
  const [inputValues, setInputValues] = useState<InputValues>({
    title: "",
    description: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    //console.log(inputValues.title, inputValues.description);
    onCreate(inputValues.title, inputValues.description);
  };

  return (
    <div
      className="absolute top-0 left-0 z-0 flex items-center justify-center w-screen h-screen bg-black/50"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="z-10 flex flex-col gap-3 p-6 bg-white rounded-lg">
        <h6 className="text-2xl">Crear nueva Tarea</h6>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="p-2"
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          className="p-2 border"
          onChange={handleChange}
        ></textarea>
        <button
          className="p-2 text-white bg-blue-600 border border-blue-300 rounded-md hover:bg-blue-400 active:scale-95"
          onClick={handleClick}
        >
          Crear Tarea
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
