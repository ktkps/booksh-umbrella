// ==========================================
// DEBUG: Color Theme Switcher
// Remove before production deploy
// ==========================================

const themes = {
    'warm-espresso': {
        '--bg-primary':        '#2a1205',
        '--bg-secondary':      '#3d1f0a',
        '--bg-tertiary':       '#6b3a1f',
        '--bg-card':           'rgba(212,160,50,0.07)',
        '--bg-glass':          'rgba(196,135,122,0.08)',
        '--primary':           '#d4a032',
        '--primary-dark':      '#b8860b',
        '--primary-light':     '#e8b84b',
        '--secondary':         '#c4877a',
        '--accent':            '#c9a87c',
        '--text-primary':      '#fdf8f2',
        '--text-secondary':    'rgba(253,248,242,0.78)',
        '--text-muted':        'rgba(253,248,242,0.48)',
        '--text-dark':         '#2a1205',
        '--border':            'rgba(212,160,50,0.22)',
        '--border-strong':     'rgba(212,160,50,0.48)',
        '--shadow-glow':       '0 0 50px rgba(212,160,50,0.25)',
        '--color-espresso':    '#2a1205',
        '--color-chocolate':   '#3d1f0a',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(212,160,50,0.10) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(196,135,122,0.12) 0%,transparent 50%)',
    },
    'dark-plum': {
        '--bg-primary':        '#1a0a1e',
        '--bg-secondary':      '#2b1030',
        '--bg-tertiary':       '#4a1a5e',
        '--bg-card':           'rgba(155,89,182,0.08)',
        '--bg-glass':          'rgba(232,160,192,0.07)',
        '--primary':           '#c084e0',
        '--primary-dark':      '#9b59b6',
        '--primary-light':     '#dda0f0',
        '--secondary':         '#e8a0c0',
        '--accent':            '#b87ac0',
        '--text-primary':      '#fdf0ff',
        '--text-secondary':    'rgba(253,240,255,0.78)',
        '--text-muted':        'rgba(253,240,255,0.48)',
        '--text-dark':         '#1a0a1e',
        '--border':            'rgba(192,100,240,0.22)',
        '--border-strong':     'rgba(192,100,240,0.48)',
        '--shadow-glow':       '0 0 50px rgba(192,100,240,0.3)',
        '--color-espresso':    '#1a0a1e',
        '--color-chocolate':   '#2b1030',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(155,89,182,0.15) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(232,160,192,0.12) 0%,transparent 50%)',
    },
    'noir-rose': {
        '--bg-primary':        '#0f0a0a',
        '--bg-secondary':      '#1e0f0f',
        '--bg-tertiary':       '#3a1515',
        '--bg-card':           'rgba(192,57,43,0.08)',
        '--bg-glass':          'rgba(241,148,138,0.07)',
        '--primary':           '#e85c52',
        '--primary-dark':      '#c0392b',
        '--primary-light':     '#f1948a',
        '--secondary':         '#f0b8b0',
        '--accent':            '#c87878',
        '--text-primary':      '#fff5f5',
        '--text-secondary':    'rgba(255,245,245,0.78)',
        '--text-muted':        'rgba(255,245,245,0.48)',
        '--text-dark':         '#0f0a0a',
        '--border':            'rgba(232,92,82,0.22)',
        '--border-strong':     'rgba(232,92,82,0.48)',
        '--shadow-glow':       '0 0 50px rgba(232,92,82,0.3)',
        '--color-espresso':    '#0f0a0a',
        '--color-chocolate':   '#1e0f0f',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(192,57,43,0.15) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(241,148,138,0.10) 0%,transparent 50%)',
    },
    'warm-ivory': {
        '--bg-primary':        '#faf6f0',
        '--bg-secondary':      '#f0e8d8',
        '--bg-tertiary':       '#e0d0b8',
        '--bg-card':           'rgba(139,94,60,0.07)',
        '--bg-glass':          'rgba(212,160,50,0.06)',
        '--primary':           '#8b5e3c',
        '--primary-dark':      '#6b3f20',
        '--primary-light':     '#b07840',
        '--secondary':         '#c4877a',
        '--accent':            '#a07850',
        '--text-primary':      '#2a1a0a',
        '--text-secondary':    'rgba(42,26,10,0.75)',
        '--text-muted':        'rgba(42,26,10,0.5)',
        '--text-dark':         '#faf6f0',
        '--border':            'rgba(139,94,60,0.22)',
        '--border-strong':     'rgba(139,94,60,0.45)',
        '--shadow-glow':       '0 0 50px rgba(139,94,60,0.2)',
        '--color-espresso':    '#faf6f0',
        '--color-chocolate':   '#f0e8d8',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(212,160,50,0.12) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(196,135,122,0.10) 0%,transparent 50%)',
    },
    'deep-burgundy': {
        '--bg-primary':        '#1a0010',
        '--bg-secondary':      '#2a0820',
        '--bg-tertiary':       '#4a1035',
        '--bg-card':           'rgba(123,28,62,0.10)',
        '--bg-glass':          'rgba(232,160,176,0.07)',
        '--primary':           '#d06090',
        '--primary-dark':      '#a03060',
        '--primary-light':     '#e890b8',
        '--secondary':         '#e8a0b0',
        '--accent':            '#b05878',
        '--text-primary':      '#fff0f8',
        '--text-secondary':    'rgba(255,240,248,0.78)',
        '--text-muted':        'rgba(255,240,248,0.48)',
        '--text-dark':         '#1a0010',
        '--border':            'rgba(208,96,144,0.22)',
        '--border-strong':     'rgba(208,96,144,0.48)',
        '--shadow-glow':       '0 0 50px rgba(208,96,144,0.3)',
        '--color-espresso':    '#1a0010',
        '--color-chocolate':   '#2a0820',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(123,28,62,0.18) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(232,160,176,0.12) 0%,transparent 50%)',
    },
    'charcoal-copper': {
        '--bg-primary':        '#141414',
        '--bg-secondary':      '#1e1e1e',
        '--bg-tertiary':       '#2e2e2e',
        '--bg-card':           'rgba(184,115,51,0.08)',
        '--bg-glass':          'rgba(232,197,160,0.06)',
        '--primary':           '#c8884a',
        '--primary-dark':      '#a06030',
        '--primary-light':     '#e0a870',
        '--secondary':         '#e8c5a0',
        '--accent':            '#b08060',
        '--text-primary':      '#fdf5ec',
        '--text-secondary':    'rgba(253,245,236,0.78)',
        '--text-muted':        'rgba(253,245,236,0.48)',
        '--text-dark':         '#141414',
        '--border':            'rgba(200,136,74,0.22)',
        '--border-strong':     'rgba(200,136,74,0.45)',
        '--shadow-glow':       '0 0 50px rgba(200,136,74,0.28)',
        '--color-espresso':    '#141414',
        '--color-chocolate':   '#1e1e1e',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(184,115,51,0.12) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(232,197,160,0.10) 0%,transparent 50%)',
    },
    'forest-gold': {
        '--bg-primary':        '#0d1208',
        '--bg-secondary':      '#161f0e',
        '--bg-tertiary':       '#263318',
        '--bg-card':           'rgba(107,124,58,0.10)',
        '--bg-glass':          'rgba(212,192,117,0.07)',
        '--primary':           '#c8b840',
        '--primary-dark':      '#9a8c20',
        '--primary-light':     '#dcd060',
        '--secondary':         '#a0b870',
        '--accent':            '#8a9e50',
        '--text-primary':      '#f8faf0',
        '--text-secondary':    'rgba(248,250,240,0.78)',
        '--text-muted':        'rgba(248,250,240,0.48)',
        '--text-dark':         '#0d1208',
        '--border':            'rgba(200,184,64,0.22)',
        '--border-strong':     'rgba(200,184,64,0.45)',
        '--shadow-glow':       '0 0 50px rgba(200,184,64,0.28)',
        '--color-espresso':    '#0d1208',
        '--color-chocolate':   '#161f0e',
        '--font-display':      "'Playfair Display', Georgia, serif",
        '_bodyBg':             'radial-gradient(ellipse at 20% 0%, rgba(107,124,58,0.15) 0%,transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(212,192,117,0.12) 0%,transparent 50%)',
    },
};

