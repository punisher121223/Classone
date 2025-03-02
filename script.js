// نمونه تمرین‌ها (هر کدام 100 تا، فقط چند نمونه برای نمایش)
const lessons = {
    "فارسی": {
        "نگاره ۱": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: 'آب' را بخش کن 💧: <span draggable='true' ondragstart='drag(event)' id='ab1'>آ</span> <span draggable='true' ondragstart='drag(event)' id='ab2'>ب</span> <div ondrop='drop(event, \"آ-ب\")' ondragover='allowDrop(event)' class='dropzone'></div>";
            if (i === 1) return "تمرین: کدام 'بابا' است؟ 👨 <button onclick='checkAnswer(this, \"بابا\")'>بابا</button> <button onclick='checkAnswer(this, \"ببا\")'>ببا</button>";
            if (i === 2) return "تمرین: 'آ' را بنویس 💧: <input type='text' id='ans_a' /> <button onclick='checkTextAnswer(\"آ\", \"ans_a\")'>بررسی</button>";
            return `تمرین ${i + 1}: 'آب' را بساز 💧: <span draggable='true' ondragstart='drag(event)' id='ab${i}1'>آ</span> <span draggable='true' ondragstart='drag(event)' id='ab${i}2'>ب</span> <div ondrop='drop(event, \"آ-ب\")' ondragover='allowDrop(event)' class='dropzone'></div>`;
        }),
        "نگاره ۲": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: 'اسب' را بساز 🐴: <span draggable='true' ondragstart='drag(event)' id='asb1'>اَ</span> <span draggable='true' ondragstart='drag(event)' id='asb2'>س</span> <span draggable='true' ondragstart='drag(event)' id='asb3'>ب</span> <div ondrop='drop(event, \"اَ-س-ب\")' ondragover='allowDrop(event)' class='dropzone'></div>";
            return `تمرین ${i + 1}: 'اَ' را پیدا کن 🐴: <button onclick='checkAnswer(this, \"اَ\")'>اَ</button> <button onclick='checkAnswer(this, \"او\")'>او</button>`;
        }),
        // ادامه تا نگاره ۱۰ به همین شکل
    },
    "نگارش": {
        "نشانه اَ": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: 'اَ' را بنویس 🍎: <input type='text' id='ans_a' /> <button onclick='checkTextAnswer(\"اَ\", \"ans_a\")'>بررسی</button>";
            if (i === 1) return "تمرین: 'اَپل' را بساز 🍎: <span draggable='true' ondragstart='drag(event)' id='apl1'>اَ</span> <span draggable='true' ondragstart='drag(event)' id='apl2'>پ</span> <span draggable='true' ondragstart='drag(event)' id='apl3'>ل</span> <div ondrop='drop(event, \"اَ-پ-ل\")' ondragover='allowDrop(event)' class='dropzone'></div>";
            return `تمرین ${i + 1}: 'اَ' را انتخاب کن 🍎: <button onclick='checkAnswer(this, \"اَ\")'>اَ</button> <button onclick='checkAnswer(this, \"او\")'>او</button>`;
        }),
        "نشانه ب": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: 'ب' را ۳ بار بنویس 👨: <input type='text' id='ans_b' /> <button onclick='checkTextAnswer(\"ب ب ب\", \"ans_b\")'>بررسی</button>";
            return `تمرین ${i + 1}: 'بابا' را بساز 👨: <span draggable='true' ondragstart='drag(event)' id='baba${i}1'>ب</span> <span draggable='true' ondragstart='drag(event)' id='baba${i}2'>ا</span> <span draggable='true' ondragstart='drag(event)' id='baba${i}3'>ب</span> <span draggable='true' ondragstart='drag(event)' id='baba${i}4'>ا</span> <div ondrop='drop(event, \"ب-ا-ب-ا\")' ondragover='allowDrop(event)' class='dropzone'></div>`;
        }),
        // ادامه تا بقیه نشانه‌ها
    },
    "ریاضی": {
        "تم ۱": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: ۲ + ۳ = ? ➕ <button onclick='checkAnswer(this, \"۵\")'>۵</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>";
            if (i === 1) return "تمرین: ۵ 🍎 بشمار: <span>🍎🍎🍎🍎🍎</span> درست است؟ <button onclick='checkAnswer(this, \"بله\")'>بله</button> <button onclick='checkAnswer(this, \"خیر\")'>خیر</button>";
            return `تمرین ${i + 1}: ۱ + ۲ = ? ➕ <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۲\")'>۲</button>`;
        }),
        "تم ۲": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return "تمرین: ۴ - ۱ = ? ➖ <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۲\")'>۲</button>";
            return `تمرین ${i + 1}: ۵ - ۲ = ? ➖ <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>`;
        }),
        // ادامه تا تم ۲۰
    }
};

