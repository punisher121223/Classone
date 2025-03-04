// تاریخ شمسی
function updateJalaliDate() {
    const date = new Date();
    const jalaliDate = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
    document.querySelectorAll("#jalaliDate").forEach(el => el.textContent = "📅 " + jalaliDate);
}
setInterval(updateJalaliDate, 1000);
updateJalaliDate();

// سیستم امتیازدهی
function updateScore(points) {
    const username = localStorage.getItem("loggedIn");
    let score = parseInt(localStorage.getItem(`score_${username}`) || "0");
    score += points;
    localStorage.setItem(`score_${username}`, score);
    document.querySelectorAll("#score").forEach(el => el.textContent = score);
    checkMedals(score);
}

function checkMedals(score) {
    const medalsDiv = document.getElementById("medals");
    if (!medalsDiv) return;
    medalsDiv.innerHTML = "";
    if (score >= 50) medalsDiv.innerHTML += "<p>🏅 شاگرد زرنگ</p>";
    if (score >= 100) medalsDiv.innerHTML += "<p>🌟 ستاره کلاس</p>";
}

// صدای تشویق
const cheerSound = new Audio("assets/cheer.mp3");

// داده‌های دروس (بدون تغییر)
const lessons = {
    "نگارش": {
        "نگاره ۱ - سلام": [
            `تمرین: "آب" را بخش کن 💧
            <div class="dropzone" data-correct="آ" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ب" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">آ</span>
            <span draggable="true" ondragstart="drag(event)">ب</span>`,
            `تمرین: صدای "آ" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'آ')">آ</div>
            <div class="option" onclick="checkAnswer(this, 'ب')">ب</div>`
        ],
        "نگاره ۲ - سلام بهار": [
            `تمرین: "اسب" را بخش کن 🐴
            <div class="dropzone" data-correct="اَس" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ب" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">اَس</span>
            <span draggable="true" ondragstart="drag(event)">ب</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'اسب')">اسب</div>
            <div class="option" onclick="checkAnswer(this, 'اسد')">اسد</div>`
        ],
        "نگاره ۳ - خانواده": [
            `تمرین: "بابا" را بخش کن 👨
            <div class="dropzone" data-correct="با" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="با" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">با</span>
            <span draggable="true" ondragstart="drag(event)">با</span>`,
            `تمرین: صدای "ب" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'ب')">ب</div>
            <div class="option" onclick="checkAnswer(this, 'د')">د</div>`
        ],
        "نگاره ۴ - دوستان": [
            `تمرین: "مادر" را بخش کن 👩
            <div class="dropzone" data-correct="ما" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="در" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">ما</span>
            <span draggable="true" ondragstart="drag(event)">در</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'مادر')">مادر</div>
            <div class="option" onclick="checkAnswer(this, 'مارد')">مارد</div>`
        ],
        "نگاره ۵ - غذا": [
            `تمرین: "نان" را بخش کن 🍞
            <div class="dropzone" data-correct="نا" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ن" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">نا</span>
            <span draggable="true" ondragstart="drag(event)">ن</span>`,
            `تمرین: صدای "ن" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'ن')">ن</div>
            <div class="option" onclick="checkAnswer(this, 'م')">م</div>`
        ],
        "نگاره ۶ - دوستان من": [
            `تمرین: "دوست" را بخش کن 🤝
            <div class="dropzone" data-correct="دو" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ست" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">دو</span>
            <span draggable="true" ondragstart="drag(event)">ست</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'دوست')">دوست</div>
            <div class="option" onclick="checkAnswer(this, 'دوس')">دوس</div>`
        ],
        "نگاره ۷ - مدرسه": [
            `تمرین: "مدرسه" را بخش کن 🏫
            <div class="dropzone" data-correct="مد" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ر" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="سه" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">مد</span>
            <span draggable="true" ondragstart="drag(event)">ر</span>
            <span draggable="true" ondragstart="drag(event)">سه</span>`,
            `تمرین: صدای "س" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'س')">س</div>
            <div class="option" onclick="checkAnswer(this, 'ش')">ش</div>`
        ],
        "نگاره ۸ - کتاب من": [
            `تمرین: "کتاب" را بخش کن 📖
            <div class="dropzone" data-correct="ک" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="تا" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ب" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">ک</span>
            <span draggable="true" ondragstart="drag(event)">تا</span>
            <span draggable="true" ondragstart="drag(event)">ب</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'کتاب')">کتاب</div>
            <div class="option" onclick="checkAnswer(this, 'کتا')">کتا</div>`
        ],
        "نگاره ۹ - طبیعت": [
            `تمرین: "خورشید" را بخش کن ☀️
            <div class="dropzone" data-correct="خور" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="شید" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">خور</span>
            <span draggable="true" ondragstart="drag(event)">شید</span>`,
            `تمرین: صدای "خ" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'خ')">خ</div>
            <div class="option" onclick="checkAnswer(this, 'ح')">ح</div>`
        ],
        "نگاره ۱۰ - پرندگان": [
            `تمرین: "پرنده" را بخش کن 🐦
            <div class="dropzone" data-correct="پر" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ن" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div class="dropzone" data-correct="ده" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">پر</span>
            <span draggable="true" ondragstart="drag(event)">ن</span>
            <span draggable="true" ondragstart="drag(event)">ده</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'پرنده')">پرنده</div>
            <div class="option" onclick="checkAnswer(this, 'پرند')">پرند</div>`
        ]
    },
    "ریاضی": {
        "تم ۱ - شمارش": [
            `تمرین: تعداد سیب‌ها را بشمار 🍎🍎🍎
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div>
            <div class="option" onclick="checkAnswer(this, '۲')">۲</div>`,
            `تمرین: چند ستاره می‌بینی؟ ⭐⭐
            <div class="option" onclick="checkAnswer(this, '۲')">۲</div>
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div>`
        ],
        "تم ۲ - جمع": [
            `تمرین: ۲ + ۳ = ? ➕
            <div class="option" onclick="checkAnswer(this, '۵')">۵</div>
            <div class="option" onclick="checkAnswer(this, '۴')">۴</div>`,
            `تمرین: ۱ + ۴ = ? ➕
            <div class="option" onclick="checkAnswer(this, '۵')">۵</div>
            <div class="option" onclick="checkAnswer(this, '۶')">۶</div>`
        ],
        "تم ۳ - تفریق": [
            `تمرین: ۵ - ۲ = ? ➖
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div>
            <div class="option" onclick="checkAnswer(this, '۴')">۴</div>`,
            `تمرین: ۴ - ۱ = ? ➖
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div>
            <div class="option" onclick="checkAnswer(this, '۲')">۲</div>`
        ],
        "تم ۴ - مقایسه": [
            `تمرین: کدام بیشتر است؟ 🍎🍎 یا 🍎🍎🍎
            <div class="option" onclick="checkAnswer(this, '🍎🍎🍎')">🍎🍎🍎</div>
            <div class="option" onclick="checkAnswer(this, '🍎🍎')">🍎🍎</div>`,
            `تمرین: کدام کمتر است؟ ⭐⭐⭐ یا ⭐⭐
            <div class="option" onclick="checkAnswer(this, '⭐⭐')">⭐⭐</div>
            <div class="option" onclick="checkAnswer(this, '⭐⭐⭐')">⭐⭐⭐</div>`
        ],
        "تم ۵ - شکل‌ها": [
            `تمرین: کدام دایره است؟ 🔴
            <div class="option" onclick="checkAnswer(this, '🔴')">🔴</div>
            <div class="option" onclick="checkAnswer(this, '🔲')">🔲</div>`,
            `تمرین: کدام مربع است؟ 🔲
            <div class="option" onclick="checkAnswer(this, '🔲')">🔲</div>
            <div class="option" onclick="checkAnswer(this, '🔴')">🔴</div>`
        ],
        "تم ۶ - الگوها": [
            `تمرین: الگو را کامل کن: ⭐□⭐□⭐؟
            <div class="option" onclick="checkAnswer(this, '□')">□</div>
            <div class="option" onclick="checkAnswer(this, '⭐')">⭐</div>`,
            `تمرین: الگو را کامل کن: 🔴🔵🔴🔵؟
            <div class="option" onclick="checkAnswer(this, '🔴')">🔴</div>
            <div class="option" onclick="checkAnswer(this, '🔵')">🔵</div>`
        ],
        "تم ۷ - اعداد تا ۱۰": [
            `تمرین: عدد ۷ چند نقطه است؟ •••••••
            <div class="option" onclick="checkAnswer(this, '۷')">۷</div>
            <div class="option" onclick="checkAnswer(this, '۶')">۶</div>`,
            `تمرین: عدد ۹ چند خط است؟ |||||||||
            <div class="option" onclick="checkAnswer(this, '۹')">۹</div>
            <div class="option" onclick="checkAnswer(this, '۸')">۸</div>`
        ]
    },
    "علوم": {
        "درس ۱ - طبیعت": [
            `تمرین: کدام حیوان پرنده است؟ 🐦
            <div class="option" onclick="checkAnswer(this, 'پرنده')">پرنده</div>
            <div class="option" onclick="checkAnswer(this, 'گربه')">گربه</div>`,
            `تمرین: آب چه رنگی است؟
            <div class="option" onclick="checkAnswer(this, 'بی‌رنگ')">بی‌رنگ</div>
            <div class="option" onclick="checkAnswer(this, 'قرمز')">قرمز</div>`
        ]
    },
    "بازی": {
        "بازی ۱ - شمارش": [
            `بازی: سیب‌ها را بشمار 🍎🍎🍎
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div>
            <div class="option" onclick="checkAnswer(this, '۲')">۲</div>`,
            `بازی: ستاره‌ها را بشمار ⭐⭐⭐⭐
            <div class="option" onclick="checkAnswer(this, '۴')">۴</div>
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div>`
        ]
    }
};

