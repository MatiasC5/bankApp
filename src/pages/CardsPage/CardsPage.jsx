import { Link } from "react-router-dom";

export const CardsPage = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4 ">
        <Link to="/main">
          <li className="cursor-pointer text-xl hover:underline">Inicio</li>
        </Link>
        <Link to="/accounts">
          <li className="cursor-pointer text-xl hover:underline">Cuentas</li>
        </Link>
        <Link to="/cards">
          <li className="cursor-pointer text-xl hover:underline">Tarjetas</li>
        </Link>
        <li className="cursor-pointer text-xl hover:underline">
          Transferencias
        </li>
      </ul>
    </div>
  );
};
