# -*- coding: utf-8 -*-
# FreeCAD Macro: Branched spiral sweep solid (no Sketch, no PartDesign)
import FreeCAD as App
import FreeCADGui as Gui
import Part
import math

# =========================
# Parameters
# =========================
NAME = "FCMD_BranchedSpiral"

H = 140.0          # height
TURNS = 2.2        # spiral turns
N_PATH = 420       # path resolution

BASE_R = 22.0      # base radius
R_MOD = 6.0        # radial modulation
LOBES = 3          # section lobes

SECTION_PTS = 120  # section resolution

BRANCH_SHIFT = 0.35  # phase jump position (0~1)
BRANCH_GAIN  = 1.8   # radial expansion after branch

# =========================
# Helpers
# =========================
def section_wire(z, phase):
    pts = []
    for i in range(SECTION_PTS):
        th = 2 * math.pi * i / SECTION_PTS
        r = BASE_R * (1 + 0.22 * math.sin(LOBES * th + phase))
        x = r * math.cos(th)
        y = r * math.sin(th)
        pts.append(App.Vector(x, y, z))
    pts.append(pts[0])
    return Part.Wire(Part.makePolygon(pts).Edges)

# =========================
# Build sweep path
# =========================
path_pts = []
for i in range(N_PATH):
    t = i / (N_PATH - 1)
    ang = 2 * math.pi * TURNS * t

    # branching behavior
    if t > BRANCH_SHIFT:
        gain = 1 + BRANCH_GAIN * (t - BRANCH_SHIFT)
    else:
        gain = 1

    r = gain * (BASE_R + R_MOD * math.sin(2 * math.pi * t))
    x = r * math.cos(ang)
    y = r * math.sin(ang)
    z = H * t

    path_pts.append(App.Vector(x, y, z))

path = Part.makePolygon(path_pts)

# =========================
# Create sections along path
# =========================
sections = []
for i, p in enumerate(path_pts[::30]):
    t = i / (len(path_pts[::30]) - 1)
    phase = 2 * math.pi * t * 1.4
    sec = section_wire(p.z, phase)
    sec.translate(App.Vector(p.x, p.y, 0))
    sections.append(sec)

# =========================
# Loft sweep
# =========================
solid = Part.makeLoft(sections, True, False)

# =========================
# Register
# =========================
doc = App.newDocument(NAME)
obj = doc.addObject("Part::Feature", "BranchedSpiral")
obj.Shape = solid
doc.recompute()

Gui.activeDocument().activeView().viewAxonometric()
Gui.SendMsgToActiveView("ViewFit")

