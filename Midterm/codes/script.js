document.addEventListener("DOMContentLoaded", function () {
    const words = ["Product", "UX"];
    let index = 0;
    const textElement = document.getElementById("rotating-text");

    function changeText() {
        textElement.style.opacity = 0; 

        setTimeout(() => {
            index = (index + 1) % words.length; 
            textElement.textContent = words[index]; 
            textElement.style.opacity = 1; 
        }, 500); 
    }

    setInterval(changeText, 2000);
});

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".skills-container").scrollLeft = 0;
    });

    document.addEventListener("DOMContentLoaded", function () {
        const projectGrid = document.querySelector(".project-grid");
        const leftButton = document.querySelector(".scroll-left");
        const rightButton = document.querySelector(".scroll-right");
    
        leftButton.addEventListener("click", function () {
            projectGrid.scrollBy({ left: -400, behavior: "smooth" });
        });
    
        rightButton.addEventListener("click", function () {
            projectGrid.scrollBy({ left: 400, behavior: "smooth" });
        });
    });
    
