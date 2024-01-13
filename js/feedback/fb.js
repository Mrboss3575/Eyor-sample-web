document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // You can add your own logic for handling the feedback submission here

    // For this example, let's just show a thank you message
    document.getElementById('feedbackForm').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

function selectEmoji(emoji) {
    // You can add your own logic for handling the selected emoji here

    // For this example, let's just highlight the selected emoji
    document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));
    document.getElementById(emoji).classList.add('selected');
}
