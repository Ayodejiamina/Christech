const showTab1 = document.querySelector('.tab1');
const showTab2 = document.querySelector('.tab2');
const showTab3 = document.querySelector('.tab3');
const tab1 = document.querySelector('#first');
const tab2 = document.querySelector('#second');
const tab3 = document.querySelector('#third');
const demo = document.querySelector('.demo');
const bars = document.querySelector('.bars');
const link = document.querySelector('.link');

showTab1.addEventListener('click', () => {
    tab1.classList.remove('hidden')
    tab2.classList.add('hidden')
    tab3.classList.add('hidden')
    demo.style.display = 'none'

})
showTab2.addEventListener('click', () => {
    tab1.classList.add('hidden')
    tab2.classList.remove('hidden')
    tab3.classList.add('hidden')
    demo.style.display = 'none'


})
showTab3.addEventListener('click', () => {
    tab1.classList.add('hidden')
    tab2.classList.add('hidden')
    tab3.classList.remove('hidden')
    demo.style.display = 'none'


})
bars.addEventListener('click', () => {
    if (link.style.display === 'block') {
        link.style.display = 'none';
    } else {
        link.style.display = 'block';
        link.style.width = '100%'
        link.style.backgroundColor = ' black'
    }
}); i