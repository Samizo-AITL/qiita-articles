---
layout: default
title: Qiita Articles
---

# 903.【Design】SkyEdge — Power Line & Transmission Tower Inspection Drone  
## 📷 CMOS × Lens × Stand-Off Distance: Designing the Trade-Off

In the previous article, we defined the **per-flight V–I budget** for the SkyEdge inspection drone.

In this article, we address the factors that **directly determine inspection quality**:  
the relationship between **CMOS sensor, lens, and shooting distance**, and we make explicit the design decisions required to produce **images that can actually be measured**.

---

## ❌ 1. Typical failure modes in inspection imaging

Common mistakes in power-line inspection include:

- Selecting a high-resolution CMOS, but pairing it with an inadequate lens  
- Widening the field of view until defects collapse to less than one pixel  
- Prioritizing safety distance so strongly that the image becomes unmeasurable  

The root cause is simple:

> **CMOS, lens, and distance are being decided independently.**

---

## 🔄 2. The fundamental trade-off relationship

Whether an inspection image is valid is determined by three parameters:

- CMOS resolution (pixel pitch)  
- Lens focal length (field of view)  
- Shooting distance  

These interact according to the following relationship:

> **Minimum resolvable feature on the object ≈  
> (shooting distance × pixel pitch) / effective focal length**

This relationship dominates everything that follows.

---

## 🧱 3. SkyEdge baseline assumptions (revisited)

| Item | Assumption |
|---|---|
| Target | Transmission lines & towers |
| Shooting distance | 5–30 m |
| Typical defects | Insulator cracks / loose bolts / corrosion |
| Required resolution | ≤ 0.5 mm @ 10 m |
| Sensor | 1-inch-class CMOS |
| Resolution | 20–24 MP |

---

## 🔍 4. Constraints on the CMOS sensor

### 4.1 Pixel pitch
For 20–24 MP sensors in the 1-inch class:

- Pixel pitch is realistically **~2.4–2.8 µm**

Pushing below this range leads to:

- Reduced sensitivity  
- Degraded SNR  
- Poor performance in real inspection scenes (backlight, shadows)

For inspection, **raw resolution is not free**.

---

## 🔭 5. Selecting the lens focal length

### 5.1 If you go too wide
- Defects collapse into 1–2 pixels  
- Effective resolution drops after distortion correction  
- Temporal comparison becomes unstable  

### 5.2 If you go too telephoto
- Field coverage becomes too narrow  
- Reproducible flight becomes harder  
- Tracking and stabilization demands increase sharply  

---

## 🎯 6. SkyEdge’s chosen operating point (numerically fixed)

### Recommended visible-light camera optics

| Item | Value |
|---|---|
| Focal length (35 mm equiv.) | 50–70 mm |
| Actual focal length (1") | ~18–25 mm |
| Horizontal FOV | ~25–35° |
| Lens distortion | ≤ 1% (with calibration) |
| F-number | F4–F5.6 |

The key point is intentional:

> **A slightly narrow field of view is optimal for inspection.**

---

## 📐 7. Verifying achievable resolution (example)

### Conditions
- Shooting distance: 10 m  
- Actual focal length: 20 mm  
- Pixel pitch: 2.5 µm  

### Resulting object-space resolution
- Approximately **0.4–0.5 mm per pixel**

This satisfies the fixed requirement of **0.5 mm @ 10 m**.

---

## 🚫 8. Why a global shutter is mandatory

In real inspection flight conditions:

- Propeller-induced vibration  
- Micro-oscillation during hovering  
- Low-speed translational motion  

Using a rolling shutter under these conditions causes:

- Breakdown of geometry after distortion correction  
- Loss of reliable frame-to-frame differencing  

For inspection use:

> **Geometric integrity matters more than anything else.**

---

## 📏 9. Treating shooting distance as a control variable

In SkyEdge, shooting distance is not:

- An operator guideline  
- A loose operational rule  

It is treated as a **controlled variable**.

- Distance sensors actively maintain **5–30 m**  
- If distance deviates, a “capture invalid” flag is set  
- Images are not forced when conditions are wrong  

The system logs not:

> “Was an image taken?”  
but rather  
> **“Were the conditions valid for measurement?”**

---

## 🧠 10. Why this design creates differentiation

Many inspection drones:

- Install high-resolution CMOS sensors  
- Choose field of view for visual convenience  
- Leave distance management to the pilot  

SkyEdge instead:

- Starts from defect size  
- Back-calculates CMOS, lens, and distance  
- Fixes all three simultaneously as specifications  

> **Not occasionally good images,  
> but consistently measurable images—every time.**

That is the differentiation.

---

## 🧩 11. Summary

CMOS, lens, and shooting distance cannot be optimized independently.

For power-line and tower inspection, you must back-calculate from:

- Defect size  
- Safety distance  
- Reproducibility requirements  

and **fix all three parameters together**.

SkyEdge embeds this directly into the design  
as **numerical specifications, not preferences**.

---

*This article includes conceptual design elements,  
but is grounded in realistic optical design and inspection requirements.*
