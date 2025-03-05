// تاریخ شمسی
function updateJalaliDate() {
    const date = new Date();
    const jalaliDate = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
    document.querySelectorAll("#jalaliDate").forEach(el => el.textContent = "📅 " + jalaliDate);
}
setInterval(updateJalaliDate, 1000);
updateJalaliDate();

// دیتابیس رمزگذاری‌شده (اطلاعات کتاب‌های نگارش و فارسی اول ابتدایی)
const rawData = {
    "نگاره‌ها": {
        "نگاره ۱ - سلام": {
            words: ["سلام", "خوب", "دوست", "صبح", "شب"],
            sentences: ["سلام دوست من", "صبح بخیر", "شب خوش"],
            images: ["salam.png", "friend.png", "morning.png"]
        },
        "نگاره ۲ - بهار": {
            words: ["بهار", "گل", "آفتاب", "باران", "پرنده"],
            sentences: ["بهار آمد", "گل‌ها شکفتند", "آفتاب می‌درخشد"],
            images: ["spring.png", "flower.png", "sun.png"]
        },
        "نگاره ۳ - خانواده": {
            words: ["مادر", "پدر", "خواهر", "برادر", "خانه"],
            sentences: ["مادر مهربان است", "پدر کار می‌کند", "خانه ما بزرگ است"],
            images: ["mother.png", "father.png", "house.png"]
        },
        "نگاره ۴ - دوستان": {
            words: ["دوست", "بازی", "خنده", "مدرسه", "کتاب"],
            sentences: ["دوست من بازی می‌کند", "ما با هم می‌خندیم", "کتاب می‌خوانیم"],
            images: ["friend.png", "play.png", "book.png"]
        },
        "نگاره ۵ - غذا": {
            words: ["نان", "آب", "میوه", "شیر", "غذا"],
            sentences: ["نان می‌خورم", "آب می‌نوشم", "میوه شیرین است"],
            images: ["bread.png", "water.png", "fruit.png"]
        },
        "نگاره ۶ - دوستان من": {
            words: ["دوست", "بازی", "خنده", "پارک", "توپ"],
            sentences: ["با دوست بازی می‌کنم", "در پارک می‌خندیم", "توپ را پرتاب می‌کنم"],
            images: ["friend.png", "park.png", "ball.png"]
        },
        "نگاره ۷ - مدرسه": {
            words: ["مدرسه", "معلم", "کتاب", "مداد", "کلاس"],
            sentences: ["مدرسه می‌روم", "معلم درس می‌دهد", "کتاب می‌خوانم"],
            images: ["school.png", "teacher.png", "book.png"]
        },
        "نگاره ۸ - کتاب من": {
            words: ["کتاب", "خواندن", "داستان", "عکس", "صفحه"],
            sentences: ["کتاب می‌خوانم", "داستان قشنگ است", "عکس‌ها را می‌بینم"],
            images: ["book.png", "story.png", "picture.png"]
        },
        "نگاره ۹ - طبیعت": {
            words: ["درخت", "گل", "رود", "کوه", "جنگل"],
            sentences: ["درخت سبز است", "گل می‌بویم", "رود جاری است"],
            images: ["tree.png", "flower.png", "river.png"]
        },
        "نگاره ۱۰ - پرندگان": {
            words: ["پرنده", "آواز", "آسمان", "لانه", "جوجه"],
            sentences: ["پرنده آواز می‌خواند", "در آسمان پرواز می‌کند", "لانه می‌سازد"],
            images: ["bird.png", "sky.png", "nest.png"]
        }
    },
    "نشانه‌ها": {
        "اَ": {
            words: ["اَناناس", "اَسب", "اَبر", "اَردک", "اَفتاب"],
            parts: {
                "اَناناس": ["اَ", "نا", "ناس"],
                "اَسب": ["اَس", "ب"],
                "اَبر": ["اَ", "بر"],
                "اَردک": ["اَر", "دک"],
                "اَفتاب": ["اَف", "تاب"]
            }
        },
        "ب": {
            words: ["بابا", "بازی", "برگ", "باد", "باران"],
            parts: {
                "بابا": ["با", "با"],
                "بازی": ["با", "زی"],
                "برگ": ["بر", "گ"],
                "باد": ["باد"],
                "باران": ["با", "ران"]
            }
        },
        "پ": {
            words: ["پرنده", "پنجره", "پدر", "پتو", "پنجه"],
            parts: {
                "پرنده": ["پر", "نده"],
                "پنجره": ["پن", "جره"],
                "پدر": ["پ", "در"],
                "پتو": ["پ", "تو"],
                "پنجه": ["پن", "جه"]
            }
        },
        "ت": {
            words: ["تاب", "توت", "تپه", "ترب", "تیغ"],
            parts: {
                "تاب": ["تا", "ب"],
                "توت": ["تو", "ت"],
                "تپه": ["ت", "په"],
                "ترب": ["تر", "ب"],
                "تیغ": ["تی", "غ"]
            }
        },
        "ث": {
            words: ["ثابت", "ثمر", "ثانیه", "ثروت"],
            parts: {
                "ثابت": ["ثا", "بت"],
                "ثمر": ["ث", "مر"],
                "ثانیه": ["ثا", "نیه"],
                "ثروت": ["ث", "روت"]
            }
        },
        "ج": {
            words: ["جاده", "جوجه", "جنگل", "جام"],
            parts: {
                "جاده": ["جا", "ده"],
                "جوجه": ["جو", "جه"],
                "جنگل": ["جن", "گل"],
                "جام": ["جا", "م"]
            }
        },
        "چ": {
            words: ["چشم", "چرخ", "چمن", "چادر"],
            parts: {
                "چشم": ["چش", "م"],
                "چرخ": ["چر", "خ"],
                "چمن": ["چ", "من"],
                "چادر": ["چا", "در"]
            }
        },
        "ح": {
            words: ["حیوان", "حلقه", "حباب", "حرف"],
            parts: {
                "حیوان": ["حی", "وان"],
                "حلقه": ["حل", "قه"],
                "حباب": ["ح", "باب"],
                "حرف": ["حر", "ف"]
            }
        },
        "خ": {
            words: ["خورشید", "خاک", "خانه", "خوش"],
            parts: {
                "خورشید": ["خور", "شید"],
                "خاک": ["خا", "ک"],
                "خانه": ["خا", "نه"],
                "خوش": ["خو", "ش"]
            }
        },
        "د": {
            words: ["درخت", "دریا", "دست", "دوست"],
            parts: {
                "درخت": ["در", "خت"],
                "دریا": ["در", "یا"],
                "دست": ["دس", "ت"],
                "دوست": ["دو", "ست"]
            }
        },
        "ذ": {
            words: ["ذرت", "ذوق", "ذهن"],
            parts: {
                "ذرت": ["ذر", "ت"],
                "ذوق": ["ذو", "ق"],
                "ذهن": ["ذه", "ن"]
            }
        },
        "ر": {
            words: ["رود", "رنگ", "روز", "راه"],
            parts: {
                "رود": ["رو", "د"],
                "رنگ": ["رن", "گ"],
                "روز": ["رو", "ز"],
                "راه": ["را", "ه"]
            }
        },
        "ز": {
            words: ["زمین", "زرافه", "زنگ", "زیبا"],
            parts: {
                "زمین": ["ز", "مین"],
                "زرافه": ["زر", "افه"],
                "زنگ": ["زن", "گ"],
                "زیبا": ["زی", "با"]
            }
        },
        "ژ": {
            words: ["ژاله", "ژرف", "ژنده"],
            parts: {
                "ژاله": ["ژا", "له"],
                "ژرف": ["ژر", "ف"],
                "ژنده": ["ژن", "ده"]
            }
        },
        "س": {
            words: ["سبد", "سنجاب", "سیب", "ساحل"],
            parts: {
                "سبد": ["س", "بد"],
                "سنجاب": ["سن", "جاب"],
                "سیب": ["سی", "ب"],
                "ساحل": ["سا", "حل"]
            }
        },
        "ش": {
            words: ["شیر", "شب", "شمع", "شانه"],
            parts: {
                "شیر": ["شی", "ر"],
                "شب": ["ش", "ب"],
                "شمع": ["شم", "ع"],
                "شانه": ["شا", "نه"]
            }
        },
        "ص": {
            words: ["صبح", "صدا", "صندلی", "صف"],
            parts: {
                "صبح": ["ص", "بح"],
                "صدا": ["ص", "دا"],
                "صندلی": ["صن", "دلی"],
                "صف": ["ص", "ف"]
            }
        },
        "ض": {
            words: ["ضربه", "ضخیم", "ضعیف"],
            parts: {
                "ضربه": ["ضر", "به"],
                "ضخیم": ["ض", "خیم"],
                "ضعیف": ["ض", "عیف"]
            }
        },
        "ط": {
            words: ["طوطی", "طناب", "طلا", "طبیعت"],
            parts: {
                "طوطی": ["طو", "طی"],
                "طناب": ["ط", "ناب"],
                "طلا": ["ط", "لا"],
                "طبیعت": ["طب", "یعت"]
            }
        },
        "ظ": {
            words: ["ظرف", "ظهر", "ظلم"],
            parts: {
                "ظرف": ["ظر", "ف"],
                "ظهر": ["ظه", "ر"],
                "ظلم": ["ظل", "م"]
            }
        },
        "ع": {
            words: ["عمو", "عینک", "علم", "عروسک"],
            parts: {
                "عمو": ["ع", "مو"],
                "عینک": ["عین", "ک"],
                "علم": ["عل", "م"],
                "عروسک": ["ع", "روسک"]
            }
        },
        "غ": {
            words: ["غاز", "غروب", "غبار", "غصه"],
            parts: {
                "غاز": ["غا", "ز"],
                "غروب": ["غ", "روب"],
                "غبار": ["غ", "بار"],
                "غصه": ["غص", "ه"]
            }
        },
        "ف": {
            words: ["فیل", "فنجان", "فرش", "فانوس"],
            parts: {
                "فیل": ["فی", "ل"],
                "فنجان": ["فن", "جان"],
                "فرش": ["فر", "ش"],
                "فانوس": ["فا", "نوس"]
            }
        },
        "ق": {
            words: ["قاشق", "قفس", "قلم", "قلب"],
            parts: {
                "قاشق": ["قا", "شق"],
                "قفس": ["قف", "س"],
                "قلم": ["قل", "م"],
                "قلب": ["قل", "ب"]
            }
        },
        "ک": {
            words: ["کتاب", "کفش", "کیف", "کوه"],
            parts: {
                "کتاب": ["ک", "تاب"],
                "کفش": ["کف", "ش"],
                "کیف": ["کی", "ف"],
                "کوه": ["کو", "ه"]
            }
        },
        "گ": {
            words: ["گنجشک", "گل", "گربه", "گوسفند"],
            parts: {
                "گنجشک": ["گن", "جشک"],
                "گل": ["گ", "ل"],
                "گربه": ["گر", "به"],
                "گوسفند": ["گو", "سفند"]
            }
        },
        "ل": {
            words: ["لانه", "لب", "لیوان", "لاک"],
            parts: {
                "لانه": ["لا", "نه"],
                "لب": ["ل", "ب"],
                "لیوان": ["لی", "وان"],
                "لاک": ["لا", "ک"]
            }
        },
        "م": {
            words: ["مادر", "ماهی", "میز", "مداد"],
            parts: {
                "مادر": ["ما", "در"],
                "ماهی": ["ما", "هی"],
                "میز": ["می", "ز"],
                "مداد": ["م", "داد"]
            }
        },
        "ن": {
            words: ["نان", "نور", "نقاش", "نخ"],
            parts: {
                "نان": ["نا", "ن"],
                "نور": ["نو", "ر"],
                "نقاش": ["ن", "قاش"],
                "نخ": ["ن", "خ"]
            }
        },
        "و": {
            words: ["ورزش", "وقت", "واحد", "وارد"],
            parts: {
                "ورزش": ["ور", "زش"],
                "وقت": ["وق", "ت"],
                "واحد": ["وا", "حد"],
                "وارد": ["وار", "د"]
            }
        },
        "ه": {
            words: ["هوا", "هدیه", "هفت", "هشت"],
            parts: {
                "هوا": ["ه", "وا"],
                "هدیه": ["ه", "دیه"],
                "هفت": ["هف", "ت"],
                "هشت": ["هش", "ت"]
            }
        },
        "ی": {
            words: ["یار", "یلدا", "یاد", "یک"],
            parts: {
                "یار": ["یا", "ر"],
                "یلدا": ["یل", "دا"],
                "یاد": ["یا", "د"],
                "یک": ["ی", "ک"]
            }
        }
    }
};

