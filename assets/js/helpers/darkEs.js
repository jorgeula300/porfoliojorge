const pagina = document;
function darkEs(){
    
    const switctherTheme = document.querySelector('#darkmode-toggle');
    const root = document.documentElement;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(mql)


    // con esta funcion me doy cuenta si el usuario esta en modo oscuro o no dependiendo la configuracion de su navegador 
    function handleMediaQueryChange(e) {
        if (e.matches) {
            // Activar el modo oscuro
            switctherTheme.checked = true;
            root.setAttribute('data-theme', "dark");
        } else {
            // Desactivar el modo oscuro
            switctherTheme.checked = false;
            root.setAttribute('data-theme', 'light');
        }
    }


    handleMediaQueryChange(mql);


    // con esta funcion cambio el tema dependiendo si el usuario esta en modo oscuro o no con el check 
    switctherTheme.addEventListener('click', () => {
        const setTheme = switctherTheme.checked ? 'dark' : 'light';
        root.setAttribute('data-theme', setTheme);
        window.localStorage.setItem('theme', setTheme); // Guardar el tema en el almacenamiento local
    });

    // establece el tema que el sistema haya guardado en el locla storage
    const theme = window.localStorage.getItem('theme');
    const systemTheme = mql.matches ? 'dark' : 'light';
    const newTheme = theme ?? systemTheme;
    pagina.documentElement.setAttribute('data-theme', newTheme);


}


pagina.addEventListener('DOMContentLoaded',darkEs )

export default darkEs;