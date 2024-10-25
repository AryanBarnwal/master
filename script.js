// Function to switch between pages
function goToPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}

// Function to handle the gratitude text input
function submitGratitude() {
    const gratitudeInput = document.getElementById("gratitude-input").value;
    const displayGratitude = document.getElementById("display-gratitude");

    // Display the input text in the gratitude section
    displayGratitude.innerHTML = gratitudeInput.replace(/\n/g, '<br>');
}

// Set the initial active page to the profile page
document.addEventListener('DOMContentLoaded', function() {
    goToPage('profile-page');
});


function addTask() {
    // Get the task input value
    const taskInput = document.getElementById('task-input').value;

    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskInput;

    // Append the new task to the list
    document.getElementById('todo-list').appendChild(li);

    // Clear the input field
    document.getElementById('task-input').value = '';
}

// Function to toggle the cross through effect
function toggleCross(element) {
    element.classList.toggle('crossed');
}