// ثبت‌نام و ورود
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;
    if (localStorage.getItem(`user_${username}`)) {
        showAlert("این نام کاربری قبلاً ثبت شده است!");
        return;
    }
    const encodedPass = btoa(password);
    localStorage.setItem(`user_${username}`, encodedPass);
    localStorage.setItem(`progress_${username}`, JSON.stringify({}));
    localStorage.setItem(`package_${username}`, JSON.stringify({ name: "رایگان", exercises: 15, expiry: null }));
    localStorage.setItem(`score_${username}`, "0");
    showAlert("ثبت‌نام موفق! حالا وارد شوید 🌈", () => window.location.href = "./login.html");
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const storedPass = localStorage.getItem(`user_${username}`);
    if (storedPass && btoa(password) === storedPass) {
        localStorage.setItem("loggedIn", username);
        if (username === "alireza" && password === "12122312") localStorage.setItem("isAdmin", "true");
        window.location.href = "./lessons.html";
    } else {
        showAlert("نام کاربری یا رمز عبور اشتباه است 😔");
    }
});

// محافظت از صفحات
const protectedPages = ["lessons.html", "profile.html", "payment.html", "vocabulary.html", "exercise.html"];
if (protectedPages.some(page => window.location.pathname.includes(page)) && !localStorage.getItem("loggedIn")) {
    window.location.href = "./login.html";
}

