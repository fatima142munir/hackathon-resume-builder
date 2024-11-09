var skills = document.getElementById('show-skills');
var btn = document.getElementById('show-skills-btn');
var btnDetail = document.getElementById('btn-detail');
btn.addEventListener('click', function () {
    if (skills.style.display !== "block") {
        btnDetail.style.display = "none";
        skills.style.display = "block";
        console.log("clicked");
    }
    else {
        console.log("off");
        btnDetail.style.display = "block";
        skills.style.display = "none";
    }
});
