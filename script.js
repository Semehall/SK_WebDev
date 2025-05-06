document.addEventListener("DOMContentLoaded", function () {
    const roleWords = ["Manager", "Developer"];
    let roleIndex = 0;
    const roleElement = document.getElementById("rotating-role");
  
    function rotateRole() {
      roleElement.style.opacity = 0;
      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roleWords.length;
        roleElement.textContent = roleWords[roleIndex];
        roleElement.style.opacity = 1;
      }, 500);
    }
    setInterval(rotateRole, 2000);
  
    const projectGrid = document.querySelector(".project-grid");
    const leftButton = document.querySelector(".scroll-left");
    const rightButton = document.querySelector(".scroll-right");
  
    if (leftButton && rightButton) {
      leftButton.addEventListener("click", () => {
        projectGrid.scrollBy({ left: -400, behavior: "smooth" });
      });
      rightButton.addEventListener("click", () => {
        projectGrid.scrollBy({ left: 400, behavior: "smooth" });
      });
    }
  
    const skillsContainer = document.querySelector(".skills-container");
    if (skillsContainer) skillsContainer.scrollLeft = 0;
  
    const cursorRounded = document.querySelector(".rounded");
    const cursorPointed = document.querySelector(".pointed");
  
    document.addEventListener("mousemove", function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      if (cursorRounded && cursorPointed) {
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    });
  });
  
  const canvas = document.getElementById('interactive-bg');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let mouse = { x: null, y: null };
  
  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
  
  class Circle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.baseRadius = radius;
      this.color = color;
      this.velocity = velocity;
    }
  
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  
    update() {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < 100) {
        this.radius = Math.min(this.baseRadius + 10, 40);
      } else {
        this.radius = Math.max(this.baseRadius, this.radius - 1);
      }
  
      this.x += this.velocity.x;
      this.y += this.velocity.y;
  
      if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
      if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
  
      this.draw();
    }
  }
  
  let circles = [];
  function initCircles() {
    circles = [];
    for (let i = 0; i < 100; i++) {
      let radius = Math.random() * 3 + 2;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let color = 'rgba(180, 165, 195, 0.2)';
      let velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      };
      circles.push(new Circle(x, y, radius, color, velocity));
    }
  }
  
  function animateCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let circle of circles) {
      circle.update();
    }
    requestAnimationFrame(animateCircles);
  }
  
  initCircles();
  animateCircles();
  
  const starCanvas = document.getElementById("star-canvas");
  const starCtx = starCanvas.getContext("2d");
  
  function resizeStarCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
  }
  
  resizeStarCanvas();
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    resizeStarCanvas();
    initCircles();
  });
  
  const stars = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * starCanvas.width,
    y: Math.random() * starCanvas.height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    delta: Math.random() * 0.02 + 0.005,
  }));
  
  function drawStars() {
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    for (const star of stars) {
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
  
      starCtx.beginPath();
      starCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starCtx.fillStyle = `rgba(198, 145, 255, ${star.alpha})`;
      starCtx.fill();
    }
    requestAnimationFrame(drawStars);
  }
  
  drawStars();



  gsap.from(".about-img", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-img",
      start: "top 80%"
    }
  });
  
  gsap.from(".about-text", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 80%"
    }
  });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-img", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%"
      }
    });

    gsap.from(".about-text", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%"
      }
    });

    gsap.from(".skills-section-inline", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-section-inline",
        start: "top 85%"
      }
    });

    gsap.from("footer", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 95%"
      }
    });


  const rounded = document.querySelector(".rounded");
  const pointed = document.querySelector(".pointed");

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    rounded.style.transform = `translate(${x}px, ${y}px)`;
    pointed.style.transform = `translate(${x}px, ${y}px)`;
  });



    const currentPage = location.pathname.split("/").pop();
    document.querySelectorAll('.nav-link').forEach(link => {
      if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
        
      }
      
    });  
  


  