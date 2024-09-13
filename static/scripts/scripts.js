const showSidebar = document.querySelector('.menubar li:last-child a');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.sidebar li:first-child a');

showSidebar.addEventListener('click', () => {
    sidebar.style.display = 'flex';
})

closeSidebar.addEventListener('click', () => {
    sidebar.style.display = 'none';
})