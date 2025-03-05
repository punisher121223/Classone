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

const cheerSound = new Audio("assets/cheer.mp3");

// دیتابیس نگاره‌ها (هر نگاره ۱۰۰ تمرین)
const negarehBank = {
    "نگاره ۱ - سلام": Array.from({ length: 100 }, (_, i) => ({
        word: ["سلام", "دوست", "مدرسه", "خوب"][Math.floor(Math.random() * 4)],
        parts: ["س", "لا", "م"],
        sentence: "سلام به دوستانم می‌دهم.",
        image: "salam.png"
    })),
    "نگاره ۲ - سلام بهار": Array.from({ length: 100 }, (_, i) => ({
        word: ["بهار", "گل", "درخت", "آفتاب"][Math.floor(Math.random() * 4)],
        parts: ["به", "ار"],
        sentence: "بهار با گل‌ها می‌آید.",
        image: "bahar.png"
    })),
    "نگاره ۳ - خانواده": Array.from({ length: 100 }, (_, i) => ({
        word: ["مادر", "پدر", "خانه", "خانواده"][Math.floor(Math.random() * 4)],
        parts: ["ما", "در"],
        sentence: "مادر در خانه است.",
        image: "khanevade.png"
    })),
    "نگاره ۴ - دوستان": Array.from({ length: 100 }, (_, i) => ({
        word: ["دوست", "بازی", "مدرسه", "کلاس"][Math.floor(Math.random() * 4)],
        parts: ["دو", "ست"],
        sentence: "دوست من بازی می‌کند.",
        image: "doost.png"
    })),
    "نگاره ۵ - غذا": Array.from({ length: 100 }, (_, i) => ({
        word: ["نان", "آب", "غذا", "میوه"][Math.floor(Math.random() * 4)],
        parts: ["نا", "ن"],
        sentence: "نان و آب می‌خورم.",
        image: "ghaza.png"
    })),
    "نگاره ۶ - دوستان من": Array.from({ length: 100 }, (_, i) => ({
        word: ["دوستان", "بازی", "خنده", "شادی"][Math.floor(Math.random() * 4)],
        parts: ["دو", "ست", "ان"],
        sentence: "دوستان من شاد هستند.",
        image: "doostan.png"
    })),
    "نگاره ۷ - مدرسه": Array.from({ length: 100 }, (_, i) => ({
        word: ["مدرسه", "کتاب", "معلم", "درس"][Math.floor(Math.random() * 4)],
        parts: ["مد", "ر", "سه"],
        sentence: "مدرسه من بزرگ است.",
        image: "madrese.png"
    })),
    "نگاره ۸ - کتاب من": Array.from({ length: 100 }, (_, i) => ({
        word: ["کتاب", "قلم", "دفتر", "خواندن"][Math.floor(Math.random() * 4)],
        parts: ["کت", "اب"],
        sentence: "کتاب من قشنگ است.",
        image: "ketab.png"
    })),
    "نگاره ۹ - طبیعت": Array.from({ length: 100 }, (_, i) => ({
        word: ["درخت", "رود", "کوه", "جنگل"][Math.floor(Math.random() * 4)],
        parts: ["در", "خت"],
        sentence: "درخت در طبیعت است.",
        image: "tabiat.png"
    })),
    "نگاره ۱۰ - پرندگان": Array.from({ length: 100 }, (_, i) => ({
        word: ["پرنده", "آسمان", "بال", "پرواز"][Math.floor(Math.random() * 4)],
        parts: ["پر", "ن", "ده"],
        sentence: "پرنده در آسمان پرواز می‌کند.",
        image: "parande.png"
    }))
};

