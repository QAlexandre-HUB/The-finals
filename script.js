// 1. BASE DE DONNÉES DES OBJETS
const items = [
    { 
        name: "93R", 
        type: "Handgun", 
        class: "Light", 
        damageBody: 24, 
        damageHead: 36, 
        env: "7", 
        rpm: "210 | 1000", 
        mag: "24", 
        reloadEmpty: "1.75s", 
        reloadTactical: "1.45s", 
        image: "images/93r.png", 
        extra: "Burst-fire machine pistol" 
    },
    { 
        name: "ARN-220", 
        type: "Assault Rifle", 
        class: "Light", 
        damageBody: 17, 
        damageHead: "25.5 (1.5x)", 
        env: "3.5", 
        rpm: "720", 
        mag: "30×2", 
        reloadEmpty: "2.80s (Full)", 
        reloadTactical: "2.45s", 
        image: "images/ARN.png", 
        extra: "Tactical assault rifle with coupled mags" 
    },
    { 
        name: "DAGGER", 
        type: "Melee", 
        class: "Light", 
        damageBody: 60, 
        damageHead: "320 (Backstab)", // Utilise Head pour le Backstab
        env: "33", 
        rpm: "N/A", 
        mag: "∞", 
        reloadEmpty: "N/A", 
        reloadTactical: "N/A", 
        image: "images/dagger.png", 
        extra: "Close-range melee weapon with backstab attack" 
    },
    { 
        name: "LH1", 
        type: "Marksman Rifle", 
        class: "Light", 
        damageBody: 44, 
        damageHead: 88, 
        env: "14", 
        rpm: "270", 
        mag: "15", 
        reloadEmpty: "2.85s", 
        reloadTactical: "1.95s", 
        image: "images/lh1.png", 
        extra: "Semi-automatic battle rifle" 
    },
    { 
        name: "M11", 
        type: "SMG", 
        class: "Light", 
        damageBody: 16, 
        damageHead: 24, 
        env: "5", 
        rpm: "1000", 
        mag: "40", 
        reloadEmpty: "1.85s", 
        reloadTactical: "1.55s", 
        image: "images/m11.png", 
        extra: "Fast-firing, fully automatic machine pistol" 
    },
    { 
        name: "M26 MATTER", 
        type: "Shotgun", 
        class: "Light", 
        damageBody: "11×11", 
        damageHead: "N/A", 
        env: "9×11 (Max 99)", 
        rpm: "84", 
        mag: "8", 
        reloadEmpty: "2.45s", 
        reloadTactical: "2.05s", 
        image: "images/m26.png", 
        extra: "Light and compact pump-action shotgun" 
    },
    { 
        name: "RECURVE BOW", 
        type: "Marksman Rifle", 
        class: "Light", 
        damageBody: "60 - 124", 
        damageHead: "90 - 186", 
        env: "12.125", 
        rpm: "78 | 48", 
        mag: "∞", 
        reloadEmpty: "0.75s", 
        reloadTactical: "0.75s", 
        image: "images/bow.png", 
        extra: "Arrows deal more damage the further back they are drawn" 
    },
    { 
        name: "SH1900", 
        type: "Shotgun", 
        class: "Light", 
        damageBody: "12×15 (Max 180)", 
        damageHead: "N/A", 
        env: "6×15", 
        rpm: "80", 
        mag: "2", 
        reloadEmpty: "2.60s", 
        reloadTactical: "2.20s", 
        image: "images/sh1900.png", 
        extra: "Double-barrel shotgun with a wide spread" 
    },
    { 
        name: "SR-84", 
        type: "Marksman Rifle", 
        class: "Light", 
        damageBody: 118, 
        damageHead: 236, 
        env: "27", 
        rpm: "45", 
        mag: "6", 
        reloadEmpty: "3.35s", 
        reloadTactical: "1.95s", 
        image: "images/sr84.png", 
        extra: "Bolt-action sniper rifle" 
    },
    { 
        name: "SWORD", 
        type: "Melee", 
        class: "Light", 
        damageBody: 88, 
        damageHead: "120 (Lunge)", // Utilise Head pour l'Alt-fire
        env: "33", 
        rpm: "N/A", 
        mag: "∞", 
        reloadEmpty: "N/A", 
        reloadTactical: "N/A", 
        image: "images/sword.png", 
        extra: "High-damage melee weapon with lunging attack" 
    },
    { 
        name: "THROWING KNIVES", 
        type: "Miscellaneous", 
        class: "Light", 
        damageBody: "60 (Alt: 140)", 
        damageHead: "90 (Alt: 210)", 
        env: "20 (Alt: 40)", 
        rpm: "89 | 545.45 | 27.7", 
        mag: "∞", 
        reloadEmpty: "N/A", 
        reloadTactical: "N/A", 
        image: "images/throwing_knives.png", 
        extra: "Silent projectiles thrown in short bursts or pairs"
    },
    { 
        name: "V9S",
        type: "Handgun", 
        class: "Light", 
        damageBody: 38, 
        damageHead: 57, 
        env: "8", 
        rpm: "360", 
        mag: "20", 
        reloadEmpty: "1.50s", 
        reloadTactical: "1.25s", 
        image: "images/v9s.png", 
        extra: "Semi-automatic pistol" 
    },
    { 
        name: "XP-54", 
        type: "SMG", 
        class: "Light", 
        damageBody: 16, 
        damageHead: 24, 
        env: "8", 
        rpm: "880", 
        mag: "34", 
        reloadEmpty: "2.50s", 
        reloadTactical: "2.25s", 
        image: "images/xp54.png", 
        extra: "Tactical submachine gun" 
    },

    
    // --- MOYENNE ---
{ name: "AKM", type: "Assault Rifle", class: "Moyenne", damageBody: 20, damageHead: 30, env: "10", rpm: "600", mag: "36", reloadEmpty: "2.35s", reloadTactical: "1.90s", image: "images/akm.png", extra: "Versatile automatic rifle" },
    { name: "CERBERUS 12GA", type: "Shotgun", class: "Moyenne", damageBody: "16×6", damageHead: "N/A", env: "60", rpm: "120", mag: "3", reloadEmpty: "2.50s", reloadTactical: "2.10s", image: "images/cerberus.png", extra: "Triple-barrel semi-auto shotgun" },
    { name: "CL-40", type: "Grenade Launcher", class: "Moyenne", damageBody: 110, damageHead: 110, env: "200", rpm: "50", mag: "4", reloadEmpty: "3.10s", reloadTactical: "0.6s/pill", image: "images/cl40.png", extra: "Pump-action grenade launcher" },
    { name: "DUAL BLADES", type: "Melee", class: "Moyenne", damageBody: 60, damageHead: "Deflect", env: "20", rpm: "N/A", mag: "∞", reloadEmpty: "N/A", reloadTactical: "N/A", image: "images/dual_blades.png", extra: "Can deflect incoming bullets" },
    { name: "FAMAS", type: "Assault Rifle", class: "Moyenne", damageBody: 24, damageHead: 36, env: "9", rpm: "Burst", mag: "27", reloadEmpty: "2.30s", reloadTactical: "1.80s", image: "images/famas.png", extra: "Three-round burst rifle" },
    { name: "FCAR", type: "Assault Rifle", class: "Moyenne", damageBody: 25, damageHead: 38, env: "11", rpm: "540", mag: "25", reloadEmpty: "2.25s", reloadTactical: "1.85s", image: "images/fcar.png", extra: "High damage with holographic sight" },
    { name: "MODEL 1887", type: "Shotgun", class: "Moyenne", damageBody: 128, damageHead: "N/A", env: "72", rpm: "78", mag: "6", reloadEmpty: "3.20s", reloadTactical: "0.5s/shell", image: "images/model1887.png", extra: "Lever-action shotgun" },
    { name: "PIKE-556", type: "Marksman Rifle", class: "Moyenne", damageBody: 45, damageHead: 68, env: "15", rpm: "240", mag: "12", reloadEmpty: "2.40s", reloadTactical: "2.10s", image: "images/pike556.png", extra: "Semi-auto precision rifle" },
    { name: "R.357", type: "Handgun", class: "Moyenne", damageBody: 74, damageHead: 148, env: "25", rpm: "120", mag: "6", reloadEmpty: "2.40s", reloadTactical: "2.40s", image: "images/revolver.png", extra: "Powerful heavy revolver" },
    { name: "RIOT SHIELD", type: "Melee", class: "Moyenne", damageBody: 84, damageHead: "Block", env: "25", rpm: "N/A", mag: "∞", reloadEmpty: "N/A", reloadTactical: "N/A", image: "images/riot_shield.png", extra: "Defensive shield and baton" },
    { name: "CB-01 REPEATER", type: "Marksman Rifle", class: "Moyenne", damageBody: 54, damageHead: 81, env: "18", rpm: "100", mag: "8", reloadEmpty: "2.80s", reloadTactical: "0.4s/shell", image: "images/cb01.png", extra: "Lever-action precision rifle" },
    { name: "CHIMERA-XB", type: "Special", class: "Moyenne", damageBody: 70, damageHead: 105, env: "20", rpm: "60", mag: "1", reloadEmpty: "1.80s", reloadTactical: "1.80s", image: "images/chimera_xb.png", extra: "Silent crossbow" },
    { name: "P90", type: "SMG", class: "Moyenne", damageBody: 11, damageHead: 16, env: "6", rpm: "900", mag: "50", reloadEmpty: "2.60s", reloadTactical: "2.10s", image: "images/p90.png", extra: "High capacity SMG" },

    // --- LOURDE ---
{ name: ".50 AKIMBO", type: "Handgun", class: "Lourde", damageBody: 40, damageHead: 60, env: "25", rpm: "180", mag: "14", reloadEmpty: "3.10s", reloadTactical: "2.65s", image: "images/50_akimbo.png", extra: "Dual heavy semi-auto pistols" },
    { name: "BFR TITAN", type: "Marksman Rifle", class: "Lourde", damageBody: 90, damageHead: 135, env: "45", rpm: "65", mag: "5", reloadEmpty: "3.20s", reloadTactical: "2.10s", image: "images/bfr_titan.png", extra: "High-caliber anti-materiel rifle" },
    { name: "FLAMETHROWER", type: "Unique", class: "Lourde", damageBody: 30, damageHead: "Burn", env: "20", rpm: "Continuous", mag: "∞", reloadEmpty: "3.50s", reloadTactical: "3.50s", image: "images/flamethrower.png", extra: "Deals fire damage over time" },
    { name: "KS-23", type: "Shotgun", class: "Lourde", damageBody: 120, damageHead: "N/A", env: "600", rpm: "73", mag: "4", reloadEmpty: "2.50s", reloadTactical: "0.6s/slug", image: "images/ks23.png", extra: "Fires high-explosive slugs" },
    { name: "LEWIS GUN", type: "Machine Gun", class: "Lourde", damageBody: 22, damageHead: 33, env: "13", rpm: "500", mag: "47", reloadEmpty: "3.50s", reloadTactical: "2.85s", image: "images/lewis_gun.png", extra: "Accurate light machine gun" },
    { name: "M134 MINIGUN", type: "Machine Gun", class: "Lourde", damageBody: 18, damageHead: 27, env: "11", rpm: "900", mag: "∞", reloadEmpty: "Overheat", reloadTactical: "N/A", image: "images/minigun.png", extra: "Requires spin-up before firing" },
    { name: "M60", type: "Machine Gun", class: "Lourde", damageBody: 22, damageHead: 33, env: "13", rpm: "580", mag: "70", reloadEmpty: "3.60s", reloadTactical: "2.90s", image: "images/m60.png", extra: "High-capacity suppression weapon" },
    { name: "MGL32", type: "Grenade Launcher", class: "Lourde", damageBody: 80, damageHead: 80, env: "160", rpm: "150", mag: "6", reloadEmpty: "3.10s", reloadTactical: "3.10s", image: "images/mgl32.png", extra: "Bouncing grenade launcher" },
    { name: "SA1216", type: "Shotgun", class: "Lourde", damageBody: "7×13", damageHead: "N/A", env: "45", rpm: "240", mag: "16", reloadEmpty: "3.30s", reloadTactical: "2.75s", image: "images/sa1216.png", extra: "Quad-chambered automatic shotgun" },
    { name: "SHAK-50", type: "Assault Rifle", class: "Lourde", damageBody: 32, damageHead: 48, env: "18", rpm: "360", mag: "20", reloadEmpty: "2.80s", reloadTactical: "2.30s", image: "images/shak50.png", extra: "High-caliber battle rifle" },
    { name: "SLEDGEHAMMER", type: "Melee", class: "Lourde", damageBody: 115, damageHead: "200 (Heavy)", env: "1500", rpm: "N/A", mag: "∞", reloadEmpty: "N/A", reloadTactical: "N/A", image: "images/sledgehammer.png", extra: "High structural destruction" },
    { name: "SPEAR", type: "Melee", class: "Lourde", damageBody: 75, damageHead: "100 (Spin)", env: "150", rpm: "N/A", mag: "∞", reloadEmpty: "N/A", reloadTactical: "N/A", image: "images/spear.png", extra: "Melee with long reach and area attack" }
];