// نمایش موضوعات
function showTopics(lesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = '<button onclick="this.parentElement.innerHTML=\'\'">برگشت به دروس 📚</button>';
    Object.keys(lessons[lesson]).forEach(topic => {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => openExerciseWindow(lesson, topic, getProgress(lesson, topic));
        topicsDiv.appendChild(btn);
    });
    updateProgressBar(lesson, Object.keys(lessons[lesson])[0]);
}

// باز کردن تمرین‌ها
function openExerciseWindow(lesson, topic, index) {
    const username = localStorage.getItem("loggedIn");
    const package = JSON.parse(localStorage.getItem(`package_${username}`));
    const totalProgress = Object.values(JSON.parse(localStorage.getItem(`progress_${username}`) || "{}"))
        .reduce((acc, curr) => acc + Object.values(curr).reduce((a, b) => a + b, 0), 0);
    if (totalProgress >= 15 && package.name === "رایگان") {
        showAlert("تمرین رایگان شما به اتمام رسید! برای ادامه بسته بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    if (totalProgress >= package.exercises && package.name !== "دانشمند آینده") {
        showAlert("تمرین‌های بسته شما به اتمام رسید! برای ادامه بسته جدید بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    window.open(`exercise.html?lesson=${encodeURIComponent(lesson)}&topic=${encodeURIComponent(topic)}&index=${index}`, "_blank", "width=1000,height=600");
}

// نمایش تمرین
if (window.location.pathname.includes("exercise.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const lesson = decodeURIComponent(urlParams.get("lesson"));
    const topic = decodeURIComponent(urlParams.get("topic"));
    const index = parseInt(urlParams.get("index") || "0");
    showExercise(lesson, topic, index);
}

function showExercise(lesson, topic, index) {
    const exerciseDiv = document.getElementById("exercise-panel");
    if (!lessons[lesson] || !lessons[lesson][topic] || index >= lessons[lesson][topic].length) {
        exerciseDiv.innerHTML = "<p>تمرین‌ها تمام شد! 🎉</p>";
        setTimeout(() => window.close(), 2000);
        return;
    }
    exerciseDiv.innerHTML = lessons[lesson][topic][index];
    saveProgress(lesson, topic, index);
}

// مدیریت پیشرفت
function saveProgress(lesson, topic, index) {
    const username = localStorage.getItem("loggedIn");
    const progress = JSON.parse(localStorage.getItem(`progress_${username}`) || "{}");
    progress[lesson] = progress[lesson] || {};
    progress[lesson][topic] = index + 1;
    localStorage.setItem(`progress_${username}`, JSON.stringify(progress));
}

function getProgress(lesson, topic) {
    const username = localStorage.getItem("loggedIn");
    const progress = JSON.parse(localStorage.getItem(`progress_${username}`) || "{}");
    return progress[lesson]?.[topic] || 0;
}

function updateProgressBar(lesson, topic) {
    const progress = getProgress(lesson, topic);
    const total = lessons[lesson][topic].length;
    const percentage = Math.min((progress / total) * 100, 100);
    const progressFill = document.getElementById("progressFill");
    if (progressFill) progressFill.style.width = `${percentage}%`;
}

// بررسی پاسخ‌ها (اصلاح‌شده برای هوشمندی و انتقال خودکار)
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const lesson = decodeURIComponent(urlParams.get("lesson"));
    const topic = decodeURIComponent(urlParams.get("topic"));
    const index = parseInt(urlParams.get("index"));
    
    if (userAnswer === correctAnswer) {
        cheerSound.play();
        updateScore(5);
        showAlert("درست است! 🌟", () => {
            window.location.href = `exercise.html?lesson=${encodeURIComponent(lesson)}&topic=${encodeURIComponent(topic)}&index=${index + 1}`;
        });
        setTimeout(() => {
            window.location.href = `exercise.html?lesson=${encodeURIComponent(lesson)}&topic=${encodeURIComponent(topic)}&index=${index + 1}`;
        }, 1500); // انتقال خودکار بعد از 1.5 ثانیه
    } else {
        showAlert("غلط است، دوباره تلاش کن! 😔");
        element.style.backgroundColor = "#ffcccc"; // رنگ قرمز برای پاسخ غلط
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const correctAnswer = event.target.getAttribute("data-correct");
    const draggedElement = document.createElement("span");
    draggedElement.textContent = data;
    draggedElement.draggable = true;
    draggedElement.ondragstart = drag;
    event.target.appendChild(draggedElement);

    const urlParams = new URLSearchParams(window.location.search);
    const lesson = decodeURIComponent(urlParams.get("lesson"));
    const topic = decodeURIComponent(urlParams.get("topic"));
    const index = parseInt(urlParams.get("index"));
    const dropzones = document.querySelectorAll(".dropzone");
    const allCorrect = Array.from(dropzones).every(zone => {
        const dropped = Array.from(zone.children).map(child => child.textContent).join("");
        return dropped === zone.getAttribute("data-correct");
    });

    if (allCorrect && dropzones.length === document.querySelectorAll(".dropzone span").length) {
        cheerSound.play();
        updateScore(5);
        showAlert("درست است! 🌟", () => {
            window.location.href = `exercise.html?lesson=${encodeURIComponent(lesson)}&topic=${encodeURIComponent(topic)}&index=${index + 1}`;
        });
        setTimeout(() => {
            window.location.href = `exercise.html?lesson=${encodeURIComponent(lesson)}&topic=${encodeURIComponent(topic)}&index=${index + 1}`;
        }, 1500); // انتقال خودکار بعد از 1.5 ثانیه
    } else if (dropzones.length === document.querySelectorAll(".dropzone span").length) {
        showAlert("غلط است، دوباره تلاش کن! 😔");
        dropzones.forEach(zone => {
            if (Array.from(zone.children).map(child => child.textContent).join("") !== zone.getAttribute("data-correct")) {
                zone.style.backgroundColor = "#ffcccc"; // رنگ قرمز برای اشتباه
            }
        });
    }
}

// نمایش اعلان
function showAlert(message, callback) {
    const existingAlert = document.querySelector(".custom-alert");
    if (existingAlert) existingAlert.remove();
    const alertDiv = document.createElement("div");
    alertDiv.className = "custom-alert";
    alertDiv.innerHTML = `
        <p>${message}</p>
        <button onclick="this.parentElement.remove();${callback ? callback.toString().replace(/function\s*\(\)\s*{(.*)}/, '$1') : ''}">باشه</button>
    `;
    Object.assign(alertDiv.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "2vw",
        borderRadius: "1vw",
        boxShadow: "0 0 2vw rgba(0, 0, 0, 0.5)",
        zIndex: "1000",
        textAlign: "center"
    });
    document.body.appendChild(alertDiv);
}

// مدیریت پروفایل
function saveProfile() {
    const username = localStorage.getItem("loggedIn");
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const file = document.getElementById("profilePic").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem(`profilePic_${username}`, reader.result);
            document.getElementById("profileImage").src = reader.result;
            document.getElementById("profileImage").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
    localStorage.setItem(`firstName_${username}`, firstName);
    localStorage.setItem(`lastName_${username}`, lastName);
    document.getElementById("profileInfo").textContent = `نام: ${firstName} ${lastName} 🌈`;
    document.getElementById("editBtn").style.display = "inline-block";
    ["firstName", "lastName", "profilePic"].forEach(id => document.getElementById(id).disabled = true);
}

function editProfile() {
    ["firstName", "lastName", "profilePic"].forEach(id => document.getElementById(id).disabled = false);
}

if (window.location.pathname.includes("profile.html")) {
    const username = localStorage.getItem("loggedIn");
    const firstName = localStorage.getItem(`firstName_${username}`);
    const lastName = localStorage.getItem(`lastName_${username}`);
    const pic = localStorage.getItem(`profilePic_${username}`);
    const score = localStorage.getItem(`score_${username}`) || "0";
    document.querySelector("#score").textContent = score;
    checkMedals(parseInt(score));
    if (firstName && lastName) {
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("profileInfo").textContent = `نام: ${firstName} ${lastName} 🌈`;
        document.getElementById("editBtn").style.display = "inline-block";
        ["firstName", "lastName"].forEach(id => document.getElementById(id).disabled = true);
    }
    if (pic) {
        document.getElementById("profileImage").src = pic;
        document.getElementById("profileImage").style.display = "block";
        document.getElementById("profilePic").disabled = true;
    }
    if (username === "alireza" && localStorage.getItem("isAdmin") === "true") {
        document.getElementById("showUsersBtn").style.display = "inline-block";
    }
}

// پنل مدیریت (اصلاح‌شده با گزینه مشاهده کاربران)
function showAdminPanel() {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") return;
    const adminPanel = document.getElementById("adminPanel");
    adminPanel.style.display = "block";
    adminPanel.innerHTML = `
        <h3>مدیریت کاربران 👥</h3>
        <div id="userList"></div>
        <button onclick="showAllUsers()">مشاهده تمام کاربران 📋</button>
        <button onclick="deleteAllUsers()">حذف همه کاربران 🗑️</button>
        <button onclick="showReport()">نمایش گزارش 📊</button>
    `;
    showUsers();
}

function showUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("user_")) {
            const user = key.replace("user_", "");
            const package = JSON.parse(localStorage.getItem(`package_${user}`) || "{}");
            const score = localStorage.getItem(`score_${user}`) || "0";
            userList.innerHTML += `
                <div>
                    کاربر: ${user} | بسته: ${package.name || "رایگان"} | امتیاز: ${score}
                    <button onclick="activatePackage('${user}')">فعال کردن بسته</button>
                    <button onclick="deleteUser('${user}')">حذف کاربر</button>
                    <button onclick="resetUserProgress('${user}')">بازنشانی پیشرفت</button>
                </div>
            `;
        }
    }
}

