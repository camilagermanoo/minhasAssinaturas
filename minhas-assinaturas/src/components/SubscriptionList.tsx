import { CalendarDays, Pencil, Trash2 } from "lucide-react";

function SubscriptionList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      
      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold">Netflix Premium</h3>
          <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
            Streaming
          </span>
        </div>

        <p className="text-gray-400 text-sm mt-4">Valor mensal</p>
        <p className="text-white text-2xl font-bold">R$ 59,90</p>

        <div className="flex justify-between items-center mt-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            Dia 5
          </div>
        </div>
      </div>

      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold">Spotify Premium</h3>
          <span className="text-xs bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">
            Música
          </span>
        </div>

        <p className="text-gray-400 text-sm mt-4">Valor mensal</p>
        <p className="text-white text-2xl font-bold">R$ 21,90</p>

        <div className="flex justify-between items-center mt-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            Dia 12
          </div>

          <div className="flex gap-3">
            <Pencil size={16} className="cursor-pointer hover:text-white" />
            <Trash2 size={16} className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>

      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold">Adobe Creative Cloud</h3>
          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
            Software
          </span>
        </div>

        <p className="text-gray-400 text-sm mt-4">Valor mensal</p>
        <p className="text-white text-2xl font-bold">R$ 124,00</p>

        <div className="flex items-center gap-2 mt-6 text-gray-400 text-sm">
          <CalendarDays size={16} />
          Dia 20
        </div>
      </div>
    </div>
  );
}

export default SubscriptionList;