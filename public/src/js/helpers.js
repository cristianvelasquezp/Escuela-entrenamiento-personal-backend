import { TIMEOUT_SEC } from './config.js';

function importAll(r) {
    const images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

export function getPath($hash) {
    const separatorPosition = $hash.search('/');
    return $hash.slice(1, separatorPosition);
}

export function getDate( dataStr ) {
    const date = new Date(dataStr);
    const weekDay = getWeekDay(date.getDay());
    const day = `${date.getDate()}`.padStart(2,'0');
    const month = getMonthStr(date.getMonth());
    return `${weekDay} ${day} de ${month}`;
}

function getWeekDay (day) {
    if(typeof day !== 'number') return 'null';

    const weekDays = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    return weekDays[day];
}

function getMonthStr(month) {
    if(typeof month !== 'number') return 'null';

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    return months[month];
}

export const images = importAll(
    require.context('../img', false, /\.(png|jpe?g|svg|mp4)$/)
);

const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJSON = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
