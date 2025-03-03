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
    let score = parseInt(localStorage.getItem("score_" + username) || "0");
    score += points;
    localStorage.setItem("score_" + username, score);
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

// داده‌های دروس (کامل شده بر اساس کتاب‌های نگارش و ریاضی کلاس اول)
const lessons = {
    "نگارش": {
        "نگاره ۱": [
            `تمرین: "آب" را بخش کن 💧
            <div class="dropzone" ondrop="drop(event, 'آ')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ب')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">آ</span>
            <span draggable="true" ondragstart="drag(event)">ب</span>`,
            `تمرین: صدای "آ" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'آ')">آ</div><div class="option" onclick="checkAnswer(this, 'ب')">ب</div>`
        ],
        "نگاره ۲": [
            `تمرین: "اسب" را بخش کن 🐴
            <div class="dropzone" ondrop="drop(event, 'اَس')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ب')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">اَس</span>
            <span draggable="true" ondragstart="drag(event)">ب</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'اسب')">اسب</div><div class="option" onclick="checkAnswer(this, 'اسد')">اسد</div>`
        ],
        "نگاره ۳": [
            `تمرین: "بابا" را بخش کن 👨
            <div class="dropzone" ondrop="drop(event, 'با')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'با')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">با</span>
            <span draggable="true" ondragstart="drag(event)">با</span>`,
            `تمرین: صدای "ب" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'ب')">ب</div><div class="option" onclick="checkAnswer(this, 'د')">د</div>`
        ],
        "نگاره ۴": [
            `تمرین: "مادر" را بخش کن 👩
            <div class="dropzone" ondrop="drop(event, 'ما')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'در')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">ما</span>
            <span draggable="true" ondragstart="drag(event)">در</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'مادر')">مادر</div><div class="option" onclick="checkAnswer(this, 'مارد')">مارد</div>`
        ],
        "نگاره ۵": [
            `تمرین: "نان" را بخش کن 🍞
            <div class="dropzone" ondrop="drop(event, 'نا')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ن')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">نا</span>
            <span draggable="true" ondragstart="drag(event)">ن</span>`,
            `تمرین: صدای "ن" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'ن')">ن</div><div class="option" onclick="checkAnswer(this, 'م')">م</div>`
        ],
        "نگاره ۶": [
            `تمرین: "دوست" را بخش کن 🤝
            <div class="dropzone" ondrop="drop(event, 'دو')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ست')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">دو</span>
            <span draggable="true" ondragstart="drag(event)">ست</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'دوست')">دوست</div><div class="option" onclick="checkAnswer(this, 'دوس')">دوس</div>`
        ],
        "نگاره ۷": [
            `تمرین: "مدرسه" را بخش کن 🏫
            <div class="dropzone" ondrop="drop(event, 'مد')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ر')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'سه')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">مد</span>
            <span draggable="true" ondragstart="drag(event)">ر</span>
            <span draggable="true" ondragstart="drag(event)">سه</span>`,
            `تمرین: صدای "س" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'س')">س</div><div class="option" onclick="checkAnswer(this, 'ش')">ش</div>`
        ],
        "نگاره ۸": [
            `تمرین: "کتاب" را بخش کن 📖
            <div class="dropzone" ondrop="drop(event, 'ک')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'تا')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ب')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">ک</span>
            <span draggable="true" ondragstart="drag(event)">تا</span>
            <span draggable="true" ondragstart="drag(event)">ب</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'کتاب')">کتاب</div><div class="option" onclick="checkAnswer(this, 'کتا')">کتا</div>`
        ],
        "نگاره ۹": [
            `تمرین: "خورشید" را بخش کن ☀️
            <div class="dropzone" ondrop="drop(event, 'خور')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'شید')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">خور</span>
            <span draggable="true" ondragstart="drag(event)">شید</span>`,
            `تمرین: صدای "خ" را پیدا کن 🎵
            <div class="option" onclick="checkAnswer(this, 'خ')">خ</div><div class="option" onclick="checkAnswer(this, 'ح')">ح</div>`
        ],
        "نگاره ۱۰": [
            `تمرین: "پرنده" را بخش کن 🐦
            <div class="dropzone" ondrop="drop(event, 'پر')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ن')" ondragover="allowDrop(event)"></div>
            <div class="dropzone" ondrop="drop(event, 'ده')" ondragover="allowDrop(event)"></div>
            <span draggable="true" ondragstart="drag(event)">پر</span>
            <span draggable="true" ondragstart="drag(event)">ن</span>
            <span draggable="true" ondragstart="drag(event)">ده</span>`,
            `تمرین: کدام کلمه درست است؟
            <div class="option" onclick="checkAnswer(this, 'پرنده')">پرنده</div><div class="option" onclick="checkAnswer(this, 'پرند')">پرند</div>`
        ]
    },
    "ریاضی": {
        "تم ۱ - شمارش": [
            `تمرین: تعداد سیب‌ها را بشمار 🍎🍎🍎
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div><div class="option" onclick="checkAnswer(this, '۲')">۲</div>`,
            `تمرین: چند ستاره می‌بینی؟ ⭐⭐
            <div class="option" onclick="checkAnswer(this, '۲')">۲</div><div class="option" onclick="checkAnswer(this, '۳')">۳</div>`
        ],
        "تم ۲ - جمع": [
            `تمرین: ۲ + ۳ = ? ➕
            <div class="option" onclick="checkAnswer(this, '۵')">۵</div><div class="option" onclick="checkAnswer(this, '۴')">۴</div>`,
            `تمرین: ۱ + ۴ = ? ➕
            <div class="option" onclick="checkAnswer(this, '۵')">۵</div><div class="option" onclick="checkAnswer(this, '۶')">۶</div>`
        ],
        "تم ۳ - تفریق": [
            `تمرین: ۵ - ۲ = ? ➖
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div><div class="option" onclick="checkAnswer(this, '۴')">۴</div>`,
            `تمرین: ۴ - ۱ = ? ➖
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div><div class="option" onclick="checkAnswer(this, '۲')">۲</div>`
        ],
        "تم ۴ - مقایسه": [
            `تمرین: کدام بیشتر است؟ 🍎🍎 یا 🍎🍎🍎
            <div class="option" onclick="checkAnswer(this, '🍎🍎🍎')">🍎🍎🍎</div><div class="option" onclick="checkAnswer(this, '🍎🍎')">🍎🍎</div>`,
            `تمرین: کدام کمتر است؟ ⭐⭐⭐ یا ⭐⭐
            <div class="option" onclick="checkAnswer(this, '⭐⭐')">⭐⭐</div><div class="option" onclick="checkAnswer(this, '⭐⭐⭐')">⭐⭐⭐</div>`
        ],
        "تم ۵ - شکل‌ها": [
            `تمرین: کدام دایره است؟ 🔴
            <div class="option" onclick="checkAnswer(this, '🔴')">🔴</div><div class="option" onclick="checkAnswer(this, '🔲')">🔲</div>`,
            `تمرین: کدام مربع است؟ 🔲
            <div class="option" onclick="checkAnswer(this, '🔲')">🔲</div><div class="option" onclick="checkAnswer(this, '🔴')">🔴</div>`
        ]
    },
    "علوم": {
        "درس ۱": [
            `تمرین: کدام حیوان پرنده است؟ 🐦
            <div class="option" onclick="checkAnswer(this, 'پرنده')">پرنده</div><div class="option" onclick="checkAnswer(this, 'گربه')">گربه</div>`,
            `تمرین: آب چه رنگی است؟
            <div class="option" onclick="checkAnswer(this, 'بی‌رنگ')">بی‌رنگ</div><div class="option" onclick="checkAnswer(this, 'قرمز')">قرمز</div>`
        ]
    },
    "بازی": {
        "بازی ۱": [
            `بازی: سیب‌ها را بشمار 🍎🍎🍎
            <div class="option" onclick="checkAnswer(this, '۳')">۳</div><div class="option" onclick="checkAnswer(this, '۲')">۲</div>`,
            `بازی: ستاره‌ها را بشمار ⭐⭐⭐⭐
            <div class="option" onclick="checkAnswer(this, '۴')">۴</div><div class="option" onclick="checkAnswer(this, '۳')">۳</div>`
        ]
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
    localStorage.setItem("score_" + username, "0");
    showAlert("ثبت‌نام موفق! حالا وارد شوید 🌈", () => window.location.href = "./login.html");
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPass = localStorage.getItem("user_" + username);
    if (storedPass && btoa(password) === storedPass) {
        localStorage.setItem("loggedIn", username);
        if (username === "alireza" && password === "12122312") localStorage.setItem("isAdmin", "true");
        window.location.href = "./lessons.html";
    } else {
        showAlert("نام کاربری یا رمز عبور اشتباه است 😔");
    }
});

