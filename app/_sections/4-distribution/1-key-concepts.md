---
layout: default
scripts:
permalink: distribution/key-concepts.html
title: "Key Concepts"
parent: distribution

prev: Distribution
next: Applications

---

# Key Concepts

---

Remote sensing data undergoes a lot of processing to even get to what is recognizable as an image. Even then, there are a lot of possible processing levels ranging from a more raw image to one that has been corrected for terrain and atmosphere. The data may also be available through different formats, or from different locations. It can be confusing which product is the right one to use, where the best place is to get it, or what format should be used. Below is some discussion about these key concepts that should help to demystify the process.

## Units

For visualizing images, images values are stretched from 0 to 255 to fit the range of displays. However for analysis purposes it's important to know the units of the underlying data values.

- Digital Counts: Digital counts are arbitary values, often from 0-255, that need to be adjusted by a gain and offset to get to meaningful values. If the data is only available as Digital Counts and no gain/offset is supplied the data can be viewed, but it is not suitable for analysis.
- Apparent Radiance: Radiance is a measure of the absolute brightness as observed at the sensor. Because sun illumination can change, and spectral bands can be different widths (wider band = more light), radiance is not a good measure for analysis. However it can be converted to TOA reflectance.
- Surface-Leaving Radiance: This is the radiance leaving the ground. It is the apparent radiance corrected with an atmospheric model. It is also not suitable for analysis, but can be converted to Surface Reflectance.
- Top-Of-Atmosphere Reflectance (TOA): Reflectance is a number between 0 and 1 that represents how much energy within the spectral band, is reflected from it. Like apparent radiance, this is a measure of a pixels reflectance as observed, without correction of the atmosphere. TOA reflectance is often used for anlysis as it tends to be 'good-enough' for many applications.
- Surface Reflectance: This is the TOA reflectance, corrected for the atmosphere. While atmospheric correction is often preferred, it involves very complex processing that requires a lot of data input and as a result, it can be error-prone. Most users do not have the resources to run atmospheric models correctly so end up relying on TOA reflectance data.

## Processing levels and Analysis Ready Data

Satellite data providers often advertise data products as being processed to some level (e.g., Level 1, Level 1T, Level 2GT). Unfortunately there is no accepted standard for what the different levels are, or what they should be called. Typically a Level 2 image has been atmospherically corrected, while a Level 1 image has not been, but even that might be different based on the provider.

Recently providers have been talking about Analysis Ready Data (ARD), and although there is no current standard on what ARD is, there is [some work to define it more precisely](https://medium.com/planet-stories/analysis-ready-data-defined-5694f6f48815), and it is generally agreed to be:

- Surface reflectance: Atmospherically corrected reflectance
- Geo-registered: Individual pixels can be trusted to be aligned well with the actual earth, such that the geo-location accuracy is within a pixel
- Masked and QC'd: Masks are available for indicating pixels that have clouds, shadows, or potentially some sensor issues (e.g., bad pixel)

Using Analysis Ready Data, users can now create accurate time series for a region. Proper geo-location allows them to trust that pixels across time line up, the masks allow them to drop bad data, and surface reflectance allows for a comparison across scenes without worry of atmospheric variations over time.


## Mosaics 

Mosaic imagery is popular due to some of the same reasons why ARD is needed. It is much easier to use a mosaic, where clouds have been removed, all pixels are filled with good data, and the overall color between pixels of different scenes has been matched. This creates a continuous image that is both pleasing to look at and simple to use. However, there are some disadvantages:

- The mosaic could include data over weeks, months, or even a year, so time series algorithms are not appropriate. There can also be problems if there is change that occurs on timescales shorter than the period of the mosaic.

- If the mosaic has been color-matched, then the units have been altered and will longer be analysis-ready. For some algorithms this is fine, but for others this can cause problems. A mosaic that has been created for visual purposes is different than a mosaic made for scientific purposes.


## File Formats

- Remote reading
- COGs, JP2K


### Image Catalogs and Searching

STAC
