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

// داده‌های دروس
const lessons = {
    "نگارش": {
        "نگاره ۱": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return `
تمرین: "آب" را بخش کن 💧 (۲ بخش)
<div class="dropzone" ondrop="drop(event, 'آ-ب')" ondragover="allowDrop(event)"></div>
<div class="dropzone" ondrop="drop(event, 'آ-ب')" ondragover="allowDrop(event)"></div>
<span draggable="true" ondragstart="drag(event)">آ</span>
<span draggable="true" ondragstart="drag(event)">ب</span>
`;
            if (i === 1) return `
تمرین: صدای "آ" را پیدا کن 🎵
<div class="option" onclick="checkAnswer(this, 'آ')">آ</div><div class="option" onclick="checkAnswer(this, 'آ')">ا</div>
`;
            return `
تمرین ${i + 1}: کدام کلمه درست است؟
<div class="option" onclick="checkAnswer(this, 'آب')">آب</div><div class="option" onclick="checkAnswer(this, 'آد')">آد</div>
`;
        }),
        "نگاره ۲": Array.from({ length: 100 }, (_, i) => {
            if (i === 0) return `
تمرین: "اسب" را بخش کن 🐴 (۲ بخش)
<div class="dropzone" ondrop="drop(event, 'اَس-ب')" ondragover="allowDrop(event)"></div>
<div class="dropzone" ondrop="drop(event, 'اَس-ب')" ondragover="allowDrop(event)"></div>
<span draggable="true" ondragstart="drag(event)">اَس</span>
<span draggable="true" ondragstart="drag(event)">ب</span>
`;
            return `
تمرین ${i + 1}: کدام کلمه درست است؟
<div class="option" onclick="checkAnswer(this, 'اسب')">اسب</div><div class="option" onclick="checkAnswer(this, 'اسد')">اسد</div>
`;
        }),
    },
    "ریاضی": {
        "تم ۱": Array.from({ length: 100 }, (_, i) => i === 0 ? `
تمرین: ۲ + ۳ = ? ➕
<div class="option" onclick="checkAnswer(this, '۵')">۵</div><div class="option" onclick="checkAnswer(this, '۴')">۴</div>
` : `
تمرین ${i + 1}: ۱ + ۲ = ? ➕
<div class="option" onclick="checkAnswer(this, '۳')">۳</div><div class="option" onclick="checkAnswer(this, '۲')">۲</div>
`),
    },
    "علوم": {
        "درس ۱": Array.from({ length: 10 }, (_, i) => i === 0 ? `
تمرین: کدام حیوان پرنده است؟ 🐦
<div class="option" onclick="checkAnswer(this, 'پرنده')">پرنده</div><div class="option" onclick="checkAnswer(this, 'گربه')">گربه</div>
` : `
تمرین ${i + 1}: آب چه رنگی است؟
<div class="option" onclick="checkAnswer(this, 'بی‌رنگ')">بی‌رنگ</div><div class="option" onclick="checkAnswer(this, 'قرمز')">قرمز</div>
`),
    },
    "بازی": {
        "بازی ۱": Array.from({ length: 10 }, (_, i) => i === 0 ? `
بازی: سیب‌ها را بشمار 🍎🍎🍎
<div class="option" onclick="checkAnswer(this, '۳')">۳</div><div class="option" onclick="checkAnswer(this, '۲')">۲</div>
` : `
بازی ${i + 1}: ستاره‌ها را بشمار ⭐⭐⭐⭐
<div class="option" onclick="checkAnswer(this, '۴')">۴</div><div class="option" onclick="checkAnswer(this, '۳')">۳</div>
`),
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

if ((window.location.pathname.includes("lessons.html") || window.location.pathname.includes("profile.html") || window.location.pathname.includes("payment.html") || window.location.pathname.includes("vocabulary.html")) && !localStorage.getItem("loggedIn")) {
    window.location.href = "./login.html";
}

// نمایش فهرست موضوعات
function showTopics(lesson) {
    resetPanel();
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = "<button onclick=\"resetPanel();document.getElementById('topics').innerHTML=''\">برگشت به دروس 📚</button>";
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
        showAlert("تمرین رایگان شما به اتمام رسید! برای ادامه بسته بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    if (index >= package.exercises && package.name !== "دانشمند آینده") {
        showAlert("تمرین‌های بسته شما به اتمام رسید! برای ادامه بسته جدید بخرید.", () => window.location.href = "./payment.html");
        return;
    }

    const exerciseDiv = document.getElementById("exercise-panel");
    exerciseDiv.innerHTML = "";
    if (index >= lessons[lesson][topic].length) {
        exerciseDiv.innerHTML = "<p>تمرین‌ها تمام شد! 🎉</p>";
        return;
    }
    exerciseDiv.innerHTML = lessons[lesson][topic][index];
    currentLesson = lesson;
    currentTopic = topic;
    saveProgress(lesson, topic, index);
    updateProgressBar(lesson, topic);
    document.getElementById("checkAnswerBtn").style.display = "block";
}

// نوار پیشرفت
function updateProgressBar(lesson, topic) {
    const progress = getProgress(lesson, topic);
    const total = lessons[lesson][topic].length;
    const percentage = (progress / total) * 100;
    document.getElementById("progressFill").style.width = `${percentage}%`;
}

// بازنشانی پنل تمرین‌ها
function resetPanel() {
    document.getElementById("exercise-panel").innerHTML = "";
    document.getElementById("checkAnswerBtn").style.display = "none";
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

function resetProgress() {
    const username = localStorage.getItem("loggedIn");
    let progress = JSON.parse(localStorage.getItem("progress_" + username)) || {};
    progress[currentLesson][currentTopic] = 0;
    localStorage.setItem("progress_" + username, JSON.stringify(progress));
    showExercises(currentLesson, currentTopic, 0);
}

// تمرین بعدی
function nextExercise() {
    let index = getProgress(currentLesson, currentTopic) + 1;
    showExercises(currentLesson, currentTopic, index);
}

// بررسی پاسخ‌ها
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent;
    if (userAnswer === correctAnswer) {
        cheerSound.play();
        showAlert("درست است! 🌟", nextExercise);
        updateScore(5);
    } else {
        showAlert("غلط است، دوباره تلاش کن! 😔");
    }
}

function checkAllAnswers() {
    const exerciseDiv = document.getElementById("exercise-panel");
    const dropzones = exerciseDiv.querySelectorAll(".dropzone");
    const options = exerciseDiv.querySelectorAll(".option");
    if (dropzones.length > 0) {
        const droppedItems = Array.from(dropzones).map(zone => Array.from(zone.children).map(item => item.textContent).join("")).join("-");
        const correctOrder = dropzones[0].getAttribute("ondrop").match(/'(.*?)'/)[1];
        if (droppedItems === correctOrder) {
            cheerSound.play();
            showAlert("درست است! 🌟", nextExercise);
            updateScore(5);
        } else {
            showAlert("ترتیب اشتباه است، دوباره تلاش کن! 😔");
        }
    } else if (options.length > 0) {
        options.forEach(opt => {
            const correct = opt.getAttribute("onclick").match(/'(.*?)'/)[1];
            if (opt.textContent === correct) opt.click();
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

function drop(event, correctOrder) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.createElement("span");
    draggedElement.textContent = data;
    draggedElement.draggable = true;
    draggedElement.ondragstart = drag;
    event.target.appendChild(draggedElement);
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
    if (localStorage.getItem("isAdmin") === "true") {
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
    if (localStorage.getItem("loggedIn") !== "alireza") {
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
    if (localStorage.getItem("loggedIn") !== "alireza") {
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
    if (localStorage.getItem("loggedIn") !== "alireza") {
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
    if (localStorage.getItem("loggedIn") !== "alireza") {
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
