let index = 0;

function nextSlide(id, total) {
    if (index < total - 3) {
        index++;
    } else {
        index = 0;
    }
    document.getElementById(id).style.transform =
        `translateX(${index * 50}%)`;
}


function prevSlide(id, total) {
    if (index > 0) {
        index--;
    } else {
        index = total - 3;
    }
    document.getElementById(id).style.transform =
        `translateX(${index * 50}%)`;
}

// التاريخ
document.addEventListener("DOMContentLoaded", () => {
    let d = new Date();
    let dateElement = document.getElementById("date");

    if (dateElement) {
        dateElement.innerHTML = "تاريخ اليوم: " + d.toLocaleDateString("ar-EG");
    }
});

// الحجز
function bookService(){
    alert("✅ تم الحجز بنجاح");
}
function contactService(){
    alert("✅سيتم التواصل معك في اقرب وقت");
}

const heroImages = [
    "images/hero.jpg",
    "images/hero1.jpg",
    "images/hero2.jpg"
];

let bgIndex = 0;

function changeBackground() {
    const hero = document.querySelector(".hero");

    hero.style.backgroundImage = `url('${heroImages[bgIndex]}')`;

    bgIndex = (bgIndex + 1) % heroImages.length;
}

// أول صورة
changeBackground();

// تغيير كل 3 ثواني
setInterval(changeBackground, 3000);