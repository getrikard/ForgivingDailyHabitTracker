function setCookie(name, val) {
    document.cookie = `${name}=${val}`;
}

function getCookie(name) {
    try {
        let cookie = document.cookie.split(';').map(cookie => cookie.split('=')).filter(cookie => cookie[0].trim() === name)[0][1];
        return cookie === '' ? undefined : cookie;
    } catch {
        return undefined;
    }
}

function cookies() {
    return document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({...accumulator,
            [key.trim()]: decodeURIComponent(value)
        }), {});
}

function getHabitsFromCookies() {
    let habits = []
    for (let i = 0;; i++) {
        let habitId = `habit-${i}-name`;
        let cookie = getCookie(habitId);

        if (cookie === undefined) break;

        habits.push(cookie);
    }
    return habits;
}

function getHabitCookie(id) {
    try {
        return getHabitsFromCookies()[id];
    } catch {
        return undefined;
    }
}

function addHabitCookie(value) {
    let habits = getHabitsFromCookies();

    setHabitCookie(habits.length, value);
}

function setHabitCookie(id, value) {
    let habitId = `habit-${id}-name`;
    setCookie(habitId, value);
    setCookie(`habit-${id}`, 'false');
}

function removeHabitCookie(id) {
    let habits = getHabitsFromCookies();

    setHabitCookie(id, '');

    for (let i = id; i < habits.length - 1; i++) {
        setHabitCookie(i, habits[i + 1]);
    }

    setHabitCookie(habits.length - 1, '');
}