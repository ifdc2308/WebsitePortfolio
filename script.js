/*script carousel automatic */
    document.addEventListener("DOMContentLoaded", function() {
        const carousel = document.querySelector('[data-carousel="static"]');
        const nextButton = document.querySelector('[data-carousel-next]');

        function nextSlide() {
            nextButton.click();
        }

        // Defina o intervalo de tempo em milissegundos (por exemplo, 5000 para 5 segundos)
        const interval = 5000;

        // Inicie o intervalo para avançar os slides automaticamente
        const carouselInterval = setInterval(nextSlide, interval);

        // Pare o intervalo quando o mouse estiver sobre o carousel
        carousel.addEventListener("mouseenter", function() {
            clearInterval(carouselInterval);
        });

        // Continue o intervalo quando o mouse sair do carousel
        carousel.addEventListener("mouseleave", function() {
            carouselInterval = setInterval(nextSlide, interval);
        });
    });
