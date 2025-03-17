export function DOMContentLoaded(){

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll("nav ul li");
    const contentSection = document.querySelector(".content");

    const updateContent = (category) => {
        const resource = resources.find(r => r.category === category);
        if (!resource) return;

        contentSection.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <h3>Kilder:</h3>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        `;
    };

    const setActive = (selectedItem) => {
        navItems.forEach(nav => nav.classList.toggle("active", nav === selectedItem));
    };

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            setActive(item);
            updateContent(item.textContent);
        });
    });


    const defaultItem = Array.from(navItems).find(nav => nav.textContent === "HTML");
    if (defaultItem) {
        setActive(defaultItem);
        updateContent("HTML");
    }
});
}