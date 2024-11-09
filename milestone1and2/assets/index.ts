const skills = document.getElementById('show-skills') as HTMLElement
const btn = document.getElementById('show-skills-btn') as HTMLButtonElement
const btnDetail = document.getElementById('btn-detail') as HTMLDivElement
btn.addEventListener('click', ()=>{
    if(skills.style.display !== "block"){
        btnDetail.style.display = "none"
        skills.style.display = "block"
        console.log("clicked");
    }else{
        console.log("off");
        btnDetail.style.display = "block"
        skills.style.display = "none"
    }      
})