function applyTheme(name) {
    const theme = themes[name];
    if (!theme) return;
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, val]) => {
        if (key === '_bodyBg') {
            document.body.style.backgroundImage = val;
        } else {
            root.style.setProperty(key, val);
        }
    });
    localStorage.setItem('debugTheme', name);
}

// Init panel UI
(function () {
    const toggle = document.getElementById('theme-debug-toggle');
    const menu = document.getElementById('theme-debug-menu');
    const btns = document.querySelectorAll('.theme-btn');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#theme-debug-panel')) {
            menu.classList.remove('open');
        }
    });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTheme(btn.dataset.theme);
        });
    });

    // Restore saved theme
    const saved = localStorage.getItem('debugTheme');
    if (saved && themes[saved]) {
        applyTheme(saved);
        btns.forEach(b => {
            b.classList.toggle('active', b.dataset.theme === saved);
        });
    }
})();

// Inject panel styles
(function () {
    const s = document.createElement('style');
    s.textContent = `
#theme-debug-panel {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 99999;
    font-family: system-ui, sans-serif;
}
#theme-debug-toggle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: #1a1a1a;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, box-shadow 0.2s;
    margin-left: auto;
}
#theme-debug-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(0,0,0,0.6);
}
#theme-debug-menu {
    display: none;
    position: absolute;
    bottom: 58px;
    right: 0;
    background: #1a1209;
    border: 1px solid rgba(212,160,50,0.3);
    border-radius: 16px;
    padding: 0.75rem;
    width: 230px;
    box-shadow: 0 12px 48px rgba(0,0,0,0.6);
    backdrop-filter: blur(12px);
}
#theme-debug-menu.open {
    display: block;
    animation: tdFadeIn 0.18s ease;
}
@keyframes tdFadeIn {
    from { opacity:0; transform:translateY(8px); }
    to   { opacity:1; transform:translateY(0); }
}
.theme-debug-header {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    padding: 0.25rem 0.5rem 0.6rem;
}
.theme-debug-list {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
.theme-btn {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    width: 100%;
    padding: 0.55rem 0.7rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    color: rgba(255,255,255,0.75);
    font-size: 0.8rem;
    font-weight: 500;
    text-align: left;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.theme-btn:hover {
    background: rgba(255,255,255,0.07);
    color: #fff;
}
.theme-btn.active {
    background: rgba(212,160,50,0.15);
    border-color: rgba(212,160,50,0.5);
    color: #fff;
}
.theme-swatch {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.15);
}
    `;
    document.head.appendChild(s);
})();
