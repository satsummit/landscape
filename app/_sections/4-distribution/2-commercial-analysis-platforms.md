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

- [GBDX](https://platform.digitalglobe.com/gbdx/) is cloud-based imagery and analysis platform from DigitalGlobe (DG).  DG has a large high-resolution satellite imagery archive that can be queried, ordered, and analyzed through GBDX.

- [GBDX notebooks](https://notebooks.geobigdata.io/hub/tutorials/list) are a good place to start. A GBDX notebook is an IPython notebook base where you can easily document a workflow, write a python script, an execute it. As a beginner, you can pick up a few tricks around satellite imagery processing quickly through the hands-on tutorials, e.g. accessing imagery from the catalog, ordering imagery, and writing customized image processing tasks. However, DG has not opened many algorithms yet, and it's pretty hard to apply machine learning algorithms at scale through the notebook.

- [GBDX tools](https://github.com/DigitalGlobe/gbdxtools) is a python SDK tool to use if you are an engineer, analyst, or developer. DG provides some deep learning showcases through their [GBDX stories](http://gbdxstories.digitalglobe.com/) for neural net based feature extraction, object detection, and image classification.  The workflows require cloud-based computing and GBDX tools knowledge. Writing GBDX tasks, generating AOI chips, and making predictions using GBDX tools at scale still require a strong coding background.

### Planet

- The most attractive part of Planet Labs' satellite imagery archive is the high temporal resolution that you can make some interesting time-lapse and change comparison visually through [Planet Explore](https://www.planet.com/explorer).

- For imagery and analysis uses, Planet has two APIs available for developers to use. You can do imagery search, filter, download through their Data API, and inject Planet imagery's web tiles and basmaps into your applications through the Tiles and Basemaps API.

- However, Planet does not have a platform and many tutorials ready for the different level of users and needs available yet. [Planetlabs notebooks](https://github.com/planetlabs/notebooks) on GitHub has some IPython notebook showcase how to use planet's imagery, crop classification, ship detection. But they are no many tutorials around machine learning and deep learning, and it's hard to envision ML applications at scale without strong data science and cloud computing knowledge from the users.

### Sentinel Hub
