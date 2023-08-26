const themeSelector = document.getElementById('themeSelector');
const body = document.body;


function applyTheme(theme) {
    console.log("Applying theme:", theme);  
    switch(theme) {
        case 'light':
            body.classList.remove('dark');
            console.log("Removed dark class from body");  
            break;
        case 'dark':
            body.classList.add('dark');
            console.log("Added dark class to body"); 
            break;
        default:
            body.classList.remove('dark');
            console.log("Removed dark class from body by default"); 
    }
}



themeSelector.addEventListener('change', (e) => {
    const theme = e.target.value;
    applyTheme(theme);
    localStorage.setItem('theme', theme); 
});


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);
}
