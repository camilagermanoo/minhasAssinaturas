import { labelStyle, inputStyle, buttonStyle } from "../styles/formStyles"
import { Link } from "react-router-dom"

function Register() {
  return (
    
      <div className=" min-h-screen bg-gradient-to-r from-[#020617] via-[#0a1a2f] to-[#020617] flex flex-col justify-center items-center">

        <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-2xl border border-slate-800 shadow-xl flex-col justify-center items-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-teal-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="rgb(45 212 191)" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5m0 0h-6a2 2 0 1 1 0-4h6v4z"/>
              </svg>
            </div>
          </div>

        <h1 className="flex flex-row justify-center text-2xl text-text font-bold">Criar Conta</h1>
        <h3 className="flex flex-row justify-center text-gray-400">Cadastre-se para começar a controlar suas assinaturas</h3>

        <form className="w-full flex flex-col">
          <label className={labelStyle} htmlFor="name">Nome Completo:</label>
          <input className={inputStyle} type="text" id="name" placeholder="Seu nome" />

          <label className={labelStyle} htmlFor="email">Seu e-mail:</label>
          <input className={inputStyle} type="email" id="email" placeholder="E-mail" />

          <label className={labelStyle} htmlFor="password">Senha:</label>
          <input className={inputStyle} type="password" id="password" placeholder="Senha" />

          <label className={labelStyle} htmlFor="confirmPassword">Confirmar senha:</label>
          <input className={inputStyle} type="password" id="confirmPassword" placeholder="Confirmar senha" />

          <button className={buttonStyle} type="submit">Cadastrar</button>

          <p className="text-gray-400 text-sm text-center mt-4"> Já tem conta?{" "}
             <Link to="/login" className="text-teal-400 hover:underline">Faça login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
