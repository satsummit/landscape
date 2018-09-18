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

Remote sensing data undergoes a lot of processing to get to what is recognizable as an image. Even then, there are a lot of possible processing levels ranging from a more raw image to one that has been corrected for terrain and atmosphere. The data may also be available through different formats, or from different locations. It can be confusing which product is the right one to use, where the best place is to get it, or what format should be used. Below is some discussion about these key concepts that should help to demystify the process.

## Units

For visualizing images, pixel values are often stretched from 0 to 255 to fit the range of displays. However for analysis purposes it's important to know the units of the underlying data values.

- **Digital Numbers (DN)**: Digital Numbers are the raw values stored by the satellite, often ranging from 0-255 or 0-65535, that need to be adjusted by a gain and offset to be translated to meaningful values like those below. If the data is only available as Digital Numbers and no gain/offset is supplied, the data can be viewed, but it is not suitable for analysis.

- **Apparent Radiance**: Radiance is a measure of the absolute brightness as observed at the sensor. Because sun illumination can change, and spectral bands can be different widths (wider band = more light), radiance is not a good measure for analysis. However it can be converted to TOA reflectance.

- **Surface-Leaving Radiance**: This is the radiance leaving the ground. It is the apparent radiance corrected with an atmospheric model. It is also not suitable for analysis, but can be converted to Surface Reflectance.

- **Top-Of-Atmosphere Reflectance (TOA)**: Reflectance is a number between 0 and 1 that represents how much energy within the spectral band, is reflected from it. Like apparent radiance, this is a measure of a pixel's reflectance as observed, without correction for the atmosphere. TOA reflectance is often used for analysis as it tends to be 'good-enough' for many applications.

- **Surface Reflectance**: This is TOA reflectance corrected for atmospheric effects. While atmospheric correction is often preferred, it involves very complex processing that requires a lot of data input and as a result, it can be error-prone. Most users do not have the resources to run atmospheric models correctly so end up relying on TOA reflectance data. When available, this is the most suitable unit for analysis.

## Processing levels and Analysis Ready Data

Satellite data providers often advertise data products as being processed to some level (e.g., Level 1, Level 1T, Level 2GT). Unfortunately there is no accepted standard for what the different levels are. Typically a Level 0 image represents raw satellite data, a Level 1 image has some radiometric and geometric corrections applied, and a Level 2 image has been atmospherically corrected.

Recently providers have been talking about Analysis Ready Data (ARD), and although there is no current standard on what ARD is, there is [some work to define it more precisely](https://medium.com/planet-stories/analysis-ready-data-defined-5694f6f48815). It is generally agreed to be:

- **Surface reflectance**: Atmospherically corrected reflectance

- **Geo-registered**: Individual pixels can be trusted to be aligned well with the actual earth, such that the geo-location accuracy is within a pixel.

- **Masked and QC'd**: Masks are available for indicating pixels that have clouds, shadows, or potentially some sensor issues (e.g., bad pixel)

Using Analysis Ready Data, users can more easily perform reliable and consistent analyses, like creating accurate time series for a region. Proper geo-location allows them to trust that pixels across time line up, the masks allow them to drop bad data, and surface reflectance allows for a comparison across scenes without worry of atmospheric variations over time.

## Mosaics

One of the biggest challenges when dealing with remote sensing data is the presence of clouds. Even if the clouds, and cloud shadows, have been masked properly, it is difficult to work with images that have gaps of data missing throughout the scene. Because of this, mosaics have become a popular option. A mosaic is stitching together multiple scenes within a time period to create a seamless complete image. Areas that may have been covered with clouds in one image can be filled with good data from another image. This creates a continuous image that is both pleasing to look at and simple to use. The mosaic could include data over weeks, months, or even a year.

However, the process of creating the mosaic also removes an important piece of information - the precise date when the data is collected. This temporal information is vital for some applications where changes can happen on timescales shorter than the time period of the mosaic. A mosaic using a years worth of imagery isn't very useful in visualizing seasonal changes or shifts in growing seasons.

When using mosaics, as with the original scenes, it is important to know what units the data is provided in. Mosaics are frequently created for visual applications, such as the creation of a basemap. For this, different scenes might have been color corrected or otherwise transformed in order to create a more visually pleasing image. These are not as suitable for analysis purposes.

## Data Formats

Data providers have a lot of choices to make when publishing data. It's not just what file format to use (e.g., tif, jpg, txt, csv, json), but also how the data is split up across files and how big each of those files are. This has traditionally involved trade-offs between ease of use and file sizes. If data is split up between lots of files then users need to download and manage many files. Alternately, if the data is consolidated into fewer files the risk is that the user needs to download a lot of extra data that they may not use.

As an example, consider downloading a single Landsat-8 scene using EarthExplorer. The entire scene, with all bands, is a 1 GB compressed file. The scene includes all 11 spectral bands for a region covering 68,000 km<sup>2</sup>. If the user is interested in just the Red and Near-Infrared bands for a region of 1000 hectares they are using much less than 1% of the data they need to download.

An alternative is to store the data in a format a user can read any arbitrary piece of the data remotely, without having to download bytes that won't be used. Several file formats can provide this functionality, but the most widely used and accepted is what is called a [Cloud-Optimized GeoTIFF (COG)](https://www.cogeo.org/). A COG has several important features:

- **Internally tiled**: Internally, data is stored in smaller tiles. This enables efficient reads when reading just a portion of the image

- **Internal File Directory (IFD)**: An IFD is stored in the header of every GeoTIFF, and is a directory of byte locations in the image. This allows clients to read the header and get the precise byte locations

- **Overviews**: Sometimes users don't need images at it's full resolution. By providing reduced resolution overviews with the data the data can be accessed much faster.

### Image Catalogs and Searching

Another challenge in using satellite imagery is in first finding and getting satellite imagery. Every data provider uses their own unique catalog for inventorying their data, using their own field names and conventions. If they have an API, this too is unique, so that a client has to adapt to each provider. This is confusing for human users, and further it is difficult if not impossible to create software clients that can be used across catalogs from different data providers.

The [Spatio-Temporal Asset Catalog (STAC) specification](https://github.com/radiantearth/stac-spec) is a recent effort to develop a standard for geospatial data providers to make catalogs of their data accessible in a standard way. Using this, a single software client can query different catalogs in the same way, users know what metadata fields mean without relying on provider specific documentation, and they can focus on how to use the data rather than how to get the data.

The STAC spec is still being developed, however there is an [STAC API implementation](https://medium.com/devseed/sat-api-an-api-for-spatiotemporal-asset-catalogs-88c3c78fdb0e) that allows searching of the entire Landsat-8 and Sentinel-2 data that is stored on AWS. It can be accessed at http://sat-api.developmentseed.org/search/stac, or with the [sat-search STAC client](https://github.com/sat-utils/sat-search).
