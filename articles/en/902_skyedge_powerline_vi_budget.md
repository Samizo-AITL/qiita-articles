---
layout: default
title: Qiita Articles
---

# 902.【Design】SkyEdge — Power Line & Transmission Tower Inspection Drone  
## 🔌 Defining the V–I Budget per Flight

In the previous article, we fixed the differentiation of the **SkyEdge** inspection drone  
as **numerical specifications**—reproducibility, cross-checking, and operational validity.

In this article, we take the next step:  
**cutting the voltage–current (V–I) budget for a single flight**.

This is not about “whether it can fly.”

> It is about **whether the inspection itself can be completed**.

---

## ❓ 1. Why the V–I budget must come first

For power-line inspection drones, the following are all governed by power constraints:

- Flight duration  
- Image quality  
- Reproducibility  
- Safety margins  

If features are added without a V–I budget,  
the result is always the same: **a drone that is mediocre at everything**.

SkyEdge follows this order:

> **Inspection purpose → Required functions → Power allocation**

---

## 🗺️ 2. Assumed mission profile

- Target: transmission lines and towers  
- Flight mode: sectional hovering + slow translation  
- Total flight time: **30 minutes**  
- Active inspection time: **20 minutes**  
- Margin: takeoff, landing, avoidance, return

---

## 🧱 3. Power architecture (overview)

- Main power: Li-ion battery  
- Auxiliary power: energy harvesting + storage (standby / preparation only)  
- High-voltage domain: motors, gimbal, actuators  
- Low-voltage domain: 65 nm FDSOI (intelligence & imaging)

The design rule is fixed:

> **All high V–I handling is confined to the 0.35 µm LDMOS domain.**

---

## 📊 4. V–I budget by subsystem

### 4.1 Propulsion (dominant consumer)

| Item | Voltage | Current | Power |
|---|---|---|---|
| Motors ×4 (cruise) | 22–25 V | 6–8 A | 130–180 W |
| Motors ×4 (hover) | 22–25 V | 8–10 A | 180–250 W |
| Instantaneous peak | 22–25 V | >15 A | >350 W |

**This is not reduced.**  
Safety always takes precedence over inspection quality.

---

### 4.2 Gimbal & attitude assistance

| Item | Voltage | Current | Power |
|---|---|---|---|
| Gimbal | 12 V | 0.3–0.6 A | 4–7 W |
| Attitude assist | 12 V | 0.2 A | 2–3 W |

---

### 4.3 Visible CMOS + IR (inspection core)

| Item | Voltage | Current | Power |
|---|---|---|---|
| Visible CMOS | 5 V | 0.8–1.2 A | 4–6 W |
| IR (duty-controlled) | 5 V | 0.4–0.8 A | 2–4 W |
| Average (incl. IR) | — | — | **5–7 W** |

**IR is never always-on.**  
This is a deliberate design decision.

---

### 4.4 65 nm FDSOI (intelligence & imaging)

| Mode | Power |
|---|---|
| Inspection operation | 1–2 W |
| Image-processing peak | up to 3 W |
| Standby | < 100 mW |

---

### 4.5 Communications & miscellaneous sensors

| Item | Power |
|---|---|
| Communications (intermittent) | 1–2 W |
| IMU / ranging | < 0.5 W |
| Losses & margin | 2–3 W |

---

## ⚡ 5. Total power during inspection

### Average consumption (inspection phase)
- Propulsion: 200 W  
- Gimbal: 6 W  
- Visible + IR: 6 W  
- SoC: 2 W  
- Other: 3 W  

**Total: ~217 W**

---

## 🔋 6. Battery capacity sizing

### For a 30-minute flight
- Required energy:  
  217 W × 0.5 h ≈ **109 Wh**
- Safety margin (20–30%):  
  → **130–140 Wh class battery**

This fits within realistic weight and size constraints.

---

## ♻️ 7. Role of energy harvesting (reconfirmed)

| Item | Value |
|---|---|
| Generation capability | 10–100 mW |
| Contribution to flight | None |
| Usage | Standby, preparation, safety margin |
| Effect | Higher availability / lower incident rate |

By **not mixing harvested power into flight propulsion**:

- Power design is simplified  
- Fail-safe behavior becomes explicit  

---

## 🎯 8. Why this V–I allocation is a differentiator

- No over-optimization of propulsion  
- Guaranteed power for imaging, synchronization, and reproducibility  
- No participation in the “longest flight time” race  

The result is:

> **A power allocation that never sacrifices inspection quality**

---

## 🧩 9. Summary

SkyEdge’s V–I design is not for:

- Maximizing flight duration  
- Packing in flashy features  

It is cut for one purpose only:

> **To make repeatable, measurable inspections under identical conditions.**

Power design never lies.  
The V–I budget is the most honest expression of a system’s design philosophy.

---

*This article includes conceptual design elements,  
but all numerical values are grounded in realistic system and power design ranges.*
