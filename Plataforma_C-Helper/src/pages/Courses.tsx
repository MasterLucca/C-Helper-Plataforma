import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import codingImg from '../assets/images/courses/coding.png';
import designImg from '../assets/images/courses/design.jpg';
import admImg from '../assets/images/courses/administration.jpg';
import nextLevelImg from '../assets/images/courses/nextlevel.jpg';
import proaImg from '../assets/images/courses/proa.png';
import daVinciImg from '../assets/images/courses/davinci.jpg';


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

import '../styles/courses.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Courses() {
  const { user, signInWithGoogle } = useAuth()
  const history = useHistory();
  


  function NavigateToFirstPage () {
    history.push('/');
  }
  

  return (
    
      <div id="home-page">
        <section id="sidebar">
          <div className="inner">
            <nav>
              <ul className="menu-left">
                <div className="square-home">
                  <li className="my-courses">
                    <a className="firstPage" onClick={NavigateToFirstPage}>Início</a>
                  </li>
                </div>
                <div className="square-home-1">
                  <li className="home">
                    <a href="#my-courses">Meus Cursos</a>
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
<div className="courses-presentation">
      <div className="principal-box-courses">
        <img className="principal-image-courses" src={codingImg}/>
          <p className="box-title-courses">Aprenda a programar em equipe</p>
          <p className="box-detail-courses">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
      </div>
      <div className="principal-box-courses-2">
        <img className="principal-image-courses" src={designImg}/>
          <p className="box-title-courses">Aprenda como ser dev com Proa</p>
          <p className="box-detail-courses">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
      </div>
      <div className="principal-box-courses-3">
        <img className="principal-image-courses" src={proaImg}/>
          <p className="box-title-courses">Aprenda como ser dev com Proa</p>
          <p className="box-detail-courses">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
      </div>
      <div className="principal-box-courses-4">
        <img className="principal-image-courses" src={admImg}/>
          <p className="box-title-courses">Aprenda como ser dev com Proa</p>
          <p className="box-detail-courses">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
      </div>
      <div className="principal-box-courses-5">
        <img className="principal-image-courses" src={nextLevelImg}/>
          <p className="box-title-courses">Aprenda como ser dev com Proa</p>
          <p className="box-detail-courses">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
      </div>
      <div className="principal-box-courses-6">
        <img className="principal-image-courses" src={daVinciImg}/>
          <p className="box-title-courses">Aprenda como ser dev com Proa</p>
          <p className="box-detail-courses">Proa é uma ong sem fins lucrativos que visa ensinar jovens de baixa renda a programar e ser incluido no mercado dde trabalho</p>
      </div>
      
  </div>
  
      <img className="dark-logo" src={logoDarkImg} />
      <span className="line-left"/>
      
      <div className="text-hello-1">Olá, {user?.name}</div>
      <div className="text-hello-2">Seus cursos, vamos terminá-los?</div>

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