document.querySelector('.search_bar button').addEventListener('click', function(e) {
    e.stopPropagation(); // Evita que o clique propague e feche imediatamente
    
    const searchBar = document.querySelector('.search_bar');
    const searchInput = searchBar.querySelector('input');
    
    searchBar.classList.toggle('active');
    
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
        // Ajusta a posição durante a transição
        setTimeout(() => {
            searchBar.style.right = 'calc(50px + 1.5rem)'; // Ajuste fino para alinhar
        }, 10);
    } else {
        searchBar.style.right = '';
        searchInput.value = ''; // Opcional: limpa o campo ao fechar
    }
});

// Fecha a barra ao clicar fora
document.addEventListener('click', function(e) {
    const searchBar = document.querySelector('.search_bar');
    if (!e.target.closest('.search_bar') && searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
        searchBar.style.right = '';
    }
});

// Fecha ao pressionar Esc
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const searchBar = document.querySelector('.search_bar');
        if (searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
            searchBar.style.right = '';
        }
    }
});