function showContent(targetId) {
    var targetDiv = document.getElementById(targetId);

    if (targetDiv) {
        // Hide all card divs
        document.querySelectorAll('.card div').forEach(function (div) {
            div.classList.remove('active');
        });

        // Show the selected card div
        targetDiv.classList.add('active');
    }
}