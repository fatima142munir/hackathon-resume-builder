var _a;
// create an empty array for skills
var skills = [];
// create a program to get input information and display in a resume
function generateResume() {
    var _a;
    var name = document.getElementById('name').value;
    var pName = document.getElementById('professional-title').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var inputSkills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var certification = document.getElementById('certifications').value;
    var education = document.getElementById('education').value;
    var linkedIn = document.getElementById('linkedInID').value;
    var careerObj = document.getElementById('careerObj').value;
    // Check if all required fields are filled
    if (!name || !email || !phone || !inputSkills || !experience || !education || !linkedIn || !pName || !careerObj) {
        alert("Please fill in all fields.");
        return;
    }
    // Split and trim the skills input, then store it in the skills array
    skills = inputSkills.split(',').map(function (skill) { return skill.trim(); });
    // creaye variables for left and right sides of resume
    var resumeOutputLeft = document.getElementById('resumeOutput-left');
    var resumeOutputRight = document.getElementById('resumeOutput-right');
    // Display left side of the resume
    resumeOutputLeft.innerHTML = "\n        <div class=\"image\"></div>\n        <h4>Objective</h4>\n        <p>".concat(careerObj, "</p>\n        <h4>Contact</h4>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>LinkedIn:</strong> ").concat(linkedIn, "</p>\n    ");
    // Display right side of the resume
    resumeOutputRight.innerHTML = "\n        <h1>".concat(name, "</h1>\n        <h3>").concat(pName, "</h3>\n        <h4>Education</h4>\n        <div class=\"separator\"></div>\n        <p>").concat(education, "</p>\n        <h4>Certification</h4>\n        <div class=\"separator\"></div>\n        <p>").concat(certification, "</p>\n        <h4>Experience / Projects</h4>\n        <div class=\"separator\"></div>\n        <p>").concat(experience, "</p>\n        <h4>Skills</h4>\n        <div class=\"separator\"></div>\n    ");
    // Append skills to the right side of resume output
    var skillsContainer = document.createElement("div");
    skills.forEach(function (skill) {
        var skillDiv = document.createElement("div");
        skillDiv.textContent = skill;
        skillsContainer.appendChild(skillDiv);
    });
    resumeOutputRight.appendChild(skillsContainer);
    // Scroll to the resume section itself
    (_a = document.getElementById('resumeContainer')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
}
(_a = document.getElementById('generateResumeBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
