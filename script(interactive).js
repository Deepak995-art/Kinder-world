function navigate(subject) {
    let content = document.getElementById("content");
    let subjectContent = "";
    switch(subject) {
        case 'english':
            subjectContent = "<div class='subject-content'><h2>English</h2><p>Learn ABCs, words, and simple sentences through fun games and stories!</p></div>";
            break;
        case 'tamil':
            subjectContent = "<div class='subject-content'><h2>Tamil</h2><p>Explore Tamil letters, rhymes, and basic words with interactive lessons.</p></div>";
            break;
        case 'maths':
            subjectContent = "<div class='subject-content'><h2>Maths</h2><p>Understand numbers, shapes, and basic math operations through engaging activities.</p></div>";
            break;
        case 'attendance':
            subjectContent = "<div class='subject-content'><h2>Attendance</h2><p>Teachers can mark student attendance here for easy tracking.</p></div>";
            break;
        default:
            subjectContent = "<p>Welcome to KINDERLEARN. Select a subject to start learning.</p>";
    }
    content.innerHTML = subjectContent;
    content.classList.add("fade-in");
    setTimeout(() => content.classList.remove("fade-in"), 500);
}
