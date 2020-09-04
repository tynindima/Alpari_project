'use strict';

const now = new Date();

const times = [
  5,
  23 - now.getHours(),
  59 - now.getMinutes(),
  59 - now.getSeconds(),
];

const dBox = document.getElementById('days');
const hBox = document.getElementById('hour');
const mBox = document.getElementById('minutes');
const sBox = document.getElementById('seconds');

function showTimer(day, hour, min, sec) {
  dBox.innerHTML = day;
  hBox.innerHTML = hour;
  mBox.innerHTML = min;
  sBox.innerHTML = sec;
}

// eslint-disable-next-line no-shadow
function timer(times) {
  const tm = setInterval(function() {
    times[3]--;

    if (times[0] === 0 && times[1] === 0 && times[2] === 0 && times[3] === 0) {
      clearInterval(tm);
    } else if (times[3] === -1) {
      times[3] = 59;
      times[2]--;
    } else if (times[2] === -1) {
      times[2] = 59;
      times[1]--;
    }

    const d = (times[0] < 10) ? '0' + times[0] : times[0];
    const h = (times[1] < 10) ? '0' + times[1] : times[1];
    const m = (times[2] < 10) ? '0' + times[2] : times[2];
    const s = (times[3] < 10) ? '0' + times[3] : times[3];

    showTimer(d, h, m, s);
  }, 1000);
}

timer(times);
