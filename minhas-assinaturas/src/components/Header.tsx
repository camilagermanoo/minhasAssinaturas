import { Wallet } from "lucide-react";

function Header() {
  return (
    <div className="w-full flex items-center justify-between bg-[#0B1220] px-6 py-6 rounded-xl">
  
      <div>
        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
           Minhas Assinaturas
          <span className="text-gray-400">↗</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
           Gerencie seus gastos recorrentes em um só lugar.
        </p>
      </div>

      <div className="flex items-center gap-4 bg-[#111827] px-5 py-4 rounded-xl border border-gray-700">
        <div className="bg-emerald-500/20 text-emerald-400 p-3 rounded-full">
          <Wallet size={20}/>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Gasto total mensal:</p>
          <p className="text-white text-xl font-semibold">R$ 205,80</p>
        </div>
      </div>
      
    </div>
  )
}

export default Header
