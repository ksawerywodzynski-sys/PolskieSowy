// Prosta obsługa wyszukiwarki na stronie głównej (na razie symulacja)
document.querySelector('.btn-search').addEventListener('click', function() {
    const searchQuery = document.getElementById('owl-search').value.trim();
    if (searchQuery) {
        alert('Wyszukujesz: ' + searchQuery + '\nW produkcyjnej wersji przeniesie Cię do podstrony gatunku.');
        // Docelowo: window.location.href = `/sowy/szukaj.html?q=${encodeURIComponent(searchQuery)}`;
    }
});

// Obsługa klawisza Enter w wyszukiwarce
document.getElementById('owl-search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.btn-search').click();
    }
});
