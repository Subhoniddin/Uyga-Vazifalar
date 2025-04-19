import './hero.css'

import heroBg from '../../assets/images/hero-bg.png';

function Hero() {
  return <div className='hero'>
            <div className='info'>
                <h1 className='title'>Learn <br /> Any Foreign Language</h1>
                <p className='descr'>With our teachers who write a program for 
                each student, you will be able to make your
                first sketch after the first lesson.</p>
                <button className='startBtn'>Get started</button>
            </div>
            <img src={heroBg} alt="here-bg" />
        </div>
}

export default Hero
