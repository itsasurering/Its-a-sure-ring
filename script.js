document.addEventListener("DOMContentLoaded", function() {
    const ringForm = document.getElementById("ringForm");
    const ringPreview = document.getElementById("ringPreview");

    if (ringForm) {
        ringForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const metal = document.getElementById("metal").value;
            const stone = document.getElementById("stone").value;
            const setting = document.getElementById("setting").value;

            ringPreview.innerHTML = `
                <h3>Your Designed Ring</h3>
                <p><strong>Metal:</strong> ${metal}</p>
                <p><strong>Stone:</strong> ${stone}</p>
                <p><strong>Setting:</strong> ${setting}</p>
                <p>Your design has been saved!</p>
            `;

            localStorage.setItem("ringDesign", JSON.stringify({ metal, stone, setting }));
        });
    }

    const savedDesign = JSON.parse(localStorage.getItem("ringDesign"));
    if (savedDesign) {
        ringPreview.innerHTML = `
            <h3>Your Saved Ring</h3>
            <p><strong>Metal:</strong> ${savedDesign.metal}</p>
            <p><strong>Stone:</strong> ${savedDesign.stone}</p>
            <p><strong>Setting:</strong> ${savedDesign.setting}</p>
        `;
    }
});
