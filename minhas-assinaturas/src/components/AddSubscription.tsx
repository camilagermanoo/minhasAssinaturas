type Props = {
  onOpen?: () => void;
  modal?: boolean;
  onClose?: () => void;
};

function AddSubscription({ onOpen, modal, onClose }: Props) {
  // 👉 MODO BOTÃO
  if (!modal) {
    return (
      <div className="flex items-center justify-between mt-10">
        <h2 className="text-white text-lg font-semibold">
          Serviços Ativos <span className="text-gray-400">(3)</span>
        </h2>

        <button
          onClick={onOpen}
          className="bg-emerald-500 hover:bg-emerald-600 transition px-5 py-2 rounded-lg text-white font-medium"
        >
          + Nova Assinatura
        </button>
      </div>
    );
  }

  // 👉 MODO MODAL
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0B1220] w-full max-w-md rounded-2xl p-6 border border-gray-800">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg font-semibold">
            Nova Assinatura
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">
              Nome do serviço
            </label>
            <input
              className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-4 py-2 text-white"
              placeholder="Ex: Netflix, Spotify..."
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-gray-400 text-sm">
                Valor mensal (R$)
              </label>
              <input
                className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="0,00"
              />
            </div>

            <div className="flex-1">
              <label className="text-gray-400 text-sm">
                Dia da cobrança
              </label>
              <input
                className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="1-31"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-sm">Categoria</label>
            <select className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-4 py-2 text-white">
              <option>Streaming</option>
              <option>Música</option>
              <option>Software</option>
              <option>Jogos</option>
              <option>Educação</option>
              <option>Outros</option>
            </select>
          </div>

          {/* BOTÕES */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSubscription;