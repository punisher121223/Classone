// تاریخ شمسی
function updateJalaliDate() {
    const date = new Date();
    const jalaliDate = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
    document.querySelectorAll("#jalaliDate").forEach(el => el.textContent = jalaliDate);
}
setInterval(updateJalaliDate, 1000);
updateJalaliDate();

// داده‌های دروس (بر اساس کتاب‌های نوین کلاس اول)
const lessons = {
    "فارسی": {
        "نگاره ۱": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: 'آب' را بخش کن 💧: <span draggable='true' ondragstart='drag(event)' id='ab1'>آ</span> <span draggable='true' ondragstart='drag(event)' id='ab2'>ب</span> <div ondrop='drop(event, \"آ-ب\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>";
            if (i === 1) return "تمرین: کدام 'بابا' است؟ 👨 <button onclick='checkAnswer(this, \"بابا\")'>بابا</button> <button onclick='checkAnswer(this, \"ببا\")'>ببا</button>";
            return `تمرین ${i + 1}: 'آب' را انتخاب کن 💧: <button onclick='checkAnswer(this, \"آب\")'>آب</button> <button onclick='checkAnswer(this, \"آد\")'>آد</button>`;
        }),
        "نگاره ۲": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'اسب' را بساز 🐴: <span draggable='true' ondragstart='drag(event)' id='asb1'>اَ</span> <span draggable='true' ondragstart='drag(event)' id='asb2'>س</span> <span draggable='true' ondragstart='drag(event)' id='asb3'>ب</span> <div ondrop='drop(event, \"اَ-س-ب\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'اسب' را پیدا کن 🐴: <button onclick='checkAnswer(this, \"اسب\")'>اسب</button> <button onclick='checkAnswer(this, \"اسد\")'>اسد</button>`),
        "نگاره ۳": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'نان' را بخش کن 🍞: <span draggable='true' ondragstart='drag(event)' id='nan1'>ن</span> <span draggable='true' ondragstart='drag(event)' id='nan2'>ا</span> <span draggable='true' ondragstart='drag(event)' id='nan3'>ن</span> <div ondrop='drop(event, \"ن-ا-ن\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'نان' را انتخاب کن 🍞: <button onclick='checkAnswer(this, \"نان\")'>نان</button> <button onclick='checkAnswer(this, \"نون\")'>نون</button>`),
        "نگاره ۴": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'مادر' را بساز 👩: <span draggable='true' ondragstart='drag(event)' id='madar1'>م</span> <span draggable='true' ondragstart='drag(event)' id='madar2'>ا</span> <span draggable='true' ondragstart='drag(event)' id='madar3'>د</span> <span draggable='true' ondragstart='drag(event)' id='madar4'>ر</span> <div ondrop='drop(event, \"م-ا-د-ر\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'مادر' را پیدا کن 👩: <button onclick='checkAnswer(this, \"مادر\")'>مادر</button> <button onclick='checkAnswer(this, \"مداد\")'>مداد</button>`),
        "نگاره ۵": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'دست' را بخش کن ✋: <span draggable='true' ondragstart='drag(event)' id='dast1'>د</span> <span draggable='true' ondragstart='drag(event)' id='dast2'>س</span> <span draggable='true' ondragstart='drag(event)' id='dast3'>ت</span> <div ondrop='drop(event, \"د-س-ت\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'دست' را انتخاب کن ✋: <button onclick='checkAnswer(this, \"دست\")'>دست</button> <button onclick='checkAnswer(this, \"دشت\")'>دشت</button>`),
        "نگاره ۶": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'پدر' را بساز 👨: <span draggable='true' ondragstart='drag(event)' id='pedar1'>پ</span> <span draggable='true' ondragstart='drag(event)' id='pedar2'>د</span> <span draggable='true' ondragstart='drag(event)' id='pedar3'>ر</span> <div ondrop='drop(event, \"پ-د-ر\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'پدر' را پیدا کن 👨: <button onclick='checkAnswer(this, \"پدر\")'>پدر</button> <button onclick='checkAnswer(this, \"پپر\")'>پپر</button>`),
        "نگاره ۷": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'مدرسه' را بخش کن 🏫: <span draggable='true' ondragstart='drag(event)' id='madrese1'>م</span> <span draggable='true' ondragstart='drag(event)' id='madrese2'>د</span> <span draggable='true' ondragstart='drag(event)' id='madrese3'>ر</span> <span draggable='true' ondragstart='drag(event)' id='madrese4'>س</span> <span draggable='true' ondragstart='drag(event)' id='madrese5'>ه</span> <div ondrop='drop(event, \"م-د-ر-س-ه\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'مدرسه' را انتخاب کن 🏫: <button onclick='checkAnswer(this, \"مدرسه\")'>مدرسه</button> <button onclick='checkAnswer(this, \"مدرس\")'>مدرس</button>`),
        "نگاره ۸": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'کتاب' را بساز 📖: <span draggable='true' ondragstart='drag(event)' id='ketab1'>ک</span> <span draggable='true' ondragstart='drag(event)' id='ketab2'>ت</span> <span draggable='true' ondragstart='drag(event)' id='ketab3'>ا</span> <span draggable='true' ondragstart='drag(event)' id='ketab4'>ب</span> <div ondrop='drop(event, \"ک-ت-ا-ب\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'کتاب' را پیدا کن 📖: <button onclick='checkAnswer(this, \"کتاب\")'>کتاب</button> <button onclick='checkAnswer(this, \"کباب\")'>کباب</button>`),
        "نگاره ۹": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'دوست' را بخش کن 👫: <span draggable='true' ondragstart='drag(event)' id='dust1'>د</span> <span draggable='true' ondragstart='drag(event)' id='dust2'>و</span> <span draggable='true' ondragstart='drag(event)' id='dust3'>س</span> <span draggable='true' ondragstart='drag(event)' id='dust4'>ت</span> <div ondrop='drop(event, \"د-و-س-ت\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'دوست' را انتخاب کن 👫: <button onclick='checkAnswer(this, \"دوست\")'>دوست</button> <button onclick='checkAnswer(this, \"دوس\")'>دوس</button>`),
        "نگاره ۱۰": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'خانه' را بساز 🏡: <span draggable='true' ondragstart='drag(event)' id='khane1'>خ</span> <span draggable='true' ondragstart='drag(event)' id='khane2'>ا</span> <span draggable='true' ondragstart='drag(event)' id='khane3'>ن</span> <span draggable='true' ondragstart='drag(event)' id='khane4'>ه</span> <div ondrop='drop(event, \"خ-ا-ن-ه\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'خانه' را پیدا کن 🏡: <button onclick='checkAnswer(this, \"خانه\")'>خانه</button> <button onclick='checkAnswer(this, \"خان\")'>خان</button>`),
    },
    "نگارش": {
        "نشانه اَ": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'اَ' را بنویس 🍎: <input type='text' id='ans_a' /> <button onclick='checkTextAnswer(\"اَ\", \"ans_a\")'>بررسی</button>" : `تمرین ${i + 1}: 'اَ' را انتخاب کن 🍎: <button onclick='checkAnswer(this, \"اَ\")'>اَ</button> <button onclick='checkAnswer(this, \"او\")'>او</button>`),
        "نشانه ب": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'ب' را بساز 👨: <span draggable='true' ondragstart='drag(event)' id='b1'>ب</span> <div ondrop='drop(event, \"ب\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'ب' را پیدا کن 👨: <button onclick='checkAnswer(this, \"ب\")'>ب</button> <button onclick='checkAnswer(this, \"پ\")'>پ</button>`),
        "نشانه س": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: 'سگ' را بساز 🐶: <span draggable='true' ondragstart='drag(event)' id='sag1'>س</span> <span draggable='true' ondragstart='drag(event)' id='sag2'>گ</span> <div ondrop='drop(event, \"س-گ\")' ondragover='allowDrop(event)' class='dropzone'>اینجا رها کن</div>" : `تمرین ${i + 1}: 'س' را انتخاب کن 🐶: <button onclick='checkAnswer(this, \"س\")'>س</button> <button onclick='checkAnswer(this, \"ش\")'>ش</button>`),
        // نشانه‌های دیگر به ترتیب کتاب درسی اضافه شوند (تا پایان الفبا)
    },
    "ریاضی": {
        "تم ۱": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: <span dir='ltr'>۲ + ۳</span> = ? ➕ <button onclick='checkAnswer(this, \"۵\")'>۵</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>" : `تمرین ${i + 1}: <span dir='ltr'>۱ + ۲</span> = ? ➕ <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۲\")'>۲</button>`),
        "تم ۲": Array.from({ length: 100 }, (_, i) => i === 0 ? "تمرین: <span dir='ltr'>۴ - ۱</span> = ? ➖ <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۲\")'>۲</button>" : `تمرین ${i + 1}: <span dir='ltr'>۵ - ۲</span> = ? ➖ <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>`),
        // تا تم ۲۰ ادامه پیدا کند
    },
    "بازی": {
        "بازی ۱": Array.from({ length: 10 }, (_, i) => i === 0 ? "بازی: سیب‌ها را بشمار 🍎🍎🍎: <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۲\")'>۲</button>" : `بازی ${i + 1}: ستاره‌ها را بشمار ⭐⭐⭐⭐: <button onclick='checkAnswer(this, \"۴\")'>۴</button> <button onclick='checkAnswer(this, \"۳\")'>۳</button>`),
        "بازی ۲": Array.from({ length: 10 }, (_, i) => i === 0 ? "بازی: رنگ درست را پیدا کن 🔴: <button onclick='checkAnswer(this, \"قرمز\")'>قرمز</button> <button onclick='checkAnswer(this, \"آبی\")'>آبی</button>" : `بازی ${i + 1}: شکل درست را پیدا کن ⬜: <button onclick='checkAnswer(this, \"مربع\")'>مربع</button> <button onclick='checkAnswer(this, \"دایره\")'>دایره</button>`),
    }
};

// ثبت‌نام و ورود
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const encodedPass = btoa(password);
    localStorage.setItem("user_" + username, encodedPass);
    localStorage.setItem("progress_" + username, JSON.stringify({}));
    localStorage.setItem("package_" + username, JSON.stringify({ name: "رایگان", exercises: 15, expiry: null }));
    document.getElementById("message").textContent = "ثبت‌نام موفق! حالا وارد شوید 🌈";
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPass = localStorage.getItem("user_" + username);
    if (storedPass && btoa(password) === storedPass) {
        localStorage.setItem("loggedIn", username);
        if (username === "alireza" && password === "12122312") localStorage.setItem("isAdmin", "true");
        window.location.href = "lessons.html";
    } else {
        document.getElementById("message").textContent = "نام کاربری یا رمز عبور اشتباه است 😔";
    }
});

if ((window.location.pathname.includes("lessons.html") || window.location.pathname.includes("profile.html") || window.location.pathname.includes("payment.html")) && !localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
}

// نمایش فهرست دروس
function showTopics(lesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = "<button onclick='window.location.href=\"lessons.html\"' class='back-btn'>برگشت به دروس 📚</button>";
    for (let topic in lessons[lesson]) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => showExercises(lesson, topic, getProgress(lesson, topic));
        topicsDiv.appendChild(btn);
    }
}

// نمایش تمرین‌ها
let currentLesson, currentTopic;
function showExercises(lesson, topic, index) {
    const username = localStorage.getItem("loggedIn");
    const package = JSON.parse(localStorage.getItem("package_" + username));
    const progress = getProgress(lesson, topic);
    if (progress >= 15 && package.name === "رایگان") {
        alert("تمرین رایگان شما به اتمام رسید! برای ادامه بسته بخرید.");
        window.location.href = "payment.html";
        return;
    }
    if (index >= package.exercises && package.name !== "دانشمند آینده") {
        alert("تمرین‌های بسته شما به اتمام رسید! برای ادامه بسته جدید بخرید.");
        window.location.href = "payment.html";
        return;
    }

    const exerciseDiv = document.getElementById("exercise-panel");
    exerciseDiv.innerHTML = "";
    if (index >= lessons[lesson][topic].length) {
        exerciseDiv.innerHTML = "<p>تمرین‌ها تمام شد! 🎉</p>";
        return;
    }
    const exercise = document.createElement("p");
    exercise.innerHTML = lessons[lesson][topic][index];
    exerciseDiv.appendChild(exercise);
    currentLesson = lesson;
    currentTopic = topic;
    saveProgress(lesson, topic, index);
}

// ذخیره و بازیابی پیشرفت
function saveProgress(lesson, topic, index) {
    const username = localStorage.getItem("loggedIn");
    let progress = JSON.parse(localStorage.getItem("progress_" + username)) || {};
    if (!progress[lesson]) progress[lesson] = {};
    progress[lesson][topic] = index;
    localStorage.setItem("progress_" + username, JSON.stringify(progress));
}

function getProgress(lesson, topic) {
    const username = localStorage.getItem("loggedIn");
    const progress = JSON.parse(localStorage.getItem("progress_" + username)) || {};
    return progress[lesson]?.[topic] || 0;
}

function resetProgress() {
    const username = localStorage.getItem("loggedIn");
    let progress = JSON.parse(localStorage.getItem("progress_" + username)) || {};
    progress[currentLesson][currentTopic] = 0;
    localStorage.setItem("progress_" + username, JSON.stringify(progress));
    showExercises(currentLesson, currentTopic, 0);
}

function nextExercise() {
    let index = getProgress(currentLesson, currentTopic) + 1;
    showExercises(currentLesson, currentTopic, index);
}

// بررسی پاسخ‌ها
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent;
    if (userAnswer === correctAnswer) {
        alert("درست است! 🌟");
        nextExercise();
    } else {
        alert("غلط است، دوباره تلاش کن! 😔");
    }
}

function checkTextAnswer(correctAnswer, inputId) {
    const userAnswer = document.getElementById(inputId).value;
    if (userAnswer === correctAnswer) {
        alert("درست است! 🌟");
        nextExercise();
    } else {
        alert("غلط است، دوباره تلاش کن! 😔");
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, correctOrder) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
    const droppedItems = Array.from(event.target.children).map(item => item.textContent).join("-");
    if (droppedItems === correctOrder) {
        alert("درست است! 🌟");
        nextExercise();
    } else {
        alert("ترتیب اشتباه است، دوباره تلاش کن! 😔");
    }
}

// پروفایل
function saveProfile() {
    const username = localStorage.getItem("loggedIn");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const file = document.getElementById("profilePic").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem("profilePic_" + username, reader.result);
            document.getElementById("profileImage").src = reader.result;
            document.getElementById("profileImage").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
    localStorage.setItem("firstName_" + username, firstName);
    localStorage.setItem("lastName_" + username, lastName);
    document.getElementById("profileInfo").textContent = `نام: ${firstName} ${lastName} 🌈`;
    document.getElementById("editBtn").style.display = "inline-block";
}

function editProfile() {
    document.getElementById("firstName").disabled = false;
    document.getElementById("lastName").disabled = false;
    document.getElementById("profilePic").disabled = false;
}

if (window.location.pathname.includes("profile.html")) {
    const username = localStorage.getItem("loggedIn");
    const firstName = localStorage.getItem("firstName_" + username);
    const lastName = localStorage.getItem("lastName_" + username);
    const pic = localStorage.getItem("profilePic_" + username);
    if (firstName && lastName) {
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("firstName").disabled = true;
        document.getElementById("lastName").disabled = true;
        document.getElementById("profileInfo").textContent = `نام: ${firstName} ${lastName} 🌈`;
        document.getElementById("editBtn").style.display = "inline-block";
    }
    if (pic) {
        document.getElementById("profileImage").src = pic;
        document.getElementById("profileImage").style.display = "block";
        document.getElementById("profilePic").disabled = true;
    }
    if (localStorage.getItem("isAdmin") === "true") {
        document.getElementById("showUsersBtn").style.display = "inline-block";
    }
}

// نمایش کاربران
function showUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("user_")) {
            const username = key.replace("user_", "");
            const package = JSON.parse(localStorage.getItem("package_" + username));
            const div = document.createElement("div");
            div.innerHTML = `کاربر: ${username} | بسته: ${package.name} <button onclick='activatePackage("${username}")'>فعال‌سازی بسته</button>`;
            userList.appendChild(div);
        }
    }
}

function activatePackage(username) {
    const packageName = prompt("نام بسته را وارد کنید (دانش آموز، دانشجوی آینده، دانشمند آینده):");
    let exercises, expiry;
    if (packageName === "دانش آموز") { exercises = 120; expiry = Date.now() + 30 * 24 * 60 * 60 * 1000; }
    else if (packageName === "دانشجوی آینده") { exercises = 350; expiry = Date.now() + 60 * 24 * 60 * 60 * 1000; }
    else if (packageName === "دانشمند آینده") { exercises = Infinity; expiry = null; }
    localStorage.setItem("package_" + username, JSON.stringify({ name: packageName, exercises, expiry }));
    showUsers();
}

// خرید بسته
function confirmPurchase(packageName, packageDetails) {
    const confirm = prompt(`آیا قصد خرید بسته "${packageName}" را دارید؟\n خیر / برو به خرید`);
    if (confirm === "برو به خرید") {
        const username = localStorage.getItem("loggedIn");
        const message = `سلام، من می‌خواهم بسته "${packageName}" را خریداری کنم.\nجزئیات: ${packageDetails}\nنام کاربری: ${username}`;
        window.open(`https://t.me/alireza_teacher?text=${encodeURIComponent(message)}`, "_blank");
    }
}

// خروج
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("isAdmin");
    window.location.href = "index.html";
}
