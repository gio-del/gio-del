const options = {
    root: null,
    rootMargin: '-5px',
    threshold: 0.5
}

const observer = new IntersectionObserver(onIntersection, options);

const elements = document.querySelectorAll('.skill-icons');

elements.forEach(element => {
    observer.observe(element);
});

function onIntersection(entries) {
    console.log(entries)
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}
