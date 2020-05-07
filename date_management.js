function getDateString() {
    let d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function getWeekdayName(d) {
    switch (d) {
        case 1:
            return 'Mandag';
        case 2:
            return 'Tirsdag';
        case 3:
            return 'Onsdag';
        case 4:
            return 'Torsdag';
        case 5:
            return 'Fredag';
        case 6:
            return 'Lørdag';
        case 7:
            return 'Søndag';
    }
}

function getMonthName(m) {
    switch (m) {
        case 1:
            return 'januar';
        case 2:
            return 'februar';
        case 3:
            return 'mars';
        case 4:
            return 'april';
        case 5:
            return 'mai';
        case 6:
            return 'juni';
        case 7:
            return 'juli';
        case 8:
            return 'august';
        case 9:
            return 'september';
        case 10:
            return 'oktober';
        case 11:
            return 'november';
        case 12:
            return 'desember';
    }
}