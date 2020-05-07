function check_uncheck(index) {
    if (model.mode === 'delete') {
        removeHabitCookie(index);
        model.mode = 'normal';
        show();
        return;
    } else if (model.mode === 'change') {
        const newText = window.prompt("Endre en god vane", getHabitCookie(index));
        model.mode = 'normal';
        if (!newText) {
            show();
            return;
        }

        setHabitCookie(index, newText);
        show();
        return;
    }

    let habitId = `habit-${index}`;

    if (getCookie(habitId) === "true") setCookie(habitId, "false");
    else setCookie(habitId, "true");

    setCookie('date', getDateString());
    show();
}