let about = document.querySelector('.about-link');
if(about){
    about.addEventListener('click', function(){
            let aboutSec = document.getElementById('about');
            if(aboutSec){
                let aboutY = aboutSec.getBoundingClientRect().top;
                window.scrollTo(0, aboutY);
            }
    });
}

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

let links = document.querySelector('.links-link');
if(links){
    links.addEventListener('click', function(){
            let linkSec = document.getElementById('links');
            if(linkSec){
                let linkY = linkSec.getBoundingClientRect().top;
                window.scrollTo(0, linkY);
            }
    });
}