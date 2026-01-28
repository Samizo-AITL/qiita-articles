---
title: "08.【GA4】リアルタイムで海外アクセスを見るなら、主要都市の現在時刻も並べる"
topics: ["ga4", "analytics", "ui", "javascript"]
---

GA4 のリアルタイム画面を見ていると、

- 🌍 どの国から来ているか  
- 📍 世界地図のどこが反応しているか  

は分かるけど、

> **向こう、今何時なんだ？**

と思うことがありました。

なので今回は、  
**主要都市のリアルタイム時刻一覧**をそのまま記事に貼ってみました。

---

## 📍 GA4 リアルタイムの世界分布

![](https://samizo-aitl.github.io/qiita-articles/assets/images/08_1.png)

このマップを見て、

- 🇺🇸 北米に点がある  
- 🇪🇺 ヨーロッパにも反応がある  

……と分かった次に気になるのが、

> **で、今あっちは何時？**

---

## 🌐 World Clock｜主要都市のリアルタイム時刻

GA4 の画面横に置くイメージで、  
主要都市の「今」をそのまま並べます。

<table>
  <thead>
    <tr>
      <th>Region</th>
      <th>City</th>
      <th>Local Time</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>🇯🇵 Japan</td><td>Tokyo</td><td id="time-tokyo"></td></tr>
    <tr><td>🇺🇸 USA (East)</td><td>New York</td><td id="time-ny"></td></tr>
    <tr><td>🇺🇸 USA (West)</td><td>Los Angeles</td><td id="time-la"></td></tr>
    <tr><td>🇬🇧 UK</td><td>London</td><td id="time-london"></td></tr>
    <tr><td>🇫🇷 France</td><td>Paris</td><td id="time-paris"></td></tr>
    <tr><td>🇨🇳 China</td><td>Beijing</td><td id="time-beijing"></td></tr>
  </tbody>
</table>

<script>
function updateWorldClock() {
  const now = new Date();

  const format = (timeZone) =>
    new Intl.DateTimeFormat("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone
    }).format(now);

  document.getElementById("time-tokyo").textContent   = format("Asia/Tokyo");
  document.getElementById("time-ny").textContent      = format("America/New_York");
  document.getElementById("time-la").textContent      = format("America/Los_Angeles");
  document.getElementById("time-london").textContent  = format("Europe/London");
  document.getElementById("time-paris").textContent   = format("Europe/Paris");
  document.getElementById("time-beijing").textContent = format("Asia/Shanghai");
}

updateWorldClock();
setInterval(updateWorldClock, 1000);
</script>

---

## 🤔 これで何が分かるか

GA4 のリアルタイム表示に  
**「相手側の現在時刻」**を重ねると、

- 🌙 深夜に見ているのか  
- 🌅 出勤前なのか  
- 💼 仕事中なのか  

が、  
**数字を読まなくても直感的に分かる**ようになります。

---

## ✅ まとめ

- 📊 GA4 はアクセスを見る  
- ⏰ 時刻は生活を見る  

それだけです。

---

### 🔧 補足

- 外部 API 不要  
- `Intl.DateTimeFormat` だけ  
- そのまま貼って動く  

以上。
