var themeToggle = document.getElementById('theme-toggle');
var themeColor = document.querySelector('meta[name="theme-color"]');
var currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.setAttribute('aria-checked', theme === 'dark');
    themeColor.setAttribute('content', theme === 'dark' ? '#1a1c20' : '#ffffff');
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', function() {
    var next = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
});

themeToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
    }
});
