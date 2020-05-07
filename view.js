function drawHabits() {
    let html = '';
    for (let i = 0; i < model.habits.length; i++) {
        let habitId = `habit-${i}`;
        habit = model.habits[i];
        if (getCookie(habitId) === 'true') {
            html += `<div id="habit-${i}" class="box clickable checked" onclick="check_uncheck(${i})">🗹 ${habit}</div>`;
        } else {
            html += `<div id="habit-${i}" class="box clickable" onclick="check_uncheck(${i})">☐ ${habit}</div>`;
        }
    }
    habitlist.innerHTML = html;
}

function updateProgress() {
    let checkedNo = 0;
    for (let i = 0; i < model.habits.length; i++) {
        const habitId = `habit-${i}`;
        if (getCookie(habitId) === 'true') checkedNo++;
    }

    let progress = checkedNo / model.habits.length * 100;
    document.getElementById('progressMeter').innerHTML = `${progress.toFixed(1)}%`;
}

function setDateHeader() {
    let today = new Date();
    document.getElementById('header-text').innerHTML = `${getWeekdayName(today.getDay())} ${today.getDate()}. ${getMonthName(today.getMonth()+1)}`;
}

function show() {
    model.habits = getHabitsFromCookies();
    drawHabits();
    updateProgress();

    switch (model.mode) {
        case 'delete':
            document.bgColor = 'coral';
            break;
        case 'change':
            document.bgColor = 'lightblue';
            break;
        default:
            document.bgColor = 'white';
            break;
    }
}