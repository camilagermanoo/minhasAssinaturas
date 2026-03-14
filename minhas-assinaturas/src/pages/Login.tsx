function Login(){
    return (
        <div>

            <img/>
            <h1>Minhas assinaturas</h1>
            <h3>Faça login para gerenciar suas assinaturas</h3>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email"/>

                <label htmlFor="password">Senha:</label>
                <input type="password" placeholder="Senha"/>


                <input type="submit" value="Entrar"></input>
            </form>

            <h4>Esqueceu a senha?</h4>
            <h3>Não tem conta? Cadastre-se</h3>
        </div>
    )
}

export default Login
