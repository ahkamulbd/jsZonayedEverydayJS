function clickFunction() {

}
document.getElementById('btn-click').addEventListener('click', function clickFunction() {
    const element = document.getElementById('html-heading');
    element.innerHTML = 'Heading Changed by JavaScript:';
})