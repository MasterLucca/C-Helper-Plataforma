import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import backBoxImg from '../assets/images/back-box.jpg';
import loginImage from '../assets/images/deaf-image.png'; 
import googleIconImg from '../assets/images/google-icon.svg';
import animationImg from '../assets/images/icons/animation.svg';
import arrowImg from '../assets/images/icons/arrow.svg';
import ballImg from '../assets/images/icons/ball.svg';
import codeImg from '../assets/images/icons/code.svg';
import diamondImg from '../assets/images/icons/diamond.svg'
import fireImg from '../assets/images/icons/fire.svg'
import iconHomeImg from '../assets/images/icons/icon-home.svg'
import myCoursesImg from '../assets/images/icons/my-courses.svg'
import myFavoritesImg from '../assets/images/icons/my-favorites.svg'
import notifyImg from '../assets/images/icons/notify.svg'
import searchImg from '../assets/images/icons/search.svg'
import starImg from '../assets/images/icons/star.svg'
import upDown from '../assets/images/icons/up-down.svg'
import logoFlatImg from '../assets/images/logo-flat.png'
import logoDarkImg from '../assets/images/logo-dark.png'

import '../styles/home.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const { user, signInWithGoogle } = useAuth()
  const history = useHistory();
  

  function NavigateToCourses () {
    history.push('/courses');
  }
  
  function NavigateToLoginPage () {
    history.push('/register');
    
    
  }
  

  return (
    
      <div id="home-page">
        <section id="sidebar">
          <div className="inner">
            <nav>
              <ul className="menu-left">
                <div className="square-home-1">
                  <li className="home">
                    <a href="#home">Início</a>
                  </li>
                </div>
                <div className="square-home">
                  <li className="my-courses">
                    <a onClick={NavigateToCourses}>Meus Cursos</a>
                  </li>
                </div>
                <div className="square-home">
                  <li className="favorites">
                    <a href="#favorites">Favoritos</a>
                  </li>
                </div>
                <div className="square-home">
                  <li className="test">
                    <a href="#test">Teste</a>
                  </li>
                </div>
                <div className="square-home">
                  <li className="conclusion">
                    <a href="#conclusion">Concluídos</a>
                  </li>
                </div>
                <div className="square-home">
                  <li className="certified">
                    <a href="#certified">Certificados</a>
                  </li>
                </div>
                <div className="square-home">
                  <li className="config">
                    <a href="#config">Configurações</a>
                  </li>
                </div>
              </ul>
              </nav>
          </div>
          
        </section>
        <hr className="vertical-line"/>

      <div className="principal-box">
        <img className="principal-image" src={backBoxImg}/>
        <p className="box-title">Aprenda como ser dev com Proa</p>
        <p className="box-detail">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
        <div className="box-learn-now">
          <a className="button-learn-now" href="https://google.com">Aprenda Já</a>
        </div>
      </div>
      
      <img className="dark-logo" src={logoDarkImg} />
      <span className="line-left"/>
      
      <div className="text-hello-1">Olá, {user?.name}</div>
      <div className="text-hello-2">O que vai aprender hoje?</div>

      <div className="menu-right"> 
        

        <div className="div-search">
          <input className="input-search" id="search" type="search" placeholder="Pesquisar"/>
        </div>
        <img className="search-icon" src={searchImg} />
        <div className="notify-counter">
          <span className="counter">2</span>
        </div>
        <div className="notification">
        <input className="dropicon" type="image" src={notifyImg} />
        </div>
        
      
        <p className="title-progress">Cursos em progresso</p>
         <div className="progress-options">
           <div id="progress-1" className="progress-1">
             <a href="#pounds">
             <div className="square-fire"></div>
             <img className="fire-icon" src={fireImg}/>
             <p className="learn-pounds">Aprenda Libras</p>
             <p className="miss-time">Não perca tempo</p>
             <img className="arrow-1" src={arrowImg}/></a>
           </div>
           <div id="progress-2" className="progress-2">
            <a href="#pounds">
              <div className="square-diamond"></div>
              <img className="fire-icon" src={diamondImg}/>
              <p className="learn-pounds">Aprenda Design</p>
              <p className="miss-time">Figma</p>
              <img className="arrow-1" src={arrowImg}/></a>
           </div>
           <div id="progress-3" className="progress-3">
            <a href="#pounds">
              <div className="square-code"></div>
              <img className="fire-icon" src={codeImg}/>
              <p className="learn-pounds">Aprenda a Codar</p>
              <p className="miss-time">A melhor experiência com PROA</p>
              <img className="arrow-1" src={arrowImg}/></a>
           </div>
           <div id="progress-4" className="progress-4">
            <a href="#pounds">
              <div className="square-animation"></div>
              <img className="fire-icon" src={animationImg}/>
              <p className="learn-pounds">Aprenda Animações</p>
              <p className="miss-time">Com DaVinci Resolve</p>
              <img className="arrow-1" src={arrowImg}/></a>
           </div>
         </div>
         <p className="static-title">Seus Pontos de Estudos</p>
         <div className="statistics"></div>
            </div>

      <div className="trail-study">
        <div className="trail-one">
        <div className="trail-two">
        <div className="trail-three">
          </div>
        </div>
      </div>
    </div>  
    <div>
      <div className="trail-p-one">Proa de A a Z 
        <p className="sub-trail-all">12 Horas de aulas em vídeo</p>
        <div className="circles-group">
          <div className="photo-trail-1"></div>
          <div className="photo-trail-2"></div>
          <div className="photo-trail-3"></div>
          <div className="photo-trail-4"></div>
          <div className="photo-trail-5"></div>
          <div className="photo-trail-6"></div>
        </div>
        <div className="star-balls">
          <img className="star" src={starImg}/> 
          <img className="balls" src={ballImg}/>
          <img className="balls-2" src={ballImg}/>
        </div>
      </div>
      <div className="trail-p-two">Proa de A a Z
        <p className="sub-trail-all">12 Horas de aulas em vídeo</p>
        <div className="circles-group">
          <div className="photo-trail-1"></div>
          <div className="photo-trail-2"></div>
          <div className="photo-trail-3"></div>
          <div className="photo-trail-4"></div>
          <div className="photo-trail-5"></div>
          <div className="photo-trail-6"></div>
        </div>
        <div className="star-balls">
          <img className="star" src={starImg}/> 
          <img className="balls" src={ballImg}/>
          <img className="balls-2" src={ballImg}/>
        </div>
      </div>
      
      <div className="trail-p-three">Proa de A a Z
        <p className="sub-trail-all">12 Horas de aulas em vídeo</p>
        <div className="circles-group">
          <div className="photo-trail-1"></div>
          <div className="photo-trail-2"></div>
          <div className="photo-trail-3"></div>
          <div className="photo-trail-4"></div>
          <div className="photo-trail-5"></div>
          <div className="photo-trail-6"></div>
        </div>
        <div className="star-balls">
          <img className="star" src={starImg}/> 
          <img className="balls" src={ballImg}/>
          <img className="balls-2" src={ballImg}/>
        </div>
      </div>
    </div>
    <p className="title-trail">Sua trilha de aprendizagem</p>   
    
    

      <div className="bottom-perfil">
        <img className="perfil-img" src={user?.avatar}/>
        <p className="perfil-name">{user?.name}</p>
        <p className="perfil-class"></p>
        <img id="perfil-spoiler" className="arrow-up-down" src={upDown}/>
      </div>
      
      

        
      </div>
  
  )
}