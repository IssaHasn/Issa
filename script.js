const nav_btns = document.querySelectorAll('.nav-ul-btn');

nav_btns.forEach(btn => {
    btn.onclick = function(){
        let section_id = btn.innerHTML;
        const section = document.getElementById(section_id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
});

const languaes = ['Python', 'Javascript', 'Html5', 'Css3'];
const frames = ['Django', 'Flask', 'Bootstrap'];
const images_urls = ['images/work1.png', 'images/work2.png', 'images/work3.png', 'images/work4.png', 'images/work5.png', 'images/work6.png'];


let list1 = document.querySelector('#Skills .skills_list div');
let list2 = document.querySelector('#Skills .skills_list2 div');
let works = document.querySelector('.list_works');

let log_skills1 = (list) => {
    list.forEach(function(skill){
        list1.innerHTML += ('<li class="skill"><p class="skill_name">' + skill + '</p></li>');
        return 0; 
    });
};

let log_skills2 = (list) => {
    list.forEach(function(skill){
        list2.innerHTML += ('<li class="skill"><p class="skill_name">' + skill + '</p></li>');
        return 0; 
    });
};

let log_works_images = (list) => {
    list.forEach(function(url){
        works.innerHTML += ('<img class="work" src="' + url + '" alt="work"></img>');
    });
};

log_works_images(images_urls);
log_skills1(languaes);
log_skills2(frames);