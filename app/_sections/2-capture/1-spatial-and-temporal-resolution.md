---
layout: default
scripts:
permalink: capture/spatial-and-temporal-resolution.html
title: "Spatial and Temporal Resolution"
parent: capture

prev: Capture
next: Spectral Bands

---

# Spatial and Temporal Resolution

---

Spatial resolution refers to the size of one pixel on the ground. For example 15 meters means that one pixel on the image corresponds to a square of 15 by 15 meters on the ground. This is also sometimes referred to as Ground Sample Distance (GSD).

Temporal resolution refers to the how often data of the same area is collected. This is typically referred to as Revisit Time.

Freely available imagery (e.g., Landsat, Sentinel, MODIS) tends to either have a revisit time measured in days (1-4 days) with resolution in the hundreds of meters (300m-500m), or a revisit time measured in weeks (10-20 days) with resolutions in the tens of meters (10m-30m). 

High resolution commercial imagery is available up to .31m resolution, with revisit times varying quite a bit. Some sensors are tasked, or pointed to collect specific areas rather than always just collecting the area directly below. As a result, some areas may not be covered at all by tasked satellites. While there is still a premium for the highest resolution imagery (<0.50m), medium to low resolution is suitable for many applications, and increasingly affordable or available at no cost.

#### Pansharpening

Often satellites take images of lower resolution in many bands (e.g. Multispectral red, green and blue for a color image), and then have another channel with much wider spectral range (i.e. "panchromatic") with finer resolution. By means of a mathematical relations, it is possible to pan-sharpen the multispectral image with the panchromatic resolution.

#### Accuracy

Accuracy refers to the possible difference between the reported locations on the images and their actual location in the real world. A usual standard is a 90% likelihood within a Circular Area around the location (CE90). To ensure accuracy, satellite images are ortho-rectified for orography with either an elevation model, or using Ground Control Points (GCP).

### What spatial resolution do I need?

The imagery samples below can help select the right imagery for your project.
In an urban environment like Fortaleza, free Landsat imagery (15m) shows the extent of the city. Medium resolution imagery like RapidEye (5m) shows roads. With Worldview 3 (.31m) and Pleiades (.5m) images you can count beach umbrellas.

<div id="resolutionComparison"></div>

### What temporal resolution do I need?

Increased capture capacity for large satellites and new microsatellite platforms offer frequent revisit rates and more extensive image capture, allowing high frequency monitoring of changes on earth. More regular data makes it easier to study change over time, to track the progress of projects, and to “rewind” to the days leading up to a disaster.

Planet Labs high frequency imagery over Canada below shows the progress of the growing season, week by week.

<div id="revisitComparison"></div>
