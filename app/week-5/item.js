export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm list-none">
      <div>
        <h2 className = "text-xl font-bold">{name}</h2>
      </div>

      <h2 className = "text-sm"> Buy {quantity} in {category}  </h2>
    </li>
  );
}
