---
layout: default
scripts:
permalink: distribution/commercial-analysis-platforms.html
title: "Commercial Analysis Platforms"
parent: distribution

prev: Distribution
next: Applications

---

# Commercial Analysis Platforms

---

### GBDX

- [GBDX](https://platform.digitalglobe.com/gbdx/) is a cloud-based imagery and analysis platform from DigitalGlobe (DG).  DG has a large high-resolution satellite imagery archive that can be queried, ordered, and analyzed through GBDX.

- [GBDX notebooks](https://notebooks.geobigdata.io/hub/tutorials/list) are a good place to start. A GBDX notebook is an IPython notebook base where you can easily document a workflow, write a python script, an execute it. As a beginner, you can pick up a few tricks around satellite imagery processing quickly through the hands-on tutorials, e.g. accessing imagery from the catalog, ordering imagery, and writing customized image processing tasks. However, DG has not opened many algorithms yet, and it's pretty hard to apply machine learning algorithms at scale through the notebook.

- [GBDX tools](https://github.com/DigitalGlobe/gbdxtools) is a python SDK tool to use if you are an engineer, analyst, or developer. DG provides some deep learning showcases through their [GBDX stories](http://gbdxstories.digitalglobe.com/) for neural net based feature extraction, object detection, and image classification.  The workflows require cloud-based computing and GBDX tools knowledge. Writing GBDX tasks, generating AOI chips, and making predictions using GBDX tools at scale still require a strong coding background.

### Planet

- The most attractive part of Planet's satellite imagery archive is the high temporal resolution.  This frequency allows you to do unique analysis and make more granular change comparisons using [Planet Explorer](https://www.planet.com/explorer).

- For imagery and analysis uses, Planet has two APIs available for developers. You can do imagery search, filter, and download through their [Data API](https://developers.planet.com/docs/api/searches-filtering/), and inject Planet imagery's web tiles and basemaps into your applications through the [Tiles and Basemaps API](https://developers.planet.com/docs/api/tile-services/).

- Planet's [analysis platform](https://www.planet.com/products/analytics/) is still in beta, and there are not many tutorials ready for different level of users yet. [Planet Interactive Guides](https://github.com/planetlabs/notebooks) on GitHub contain IPython notebooks which showcase how to access Planet's imagery and use it for crop classification and ship detection. Without more tutorials around machine learning and deep learning, it's hard to envision machine learning applications at scale without a strong data science and cloud computing knowledge from the users.

### Sentinel Hub

- [Sentinel Hub](https://www.sentinel-hub.com/) is a cloud-based platform for accessing Sentinel data from ESA. The data itself is free and open-source but this commercial platform provides a streamlined way of accessing the data compared to free alternatives. It also provides access to other open source data like Landsat and MODIS.

- Sentinel Hub provides two browsers, [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground) and [EO Browser](https://apps.sentinel-hub.com/eo-browser/), for exploring data visually. Both allow you to update band combinations in-browser. They are powered by a [configurable OGC API](https://www.sentinel-hub.com/develop/capabilities/wms) that users can also access with an account.

- Sentinel Hub doesn't currently host any analysis tools or services. They are developing an open source analysis toolkit [`eo-learn`](https://github.com/sentinel-hub/eo-learn) which integrates with Sentinel Hub data. 