function showAllUsers() {
    const adminPanel = document.getElementById("adminPanel");
    adminPanel.innerHTML = `
        <h3>لیست تمام کاربران 📋</h3>
        <div id="userDetails"></div>
        <button onclick="showAdminPanel()">برگشت به پنل مدیریت 🔙</button>
    `;
    const userDetails = document.getElementById("userDetails");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("user_")) {
            const user = key.replace("user_", "");
            const firstName = localStorage.getItem(`firstName_${user}`) || "نامشخص";
            const lastName = localStorage.getItem(`lastName_${user}`) || "نامشخص";
            const package = JSON.parse(localStorage.getItem(`package_${user}`) || "{}");
            const score = localStorage.getItem(`score_${user}`) || "0";
            userDetails.innerHTML += `
                <div style="margin: 1vh 0; padding: 1vw; background: #f1faff; border-radius: 1vw;">
                    نام کاربری: ${user}<br>
                    نام: ${firstName} ${lastName}<br>
                    بسته: ${package.name || "رایگان"}<br>
                    امتیاز: ${score}<br>
                    <button onclick="activatePackage('${user}')">فعال کردن بسته</button>
                </div>
            `;
        }
    }
}

function activatePackage(username) {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") return showAlert("فقط مدیر می‌تواند بسته‌ها را تغییر دهد!");
    const packageName = prompt("نام بسته (دانش‌آموز، دانشجوی آینده، دانشمند آینده):");
    const packages = {
        "دانش‌آموز": { exercises: 120, expiry: Date.now() + 30 * 24 * 60 * 60 * 1000 },
        "دانشجوی آینده": { exercises: 350, expiry: Date.now() + 60 * 24 * 60 * 60 * 1000 },
        "دانشمند آینده": { exercises: Infinity, expiry: null }
    };
    if (!packages[packageName]) return showAlert("بسته نامعتبر است!");
    localStorage.setItem(`package_${username}`, JSON.stringify({ name: packageName, ...packages[packageName] }));
    showUsers();
    showAllUsers(); // به‌روزرسانی لیست کاربران
}

