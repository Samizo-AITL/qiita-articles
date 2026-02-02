---
layout: default
title: Qiita Articles
---

# 08.【GA4】リアルタイムで海外アクセスを見るなら、主要都市の現在時刻も並べる

GA4 のリアルタイム画面を見ていると、

- 🌍 どの国から来ているか  
- 📍 世界地図のどこが反応しているか  

は分かります。

でも、その次にふと——

> **向こう、今何時なんだ？**

と思うことはないでしょうか。

アクセスは見えている。  
けれど、そのアクセスが **どんな時間帯の行動なのか** は見えていない。

今回はその違和感から、  
**主要都市の現在時刻を GA4 の横に並べて見る**という小さな工夫を紹介します。

---

## 📍 GA4 リアルタイムの世界分布

![](https://samizo-aitl.github.io/qiita-articles/assets/images/08_1.png)

このマップを見て、

- 🇺🇸 北米に点がある  
- 🇪🇺 ヨーロッパにも反応がある  

……と分かった次に、自然と浮かぶのが、

> **で、今あっちは何時？**

という疑問です。

深夜なのか。  
通勤前なのか。  
それとも仕事中なのか。

この「生活時間」が分かるだけで、  
同じアクセスでも見え方が少し変わります。

---

## 🌐 World Clock｜主要都市の現在時刻（イメージ）

GA4 のリアルタイム画面の横に置くイメージで、  
**主要都市の「今この瞬間」**を並べます。

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

## ✅ まとめ

- 📊 GA4 は「アクセス」を見る  
- ⏰ 時刻は「生活」を見る  

それだけですが、  
並べて見ると世界が少し立体的に見えてきます。

---

### 🔧 補足

- 外部 API 不要  
- `Intl.DateTimeFormat` のみ使用  
- デモは **front matter なし HTML**  

GA4 を見ながら、  
「今、誰がどんな時間帯に見ているのか」を  
少しだけ想像しやすくするための小ネタでした。
