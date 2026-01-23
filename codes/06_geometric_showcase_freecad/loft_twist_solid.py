# -*- coding: utf-8 -*-
# FreeCAD Macro: Function-defined twisted loft solid (no Sketch / no PartDesign)
import FreeCAD as App
import FreeCADGui as Gui
import Part
import math

# =========================
# Parameters (Design logic)
# =========================
NAME = "FCMD_GeoShowcase"

H = 120.0          # height [mm]
N_SECTIONS = 48    # number of loft sections (>= 16 recommended)

# Base radius profile r(z)
R0 = 18.0          # base radius [mm]
TAPER = -6.0       # linear taper over height [mm] (negative: narrower to top)

# Flower / waviness on cross-section
LOBES = 6          # number of lobes (e.g., 5, 6, 7...)
WAVE = 0.22        # waviness amplitude (0.0 ~ 0.4)

# Twist along z
TWIST_TURNS = 1.25 # total turns from bottom to top (e.g., 0.5 ~ 2.0)

# Polygon resolution per section
N_PTS = 180        # points for a smooth-ish wire (>= 90 recommended)

# Optional: add a central through-hole (looks more "engineered")
ADD_HOLE = True
HOLE_D = 8.0       # hole diameter [mm]

# =========================
# Helpers
# =========================
def clamp(x, lo, hi):
    return max(lo, min(hi, x))

def radius_profile(z):
    """
    Base radius as a function of z.
    You can replace this with any r(z) you like.
    """
    t = z / H
    # gentle bulge + linear taper
    bulge = 1.0 + 0.10 * math.sin(2.0 * math.pi * t)
    return (R0 + TAPER * t) * bulge

def twist_angle(z):
    """
    Twist angle (radians) as a function of z.
    """
    t = z / H
    return 2.0 * math.pi * TWIST_TURNS * t

def make_flower_wire(z):
    """
    Create a closed wire on plane z = const.
    Cross-section radius is function-defined:
      r(theta, z) = R(z) * (1 + WAVE * sin(LOBES*theta + twist(z)))
    """
    R = radius_profile(z)
    ang0 = twist_angle(z)

    pts = []
    for i in range(N_PTS):
        th = 2.0 * math.pi * i / N_PTS
        # flower modulation (phase-shifted by twist)
        mod = 1.0 + WAVE * math.sin(LOBES * th + ang0)
        rr = R * mod
        x = rr * math.cos(th)
        y = rr * math.sin(th)
        pts.append(App.Vector(x, y, z))

    # close the polygon
    pts.append(pts[0])

    poly = Part.makePolygon(pts)
    wire = Part.Wire(poly.Edges)
    return wire

# =========================
# Document setup
# =========================
doc = App.newDocument(NAME)

# =========================
# Build loft sections
# =========================
wires = []
for k in range(N_SECTIONS):
    z = H * k / (N_SECTIONS - 1)
    wires.append(make_flower_wire(z))

# Make loft solid
# ruled=False gives smoother surface in many cases
loft = Part.makeLoft(wires, True, False)

# Optional: drill a center hole
if ADD_HOLE:
    hole = Part.makeCylinder(HOLE_D / 2.0, H + 2.0, App.Vector(0, 0, -1.0))
    loft = loft.cut(hole)

# =========================
# Register model
# =========================
obj = doc.addObject("Part::Feature", "FCMD_Solid")
obj.Shape = loft

doc.recompute()

# =========================
# View
# =========================
Gui.activeDocument().activeView().viewAxonometric()
Gui.SendMsgToActiveView("ViewFit")