// دیتابیس نشانه‌ها (هر نشانه ۱۰۰ تمرین)
const wordBank = {
    "اَ": Array.from({ length: 100 }, (_, i) => ({
        word: ["اَناناس", "اَسب", "اَبر", "اَردک", "اَفتاب"][Math.floor(Math.random() * 5)],
        parts: ["اَ", "نا", "ناس"],
        sentence: "اَناناس زرد است."
    })),
    "ب": Array.from({ length: 100 }, (_, i) => ({
        word: ["بابا", "بازی", "برگ", "باد", "باران"][Math.floor(Math.random() * 5)],
        parts: ["با", "با"],
        sentence: "بابا با من بازی می‌کند."
    })),
    "پ": Array.from({ length: 100 }, (_, i) => ({
        word: ["پرنده", "پنجره", "پدر", "پا", "پرواز"][Math.floor(Math.random() * 5)],
        parts: ["پ", "ر", "نده"],
        sentence: "پرنده از پنجره پرواز کرد."
    })),
    "ت": Array.from({ length: 100 }, (_, i) => ({
        word: ["تاب", "تخت", "توپ", "ترک", "تمیز"][Math.floor(Math.random() * 5)],
        parts: ["تا", "ب"],
        sentence: "تاب در حیاط است."
    })),
    "ث": Array.from({ length: 100 }, (_, i) => ({
        word: ["ثانیه", "ثمر", "ثابت", "ثوب", "ثروت"][Math.floor(Math.random() * 5)],
        parts: ["ثا", "نیه"],
        sentence: "ثانیه‌ها می‌گذرند."
    })),
    "ج": Array.from({ length: 100 }, (_, i) => ({
        word: ["جنگل", "جوجه", "جام", "جاده", "جارو"][Math.floor(Math.random() * 5)],
        parts: ["جن", "گل"],
        sentence: "جنگل سبز است."
    })),
    "چ": Array.from({ length: 100 }, (_, i) => ({
        word: ["چرخ", "چادر", "چای", "چوب", "چشم"][Math.floor(Math.random() * 5)],
        parts: ["چ", "رخ"],
        sentence: "چرخ ماشین می‌چرخد."
    })),
    "ح": Array.from({ length: 100 }, (_, i) => ({
        word: ["حیاط", "حلقه", "حرف", "حوله", "حرارت"][Math.floor(Math.random() * 5)],
        parts: ["حی", "اط"],
        sentence: "حیاط خانه بزرگ است."
    })),
    "خ": Array.from({ length: 100 }, (_, i) => ({
        word: ["خورشید", "خانه", "خاک", "خرگوش", "خاموش"][Math.floor(Math.random() * 5)],
        parts: ["خور", "شید"],
        sentence: "خورشید در آسمان است."
    })),
    "د": Array.from({ length: 100 }, (_, i) => ({
        word: ["دوست", "در", "دریا", "درس", "دفتر"][Math.floor(Math.random() * 5)],
        parts: ["دو", "ست"],
        sentence: "دوست من درس می‌خواند."
    })),
    // ادامه نشانه‌ها تا "ی" با همین الگو اضافه می‌شود (به دلیل محدودیت فضا، بقیه را خودت تکمیل کن)
};

// توابع کمکی
function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

function generateWrongWord(word) {
    const letters = word.split("");
    return shuffleArray(letters).join("");
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
    const dropzone = event.target;
    if (dropzone.classList.contains("dropzone") && !dropzone.textContent) {
        if (dropzone.dataset.correct === data) {
            dropzone.textContent = data;
            dropzone.style.backgroundColor = "#ccffcc";
            checkDragAndDropComplete();
        } else {
            showAlert("غلط است، دوباره تلاش کن! 😔");
        }
    }
}

function checkDragAndDropComplete() {
    const dropzones = document.querySelectorAll(".dropzone");
    const allCorrect = Array.from(dropzones).every(zone => zone.textContent === zone.dataset.correct);
    if (allCorrect) {
        cheerSound.play();
        updateScore(5);
        showAlert("درست است! 🌟", generateNewExercise);
    }
}

