document.addEventListener("DOMContentLoaded", function() {
    const pElement = document.getElementById("paragraph");
    const copyButton = document.getElementById("copyButton");

    copyButton.addEventListener("click", function() {
        const pValue = pElement.innerText; 
        navigator.clipboard.writeText(pValue).then(() => {
            copyButton.textContent = "Copied"; 
            setTimeout(() => {
                copyButton.textContent = "Copy"; 
            }, 2000);
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    });

});
