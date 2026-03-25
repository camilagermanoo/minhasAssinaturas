import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500/10 border border-teal-400/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="rgb(45 212 191)"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5m0 0h-6a2 2 0 1 1 0-4h6v4z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-white">
          Criar Conta
        </h1>
        <p className="text-center text-gray-400 mt-1 mb-6">
          Comece a controlar suas assinaturas
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Senha</label>
            <input
              type="password"
              placeholder="••••••"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Confirmar senha</label>
            <input
              type="password"
              placeholder="••••••"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold transition duration-200 shadow-lg shadow-teal-500/20"
          >
            Criar conta
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Já tem conta?{" "}
          <Link to="/login" className="text-teal-400 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
