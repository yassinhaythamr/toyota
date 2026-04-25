let index = 0;

function nextSlide(id, total) {
    if (index < total - 3) {
        index++;
    } else {
        index = 0;
    }
    document.getElementById(id).style.transform =
        `translateX(-${index * 33.33}%)`;
}

function prevSlide(id, total) {
    if (index > 0) {
        index--;
    } else {
        index = total - 3;
    }
    document.getElementById(id).style.transform =
        `translateX(-${index * 33.33}%)`;
}

// التاريخ
document.addEventListener("DOMContentLoaded", () => {
    let d = new Date();
    if(document.getElementById("date")){
        document.getElementById("date").innerHTML =
        "تاريخ اليوم: " + d.stoLocaleDateString();
    }
});

// الحجز
function bookService(){
    alert("✅ تم الحجز بنجاح");
}