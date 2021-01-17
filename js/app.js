let projects = document.querySelector('.project-link');
if(projects){
    projects.addEventListener('click', function(){
            let projectSec = document.getElementById('projects');
            if(projectSec){
                let projY = projectSec.getBoundingClientRect().top;
                window.scrollTo(0, projY);
            }
    });
}