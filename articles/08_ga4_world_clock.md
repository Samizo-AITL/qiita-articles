---
title: "08.【GA4】リアルタイムで海外アクセスを見るなら、主要都市の現在時刻も並べる"
topics: ["ga4", "analytics", "ui", "javascript"]
---

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

> ⚠️ **注意**  
> Qiita では JavaScript が実行されないため、  
> 以下は **コード例の表示のみ**です。  
> 実際に動くデモは後述の GitHub Pages を参照してください。

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

```html
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
```

---

## ▶ デモ（実際に動くページ）

以下の GitHub Pages では、  
上記コードが **実際にリアルタイム更新**されます。

🔗 **Demo**  
https://samizo-aitl.github.io/qiita-articles/articles/08_ga4_world_clock.html

GA4 のリアルタイム画面を横に置いて見る用途を想定しています。

---

## 🤔 これで何が分かるか

GA4 のリアルタイム表示に  
**「相手側の現在時刻」**を重ねると、

- 🌙 深夜アクセスなのか  
- 🌅 出勤前のチェックなのか  
- 💼 業務時間中の閲覧なのか  

が、  
**数値を細かく読まなくても直感的に分かる**ようになります。

これは分析というより、  
**状況理解を一段深くするための補助情報**です。

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
- GitHub Pages ならそのまま動作  

GA4 を見ながら、  
「今、誰がどんな時間帯に見ているのか」を  
少しだけ想像しやすくするための小ネタでした。
