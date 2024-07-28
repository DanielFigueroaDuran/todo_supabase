interface Props {
  title: string;
  description: string;
  isCompleted: boolean;
}

const TodoItem = ({ title, description, isCompleted }: Props) => {
  return (
    <div className="flex gap-2 p-4 rounded-lg bg-slate-200">
      <input type="checkbox" checked={isCompleted} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TodoItem;
