import React from 'react';
import imgOne from '../assets/img/img2.jpeg';

const Text = () => {
  return (
    <div className="containt-text">
      <p className="text">
      Le Gospel Spirit n’est pas un groupe de musique mais un concept qui doit aboutir à un ministère. 
      Un moyen pour gagner des âmes dans nos secteurs de groupes familiaux à travers la louange « car Dieu réside dans la louange ». Nous avons chacun reçu de Dieu un talent et des dons. Le festival Gospel Spirit donne à chacun l’opportunité de développer ses talents et ses dons. Comme vous le savez Dieu nous a appelés pour être ses instruments sur terre. 
      Jésus à dit à ses disciples » vous ferez de plus grandes choses que moi ». Vous êtes capable il suffit le vouloir.
      </p>
      <img src={imgOne} alt="gospel spirit" />
    </div>
  )
}

export default Text;