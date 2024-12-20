// create an empty array for skills
let skills: string[] = [];

// create a program to get input information and display in a resume
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const pName = (document.getElementById('professional-title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const inputSkills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const certification = (document.getElementById('certifications') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const linkedIn = (document.getElementById('linkedInID') as HTMLInputElement).value;
    const careerObj = (document.getElementById('careerObj') as HTMLTextAreaElement).value;
    const institute = (document.getElementById('institute') as HTMLTextAreaElement).value;
    const year = (document.getElementById('year') as HTMLTextAreaElement).value;


    // Check if all required fields are filled
    if (!name || !email || !phone || !inputSkills || !experience || !education || !linkedIn || !pName || !careerObj || !institute || !year) {
        alert("Please fill in all fields.");
        return;
    }

    // Split and trim the skills input, then store it in the skills array
    skills = inputSkills.split(',').map(skill => skill.trim());

    // creaye variables for left and right sides of resume
    const resumeOutputLeft = document.getElementById('resumeOutput-left') as HTMLDivElement;
    const resumeOutputRight = document.getElementById('resumeOutput-right') as HTMLDivElement;

    // Display left side of the resume
    resumeOutputLeft.innerHTML = `
        <div class="image"></div>
        <h4>Objective</h4>
        <p>${careerObj}</p>
        <h4>Contact</h4>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedIn}</p>
    `;

    // Display right side of the resume
    resumeOutputRight.innerHTML = `
        <h1>${name}</h1>
        <h3>${pName}</h3>
        <h4>Education</h4>
        <div class="separator"></div>
        <p>${education}</p>
        <p>${institute}</p>
        <p>${year}</p>
        
        <h4>Certification</h4>
        <div class="separator"></div>
        <p>${certification}</p>
        <h4>Experience / Projects</h4>
        <div class="separator"></div>
        <p>${experience}</p>
        <h4>Skills</h4>
        <div class="separator"></div>
    `;

    // Append skills to the right side of resume output
    const skillsContainer = document.createElement("div");
    skills.forEach((skill) => {
        const skillDiv = document.createElement("div");
        skillDiv.textContent = skill;
        skillsContainer.appendChild(skillDiv);
    });
    resumeOutputRight.appendChild(skillsContainer);

    // Scroll to the resume section itself
    document.getElementById('resumeContainer')?.scrollIntoView({ behavior: "smooth" });
}

const downBtn = document.getElementById('downBtn') as HTMLButtonElement
const formCon = document.getElementById('resumeForm') as HTMLFormElement
const h1 = document.getElementById('heading1') as HTMLElement
const h2 = document.getElementById('heading2') as HTMLElement

downBtn.addEventListener('click', ()=>{
    formCon.style.display = "none"
    h1.style.display = "none"
    h2.style.display = "none"
    downBtn.style.display = "none"
    window.print()
})

document.getElementById('generateResumeBtn')?.addEventListener('click', generateResume);
