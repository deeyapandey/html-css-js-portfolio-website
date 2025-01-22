function toggleMenu(){
const menu=document.querySelector(".menu-links");
const icon=document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}
const linkedinImage= document.getElementById('linkedin-image');
linkedinImage.addEventListener('click', function() {
window.open('https://linkedin.com/in/deeyapandey', '_blank');
});
const githubImage=document.getElementById('github-image');
githubImage.addEventListener('click',function(){
    window.open('https://github.com/deeyapandey','_blank');
});
const resume=document.getElementById('resume');
resume.addEventListener('click', function(){
    window.open('./assets/resume.pdf','_blank');
});
const amazonProject=document.getElementById('amazon-project');
amazonProject.addEventListener('click', function(){
    window.open('https://github.com/deeyapandey/amazon-clone/tree/main/Amazon%20Clone%20Project','_blank');
})