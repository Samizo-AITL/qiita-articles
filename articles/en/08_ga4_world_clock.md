---
layout: default
title: Qiita Articles
---

# 08. 【GA4】 When Watching Overseas Traffic in Real Time, Line Up the Local Times Too

When you look at **GA4’s Realtime view**, you can immediately see:

- 🌍 Which countries visitors are coming from  
- 📍 Where activity appears on the world map  

But then, a question often follows:

> **What time is it over there right now?**

You can see the traffic.  
But you cannot see **what part of their daily life that traffic belongs to**.

This article introduces a small but useful idea:  
**placing the current local time of major cities next to GA4’s realtime view**.

---

## 📍 GA4 Realtime: Global Distribution

![](https://samizo-aitl.github.io/qiita-articles/assets/images/08_1.png)

Looking at this map, you might notice:

- 🇺🇸 Activity in North America  
- 🇪🇺 Some reactions in Europe  

And naturally, the next thought is:

> **So… what time is it there right now?**

Is it late at night?  
Before work?  
During office hours?

Knowing this *daily-life context* subtly changes  
how the same access data feels.

---

## 🌐 World Clock: Current Time in Major Cities (Concept)

Imagine placing this **next to GA4’s realtime screen**,  
showing the *current moment* in major cities.

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
    new Intl.DateTimeFormat("en-US", {
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

## ✅ Summary

- 📊 GA4 shows **traffic**  
- ⏰ Local time shows **daily life**  

That’s all.  
But when viewed together, the world feels just a bit more three-dimensional.

---

### 🔧 Notes

- No external APIs required  
- Uses only `Intl.DateTimeFormat`  
- Demo uses **plain HTML (no front matter dependencies)**  

A small trick to make it easier, while watching GA4,  
to imagine **who is looking at your site, and at what time of day**.