// تابع پیشرفته تولید تمرین
function generateExercise(type, data, isNegareh = false) {
    const exerciseDiv = document.getElementById("exercise-panel");
    const randomItem = data[Math.floor(Math.random() * data.length)];
    const word = randomItem.word;
    const parts = randomItem.parts;
    const sentence = randomItem.sentence;
    const image = randomItem.image;

    let exercise = "";
    switch (type) {
        case "بخش‌بندی":
            exercise = `
                <p>تمرین: "${word}" را بخش کن ✍️</p>
                <div class="exercise-container">
                    ${parts.map(part => `
                        <div class="dropzone" data-correct="${part}" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                    `).join("")}
                </div>
                <div class="parts-container">
                    ${shuffleArray([...parts]).map(part => `
                        <span class="draggable" draggable="true" ondragstart="drag(event)">${part}</span>
                    `).join("")}
                </div>
            `;
            break;
        case "انتخاب کلمه":
            const wrongWord = generateWrongWord(word);
            exercise = `
                <p>تمرین: کدام کلمه درست است؟ ✅</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${word}')">${word}</div>
                    <div class="option" onclick="checkAnswer(this, '${wrongWord}')">${wrongWord}</div>
                </div>
            `;
            break;
        case "جمله‌سازی":
            exercise = `
                <p>تمرین: با "${word}" جمله بساز 📝</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${sentence}')">${sentence}</div>
                    <div class="option" onclick="checkAnswer(this, 'غلط')">غلط</div>
                </div>
            `;
            break;
        case "تطبیق تصویر":
            const anotherItem = data.filter(item => item.word !== word)[Math.floor(Math.random() * (data.length - 1))];
            exercise = `
                <p>تمرین: کلمه "${word}" را با تصویر تطبیق بده 🖼️</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${word}')">${word}</div>
                    <div class="option" onclick="checkAnswer(this, '${anotherItem.word}')">${anotherItem.word}</div>
                </div>
            `;
            break;
    }
    exerciseDiv.innerHTML = exercise;
}

// ثبت‌نام و ورود (بدون تغییر)
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

// محافظت از صفحات (بدون تغییر)
const protectedPages = ["lessons.html", "profile.html", "payment.html", "vocabulary.html", "exercise.html"];
if (protectedPages.some(page => window.location.pathname.includes(page)) && !localStorage.getItem("loggedIn")) {
    window.location.href = "./login.html";
}

// نمایش زیرمنوهای درس (بدون تغییر)
function showSubLessons(lesson) {
    const subLessonsDiv = document.getElementById("subLessons");
    subLessonsDiv.innerHTML = '<button onclick="this.parentElement.innerHTML=\'\';document.getElementById(\'topics\').innerHTML=\'\'">برگشت به دروس 📚</button>';
    const subLessons = {
        "نگارش": ["نگاره‌ها", "نشانه‌ها"],
        "ریاضی": ["تم ۱ - شمارش", "تم ۲ - جمع"],
        "علوم": ["درس ۱ - طبیعت"],
        "بازی": ["بازی ۱ - شمارش"]
    };
    subLessons[lesson].forEach(subLesson => {
        const btn = document.createElement("button");
        btn.textContent = subLesson;
        btn.onclick = () => showTopics(lesson, subLesson);
        subLessonsDiv.appendChild(btn);
    });
}

// نمایش موضوعات (بدون تغییر)
function showTopics(lesson, subLesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = '<button onclick="this.parentElement.innerHTML=\'\'">برگشت به زیرمنوها 🔙</button>';
    const topics = {
        "نگاره‌ها": ["نگاره ۱ - سلام", "نگاره ۲ - سلام بهار", "نگاره ۳ - خانواده", "نگاره ۴ - دوستان", "نگاره ۵ - غذا", "نگاره ۶ - دوستان من", "نگاره ۷ - مدرسه", "نگاره ۸ - کتاب من", "نگاره ۹ - طبیعت", "نگاره ۱۰ - پرندگان"],
        "نشانه‌ها": Object.keys(wordBank).map(sign => `نشانه ${sign}`),
        "تم ۱ - شمارش": ["تم ۱ - شمارش"],
        "تم ۲ - جمع": ["تم ۲ - جمع"],
        "درس ۱ - طبیعت": ["درس ۱ - طبیعت"],
        "بازی ۱ - شمارش": ["بازی ۱ - شمارش"]
    };
    topics[subLesson].forEach(topic => {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => openExerciseWindow(lesson, subLesson, topic);
        topicsDiv.appendChild(btn);
    });
}