function deleteUser(username) {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") return showAlert("فقط مدیر می‌تواند کاربران را حذف کند!");
    if (confirm(`حذف کاربر ${username}؟`)) {
        ["user_", "progress_", "package_", "score_", "firstName_", "lastName_", "profilePic_"].forEach(prefix => {
            localStorage.removeItem(`${prefix}${username}`);
        });
        showUsers();
    }
}

function deleteAllUsers() {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") return showAlert("فقط مدیر می‌تواند همه کاربران را حذف کند!");
    if (confirm("حذف همه کاربران؟")) {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key.startsWith("user_") || key.startsWith("progress_") || key.startsWith("package_") || 
                key.startsWith("score_") || key.startsWith("firstName_") || key.startsWith("lastName_") || 
                key.startsWith("profilePic_")) {
                localStorage.removeItem(key);
            }
        }
        showUsers();
    }
}

function resetUserProgress(username) {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") return showAlert("فقط مدیر می‌تواند پیشرفت را بازنشانی کند!");
    localStorage.setItem(`progress_${username}`, JSON.stringify({}));
    localStorage.setItem(`score_${username}`, "0");
    showUsers();
}

function showReport() {
    const adminPanel = document.getElementById("adminPanel");
    let totalUsers = 0, totalScore = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("user_")) totalUsers++;
        if (key.startsWith("score_")) totalScore += parseInt(localStorage.getItem(key) || "0");
    }
    adminPanel.innerHTML += `
        <h3>گزارش 📊</h3>
        <p>تعداد کل کاربران: ${totalUsers}</p>
        <p>مجموع امتیازات: ${totalScore}</p>
    `;
}

// خرید بسته
function confirmPurchase(packageName, packageDetails) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "custom-alert";
    alertDiv.innerHTML = `
        <p>آیا قصد خرید بسته "${packageName}" را دارید؟</p>
        <button onclick="this.parentElement.remove()">خرید کنسل شود ❌</button>
        <button onclick="goToTelegram('${packageName}', '${packageDetails}');this.parentElement.remove()">برو به خرید ✅</button>
    `;
    Object.assign(alertDiv.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "2vw",
        borderRadius: "1vw",
        boxShadow: "0 0 2vw rgba(0, 0, 0, 0.5)",
        zIndex: "1000",
        textAlign: "center"
    });
    document.body.appendChild(alertDiv);
}

function goToTelegram(packageName, packageDetails) {
    const username = localStorage.getItem("loggedIn");
    const message = `سلام، من می‌خواهم بسته "${packageName}" را خریداری کنم.\nجزئیات: ${packageDetails}\nنام کاربری: ${username}`;
    window.open(`https://t.me/alireza_teacher?text=${encodeURIComponent(message)}`, "_blank");
}

// خروج
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("isAdmin");
    window.location.href = "./login.html";
}