// ثبت‌نام و ورود
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const encodedPass = btoa(password);
    localStorage.setItem("user_" + username, encodedPass);
    document.getElementById("message").textContent = "ثبت‌نام موفق! حالا وارد شوید 🌈";
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPass = localStorage.getItem("user_" + username);
    if (storedPass && btoa(password) === storedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "lessons.html";
    } else {
        document.getElementById("message").textContent = "نام کاربری یا رمز عبور اشتباه است 😔";
    }
});

if ((window.location.pathname.includes("lessons.html") || window.location.pathname.includes("profile.html")) && !localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
}

// نمایش فهرست دروس
function showTopics(lesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = "<button onclick='window.location.href=\"lessons.html\"' class='back-btn'>برگشت به دروس 📚</button>";
    for (let topic in lessons[lesson]) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => showExercises(lesson, topic, 0);
        topicsDiv.appendChild(btn);
    }
}

// نمایش تمرین‌ها با پیشرفت خودکار
let currentExerciseIndex = 0;
function showExercises(lesson, topic, index) {
    const exerciseDiv = document.getElementById("exercise-panel");
    exerciseDiv.innerHTML = `<button onclick='showTopics("${lesson}")' class='back-btn'>برگشت به موضوعات 🔙</button> <button onclick='window.location.href="lessons.html"' class='back-btn'>برگشت به صفحه اصلی 🏠</button>`;
    if (index >= lessons[lesson][topic].length) {
        exerciseDiv.innerHTML += "<p>تمرین‌ها تمام شد! 🎉</p>";
        return;
    }
    const exercise = document.createElement("p");
    exercise.innerHTML = lessons[lesson][topic][index];
    currentExerciseIndex = index;
    exerciseDiv.appendChild(exercise);
    window.currentLesson = lesson;
    window.currentTopic = topic;
}

// بررسی پاسخ گزینه‌ای و پیشرفت
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent;
    if (userAnswer === correctAnswer) {
        alert("درست است! 🌟");
        currentExerciseIndex++;
        showExercises(window.currentLesson, window.currentTopic, currentExerciseIndex);
    } else {
        alert("غلط است، دوباره تلاش کن! 😔");
    }
}

// بررسی پاسخ متنی و پیشرفت
function checkTextAnswer(correctAnswer, inputId) {
    const userAnswer = document.getElementById(inputId).value;
    if (userAnswer === correctAnswer) {
        alert("درست است! 🌟");
        currentExerciseIndex++;
        showExercises(window.currentLesson, window.currentTopic, currentExerciseIndex);
    } else {
        alert("غلط است، دوباره تلاش کن! 😔");
    }
}

// بهینه‌سازی Drag-and-Drop
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
        currentExerciseIndex++;
        showExercises(window.currentLesson, window.currentTopic, currentExerciseIndex);
    }
}

// پروفایل
function saveProfile() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    document.getElementById("profileInfo").textContent = `نام: ${firstName} ${lastName} 🌈`;
}

if (window.location.pathname.includes("profile.html")) {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName && lastName) {
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("profileInfo").textContent = `نام: ${firstName} ${lastName} 🌈`;
    }
}

// خروج
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
