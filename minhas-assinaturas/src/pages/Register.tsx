function Register() {
  return (
    <div>
      <h1>Criar conta</h1>

      <form>
        <label htmlFor="name">Nome completo:</label>
        <input type="text" id="name" placeholder="Seu nome" />

        <label htmlFor="email">Seu e-mail:</label>
        <input type="email" id="email" placeholder="E-mail" />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Senha" />

        <label htmlFor="confirmPassword">Confirmar senha:</label>
        <input type="password" id="confirmPassword" placeholder="Confirmar senha" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
