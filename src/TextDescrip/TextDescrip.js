import React from 'react';
import descriptionImg from '../assets/img/group.svg';

const TextDescip = () => {
  return (
    <div className="containt-text-descrip">
      <p>Il y a une puissance à travers  la louange pas besoin d’avoir le talent de Céline Dion, il suffit juste d’un cœur bien disposé et Le Saint Esprit fera le reste.
      Nous allons procéder comme un corp d’armée composée de dirigeants :</p>
      <div className="img-containt-text">
        <img src={descriptionImg} alt="description"/>
      </div>
      <p>Le Gospel Spirit a pour but de réunir des personnes remplies du Saint Esprit et qui veulent transmettre ce qu’ils ont reçu de Dieu à des non croyants.

Durant cette aventure vous serez formés à changer l’atmosphère, de guérir les malades, changer la vie des personnes en quelque chose de bien, de voir une démonstration du Saint Esprit.

Pour cela nous allons suivre une stratégie, celle de Jéhu dans le livre des Rois lorsqu’il décida d’exterminer tous les prêtres de Baal à Jérusalem. Se référer au verset : 2 rois 10 : 17-30</p>
    </div>
  )
}

export default TextDescip;