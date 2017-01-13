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

<div id="wave-table"></div>

#### Mathematic spectral transformations

In addition to False Color composition, spectral bands can be combined mathematically to emphasize a particular set of characteristics. These techniques draw from all relevant bands, rather than the three band limits of false color analysis, to draw out very specific characteristics. These techniques involve greater processing of raw data in order to leverage all available data to cluster signals and minimize noise. While false color can be used to identify agricultural fields, mathematic transformations can detect the health of each field. While false color can distinguish mud from water, mathematic transformations can tell you how wet the mud is.

{% include side-image.html title="Vegetation Indices" image="ndvi-thumb" definition="Multiplying the data from spectral bands in different combinations produces an index that can be used to compare every point in an image on the same scale. The most common indexes measure vegetation health and distinguish between types of plants, such as Normalized Difference Vegetation Index (NDVI) and Enhanced Vegetation Index (EVI)." %}

{% include side-image.html title="Principle Component Analysis" image="pca-thumb" definition="Principle Component Analysis (PCA) decorrelates the data within each spectral band, such that the most common characteristics of all bands are placed in the highest category and less common characteristics are placed in lower categories until all variance is explained. It is invaluable for exploration of data and landscape characteristics, simultaneously drawing attention to the most noteworthy and best-hidden features in a scene."%}

{% include side-image.html title="Kauth-Thomas" image="tasscap-thumb" definition="KT-Transformations are a type of PCA, which, rather than being data-driven, combine information from multiple bands using specially developed coefficients to create the biophysically meaningful variables of Brightness, Greenness, and Wetness- the essential components of a landscape." %}

