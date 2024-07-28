import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

interface Props {
  title: string;
  description: string;
  isCompleted: boolean;
}

const TodoItem = ({ title, description, isCompleted }: Props) => {
  return (
    <div className="flex items-center gap-2 p-4 rounded-lg bg-slate-200">
      <input type="checkbox" checked={isCompleted} />

      <div className="flex justify-between flex-1 items-center">
        <div>
          <h4 className="text-2xl">{title}</h4>
          <p className="text-slate-600">{description}</p>
        </div>

        <div className="flex gap-3">
          <button className="bg-blue-600 p-2 rounded-md active:scale-90">
            <CiEdit className=" text-white font-semibold" />
          </button>
          <button className="bg-red-600 p-2 rounded-md active:scale-90">
            <RiDeleteBinLine className=" text-white font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
