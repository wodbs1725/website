function toggleBigtitle(event) {
    if (event.target && event.target.className == 'big-title') {

        let next = event.target.nextElementSibling;

        if (next.style.display == "none") {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }
}
document.addEventListener('click', toggleBigtitle, true);

function toggleList(event) {
    if (event.target && event.target.className == 'list-title') {
        
        let next = event.target.nextElementSibling;

        if (next.style.display == "none") {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }
}
document.addEventListener('click', toggleList, true);
