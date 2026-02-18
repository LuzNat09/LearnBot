// LearnBot! - Logic
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('input[type="text"]');
    const monsterCards = document.querySelectorAll('.monster-card');
    const submitBtn = document.querySelector('.bouncy-btn');
    let selectedMonster = null;

    // Monster Selection Logic
    monsterCards.forEach(card => {
        card.addEventListener('click', () => {
            // Deselect all
            monsterCards.forEach(c => c.classList.remove('selected'));
            
            // Select clicked
            card.classList.add('selected');
            selectedMonster = card.querySelector('h3').innerText;
            
            // Fun bounce effect on click
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        });
    });

    // Submit Logic
    submitBtn.addEventListener('click', (e) => {
        const username = nameInput.value.trim();
        
        if (!username) {
            // Shake animation for error
            nameInput.classList.add('animate-pulse', 'border-red-400');
            setTimeout(() => nameInput.classList.remove('animate-pulse', 'border-red-400'), 500);
            nameInput.focus();
            alert("Oops! Don't forget your cool name!");
            return;
        }

        if (!selectedMonster) {
            alert("Hey! Pick a monster friend to come with you!");
            return;
        }

        // Success - Simulating login
        // In a real app, this would send data to backend
        console.log(`User: ${username}, Friend: ${selectedMonster}`);
        alert(`Welcome, ${username}! ${selectedMonster} is excited to learn with you!`);
        
        // redirect or change state here
    });

    // Input interaction
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('border-red-400')) {
            nameInput.classList.remove('border-red-400');
        }
    });
});