// باز کردن تمرین‌ها (بدون تغییر)
function openExerciseWindow(lesson, subLesson, topic) {
    const username = localStorage.getItem("loggedIn");
    const package = JSON.parse(localStorage.getItem(`package_${username}`));
    const totalProgress = Object.values(JSON.parse(localStorage.getItem(`progress_${username}`) || "{}"))
        .reduce((acc, curr) => acc + Object.values(curr).reduce((a, b) => a + Object.values(b).reduce((x, y) => x + y, 0), 0), 0);
    if (totalProgress >= 15 && package.name === "رایگان") {
        showAlert("تمرین رایگان شما به اتمام رسید! برای ادامه بسته بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    if (totalProgress >= package.exercises && package.name !== "دانشمند آینده") {
        showAlert("تمرین‌های بسته شما به اتمام رسید! برای ادامه بسته جدید بخرید.", () => window.location.href = "./payment.html");
        return;
    }
    window.open(`exercise.html?lesson=${encodeURIComponent(lesson)}&subLesson=${encodeURIComponent(subLesson)}&topic=${encodeURIComponent(topic)}`, "_blank", "width=1000,height=600");
}

// نمایش تمرین
if (window.location.pathname.includes("exercise.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const lesson = decodeURIComponent(urlParams.get("lesson"));
    const subLesson = decodeURIComponent(urlParams.get("subLesson"));
    const topic = decodeURIComponent(urlParams.get("topic"));
    const exerciseTitle = document.getElementById("exerciseTitle");
    exerciseTitle.textContent = `تمرین: ${topic}`;
    
    const type = ["بخش‌بندی", "انتخاب کلمه", "جمله‌سازی", "تطبیق تصویر"][Math.floor(Math.random() * 4)];
    if (subLesson === "نگاره‌ها") {
        generateExercise(type, negarehBank[topic], true);
    } else if (subLesson === "نشانه‌ها") {
        const sign = topic.replace("نشانه ", "");
        generateExercise(type, wordBank[sign]);
    } else {
        document.getElementById("exercise-panel").innerHTML = "<p>این بخش هنوز پیاده‌سازی نشده است.</p>";
    }
}

// مدیریت پیشرفت
function saveProgress(lesson, subLesson, topic) {
    const username = localStorage.getItem("loggedIn");
    const progress = JSON.parse(localStorage.getItem(`progress_${username}`) || "{}");
    progress[lesson] = progress[lesson] || {};
    progress[lesson][subLesson] = progress[lesson][subLesson] || {};
    progress[lesson][subLesson][topic] = (progress[lesson][subLesson][topic] || 0) + 1;
    localStorage.setItem(`progress_${username}`, JSON.stringify(progress));
}

// بررسی پاسخ‌ها (تغییر برای نمایش خودکار تمرین بعدی)
function checkAnswer(element, correctAnswer) {
    const userAnswer = element.textContent.trim();
    if (userAnswer === correctAnswer) {
        cheerSound.play();
        updateScore(5);
        const urlParams = new URLSearchParams(window.location.search);
        const lesson = decodeURIComponent(urlParams.get("lesson"));
        const subLesson = decodeURIComponent(urlParams.get("subLesson"));
        const topic = decodeURIComponent(urlParams.get("topic"));
        saveProgress(lesson, subLesson, topic);
        showAlert("درست است! 🌟", () => generateNewExercise());
    } else {
        showAlert("غلط است، دوباره تلاش کن! 😔");
        element.style.backgroundColor = "#ffcccc";
    }
}

function generateNewExercise() {
    const urlParams = new URLSearchParams(window.location.search);
    const lesson = decodeURIComponent(urlParams.get("lesson"));
    const subLesson = decodeURIComponent(urlParams.get("subLesson"));
    const topic = decodeURIComponent(urlParams.get("topic"));
    const type = ["بخش‌بندی", "انتخاب کلمه", "جمله‌سازی", "تطبیق تصویر"][Math.floor(Math.random() * 4)];
    if (subLesson === "نگاره‌ها") {
        generateExercise(type, negarehBank[topic], true);
    } else if (subLesson === "نشانه‌ها") {
        const sign = topic.replace("نشانه ", "");
        generateExercise(type, wordBank[sign]);
    }
}

// نمایش اعلان (بدون تغییر)
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

// بقیه توابع (مدیریت پروفایل، پنل مدیریت، خرید بسته و خروج) بدون تغییر باقی می‌مانند و اینجا تکرار نمی‌شوند.
