---
layout: default
scripts:
permalink: analysis/advanced-analysis.html
title: "Advanced Analysis"
parent: analysis

prev: Band Combinations
next: Machine Learning and AI Applications

---

## Advanced Analysis

Advanced analytical techniques go beyond inter-band math and may classify data into predefined fuzzy or map-like categories using machine learning techniques, compare imagery taken at different times to detect change, compare imagery taken at different angles to estimate elevation, or combine multiple source datasets to exploit the best qualities of each. These techniques often result in data products like 3D terrain maps, forest density estimates, maps showing fire and burn scar extent, measurements of crop type and health, maps of land cover types, or maps showing the probability of certain minerals existing along a gradient. These techniques are most computationally intensive and require significant processing resources, but the increasing availability of elastic cloud computing has made them more practical for development organizations.


{% include side-image.html title="Elevation and Surface Modeling" image="feature_extraction.png" definition="Elevation and Surface models are constructed by calculating the offset in radar or image-based data acquired from different angles. 3D terrain models are used to measure landslide or flood risk. 3D urban models are used to measure and manage vertical growth of cities, and can be used to calculate sight lines, shadow, and the corresponding implications for solar power or urban gardening initiatives. The Shuttle Radar Topography Mission (SRTM) and newer NASA ASTER Global Digital Elevation Model (DEM) are two commonly utilized datasets that provide near global elevation coverage. Most commonly Radar and now Lidar are used to collect elevation and surface data, but the ASTER GDEM was collected using sensors operating in the visible-near infrared spectrum." %}

{% include side-image.html title="Change Detection" image="change_detection.png" definition="Change detection is the analysis of imagery from different time periods to detect and understand changes. Decades of historical and open access satellite data make it possible to monitor a range of changes on the Earth’s surface. Landsat 1 for example was launched in 1972 allowing for change detection back 50 years<sup>1</sup>. Examples of common applications include urban growth, land resource planning, deforestation, ice melting, tracking urban conflict, disaster monitoring, and impact evaluations." %}

<figure class="align-center">
  <img src="/assets/graphics/content/change-detection.png" />
  <figcaption>Satellites that can be used for change detection back to 1972. Source at <a href="https://eos.com/blog/historical-satellite-images/">eos.com</a></figcaption>
</figure>

{% include side-image.html title="Feature Extraction" image="similar_objects.png" definition="Feature extraction is the process of analyzing imagery to extract and identify features. These can include man-made (buildings, roads, structures, cars) and natural objects (land cover, water extent, forest health and plant and animal species). Once extracted, these items can be sorted, counted, and further analyzed. Advances in machine learning and artificial intelligence have allowed for new methods of automated feature extraction, which can be an otherwise intensive manual process. Feature extraction can be used for a variety of humanitarian and development applications including route optimization mapping, disaster response mapping, services distribution, population estimation and others." %}

---

1) [https://eos.com/blog/historical-satellite-images/](https://eos.com/blog/historical-satellite-images/)  