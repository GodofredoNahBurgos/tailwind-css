const darkModeInput = document.querySelector('#darkmode');
darkModeInput.addEventListener('clic', ()=>{
    document.documentElement.classList.toggle('dark');
});