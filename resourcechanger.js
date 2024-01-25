// Funksjon for å vise innhold basert på kategori
function showContent(category) {
    // Hent referanse til hovedinnholdsbeholderen
    const mainContent = document.getElementById('main-content');
    // Hent alle faner
    const tabs = document.querySelectorAll('#tabs button');
    // Fjern 'active' klassen fra alle faner
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Finn innholdet som samsvarer med den valgte kategorien
    const content = resources.find(resource => resource.category === category);
    // Oppdater innerHTML til hovedinnholdsbeholderen med innhold for den valgte kategorien
    mainContent.innerHTML = `
        <h2>${content.category}</h2>
        <p>${content.text}</p>
        <ul>
            ${content.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
        </ul>
    `;

    // Hent fanen som er det samme som den valgte kategorien
    const activeTab = document.querySelector(`#tabs button[data-category="${category}"]`);
    // Legg til 'active' klassen til den valgte fanen
    activeTab.classList.add('active');
}

// Hent alle faner
const tabs = document.querySelectorAll('#tabs button');
// Legg til en addEventListener til hver fane. addEventListener "hører" etter når brukeren trykker på en av knappene.
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Hent kategorien til den klikkede fanen
        const category = this.getAttribute('data-category');
        // Vis innholdet for den valgte kategorien
        showContent(category);
    });
});


// Fikk inspirasjon fra dette: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes