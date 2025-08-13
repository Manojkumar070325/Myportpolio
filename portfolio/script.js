function typeEffect(words, elementId, speed) {
    let i = 0, j = 0, currentWord = '', isDeleting = false;
    function type() {
        currentWord = words[i];
        if (!isDeleting) {
            document.getElementById(elementId).textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000);
                return;
            }
        } else {
            document.getElementById(elementId).textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        }
        setTimeout(type, isDeleting ? speed / 2 : speed);
    }
    type();
}
document.addEventListener("DOMContentLoaded", () => {
    const fills = document.querySelectorAll(".fill");
    const percents = document.querySelectorAll(".percent");

    fills.forEach((fill, i) => {
        let targetWidth = fill.getAttribute("data-width");
        let targetPercent = parseInt(percents[i].getAttribute("data-percent"));

        // Fill animation
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 200);

        // Percentage count-up animation
        let count = 0;
        let interval = setInterval(() => {
            if (count >= targetPercent) {
                clearInterval(interval);
            } else {
                count++;
                percents[i].textContent = count + "%";
            }
        }, 20);
    });
});

