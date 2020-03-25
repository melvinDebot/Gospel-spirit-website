import React, {useRef} from 'react';
import { useIntersection } from "react-use";
import gsap, {Power3} from 'gsap';

const Number = () => {
  let sectionBox = useRef(null)
  const intersection = useIntersection(sectionBox , {
    root : null,
    rootMargin : "0px",
    threshold : 0.5
  })
  const fadeIn = () => {
    gsap.to(".box", 1, {
      x:-10,
      opacity :1,
      ease: Power3.easeInOut,
      stagger: 0.4
    })
  }
  const fadeOut = () => {
    gsap.to(".box", 1, {
      x:10,
      opacity :0,
      ease: Power3.easeInOut,
      stagger: 0.4
    })
  }
  intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".box") : fadeIn(".box")
  return (
    <div className="contain-number" ref={sectionBox}>
      <div className="box">
        <p className="box--number">01</p>
        <p className="box--text">Publier Une fete</p>
      </div>
      <div className="box">
        <p className="box--number">02</p>
        <p className="box--text">Réunir les gens dans la salle </p>
      </div>
      <div className="box">
        <p className="box--number">03</p>
        <p className="box--text">Mettre en confiance</p>
      </div>
      <div className="box">
        <p className="box--number">04</p>
        <p className="box--text">Mettre a la lumière  </p>
      </div>
    </div>
  )
}

export default Number;