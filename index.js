const questions = document.querySelectorAll('.question');
const expandIcons = document.querySelectorAll('.question-part > .expand-answer');
const collapseIcons = document.querySelectorAll('.question-part > .collapse-answer');
const answers = document.querySelectorAll('.answer');
const buttons = document.querySelectorAll('.question-part');


buttons.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        answers[index].classList.toggle('show-answer');
        expandIcons[index].classList.toggle('show-icon');
        collapseIcons[index].classList.toggle('show-icon');
    });
});

questions.forEach((question, index) => {
    question.addEventListener('click', (e) => {
       answers[index].classList.toggle('show-answer');
       expandIcons[index].classList.toggle('show-icon');
       collapseIcons[index].classList.toggle('show-icon');
       e.stopPropagation();
    });
});


expandIcons.forEach((icon, index) => {
    icon.addEventListener('click', (e) => {
       answers[index].classList.toggle('show-answer');
       expandIcons[index].classList.toggle('show-icon');
       collapseIcons[index].classList.toggle('show-icon');
       e.stopPropagation();
    });
});


collapseIcons.forEach((icon, index) => {
    icon.addEventListener('click', (e) => {
       answers[index].classList.toggle('show-answer');
       expandIcons[index].classList.toggle('show-icon');
       collapseIcons[index].classList.toggle('show-icon');
       e.stopPropagation();
    });
});
