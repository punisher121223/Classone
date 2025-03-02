// داده‌های دروس و تمرین‌ها
const lessons = {
    "فارسی": {
        "نگاره ۱": ["تمرین: کلمه 'آب' را بنویس", "تمرین: 'بابا' را بخش کن"],
        "نگاره ۲": ["تمرین: نشانه 'اَ' را بنویس", "تمرین: کلمه 'اَسب' را بساز"]
    },
    "نگارش": {
        "نشانه‌ها": ["تمرین: 'ب' را ۵ بار بنویس", "تمرین: 'م' و 'س' را ترکیب کن"],
        "جملات": ["تمرین: جمله 'بابا آب داد' را بنویس"]
    },
    "ریاضی": {
        "تم ۱": ["تمرین: ۲ + ۳ = ?", "تمرین: ۵ تا نقطه بکش"],
        "تم ۲": ["تمرین: ۴ - ۱ = ?", "تمرین: ۳ سیب بکش"]
    }
};

// ثبت‌نام و ورود
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const encodedPass = btoa(password); // رمزنگاری ساده
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

// بررسی ورود
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
    lessons[lesson][topic].forEach((ex, index) => {
        const p = document.createElement("p");
        p.textContent = ex;
        const input = document.createElement("input");
        input.type = "text";
        input.id = `answer_${index}`;
        const checkBtn = document.createElement("button");
        checkBtn.textContent = "بررسی";
        checkBtn.onclick = () => checkAnswer(ex, input.value);
        exerciseDiv.appendChild(p);
        exerciseDiv.appendChild(input);
        exerciseDiv.appendChild(checkBtn);
    });
}

// بررسی پاسخ (ساده)
function checkAnswer(exercise, answer) {
    let correct = false;
    if (exercise.includes("آب") && answer === "آب") correct = true;
    else if (exercise.includes("بابا") && answer === "با-با") correct = true;
    // اضافه کردن منطق بیشتر برای تمرین‌ها
    alert(correct ? "درست است!" : "غلط است، دوباره تلاش کن.");
}

// خروج
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
