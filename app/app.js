//読み込み//
const loadgrey = document.querySelector('#loading');
const loadgreen = document.querySelector('#loading-screen') 

window.addEventListener('load', () => {//ローディングが終わった時の処理//
loadgrey.animate({
    opacity:[1,0],
    visibility:'hidden',
},
{
    duration:1500,//かかる秒//
    delay:1200,//遅らせる//
    easing:'ease-out',
    fill:'forwards',
});


//切り替わり//
loadgreen.animate({
    translate : [ '0 20vh','0 0','0 -120vh'],
    opacity:['0.75'],
},
{
    duration:2000,
    delay :  850,
    easing : 'ease',
    fill : 'forwards'
});
});

let jihours =6; // 変数を関数の外で宣言
let ji2hours =22; // 変数を関数の外で宣言
let funminutes =0; // 変数を関数の外で宣言
let fun2minutes =0; // 変数を関数の外で宣言

/*point表示*/
const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();

    // 曜日を取得
    let dayNum = d.getDay();
    let n = dayNum
    // 時を取得
    let hour = d.getHours(); 
    // 分を取得
    let min = d.getMinutes();


    // 1桁の場合は0を足して2桁に
    // 端数なし 23時以降でない
    if(funminutes,fun2minutes==0 && 22>=ji2hours)
    if( n==6 || n==7 ){
        if( hour>=jihours-2 && hour<=jihours+1){
                if( hour==jihours ){
                  min =  150-2*min;
                }
                else if( hour==jihours+1 && min<=15 ){
                    min = 30-2*min;
                }
                else if( hour==jihours+1 && min>15 ){
                    min = 0;
                }
                else{
                min = 100;
                };
        }
        else{
            if( hour>=ji2hours-2 && hour<=ji2hours+1 ){
                if( hour==ji2hours ){
                    min = 150-2*min;
                }
                else if( hour==ji2hours+1 && min<=15){
                    min = 30-2*min; 
                }
                else if( hour==ji2hours+1 && min>15){
                    min=0; 
                }
                else{
                    min = 100;
                };
            }
            else{
                min = 0;
            };
        };
    }


    else{
        if( hour>=jihours-2 && hour<=jihours ){
            if( hour==jihours && min<=50 ){
              min =  100-2*min;
            }
            else if( hour==jihours && min>50 ){
                min = 0;
                }            
            else{
            min = 100;
            };
        }
        else{
            if( hour>=ji2hours-2 && hour<=ji2hours ){
                if( hour==ji2hours && min<=50 ){
                min =  100-2*min;
                }
                else if( hour==ji2hours && min>50 ){
                min = 0;
                }

                else{
                min = 100;
                };
            }
            else{
            min = 0;
            };
        };

    };


    // 日付・時刻の文字列を作成
    let time = `${min}pt`;
    let so = `${min}pt`;

  
    // 文字列を出力
    document.querySelector(".clock-time").innerText = time;
    document.querySelector(".clock-so").innerText = so;

    //ボタン機能　停止
    var div = document.getElementById('button');

    div.style.zIndex = '80';
    div.style.backgroundColor= 'rgb(158, 136, 147)';

  };

  




/*時計*/
const time= () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();
  
    // 年を取得
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    // 曜日を取得
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();
    //条件　ボタン機能を復活
    var div = document.getElementById('button');

   
    if(hour==20&&min==0&&sec==0||hour==3&&min==0&&sec==0){
           
        div.style.zIndex = '100';
        div.style.backgroundColor= 'rgb(248, 164, 199)';
    }
    else{
    };

  
    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    // 日付・時刻の文字列を作成
    let today = `${year}/${month}/${date}/${day}`;
    let time = `${hour}:${min}:${sec}`;
  
    // 文字列を出力
    document.querySelector(".time-date").innerText = today;
    document.querySelector(".time-time").innerText = time;



  };
    // 0.5秒ごとにtime関数を呼び出す
    setInterval(time, 500);

//おやすみ-おはようボタンの定義
  const btn = document.querySelector('#button');
//見出しの定義
const mi =document.querySelector('h')
//朝と夜画面切り替え
    const night= () => {

        // 現在の日時・時刻の情報を取得
        const d = new Date();
        
        // 時を取得
         let hour = d.getHours();
        
        if(hour<=16&&3<=hour){
        //hikを消してhik-2を追加する
        document.body.classList.remove('hik');
        document.body.classList.add('hik-2');
        //btnのテキストをおはようにする   
        btn.textContent = 'おはよう'; 
        //miのテキストを早起きにする
        mi.textContent = '早起き'
        }
        
    };
        // 0.5秒ごとにnight関数を呼び出す
        setInterval(night, 500);


    //btnをクリックされた時
    btn.addEventListener('click',clock);



    const btn2 = document.querySelector('#set-btn');

    const settime = document.querySelector('#container-settime');


    btn2.addEventListener('click', () => {
        settime.animate({
            translate : ['0 35vh'],
        },
        {
            duration:1500,//かかる秒//
            easing:'ease-out',
            fill:'forwards',
        });});



    const btn3 = document.querySelector('#settime-btn');

    const ji = document.querySelector('#ji-1');
    const fun = document.querySelector('#fun-1');
    const ji2 = document.querySelector('#ji-2');
    const fun2 = document.querySelector('#fun-2');

    btn3.addEventListener('click', () => {

        settime.animate({
            translate : ['0 140vh'],
        },
        {
            duration:1500,//かかる秒//
            easing:'ease-out',
            fill:'forwards',
        });});





        document.getElementById('settime-btn').addEventListener('click', function() {
            const timeInput = document.getElementById('kisho').value;
            const [jihoursTemp, funminutesTemp] = timeInput.split(':').map(Number);

            ji.textContent = jihoursTemp;
            fun.textContent = funminutesTemp  < 10 ? '0' + funminutesTemp : funminutesTemp;
        
            const timeInput2 = document.getElementById('shushin').value;
            const [ji2hoursTemp, fun2minutesTemp] = timeInput2.split(':').map(Number);

            ji2.textContent = ji2hoursTemp;
            fun2.textContent = fun2minutesTemp  < 10 ? '0' + fun2minutesTemp : fun2minutesTemp;

            // ji2hoursに値を格納
            jihours = jihoursTemp;
            ji2hours = ji2hoursTemp;
            funminutes = funminutesTemp;
            fun2minutes = fun2minutesTemp;
        }); 
