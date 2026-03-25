import { Wallet } from "lucide-react";

function Header() {
  return (
    <div className="w-full flex items-center justify-between bg-[#0B1220] px-6 py-6 rounded-xl">
      <div>
        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
          Minhas Assinaturas
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3l-3-3m3 3l-3 3m3-3H9"
            />
          </svg>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Gerencie seus gastos recorrentes em um só lugar.
        </p>
      </div>

      <div className="flex items-center gap-4 bg-[#111827] px-5 py-4 rounded-xl border border-gray-700">
        <div className="bg-emerald-500/20 text-emerald-400 p-3 rounded-full">
          <Wallet size={20} />
        </div>
        <div>
          <p className="text-gray-400 text-sm">Gasto total mensal:</p>
          <p className="text-white text-xl font-semibold">R$ 205,80</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
