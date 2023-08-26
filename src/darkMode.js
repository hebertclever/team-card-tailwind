const themeSelector = document.getElementById('themeSelector');
const body = document.body;


function applyTheme(theme) {
    console.log("Applying theme:", theme);  // Adicionado para diagnóstico
    switch(theme) {
        case 'light':
            body.classList.remove('dark');
            console.log("Removed dark class from body");  // Adicionado para diagnóstico
            break;
        case 'dark':
            body.classList.add('dark');
            console.log("Added dark class to body");  // Adicionado para diagnóstico
            break;
        default:
            body.classList.remove('dark');
            console.log("Removed dark class from body by default");  // Adicionado para diagnóstico
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
