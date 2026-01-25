---
title: "【GA4】リアルタイムで海外アクセスを見るなら、主要都市の現在時刻も並べる"
emoji: "🌐"
type: "tech"
topics: ["ga4", "analytics", "ui", "javascript"]
published: false
---

GA4 のリアルタイム画面で  
「どの国から来てるか」は分かるけど、

> **向こう、今何時なんだ？**

と思うことがあったので、  
**主要都市のリアルタイム時刻一覧**をそのまま記事に貼りました。

---

## 📍 GA4 リアルタイムの世界分布

![](/assets/images/13_1_ga4_map.png)

このマップを見て、

- 北米に点がある
- ヨーロッパにも反応がある

……と分かった次に気になるのが、

> **で、今あっちは何時？**

---

## 🌐 World Clock（主要都市リアルタイム時刻）

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

## 何が分かるか

GA4 のリアルタイム表示に  
**「相手側の現在時刻」**を重ねると、

- 深夜に見てるのか
- 出勤前なのか
- 仕事中なのか

が、数字を見なくても直感で分かります。

---

## まとめ

- GA4 はアクセスを見る
- 時刻は生活を見る

それだけです。

※ 外部 API 不要  
※ `Intl.DateTimeFormat` だけ  
※ そのまま貼って動く

以上。