if ((window.location.pathname.includes("lessons.html") || window.location.pathname.includes("profile.html") || window.location.pathname.includes("payment.html") || window.location.pathname.includes("vocabulary.html") || window.location.pathname.includes("exercise.html")) && !localStorage.getItem("loggedIn")) {
    window.location.href = "./login.html";
}

// نمایش فهرست موضوعات
function showTopics(lesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = "<button onclick=\"document.getElementById('topics').innerHTML=''\">برگشت به دروس 📚</button>";
    for (let topic in lessons[lesson]) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => openExerciseWindow(lesson, topic, getProgress(lesson, topic));
        topicsDiv.appendChild(btn);
    }
    updateProgressBar(lesson, Object.keys(lessons[lesson])[0]);
}

// باز کردن تمرین در پنجره جدید
function openExerciseWindow(lesson, topic, index) {
    const username = localStorage.getItem("loggedIn");
    const package = JSON.parse(localStorage.getItem("package_" + username));
    const progress = getProgress(lesson, topic);
    if (progress >= 15 && package.name === "رایگان") {
        showAlert("تمرین رایگان شما به اتمام رسید! برای ادامه بسته بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    if (index >= package.exercises && package.name !== "دانشمند آینده") {
        showAlert("تمرین‌های بسته شما به اتمام رسید! برای ادامه بسته جدید بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    window.open(`exercise.html?lesson=${lesson}&topic=${topic}&index=${index}`, "_blank", "width=1000,height=600");
}

// نمایش تمرین‌ها در صفحه exercise.html
if (window.location.pathname.includes("exercise.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const lesson = urlParams.get("lesson");
    const topic = urlParams.get("topic");
    const index = parseInt(urlParams.get("index"));
    showExercise(lesson, topic, index);
}

function showExercise(lesson, topic, index) {
    const exerciseDiv = document.getElementById("exercise-panel");
    if (index >= lessons[lesson][topic].length) {
        exerciseDiv.innerHTML = "<p>تمرین‌ها تمام شد! 🎉</p>";
        setTimeout(() => window.close(), 2000);
        return;
    }
    exerciseDiv.innerHTML = lessons[lesson][topic][index];
    saveProgress(lesson, topic, index);
}

// نوار پیشرفت
function updateProgressBar(lesson, topic) {
    const progress = getProgress(lesson, topic);
    const total = lessons[lesson][topic].length;
    const percentage = (progress / total) * 100;
    const progressFill = document.getElementById("progressFill");
    if (progressFill) progressFill.style.width = `${percentage}%`;
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
    const progress = JSON.parse(localStorage.getItem("progress_" + username) || "{}");
    return progress[lesson]?.[topic] || 0;
}

// بررسی پاسخ‌ها و انتقال خودکار
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent;
    const lesson = new URLSearchParams(window.location.search).get("lesson");
    const topic = new URLSearchParams(window.location.search).get("topic");
    let index = parseInt(new URLSearchParams(window.location.search).get("index"));
    if (userAnswer === correctAnswer) {
        cheerSound.play();
        updateScore(5);
        showAlert("درست است! 🌟", () => {
            index++;
            window.location.href = `exercise.html?lesson=${lesson}&topic=${topic}&index=${index}`;
        });
    } else {
        showAlert("غلط است، دوباره تلاش کن! 😔");
    }
}

function drop(event, correctAnswer) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.createElement("span");
    draggedElement.textContent = data;
    draggedElement.draggable = true;
    draggedElement.ondragstart = drag;
    event.target.appendChild(draggedElement);

    const lesson = new URLSearchParams(window.location.search).get("lesson");
    const topic = new URLSearchParams(window.location.search).get("topic");
    let index = parseInt(new URLSearchParams(window.location.search).get("index"));
    const dropzones = document.querySelectorAll(".dropzone");
    const droppedItems = Array.from(dropzones).map(zone => Array.from(zone.children).map(item => item.textContent).join("")).join("");
    const correctOrder = Array.from(dropzones).map(zone => zone.getAttribute("ondrop").match(/'(.*?)'/)[1]).join("");

    if (droppedItems === correctOrder) {
        cheerSound.play();
        updateScore(5);
        showAlert("درست است! 🌟", () => {
            index++;
            window.location.href = `exercise.html?lesson=${lesson}&topic=${topic}&index=${index}`;
        });
    }
}

// دراگ‌اند‌دراپ
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

// نمایش پیام با دکمه
function showAlert(message, callback) {
    const existingAlert = document.querySelector(".custom-alert");
    if (existingAlert) existingAlert.remove();
    const alertDiv = document.createElement("div");
    alertDiv.className = "custom-alert";
    alertDiv.innerHTML = `
<p>${message}</p>
<button onclick="this.parentElement.remove();${callback ? callback.toString().replace(/function\s*\(\)\s*{(.*)}/, '$1') : ''}">باشه</button>
`;
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.background = "#fff";
    alertDiv.style.padding = "2vw";
    alertDiv.style.borderRadius = "1vw";
    alertDiv.style.boxShadow = "0 0 2vw rgba(0, 0, 0, 0.5)";
    alertDiv.style.zIndex = "1000";
    alertDiv.style.textAlign = "center";
    document.body.appendChild(alertDiv);
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
    const score = localStorage.getItem("score_" + username) || "0";
    document.querySelector("#score").textContent = score;
    checkMedals(parseInt(score));
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
    if (username === "alireza" && localStorage.getItem("isAdmin") === "true") {
        document.getElementById("showUsersBtn").style.display = "inline-block";
    }
}

// پنل مدیریت
function showAdminPanel() {
    const adminPanel = document.getElementById("adminPanel");
    adminPanel.style.display = "block";
    adminPanel.innerHTML = `
        <h3>مدیریت کاربران 👥</h3>
        <div id="userList"></div>
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
            const package = JSON.parse(localStorage.getItem("package_" + user));
            const score = localStorage.getItem("score_" + user) || "0";
            const progress = JSON.parse(localStorage.getItem("progress_" + user) || "{}");
            const div = document.createElement("div");
            div.innerHTML = `
                کاربر: ${user} | بسته: ${package.name} | امتیاز: ${score}
                <button onclick="activatePackage('${user}')">تغییر بسته</button>
                <button onclick="deleteUser('${user}')">حذف کاربر</button>
                <button onclick="resetUserProgress('${user}')">بازنشانی پیشرفت</button>
            `;
            userList.appendChild(div);
        }
    }
}

function activatePackage(username) {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") {
        showAlert("فقط مدیر می‌تواند بسته‌ها را تغییر دهد!");
        return;
    }
    const packageName = prompt("نام بسته را وارد کنید (دانش‌آموز، دانشجوی آینده، دانشمند آینده):");
    let exercises, expiry;
    if (packageName === "دانش‌آموز") { exercises = 120; expiry = Date.now() + 30 * 24 * 60 * 60 * 1000; }
    else if (packageName === "دانشجوی آینده") { exercises = 350; expiry = Date.now() + 60 * 24 * 60 * 60 * 1000; }
    else if (packageName === "دانشمند آینده") { exercises = Infinity; expiry = null; }
    else return showAlert("بسته نامعتبر است!");
    localStorage.setItem("package_" + username, JSON.stringify({ name: packageName, exercises, expiry }));
    showUsers();
}

function deleteUser(username) {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") {
        showAlert("فقط مدیر می‌تواند کاربران را حذف کند!");
        return;
    }
    if (confirm(`آیا مطمئنید که می‌خواهید کاربر ${username} را حذف کنید؟`)) {
        localStorage.removeItem("user_" + username);
        localStorage.removeItem("progress_" + username);
        localStorage.removeItem("package_" + username);
        localStorage.removeItem("score_" + username);
        localStorage.removeItem("firstName_" + username);
        localStorage.removeItem("lastName_" + username);
        localStorage.removeItem("profilePic_" + username);
        showUsers();
    }
}

function deleteAllUsers() {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") {
        showAlert("فقط مدیر می‌تواند همه کاربران را حذف کند!");
        return;
    }
    if (confirm("آیا مطمئنید که می‌خواهید همه کاربران را حذف کنید؟")) {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key.startsWith("user_") || key.startsWith("progress_") || key.startsWith("package_") || key.startsWith("score_") || key.startsWith("firstName_") || key.startsWith("lastName_") || key.startsWith("profilePic_")) {
                localStorage.removeItem(key);
            }
        }
        showUsers();
    }
}

function resetUserProgress(username) {
    if (localStorage.getItem("loggedIn") !== "alireza" || localStorage.getItem("isAdmin") !== "true") {
        showAlert("فقط مدیر می‌تواند پیشرفت را بازنشانی کند!");
        return;
    }
    localStorage.setItem("progress_" + username, JSON.stringify({}));
    localStorage.setItem("score_" + username, "0");
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
    const existingAlert = document.querySelector(".custom-alert");
    if (existingAlert) existingAlert.remove();
    const alertDiv = document.createElement("div");
    alertDiv.className = "custom-alert";
    alertDiv.innerHTML = `
<p>آیا قصد خرید بسته "${packageName}" را دارید؟</p>
<button onclick="this.parentElement.remove()">خرید کنسل شود ❌</button>
<button onclick="goToTelegram('${packageName}', '${packageDetails}');this.parentElement.remove()">برو به خرید ✅</button>
`;
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.background = "#fff";
    alertDiv.style.padding = "2vw";
    alertDiv.style.borderRadius = "1vw";
    alertDiv.style.boxShadow = "0 0 2vw rgba(0, 0, 0, 0.5)";
    alertDiv.style.zIndex = "1000";
    alertDiv.style.textAlign = "center";
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
