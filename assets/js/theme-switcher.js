// Theme switcher: swaps the optional theme stylesheet layered on top of styles.css.
// The initial theme is applied by the inline loader in _includes/head.html.
(function () {
    var registry = window.kitzyThemes;
    var select = document.getElementById('theme-select');
    if (!registry || !select) return;

    select.value = registry.current;

    function swapLink(id, href, onReady) {
        var old = document.getElementById(id);
        if (!href) {
            if (old) old.remove();
            if (onReady) onReady();
            return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        // Keep the old stylesheet until the new one has loaded to avoid a flash of unstyled content.
        link.onload = link.onerror = function () {
            if (old) old.remove();
            link.id = id;
            if (onReady) onReady();
        };
        document.head.appendChild(link);
    }

    function applyTheme(id) {
        var theme = registry.byId[id];
        if (!theme) return;
        registry.current = id;
        swapLink('theme-fonts', theme.fonts);
        swapLink('theme-stylesheet', theme.stylesheet, function () {
            document.documentElement.setAttribute('data-theme', id);
        });
    }

    select.addEventListener('change', function () {
        var id = select.value;
        try { localStorage.setItem('kitzy-theme', id); } catch (e) {}
        applyTheme(id);
        if (typeof window.plausible === 'function') {
            window.plausible('Theme changed', { props: { theme: id } });
        }
    });
})();
