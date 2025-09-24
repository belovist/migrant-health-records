document.addEventListener('DOMContentLoaded', () => {

    const langButtons = document.querySelectorAll('.lang-button');
    const gridButtons = document.querySelectorAll('.grid-button');
    const infoCards = document.querySelectorAll('.info-card');
    
    // New modal elements
    const messageModal = document.getElementById('message-modal');
    const modalText = document.getElementById('modal-text');
    const closeModalBtn = document.getElementById('close-modal');

    // Function to display a message in the custom modal
    const showMessage = (message) => {
        modalText.textContent = message;
        messageModal.classList.add('visible');
    };

    // Close the message modal
    closeModalBtn.addEventListener('click', () => {
        messageModal.classList.remove('visible');
    });

    // Handle language toggle button clicks
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Log the action
            console.log(`Language switched to: ${button.dataset.lang}`);
            showMessage(`Language switched to ${button.dataset.lang.toUpperCase()}`);
        });
    });

    // Handle clicks on the main grid buttons
    gridButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.querySelector('.button-text').textContent;
            showMessage(`You clicked on "${buttonText}"`);
        });
    });

    // Handle clicks on the smaller info cards
    infoCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardLabel = card.querySelector('.info-card-label').textContent;
            showMessage(`You clicked the "${cardLabel}" card.`);
        });
    });
});
