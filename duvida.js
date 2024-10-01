

const faqBoxes = document.querySelectorAll('.faq-box');

faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        
        const answer = box.querySelector('.answer');
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        
        
        const toggle = box.querySelector('.toggle');
        toggle.textContent = (toggle.textContent === '▼') ? '▲' : '▼';
    });
});