// رمزگذاری اطلاعات
const encodedData = btoa(JSON.stringify(rawData));

function getDecodedData() {
    return JSON.parse(atob(encodedData));
}

// تابع برای چک کردن وضعیت ورود
function isLoggedIn() {
    const loggedInUser = localStorage.getItem("loggedIn");
    console.log("[DEBUG] Checking loggedIn:", loggedInUser); // دیباگ
    return loggedInUser && loggedInUser.trim() !== "";
}

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

// توابع کمکی برای تمرین‌ساز
function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

function generateWrongWord(word) {
    const letters = word.split("");
    return shuffleArray(letters).join("");
}

function getRandomSound(exclude) {
    const sounds = ["اَ", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن", "و", "ه", "ی"];
    const filtered = sounds.filter(s => s !== exclude);
    return filtered[Math.floor(Math.random() * filtered.length)];
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

// تابع تولید تمرین پیشرفته
function generateExercise(type, signOrNaghareh, category) {
    const data = getDecodedData();
    let content = null;

    if (category === "نشانه‌ها") {
        content = data["نشانه‌ها"][signOrNaghareh];
    } else if (category === "نگاره‌ها") {
        content = data["نگاره‌ها"][signOrNaghareh];
    }

    if (!content) return "<p>محتوایی برای این بخش وجود ندارد.</p>";

    const randomWord = content.words[Math.floor(Math.random() * content.words.length)];
    let exercise = "";

    switch (type) {
        case "بخش‌بندی":
            const parts = content.parts ? (content.parts[randomWord] || [randomWord]) : [randomWord];
            exercise = `
                <p>تمرین: "${randomWord}" را بخش کن ✍️</p>
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
            const wrongWord = generateWrongWord(randomWord);
            exercise = `
                <p>تمرین: کدام کلمه درست است؟ ✅</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${randomWord}', '${type}', '${signOrNaghareh}', '${category}')">${randomWord}</div>
                    <div class="option" onclick="checkAnswer(this, '${wrongWord}', '${type}', '${signOrNaghareh}', '${category}')">${wrongWord}</div>
                </div>
            `;
            break;

        case "پیدا کردن صدا":
            const wrongSound = getRandomSound(signOrNaghareh);
            exercise = `
                <p>تمرین: صدای "${signOrNaghareh}" را پیدا کن 🎵</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${signOrNaghareh}', '${type}', '${signOrNaghareh}', '${category}')">${signOrNaghareh}</div>
                    <div class="option" onclick="checkAnswer(this, '${wrongSound}', '${type}', '${signOrNaghareh}', '${category}')">${wrongSound}</div>
                </div>
            `;
            break;

        case "جمله‌سازی":
            const correctSentence = content.sentences ? content.sentences[Math.floor(Math.random() * content.sentences.length)] : `${randomWord} خوب است`;
            const wrongSentence = "غلط";
            exercise = `
                <p>تمرین: با "${randomWord}" جمله بساز 📝</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${correctSentence}', '${type}', '${signOrNaghareh}', '${category}')">${correctSentence}</div>
                    <div class="option" onclick="checkAnswer(this, '${wrongSentence}', '${type}', '${signOrNaghareh}', '${category}')">${wrongSentence}</div>
                </div>
            `;
            break;

        case "تمرین تصویری":
            const anotherWord = content.words.filter(w => w !== randomWord)[Math.floor(Math.random() * (content.words.length - 1))] || "غلط";
            exercise = `
                <p>تمرین: کلمه "${randomWord}" را با تصویر تطبیق بده 🖼️</p>
                <div class="exercise-container">
                    <div class="option" onclick="checkAnswer(this, '${randomWord}', '${type}', '${signOrNaghareh}', '${category}')">${randomWord}</div>
                    <div class="option" onclick="checkAnswer(this, '${anotherWord}', '${type}', '${signOrNaghareh}', '${category}')">${anotherWord}</div>
                </div>
            `;
            break;
    }
    return exercise;
}

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
    showAlert("ثبت‌نام موفق! حالا وارد شوید 🌈", () => window.location.href = "./index.html");
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const storedPass = localStorage.getItem(`user_${username}`);
    if (storedPass && btoa(password) === storedPass) {
        console.log("[DEBUG] Login successful, setting loggedIn:", username); // دیباگ
        localStorage.setItem("loggedIn", username);
        if (username === "alireza" && password === "12122312") {
            localStorage.setItem("isAdmin", "true");
        }
        // یه تأخیر کوتاه برای اطمینان از ذخیره‌سازی
        setTimeout(() => {
            console.log("[DEBUG] After setTimeout, loggedIn:", localStorage.getItem("loggedIn")); // دیباگ
            if (isLoggedIn()) {
                window.location.href = "./lessons.html";
            } else {
                showAlert("خطایی رخ داد، دوباره تلاش کنید 😔");
            }
        }, 50);
    } else {
        showAlert("نام کاربری یا رمز عبور اشتباه است 😔");
    }
});

// محافظت از صفحات
const protectedPages = ["lessons.html", "profile.html", "payment.html", "vocabulary.html", "exercise.html"];
document.addEventListener("DOMContentLoaded", () => {
    console.log("[DEBUG] DOMContentLoaded, checking protected page"); // دیباگ
    if (protectedPages.some(page => window.location.pathname.includes(page))) {
        console.log("[DEBUG] On protected page, loggedIn:", localStorage.getItem("loggedIn")); // دیباگ
        if (!isLoggedIn()) {
            console.log("[DEBUG] Not logged in, redirecting to login.html"); // دیباگ
            window.location.href = "./index.html";
        }
    }
});

// نمایش زیرمنوهای درس
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

// نمایش موضوعات
function showTopics(lesson, subLesson) {
    const topicsDiv = document.getElementById("topics");
    topicsDiv.innerHTML = '<button onclick="this.parentElement.innerHTML=\'\'">برگشت به زیرمنوها 🔙</button>';
    const topics = {
        "نگاره‌ها": ["نگاره ۱ - سلام", "نگاره ۲ - بهار", "نگاره ۳ - خانواده", "نگاره ۴ - دوستان", "نگاره ۵ - غذا", "نگاره ۶ - دوستان من", "نگاره ۷ - مدرسه", "نگاره ۸ - کتاب من", "نگاره ۹ - طبیعت", "نگاره ۱۰ - پرندگان"],
        "نشانه‌ها": Object.keys(getDecodedData()["نشانه‌ها"]).map(sign => `نشانه ${sign}`),
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

// باز کردن تمرین‌ها
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
    const exerciseDiv = document.getElementById("exercise-panel");

    let type = ["بخش‌بندی", "انتخاب کلمه", "پیدا کردن صدا", "جمله‌سازی", "تمرین تصویری"][Math.floor(Math.random() * 5)];
    let signOrNaghareh = topic.replace("نشانه ", "");
    let category = subLesson === "نشانه‌ها" ? "نشانه‌ها" : "نگاره‌ها";

    if (subLesson === "نشانه‌ها" || subLesson === "نگاره‌ها") {
        exerciseDiv.innerHTML = generateExercise(type, signOrNaghareh, category);
    } else {
        exerciseDiv.innerHTML = "<p>این بخش هنوز پیاده‌سازی نشده است.</p>";
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

// بررسی پاسخ‌ها
function checkAnswer(element, correctAnswer, type, signOrNaghareh, category) {
    const userAnswer = element.textContent.trim();
    if (userAnswer === correctAnswer) {
        cheerSound.play();
        updateScore(5);
        const urlParams = new URLSearchParams(window.location.search);
        const lesson = decodeURIComponent(urlParams.get("lesson"));
        const subLesson = decodeURIComponent(urlParams.get("subLesson"));
        const topic = decodeURIComponent(urlParams.get("topic"));
        saveProgress(lesson, subLesson, topic);
        showAlert("درست است! 🌟", () => generateNewExercise(type, signOrNaghareh, category));
    } else {
        showAlert("غلط است، دوباره تلاش کن! 😔");
        element.style.backgroundColor = "#ffcccc";
    }
}

function generateNewExercise(type, signOrNaghareh, category) {
    const exerciseDiv = document.getElementById("exercise-panel");
    const newType = ["بخش‌بندی", "انتخاب کلمه", "پیدا کردن صدا", "جمله‌سازی", "تمرین تصویری"][Math.floor(Math.random() * 5)];
    exerciseDiv.innerHTML = generateExercise(newType, signOrNaghareh, category);
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

// پنل مدیریت
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
    showAllUsers();
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
    window.location.href = "./index.html";
}

// حالت شب (اختیاری)
document.getElementById("darkModeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("darkModeToggle");
    btn.textContent = document.body.classList.contains("dark-mode") ? "🌞 حالت روز" : "🌙 حالت شب";
});
