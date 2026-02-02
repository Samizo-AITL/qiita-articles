---
layout: default
title: Qiita Articles
---

# 901.【Design】SkyEdge — A Power Line & Transmission Tower Inspection Drone  
## 🧭 Locking Differentiation in *Specifications*, Not in “Vision”

Drones for power line and transmission tower inspection are no longer novel.  
Many platforms advertise:

- High-resolution cameras  
- AI-based defect detection  
- Autonomous flight  

Yet in real inspection work, one question always remains:

> **Does this actually qualify as an inspection?**

In this article, using a *conceptual design* drone called **SkyEdge**,  
we show how to **fix differentiation not in vague philosophy, but in concrete, numerical specifications**.

---

## ❓ 1. Why “a drone that can take pictures” is not differentiation

Most existing inspection drones place their value here:

- Improved shooting efficiency  
- Reduced manpower  
- AI-based anomaly detection  

But what inspection work *actually* requires is:

- The same location  
- Under the same conditions  
- Comparable over time  

**Beautiful footage alone is meaningless if it cannot be compared to the previous inspection.**

SkyEdge defines its differentiation around this single requirement.

---

## 🎯 2. Differentiation #1: Reproducibility guaranteed numerically

### Reproducible Flight & Imaging Geometry

| Item | Specification |
|---|---|
| Position repeatability | ≤ ±0.5 m |
| Attitude repeatability | ≤ ±0.3° (roll / pitch / yaw) |
| Imaging distance | 5–30 m (auto-maintained) |
| Camera angle variation | ≤ ±2° |
| Revisit assumption | Monthly to yearly comparisons |

By **guaranteeing “nearly identical framing” as a specification**,  
time-series difference analysis becomes feasible.

---

## 📐 3. Differentiation #2: Defining the CMOS as a *measuring sensor*

### Visible CMOS (Primary Camera)

| Item | Specification |
|---|---|
| Resolution | 20–24 MP |
| Shutter | **Global shutter (mandatory)** |
| Sensor size | 1-inch class |
| Lens distortion | ≤ 1% (with calibration) |
| Frame rate | 10–20 fps |
| Object resolution | ≤ 0.5 mm @ 10 m |
| Synchronization | Hardware timestamp sync with IMU & ranging |

The key is not “high image quality,” but  
**images from which defect dimensions can be estimated**.

---

## 🌡️ 4. Differentiation #3: IR as *secondary verification only*

### Infrared (IR)

| Item | Specification |
|---|---|
| Resolution | 640×480 |
| Temperature resolution | ≤ 0.05 °C |
| Observation distance | 5–25 m |
| Operation | Duty-controlled (not always-on) |
| Role | Abnormal heating confirmation at joints & clamps |

By not making IR the primary sensor, SkyEdge avoids:

- False positives  
- AI judgments that cannot be explained  

and instead produces **evidence that stands in inspection reports**.

---

## ⏱️ 5. Differentiation #4: Full sensor time synchronization by design

| Item | Specification |
|---|---|
| Time sync accuracy | ≤ 1 ms |
| Logging granularity | Per frame |
| Data structure | Fully synchronized visible / IR / IMU / range |

SkyEdge’s final output is not  
“the AI says it’s abnormal,”  
but:

> **“Compared to the previous inspection, this difference exists.”**

---

## 🧠⚡ 6. Semiconductor architecture that backs the differentiation

### 65 nm FDSOI (Intelligence & Imaging)

- Image correction & geometric compensation  
- Candidate defect extraction (lightweight inference)  
- Reproducible flight control & time management  
- Logging & communication  

**Power consumption**
- During inspection: 1–2 W  
- Standby: < 100 mW  

---

### 0.35 µm LDMOS (Drive, Power, AMS)

- Motor & gimbal drive (high V–I domain)  
- PMU (including energy harvesting input)  
- Current / voltage / temperature monitoring  
- OVP / OCP / OTP / UVLO  
- Fail-safe shutdown  

This layer **guarantees “no runaway, no breakage” at the circuit level**.

---

## 🔋 7. Clearly defining the role of energy harvesting

| Item | Specification |
|---|---|
| Average generation | 10–100 mW |
| Purpose | Standby monitoring, preparation, safety margin |
| Flight power | **Not used** |
| Storage | Supercapacitor + secondary battery |

Energy harvesting is not for flight,  
but **to increase availability and safety margins**.

---

## 📊 8. Differentiation KPIs (inspection validity metrics)

- Reproducible capture success rate: ≥ 95%  
- Valid time-series comparison rate: ≥ 90%  
- IR cross-check consistency: ≥ 85%  
- Automatic report generation rate: ≥ 80%  

These are **inspection-validity probabilities**,  
not “AI accuracy percentages.”

---

## 🧩 9. Summary

SkyEdge’s differentiation is not flashy AI or aggressive flight performance.

> **It does not “take pictures” of power lines.  
> It “measures degradation under identical conditions over time.”**

That idea is fixed **entirely as numerical specifications**.

This is how you win in infrastructure inspection  
without fighting head-on in the AI hype race.

---

*This article includes conceptual design elements,  
but all specifications are grounded in real inspection workflows  
and semiconductor design constraints.*
