document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const instagramBtn = document.querySelector('.instagram-button');

    // Exemplo de interatividade: Adiciona uma classe ao clicar para um feedback visual
    const addActiveEffect = (element) => {
        element.addEventListener('mousedown', () => {
            element.style.transform = 'translateY(1px)';
            element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        });
        element.addEventListener('mouseup', () => {
            element.style.transform = '';
            element.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        });
    };

    if (whatsappBtn) {
        addActiveEffect(whatsappBtn);
    }
    if (instagramBtn) {
        addActiveEffect(instagramBtn);
    }
});