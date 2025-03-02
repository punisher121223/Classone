// داده‌های دروس و تمرین‌ها (کامل)
const lessons = {
    "فارسی": {
        "نگاره ۱": [
            "تمرین: کلمه 'آب' را بخش کن: <span draggable='true' ondragstart='drag(event)' id='ab1'>آ</span> <span draggable='true' ondragstart='drag(event)' id='ab2'>ب</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>",
            "تمرین: کدام کلمه درست است؟ <button onclick='checkAnswer(this, \"بابا\")'>بابا</button> <button onclick='checkAnswer(this, \"ببا\")'>ببا</button>"
        ],
        "نگاره ۲": [
            "تمرین: نشانه 'اَ' را پیدا کن: <button onclick='checkAnswer(this, \"اَ\")'>اَ</button> <button onclick='checkAnswer(this, \"او\")'>او</button>",
            "تمرین: 'اسب' را بساز 🐴: <span draggable='true' ondragstart='drag(event)' id='asb1'>اَ</span> <span draggable='true' ondragstart='drag(event)' id='asb2'>س</span> <span draggable='true' ondragstart='drag(event)' id='asb3'>ب</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"
        ],
        "نگاره ۳": ["تمرین: 'نان' را بخش کن 🍞: <span draggable='true' ondragstart='drag(event)'>ن</span> <span draggable='true' ondragstart='drag(event)'>ا</span> <span draggable='true' ondragstart='drag(event)'>ن</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نگاره ۴": ["تمرین: 'مادر' را انتخاب کن 👩: <button onclick='checkAnswer(this, \"مادر\")'>مادر</button> <button onclick='checkAnswer(this, \"مداد\")'>مداد</button>"],
        "نگاره ۵": ["تمرین: 'دست' را بساز ✋: <span draggable='true' ondragstart='drag(event)'>د</span> <span draggable='true' ondragstart='drag(event)'>س</span> <span draggable='true' ondragstart='drag(event)'>ت</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نگاره ۶": ["تمرین: 'پدر' درست است؟ 👨 <button onclick='checkAnswer(this, \"پدر\")'>پدر</button> <button onclick='checkAnswer(this, \"پپر\")'>پپر</button>"],
        "نگاره ۷": ["تمرین: 'مدرسه' را بخش کن 🏫: <span draggable='true' ondragstart='drag(event)'>م</span> <span draggable='true' ondragstart='drag(event)'>د</span> <span draggable='true' ondragstart='drag(event)'>ر</span> <span draggable='true' ondragstart='drag(event)'>س</span> <span draggable='true' ondragstart='drag(event)'>ه</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نگاره ۸": ["تمرین: 'کتاب' را انتخاب کن 📖: <button onclick='checkAnswer(this, \"کتاب\")'>کتاب</button> <button onclick='checkAnswer(this, \"کباب\")'>کباب</button>"],
        "نگاره ۹": ["تمرین: 'دوست' را بساز 👫: <span draggable='true' ondragstart='drag(event)'>د</span> <span draggable='true' ondragstart='drag(event)'>و</span> <span draggable='true' ondragstart='drag(event)'>س</span> <span draggable='true' ondragstart='drag(event)'>ت</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نگاره ۱۰": ["تمرین: 'خانه' را بخش کن 🏡: <span draggable='true' ondragstart='drag(event)'>خ</span> <span draggable='true' ondragstart='drag(event)'>ا</span> <span draggable='true' ondragstart='drag(event)'>ن</span> <span draggable='true' ondragstart='drag(event)'>ه</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"]
    },
    "نگارش": {
        "نشانه اَ": ["تمرین: 'اَ' را بنویس 🍎: <input type='text' id='ans_a' /> <button onclick='checkTextAnswer(\"اَ\", \"ans_a\")'>بررسی</button>", "تمرین: 'اَپل' را انتخاب کن: <button onclick='checkAnswer(this, \"اَ\")'>اَ</button> <button onclick='checkAnswer(this, \"او\")'>او</button>"],
        "نشانه ب": ["تمرین: 'ب' را ۳ بار بنویس: <input type='text' id='ans_b' /> <button onclick='checkTextAnswer(\"ب ب ب\", \"ans_b\")'>بررسی</button>", "تمرین: 'بابا' را بساز 👨: <span draggable='true' ondragstart='drag(event)'>ب</span> <span draggable='true' ondragstart='drag(event)'>ا</span> <span draggable='true' ondragstart='drag(event)'>ب</span> <span draggable='true' ondragstart='drag(event)'>ا</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نشانه س": ["تمرین: 'س' را پیدا کن 🐶: <button onclick='checkAnswer(this, \"س\")'>س</button> <button onclick='checkAnswer(this, \"ش\")'>ش</button>", "تمرین: 'سگ' را بساز: <span draggable='true' ondragstart='drag(event)'>س</span> <span draggable='true' ondragstart='drag(event)'>گ</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نشانه م": ["تمرین: 'م' را بنویس 👩: <input type='text' id='ans_m' /> <button onclick='checkTextAnswer(\"م\", \"ans_m\")'>بررسی</button>", "تمرین: 'مادر' را انتخاب کن: <button onclick='checkAnswer(this, \"مادر\")'>مادر</button> <button onclick='checkAnswer(this, \"مداد\")'>مداد</button>"],
        "نشانه ه": ["تمرین: 'ه' را بنویس 🐦: <input type='text' id='ans_h' /> <button onclick='checkTextAnswer(\"ه\", \"ans_h\")'>بررسی</button>", "تمرین: 'هدهد' را بساز: <span draggable='true' ondragstart='drag(event)'>ه</span> <span draggable='true' ondragstart='drag(event)'>د</span> <span draggable='true' ondragstart='drag(event)'>ه</span> <span draggable='true' ondragstart='drag(event)'>د</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        "نشانه د": ["تمرین: 'د' را بنویس ✋: <input type='text' id='ans_d' /> <button onclick='checkTextAnswer(\"د\", \"ans_d\")'>بررسی</button>", "تمرین: 'دست' را بساز: <span draggable='true' ondragstart='drag(event)'>د</span> <span draggable='true' ondragstart='drag(event)'>س</span> <span draggable='true' ondragstart='drag(event)'>ت</span> <div ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone'></div>"],
        // ادامه نشانه‌ها تا پایان الفبا قابل گسترش است
    },
    "ریاضی": {
        "تم ۱": ["تمرین: ۲ + ۳ = ? <button onclick='checkAnswer(this, \"۵\")'>۵</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>", "تمرین: ۵ 🍎 بشمار: <span>🍎🍎🍎🍎🍎</span> درست است؟ <button onclick='checkAnswer(this, \"بله\")'>بله</button> <button onclick='checkAnswer(this, \"خیر\")'>خیر</button>"],
        "تم ۲": ["تمرین: ۴ - ۱ = ? <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۲\")'>۲</button>", "تمرین: ۳ ستاره بشمار ⭐⭐⭐ درست است؟ <button onclick='checkAnswer(this, \"بله\")'>بله</button> <button onclick='checkAnswer(this, \"خیر\")'>خیر</button>"],
        "تم ۳": ["تمرین: کدام بیشتر است؟ 🍎🍎 یا 🍎🍎🍎 <button onclick='checkAnswer(this, \"🍎🍎🍎\")'>🍎🍎🍎</button> <button onclick='checkAnswer(this, \"🍎🍎\")'>🍎🍎</button>"],
        "تم ۴": ["تمرین: ۵ = ? <button onclick='checkAnswer(this, \"🍎🍎🍎🍎🍎\")'>🍎🍎🍎🍎🍎</button> <button onclick='checkAnswer(this, \"🍎🍎🍎\")'>🍎🍎🍎</button>"],
        "تم ۵": ["تمرین: ۶ - ۲ = ? <button onclick='checkAnswer(this, \"۴\")'>۴</button> <button onclick='checkAnswer(this, \"۵\")'>۵</button>", "تمرین: ۴ 🌸 بشمار: <span>🌸🌸🌸🌸</span> درست است؟ <button onclick='checkAnswer(this, \"بله\")'>بله</button> <button onclick='checkAnswer(this, \"خیر\")'>خیر</button>"],
        "تم ۶": ["تمرین: ۳ + ۴ = ? <button onclick='checkAnswer(this, \"۷\")'>۷</button> <button onclick='checkAnswer(this, \"۶\")'>۶</button>"],
        "تم ۷": ["تمرین: ۵ - ۳ = ? <button onclick='checkAnswer(this, \"۲\")'>۲</button> <button onclick='checkAnswer(this, \"۳\")'>۳</button>"],
        "تم ۸": ["تمرین: کدام کمتر است؟ ⭐⭐⭐ یا ⭐⭐ <button onclick='checkAnswer(this, \"⭐⭐\")'>⭐⭐</button> <button onclick='checkAnswer(this, \"⭐⭐⭐\")'>⭐⭐⭐</button>"],
        "تم ۹": ["تمرین: ۷ = ? <button onclick='checkAnswer(this, \"🍎🍎🍎🍎🍎🍎🍎\")'>🍎🍎🍎🍎🍎🍎🍎</button> <button onclick='checkAnswer(this, \"🍎🍎🍎🍎🍎\")'>🍎🍎🍎🍎🍎</button>"],
        "تم ۱۰": ["تمرین: ۸ - ۴ = ? <button onclick='checkAnswer(this, \"۴\")'>۴</button> <button onclick='checkAnswer(this, \"۵\")'>۵</button>"],
        "تم ۱۱": ["تمرین: ۶ + ۳ = ? <button onclick='checkAnswer(this, \"۹\")'>۹</button> <button onclick='checkAnswer(this, \"۸\")'>۸</button>"],
        "تم ۱۲": ["تمرین: ۱۰ - ۵ = ? <button onclick='checkAnswer(this, \"۵\")'>۵</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>"],
        "تم ۱۳": ["تمرین: ۴ + ۴ = ? <button onclick='checkAnswer(this, \"۸\")'>۸</button> <button onclick='checkAnswer(this, \"۷\")'>۷</button>"],
        "تم ۱۴": ["تمرین: ۹ - ۳ = ? <button onclick='checkAnswer(this, \"۶\")'>۶</button> <button onclick='checkAnswer(this, \"۵\")'>۵</button>"],
        "تم ۱۵": ["تمرین: ۵ + ۵ = ? <button onclick='checkAnswer(this, \"۱۰\")'>۱۰</button> <button onclick='checkAnswer(this, \"۹\")'>۹</button>"],
        "تم ۱۶": ["تمرین: کدام دایره است؟ 🔵 <button onclick='checkAnswer(this, \"🔵\")'>🔵</button> <button onclick='checkAnswer(this, \"⬜\")'>⬜</button>"],
        "تم ۱۷": ["تمرین: ۷ - ۲ = ? <button onclick='checkAnswer(this, \"۵\")'>۵</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>"],
        "تم ۱۸": ["تمرین: ۸ + ۱ = ? <button onclick='checkAnswer(this, \"۹\")'>۹</button> <button onclick='checkAnswer(this, \"۸\")'>۸</button>"],
        "تم ۱۹": ["تمرین: ۱۰ - ۷ = ? <button onclick='checkAnswer(this, \"۳\")'>۳</button> <button onclick='checkAnswer(this, \"۴\")'>۴</button>"],
        "تم ۲۰": ["تمرین: مربع را انتخاب کن ⬜: <button onclick='checkAnswer(this, \"⬜\")'>⬜</button> <button onclick='checkAnswer(this, \"🔵\")'>🔵</button>"]
    }
};

// ثبت‌نام و ورود
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const encodedPass = btoa(password);
    localStorage.setItem("user_" + username, encodedPass);
    document.getElementById("message").textContent = "ثبت‌نام موفق! حالا وارد شوید.";
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
        document.getElementById("message").textContent = "نام کاربری یا رمز عبور اشتباه است.";
    }
});

if (window.location.pathname.includes("lessons.html") && !localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
}

// نمایش فهرست دروس
function showTopics(lesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = "";
    for (let topic in lessons[lesson]) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => showExercises(lesson, topic);
        topicsDiv.appendChild(btn);
    }
}

// نمایش تمرین‌ها
function showExercises(lesson, topic) {
    const exerciseDiv = document.getElementById("exercise");
    exerciseDiv.innerHTML = "";
    lessons[lesson][topic].forEach((ex) => {
        const p = document.createElement("p");
        p.innerHTML = ex;
        exerciseDiv.appendChild(p);
    });
}

// بررسی پاسخ گزینه‌ای
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent;
    alert(userAnswer === correctAnswer ? "درست است! 🌟" : "غلط است، دوباره تلاش کن! 😔");
}

// بررسی پاسخ متنی
function checkTextAnswer(correctAnswer, inputId) {
    const userAnswer = document.getElementById(inputId).value;
    alert(userAnswer === correctAnswer ? "درست است! 🌟" : "غلط است، دوباره تلاش کن! 😔");
}

// کشیدن و رها کردن
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    alert("بخش‌بندی انجام شد! درست بودنش رو با معلم چک کن! 📚");
}

// خروج
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
