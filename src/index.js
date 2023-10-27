document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                window.location.hash = section.id;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});
