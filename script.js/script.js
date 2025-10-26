document.getElementById("issueForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const issue = document.getElementById("issue").value;
    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;

    const newIssue = { name, email, issue, lat, lon, time: new Date().toLocaleString() };
    
    // Store in localStorage for view page
    let issues = JSON.parse(localStorage.getItem("issues")) || [];
    issues.push(newIssue);
    localStorage.setItem("issues", JSON.stringify(issues));

    // Store last submission for submit.html
    localStorage.setItem("lastSubmission", JSON.stringify(newIssue));

    // Redirect to submit.html
    window.location.href = "submit.html";
});
