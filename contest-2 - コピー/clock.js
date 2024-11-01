/*時計*/
const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();


    let dayNum = d.getDay();
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();


    // 1桁の場合は0を足して2桁に
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;





    if (hour >= 4 && hour <= 6) {
        if (hour == 6 && min >= 50) {
            min = 10 - 2 * min;
        }
        else {
            min = 100;
        }
    }
    else {
        min = min;
    };

    if (hour >= 12 && hour <= 23) {
        if (hour == 23 && min <= 50) {
            min = 100 - 2 * min;
        }
        else {
            min = 100;
        };
    }
    else {
        min = 0;
    };
    // 日付・時刻の文字列を作成
    let time = `${min}`;

    // 文字列を出力
    document.querySelector(".clock-time").innerText = time;
};
