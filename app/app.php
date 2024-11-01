<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>コンテスト</title>
    <link rel="stylesheet" href=".css">
    <script src=".js" defer></script>
</head>



<body class="hik">

 <div id="loading"><p>loading...</p></div> 
 <div id="loading-screen"></div>

 <button id="button">おやすみ</button>
 <h id="obi">早寝 </h>
  <div id="point"><span>今日の入手ポイント</span></div>

    <div class="container">
      <div class="clock">
        <p class="clock-time"></p>
      </div>
    </div>


    <div class=" container-time">
      <div class="time">         
        <p class="time-date"></p>       
        <p class="time-time"></p>
      </div>
    </div>


<div id="btn"> <div class="menu-container">
  <input type="checkbox" id="menu-toggle">
  <nav class="menu">
    <ul>
      <br>
      <br>
      <br>
      <br>
      <br>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;前回週間ランキング</a></li>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;前回月間ランキング</a></li>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;現在週間ランキング</a></li>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;現在月間ランキング</a></li>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;現在通算ランキング</a></li>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;説明</a></li>
      <li><a href="#">&ensp;&ensp;&ensp;&ensp;軌跡</a></li>
    </ul>
  </nav>
  <label for="menu-toggle" class="menu-button">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </label>
</div> </div>

<div class="set">
<button id="set-btn">設定</button>
起床<div id="ji-1">6</div>:<div id="fun-1">00</div>&nbsp;
就寝<div  id="ji-2">23</div>:<div  id="fun-2">00</div>
</div>



<div id="point2">
    <span>総ポイント</span>
    <div class="point2-2-0">
    </div>
</div>

<div class="point2-2">
  <div class="point2-2-0">
    <p class="clock-so">0pt</p>
  </div>
</div>

<div id="container-settime">
<div id="settime">
  <div class="kisho"><span>起床時間</span></div>
  <input id="kisho" type="time" />
  <div class="shushin"><span>就寝時間</span></div>
  <input id="shushin" type="time"/>
  <br>
  <button id="settime-btn">決定</button>
</div>
</div>


</body>