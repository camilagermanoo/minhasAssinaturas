function AddSubscription() {
  return (
    <div className="flex items-center justify-between mt-10">
      <h2 className="text-white text-lg font-semibold">
        Serviços Ativos <span className="text-gray-400">(3)</span>
      </h2>

      <button className="bg-emerald-500 hover:bg-emerald-600 transition px-5 py-2 rounded-lg text-white font-medium">
        + Nova Assinatura
      </button>
    </div>
  );
}

export default AddSubscription;
