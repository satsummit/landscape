---
layout: default
scripts:
permalink: analysis/spectral-combinations.html
title: "Spectral Combinations"
parent: analysis

prev: Analysis
next: Advanced Analysis

---

# Spectral Combinations

---

There are several well-known combinations that are optimized to provide maximum contrast between categories of interest under various use cases.

| Combination Name | Red Wavelength | Green Wavelength | Blue Wavelength | LS 8 Bands
| --- | --- | --- |
| Natural Color (actual RGB) | 0.64-0.67&#xb5;m | 0.53-0.59&#xb5;m | 0.45-0.51&#xb5;m | 4 3 2 |
| False Color (urban) | 2.11-2.29&#xb5;m | 1.57-1.65&#xb5;m | 0.64-0.67&#xb5;m | 7 6 4 |
| Color Infrared (vegetation) | 0.85-0.88&#xb5;m | 0.64-0.67&#xb5;m | 0.53-0.59&#xb5;m | 5 4 3 |
| Agriculture | 0.85-0.88&#xb5;m | 0.64-0.67&#xb5;m | 0.53-0.59&#xb5;m | 5 4 3 |
| Atmospheric Penetration | 2.11-2.29&#xb5;m | 1.57-1.65&#xb5;m | 0.85-0.88&#xb5;m | 7 6 5 |
| Healthy Vegetation | 0.85-0.88&#xb5;m | 1.57-1.65&#xb5;m | 0.45-0.51&#xb5;m | 5 6 2 |
| Land/Water | 0.85-0.88&#xb5;m | 1.57-1.65&#xb5;m | 0.64-0.67&#xb5;m | 5 6 4 |
| Natural With Atmospheric Removal | 2.11-2.29&#xb5;m | 0.85-0.88&#xb5;m | 0.53–0.59&#xb5;m | 7 5 3 |
| Shortwave Infrared | 2.11-2.29&#xb5;m | 0.85-0.88&#xb5;m | 0.53–0.59&#xb5;m | 7 5 3 |
| Vegetation Analysis | 1.57-1.65&#xb5;m | 0.85-0.88&#xb5;m | 0.64-0.67&#xb5;m | 6 5 4 |

#### Mathematic spectral transformations

In addition to False Color composition, spectral bands can be combined mathematically to emphasize a particular set of characteristics. These techniques draw from all relevant bands, rather than the three band limits of false color analysis, to draw out very specific characteristics. These techniques involve greater processing of raw data in order to leverage all available data to cluster signals and minimize noise. While false color can be used to identify agricultural fields, mathematic transformations can detect the health of each field. While false color can distinguish mud from water, mathematic transformations can tell you how wet the mud is.

{% include side-image.html title="Vegetation Indices" image="ndvi-thumb.png" definition="Multiplying the data from spectral bands in different combinations produces an index that can be used to compare every point in an image on the same scale. The most common indexes measure vegetation health and distinguish between types of plants, such as Normalized Difference Vegetation Index (NDVI) and Enhanced Vegetation Index (EVI)." %}

{% include side-image.html title="Principle Component Analysis" image="pca-thumb.png" definition="Principle Component Analysis (PCA) decorrelates the data within each spectral band, such that the most common characteristics of all bands are placed in the highest category and less common characteristics are placed in lower categories until all variance is explained. It is invaluable for exploration of data and landscape characteristics, simultaneously drawing attention to the most noteworthy and best-hidden features in a scene."%}

{% include side-image.html title="Kauth-Thomas" image="tasscap-thumb.png" definition="KT-Transformations are a type of PCA, which, rather than being data-driven, combine information from multiple bands using specially developed coefficients to create the biophysically meaningful variables of Brightness, Greenness, and Wetness- the essential components of a landscape." %}

