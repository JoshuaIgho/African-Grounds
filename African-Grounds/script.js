 // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Custom cursor
        const cursor = document.querySelector('.custom-cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Add hover effect to links for cursor
        const hoverElements = document.querySelectorAll('a, button, .video-card, .country-filter');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('scale-150');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('scale-150');
            });
        });
        
        // Scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.slide-up');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate-slide-up');
                }
            });
        };
        
        // Run once on page load
        animateOnScroll();
        
        // Then on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Country filter functionality
        const countryFilters = document.querySelectorAll('.country-filter');
        
        countryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // In a real implementation, this would filter the video grid
                // For now, just toggle active state
                countryFilters.forEach(f => f.classList.remove('bg-amber-100', 'text-amber-900'));
                filter.classList.addx('bg-amber-100', 'text-amber-900');
            });
        });
        
        // Video card click handler
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                // In a real implementation, this would open a modal or navigate to video page
                alert('This would open the video player in a real implementation');
            });
        });
          
        document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('year').textContent = new Date().getFullYear();});