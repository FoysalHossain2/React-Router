const cricle = document.getElementById('cricle');

const observer = new IntersectionObserver((items) => {
    console.log(items);
});

observer.observe(cricle);