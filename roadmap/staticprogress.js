const spans = document.querySelectorAll('.trackstaticprogress span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});