// 2. SÉLECTEURS
const container = document.getElementById('stats-container');
const modal = document.getElementById('item-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const buttons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search');

let currentClass = "Toutes";

// 3. FONCTION D'AFFICHAGE DE LA GALERIE
function displayItems() {
    container.innerHTML = "";
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

    const filteredItems = items.filter(item => {
        const matchesClass = (currentClass === "Toutes" || item.class === currentClass || item.class === "Toutes");
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        return matchesClass && matchesSearch;
    });

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-image';
        // Utilisation d'une image par défaut si le fichier n'est pas trouvé
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150?text=IMAGE+MANQUANTE'">
            <div class="item-name">${item.name}</div>
        `;
        card.onclick = () => showDetails(item);
        container.appendChild(card);
    });
}

// 4. FONCTION D'AFFICHAGE DES DÉTAILS (MODALE)
function showDetails(item) {
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="wiki-header">${item.name}</div>
        <div style="text-align:center; color:#888; font-style:italic; margin: 10px 0 20px 0;">
            "${item.extra}"
        </div>

        <div class="wiki-section-title">PROFILE</div>
        <div class="wiki-row">
            <div class="wiki-block">
                <div class="wiki-label">BUILD</div>
                <div class="wiki-value">${item.class}</div>
            </div>
            <div class="wiki-block">
                <div class="wiki-label">TYPE</div>
                <div class="wiki-value">${item.type}</div>
            </div>
        </div>

        <div class="wiki-section-title">DAMAGE</div>
        <div class="wiki-row">
            <div class="wiki-block">
                <div class="wiki-label">BODY</div>
                <div class="wiki-value">${item.damageBody}</div>
            </div>
            <div class="wiki-block">
                <div class="wiki-label">HEAD / ALT</div>
                <div class="wiki-value">${item.damageHead}</div>
            </div>
        </div>
        <div class="wiki-full-block">
            <div class="wiki-label">ENVIRONMENTAL</div>
            <div class="wiki-value">${item.env}</div>
        </div>

        <div class="wiki-section-title">TECHNICAL</div>
        <div class="wiki-row">
            <div class="wiki-block">
                <div class="wiki-label">RPM</div>
                <div class="wiki-value">${item.rpm}</div>
            </div>
            <div class="wiki-block">
                <div class="wiki-label">MAGAZINE</div>
                <div class="wiki-value">${item.mag}</div>
            </div>
        </div>
        <div class="wiki-row">
            <div class="wiki-block">
                <div class="wiki-label">EMPTY RELOAD</div>
                <div class="wiki-value">${item.reloadEmpty}</div>
            </div>
            <div class="wiki-block">
                <div class="wiki-label">TACTICAL RELOAD</div>
                <div class="wiki-value">${item.reloadTactical}</div>
            </div>
        </div>
    `;
    
    document.getElementById('item-modal').style.display = "block";
}

// 5. GESTIONNAIRES D'ÉVÉNEMENTS
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentClass = btn.getAttribute('data-class');
        displayItems();
    });
});

if (searchInput) {
    searchInput.addEventListener('input', displayItems);
}

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// 6. INITIALISATION
displayItems();