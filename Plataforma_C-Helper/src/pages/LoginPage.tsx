import { useHistory } from 'react-router-dom';


import loginImage from '../assets/images/deaf-image.png'; 
import googleIconImg from '../assets/images/google-icon.svg';
import logoFlatImg from '../assets/images/logo-flat.png'
import logoDarkImg from '../assets/images/logo-dark.png'
import '../styles/auth.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function LoginPage() {

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()

 async function HandleHome() {
   if (!user) {
     await signInWithGoogle()
    }

      history.push('/');
  }

  function NavigateToRegisterPage () {
    history.push('/register');
  }



  return (

    <div id="page-auth">
      <aside>
        <img src={loginImage} alt="Ilustração de simbolizando controle"/>
        <strong>Os melhores cursos</strong>
        <p>Adaptado exclusivamente para você!</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoFlatImg} className="logo" alt="Logo C-Helper"/>
          <button onClick={HandleHome} className="sign-google">
            <img src={googleIconImg} alt="Ícone Google"/>          
            Faça Login com o Google
          </button>
          <div className="separator">ou utilize e-mail e senha</div>
          <form>
            <input 
            type="email"
            placeholder="Insira seu e-mail"
            />
            <input
            type="password"
            placeholder="Insira sua senha"
            />
            <Button type="submit">
              Entrar
            </Button>
            <Button onClick={NavigateToRegisterPage} className="btn-create">
              Criar uma conta
            </Button>
          </form>
        </div>
      </main>

    </div>
  )
}
