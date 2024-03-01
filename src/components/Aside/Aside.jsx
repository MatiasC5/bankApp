import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const Aside = () => {
  const { user } = useUser();

  return (
    <aside className="w-44">
      <div className="flex items-center  gap-2 mb-4">
        <div className="border-2 border-black rounded-full h-10 w-10 flex justify-center  ">
          <img
            src="https://icongr.am/clarity/avatar.svg?size=128&color=currentColor"
            width={25}
          />
        </div>
        <Link to="/user">
          <h5>{user.username}</h5>
        </Link>
      </div>

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
        <Link to="/transfer">
          <li className="cursor-pointer text-xl hover:underline">
            Transferencias
          </li>
        </Link>
      </ul>
    </aside>
  );
};
