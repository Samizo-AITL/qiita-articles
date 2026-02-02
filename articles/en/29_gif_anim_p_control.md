---
layout: default
title: Qiita Articles
---

# 29.【Visualization】Understanding P-Control Gain Tuning Through Animation
tags: ["Control Theory", "PID Control", "P Control", "Visualization", "Python"]

---

## The “I Think I Get It” Problem with P-Gain Tuning ⚠️

In textbooks, P control is usually explained like this:

- Increasing Kp makes the response faster  
- Increasing it too much causes oscillation and instability  

While this is logically correct,  
it is honestly **hard to grasp intuitively how the response evolves over time**.

---

## 🎞 Comparing Responses Simultaneously with Animation

To address this, the step response of P control was visualized  
by **changing only Kp and animating the results side by side**.

![P control step response](https://samizo-aitl.github.io/qiita-articles/demos/gif_anim/p_step_only.gif)

### What to Pay Attention To
- Same plant  
- Same target value (step input)  
- **Only Kp is changed**

👉 Because the three responses  
👉 **progress along the same time axis simultaneously**,  

you can immediately see differences in:

- Rise time  
- Overshoot  
- Oscillation behavior  

---

## 🧩 GIF Generation Code (Excerpt)

In this GIF,  
the simulation is run by **keeping all conditions the same and switching only the gain**.

```python
responses = [simulate_p(Kp) for Kp in Kp_list]
```

This single line does the following 👇

- Same plant model  
- Same target value  
- **Only Kp is varied**
- Each response is drawn simultaneously as it evolves over time  

📌 Things that are hard to convey with static plots—  
📌 such as **“where it starts to become dangerous”**—  
become clearly visible through motion.

---

## 📎 Python Code Used

The full code used to generate the GIF is available here 👇

- P-control step response animation  
  https://github.com/Samizo-AITL/qiita-articles/blob/main/demos/gif_anim/p_step_only.py

Running it will generate  
the exact same GIF used in this article.

---

## ✨ Summary

- Increasing Kp makes the response faster  
- But it also increases oscillation  
- Increasing it further pushes the system toward instability  

This **continuous progression of change**  
is immediately clear when viewed as an animation.

---

## 🧠 Closing Thoughts

Both semiconductor physics and control theory  
are fundamentally **dynamic phenomena that depend on time and conditions**.

Animation serves as  
a **powerful set of training wheels** 🚲  
to support intuitive understanding of these systems.

---
