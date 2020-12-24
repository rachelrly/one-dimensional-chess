import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import '../../css/About.css';

function About(props) {
  return (
    <div className='about-wrapper'>
      <div className='about-header-wrapper'>
        <IoMdArrowBack
          tabIndex='0'
          className='back-button'
          onClick={() => props.hideAbout()}
          onKeyPress={e => e.key === 'Enter' ? props.hideAbout() : null} />
        <h2>One Dimensional Chess</h2>
      </div>


      <div className='about-content-wrapper'>
        <h3>About</h3>
        <p>There are several versions of one-dimensional chess. This game uses Glimne's rules, adapted from <a href='https://www.chessvariants.com/shape.dir/onedim.html'>The Chess Variants</a>.</p>
        <p>Glimne's version has 18 squares. Each side has 7 pieces starting in the following order: King, Queen, Rook, Bishop, Bishop, Knight, Pawn.</p>
        <p>Instructions for how each piece can moved are displayed at the top of the game. </p>
        <p>This game was created by <a href='https://rachelanastasia.netlify.app/'>Rachel Reilly</a>, a Chicago based JavaScript developer, using React and CSS3. Find Rachel on <a href='https://www.linkedin.com/in/rachel-a-reilly/'>LinkedIn</a> and <a href='https://github.com/Rachanastasia'>GitHub</a></p>




      </div>
    </div>

  )
}

export default About
