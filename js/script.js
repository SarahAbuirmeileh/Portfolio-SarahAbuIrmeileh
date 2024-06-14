var typed = new Typed('.typing', {
    strings: ["Backend Development" ],
    typeSpeed: 110,
    BackSpeed: 60,
    loop: true
})

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href').substring(1) === entry.target.id) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


// (function() {
//     emailjs.init('GWbNmnXzdkXtyMcIM'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
// })();

// // Function to send email
// function sendEmail(event) {
//     event.preventDefault();
    
//     var templateParams = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };
    
//     emailjs.send('service_m7y71lj', 'YOUR_TEMPLATE_ID', templateParams)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Email sent successfully!');
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert('Failed to send email.');
//         });
// }
