---
layout: default
scripts:
permalink: analysis/advanced-analysis.html
title: "Advanced Analysis"
parent: analysis

prev: Spectral Combinations
next: Distribution

---

# Advanced Analysis

---

Advanced analytical techniques go beyond inter-band math. Advanced techniques compare data pixel by pixel, compare imagery taken at different times or different angles, or combining multiple source datasets. These techniques often result in data products like 3D terrain maps, the footprints of buildings, or the surface type of road networks. These techniques are most computationally intensive and require significant processing resources. The availability of elastic cloud computing has made these techniques more practical for development organizations.

{% include side-image.html title="Elevation and Surface" image="feature_extraction" definition="Elevation and Surface models are constructed by calculating the offset in radar or image-based data acquired from different angles. 3D terrain models are used to measure landslide or flood risk. 3D urban models are used to measure and manage vertical growth of cities." %}

{% include side-image.html title="Change Detection" image="change_detection" definition="Analysis of imagery from different time periods to detect and understand changes. Examples include urban growth, deforestation, ice melting, landslide detection, or tracking urban conflict." %}

{% include side-image.html title="Feature Extraction" image="similar_objects" definition="Analysis of imagery to extract and identify features. These can include man-made objects (buildings, roads, structures) and natural objects (Ex: land use, water extent, crop areas). Once extracted this items can be sorted, counted, and analyzed." %}
