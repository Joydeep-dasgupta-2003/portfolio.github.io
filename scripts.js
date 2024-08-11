function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const certCards = document.querySelectorAll('.cert-card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    certCards.forEach((card) => {
        observer.observe(card);
    });
});