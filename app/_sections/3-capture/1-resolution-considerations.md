---
layout: default
scripts:
permalink: capture/resolution-considerations.html
title: "Resolution Considerations"
parent: capture

prev: Capture
next: Spectral Bands

---

# Spatial Resolution

---

Spatial resolution (also referred to as ground sample distance GSD) refers to the size of one pixel on the ground. For example, a spatial resolution of 15 meters means that one pixel on the image corresponds to a square of 15 by 15 meters on the ground. Finer resolution indicates a lower pixel size and means you can see more detail in the imagery. Today satellite imagery can be generally classified into three “buckets” of spatial resolution: 

- Low resolution: over 30 m/pixel (e.g., NASA Terra & Aqua MODIS Satellites)
- Medium resolution: 5-30 m/pixel (e.g., USGS/NASA Landsat 8 Satellite)
- High resolution: 1-5 m/pixel (e.g., Planet Labs Rapid Eye Satellite)
- Very high resolution: <1m/pixel (e.g., Maxar’s Worldview Satellites)

### What spatial resolution do I need?
The imagery samples below can help select the right imagery for your project. In an urban environment like Fortaleza, freely available Landsat imagery (15m) shows the extent of the city. Sentinel-2 imagery (10m) offers a closer view of city blocks. Medium resolution imagery like RapidEye (5m) shows roads. With Worldview 3 (.3m) and Pleiades (.5m) images you can count beach umbrellas. Your specific needs of your use case will inform the spatial resolution of the imagery you select. In general, you can think about moderate and low-resolution sensors as providing free data but are typically limited in their ability to view human-level change. As you improve resolution (aka have a lower pixel-size) the price of the imagery will increase but the ability to detect human-level change and activity increases. 

#### Pansharpening

Some sensors take images of lower resolution in many bands (e.g. Multispectral red, green and blue for a color image), and then have another channel with much wider spectral range (i.e. "panchromatic") with finer resolution. By means of a mathematical relations, it is possible to increase the resolution of the multispectral bands with the higher resolution panchromatic band. Pan-sharpened imagery doesn't add information but can be useful for images that are primarily for human viewing purposes.

#### Accuracy

Accuracy refers to the possible difference between the reported locations on the images and their actual location in the real world. A usual standard is a 90% likelihood within a Circular Area around the location (CE90). To ensure accuracy, satellite images are ortho-rectified for orography with either an elevation model, or using Ground Control Points (GCP).

### What spatial resolution do I need?

The imagery samples below can help select the right imagery for your project.
In an urban environment like Fortaleza, free pan-sharpened Landsat imagery (15m) shows the extent of the city. Medium resolution imagery like RapidEye (5m) shows roads. With Worldview 3 (.3m) and Pleiades (.5m) images you can count beach umbrellas.

<div id="resolutionComparison" class="extra-bottom-margin"></div>

### What temporal resolution do I need?

Increased capture capacity for large satellites and new microsatellite platforms offer frequent revisit rates and more extensive image capture, allowing high frequency monitoring of changes on earth. More regular data makes it easier to study change over time, to track the progress of projects, and to “rewind” to the days leading up to a disaster.

Planet Labs high frequency imagery over Canada below shows the progress of the growing season, week by week.

<div id="revisitComparison"></div>
