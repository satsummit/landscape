---
layout: default
scripts:
permalink: capture/resolution-considerations.html
title: "Resolution Considerations"
parent: capture

prev: Capture
next: Satellite Coverage

---

## Spatial Resolution

Spatial resolution (also referred to as ground sample distance GSD) refers to the size of one pixel on the ground. For example, a spatial resolution of 15 meters means that one pixel on the image corresponds to a square of 15 by 15 meters on the ground. Finer resolution indicates a lower pixel size and means you can see more detail in the imagery. Today satellite imagery can be generally classified into three “buckets” of spatial resolution: 

- Low resolution: over 30 m/pixel (e.g., NASA Terra & Aqua MODIS Satellites)
- Medium resolution: 5-30 m/pixel (e.g., USGS/NASA Landsat 8 Satellite)
- High resolution: 1-5 m/pixel (e.g., Planet Labs Rapid Eye Satellite)
- Very high resolution: <1m/pixel (e.g., Maxar’s Worldview Satellites)

Minimum required resolution section is duplicated – one needs to be removed. Recommend removing the first one that comes directly after the bulleted list overviewing low, medium,high, very high resolutions.

### What spatial resolution do I need?

The imagery samples below can help select the right imagery for your project. In an urban environment like Fortaleza, freely available Landsat imagery (15m) shows the extent of the city. Sentinel-2 imagery (10m) offers a closer view of city blocks. Medium resolution imagery like RapidEye (5m) shows roads. With Worldview 3 (.3m) and Pleiades (.5m) images you can count beach umbrellas. Your specific needs of your use case will inform the spatial resolution of the imagery you select. In general, you can think about moderate and low-resolution sensors as providing free data but are typically limited in their ability to view human-level change. As you improve resolution (aka have a lower pixel-size) the price of the imagery will increase but the ability to detect human-level change and activity increases. 

<figure class="align-center">
  <img src="/assets/graphics/content/spatial-resolution-price-graph.png" />
  <figcaption>Source: https://www.researchgate.net/figure/Comparison-between-price-and-spatial-resolution-Based-on-the-minimum-price-area-and-the_fig1_326417596</figcaption>
</figure>

Minimum required resolution – it is best practice to determine what is the minimum required resolution required for your specific application. For example, if you only need 5m resolution but could get access to 30 cm resolution, consider if the 30 cm is really is necessary. Often people learn towards wanting the highest resolution when it is not needed and often more expensive.  

<div id="resolutionComparison" class="extra-bottom-margin"></div>

## Temporal Resolution

Temporal resolution refers to the frequency with which data is collected over the same region. This is typically referred to as ‘revisit time’. Temporal resolution largely depends on the sensor’s characteristics, the orbit, and the swath width (the area on the Earth’s surface captured by the satellite). Many Earth Observation satellites are in a polar orbit and revisit times can vary from 1 to 16 days. For example, NASA’s Terra and Aqua MODIS satellite has a temporal resolution of 1-2 days. Landsat 8 on the other hand has a narrower swath and a temporal resolution of 16 days<sup>1</sup>. Commercial sensors often have the ability to pivot the direction of the on-board sensor and image nearby regions on the Earth’s surface, oftentimes referred to as ‘tasking’, which becomes particularly useful when monitoring a dynamic event like a flood or humanitarian crisis.
Temporal resolution becomes an important consideration in various use cases including land use change, agriculture, drought, migration, disaster response and others. For example, the temporal resolution needed to monitor land use changes over a decade (changes happening very slowly) looks very different than the temporal resolution needed to assess damages and inform response to an unfolding natural disaster (changes happening very quickly). To monitor changes on the human level, one typically requires high temporal resolution, while moderate-low temporal resolution can suffice for monitoring changes to the Earth’s surface or mapping urban sprawl of a city.

### What spatial resolution do I need?

Increased capture capacity for large satellites and new microsatellite platforms offer frequent revisit rates and more extensive image capture, allowing high frequency monitoring of changes on earth. More regular data makes it easier to study change over time, track the progress of projects, and leverage recent imagery to visualize a region in the days leading up to a disaster. Seasonal forecast products such as [Copernicus Climate Change Service](https://cds.climate.copernicus.eu/cdsapp#!/search?type=dataset&keywords=((%20%22Product%20type:%20Seasonal%20forecasts%22%20))) provide satellite data and graphical products that are updated every month for various use cases. 

{% comment %}
%% Commented out because the map does not work. It uses mapbox's classic styles which are deprecated.

Planet Labs high frequency imagery over Canada below shows the progress of the growing season, week by week.

<div id="revisitComparison"></div>
{% endcomment %}

## Spatial/ Temporal Resolution Trade offs

Sensors typically trade spatial resolution for temporal resolution and, it has been difficult historically to maximize both. Sensors that have a high spatial resolution often cover a smaller area than a sensor with lower spatial resolution. With a smaller field of view, it takes longer to cover the same area, thus as spatial resolution increases, temporal resolution decreases. However, new microsatellite constellations are beginning to change this precedent. Large constellations of small satellites with high resolution sensors allow for rapid revisit of a site while still providing quality imagery.

Freely available imagery (e.g., Landsat, Sentinel, MODIS) tends to either have a revisit time measured in days (1-4 days) with resolution in the hundreds of meters (300m-500m), or a revisit time measured in weeks (10-20 days) with resolutions in the tens of meters (10m-30m).

High resolution commercial imagery is available up to .3m resolution, with revisit times varying quite a bit. Some sensors are tasked, or pointed to collect specific areas rather than always just collecting the area directly below. As a result, some areas may not be covered at all by tasked satellites. While there is still a premium for the highest resolution imagery (<0.50m), medium to low resolution is suitable for many applications, and increasingly affordable or available at no cost.

## Other Resolution Considerations


Radiometric Resolution - the amount of information in each pixel can be relatively boiled down to mean the amount of information recorded in each pixel. The higher the radiometric resolution, the more values that are available to store information which provides better discrimination between even the slightest differences in energy. For example, when assessing water quality from space, high radiometric resolution is necessary to distinguish between subtle differences in ocean color<sup>1</sup>.

<figure class="align-center">
  <img src="/assets/graphics/content/radiometric-resolution.png" />
  <figcaption>Source: https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing</figcaption>
</figure>

Spectral Resolution – the number of spectral bands and width of each spectral band on-board a specific sensor, or the ability of a sensor to discern finer wavelengths in the electromagnetic spectrum, often referred to in relation to the width of sensor bands. Multispectral sensors have 3-10 bands while other sensors have hundreds or even thousands of bands (super-spectral and hyperspectral sensors). Different classes of features and details in an image can be distinguished by comparing energy responses across distinct wavelengths. For example, water and vegetation can be distinguished using broad wavelength ranges in the visible and near infrared, while differentiating rock types requires finer wavelength ranges that interact with different mineral compositions<sup>2</sup>.  Like the relation between spatial and temporal resolution, there is also an inverse relationship between spectral resolution and spatial resolution. In most cases as a sensor increases the number of spectral bands, it’s spatial resolution reduces.

---

1) [https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing](https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing)  
2) [https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-and-air-photos/tutorial-fundamentals-remote-sensing/satellites-and-sensors/spectral-resolution/9393](https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-and-air-photos/tutorial-fundamentals-remote-sensing/satellites-and-sensors/spectral-resolution/9393)