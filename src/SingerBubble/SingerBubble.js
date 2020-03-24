import React, {useEffect} from 'react';

const SingerBubble = () => {
  useEffect(() => {
    const createBall = el => ({
      x: Math.random() * (window.innerWidth - 1),
      y: Math.random() * (window.innerHeight - 1),
      dx: 1,
      dy: 1,
      radius : 50,
      el
    })
    const putOnPos = ball => {
      ball.el.style.width = `${ball.radius * 2}px`
      ball.el.style.height = `${ball.radius * 2}px`
      return ball
    }
    const balls = [...document.querySelectorAll('.bubble')]
      .map(createBall)
      .map(putOnPos)
    
    const move = () => {
      balls.forEach(ball => {
        ball.x += ball.dx
        ball.y += ball.dy
      })
    }

    
  
    const collision = () => {
      balls.forEach(ball => {
        if (ball.x >= window.innerWidth - ball.radius * 2) {
          ball.x = window.innerWidth - ball.radius * 2
          ball.dx *= -1
        }
        if (ball.x <= 0) {
          ball.x = 0
          ball.dx *= -1
        }
    
        if (ball.y <= 0) {
          ball.y = 0
          ball.dy *= -1
        }
        if (ball.y >= window.innerHeight - ball.radius * 2) {
          ball.y = window.innerHeight - ball.radius * 2
          ball.dy *= -1
        }
      })
    }
    const render = () => {
      balls.forEach(ball =>
        ball.el.style.transform = `translate(${ball.x}px, ${ball.y}px)`)
    }
    const update = () => {
      // let animationTest = null;
      // let onClickBubble = document.querySelector('.bubble')
      // animationTest = setInterval(move(), 2000)
      // onClickBubble.addEventListener('click', (() => {
        
      // }))
      move()
      
      collision()
      render()
      
      requestAnimationFrame(update)
    }
    update()
  }, [])


  
  
  return (
    <div className="containt-singer">
      <h2>Nos Artistes</h2>
      <div className="text-legende">
        <div>
          <h4 className="singer">Chanteur :</h4>
          <div className="singer-dot"></div>
        </div>
        <div>
          <h4 className="singer">Guitariste :</h4>
          <div className="singer-dot two"></div>
        </div>
        <div>
          <h4 className="singer">Batteur :</h4>
          <div className="singer-dot tree"></div>
        </div>
      </div>
      <div className="containt-bubble">
        <div className="bubble one">
          Jean 
        </div>
        <div className="bubble twoBubble">
          Bernard
        </div>
        <div className="bubble treeBubble">
          Paul
        </div>
      </div>
      <h5>Survolez les bulles aves la souris </h5>
    </div>
  )
}

export default SingerBubble;