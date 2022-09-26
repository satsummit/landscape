---
layout: default
scripts:
permalink: analysis/ml-ai-applications.html
title: "Machine Learning and AI Applications"
parent: analysis

prev: Advanced Analysis
next: Distribution

---

# Machine Learning and AI Applications

---

Machine learning algorithms allow a system to learn and improve from data and experience without being specifically programmed, reducing the level of human intervention. This data-driven approach means valuable information about a natural phenomenon can be extracted from the data alone. Machine learning with satellite data can help to improve predictions about the behavior of environmental systems, improve the automation of data analysis, lead to a better management of resources and the discovery of new insights from complex data sets.  Applications include improved weather forecasting, disaster response, precision agriculture, forest management, population estimation, and urban mapping.

Wider implementation for remote sensing is limited by the availability of accessible, and representative datasets for training the machine learning algorithm. Specific challenges include: the availability of Analysis Ready Data (ARD) that requires expertise, time, and computational power to prepare; the demands on storage, transfer and processing of large data sets; and the demands on having an accurate and well-developed training data set.  Recent developments in cloud storage and ML/AI technologies have allowed for increasing innovation in this approach to analyzing satellite data. 

### Supervised vs. unsupervised Classification

A common type of remote sensing machine learning is image classification, which is the process of categorizing and labeling groups of pixels within an image based on a specific set of rules, or classes. Classification is commonly used to identify various Earth features such as forests, agriculture and crop types, roads and settlements, water bodies and snow, and even various rock types, identifiable in the imagery due to their unique spectral signature. There are two types of image classification; supervised and unsupervised classification.

**Unsupervised Classification (calculated by software):**
In this method, groupings of pixels with common characteristics are determined by the software’s analysis of an image without the user providing sample classes. The computer uses techniques to determine which pixels are related and groups them into the most common feature types found in the image which can include buildings, forest, and water. The user can specify which algorithm the software will use and the desired number of output classes but otherwise does not aid in the classification process. However, the user must have knowledge of the area being classified when the groupings of pixels with common characteristics produced by the computer are related to actual features on the ground (such as wetlands, developed areas, coniferous forests, etc.).

**Supervised Classification (human-guided):** 
This approach is based on the idea that a user can select sample pixels (training data) in an image that are representative of specific classes and then direct the image processing software to use these training sites as references for the classification of all other pixels in the image. The training data are selected based on the knowledge of the user. The user also sets the bounds for how similar other pixels must be to group them together. These bounds are often set based on the spectral characteristics of the training area, plus or minus a certain increment (often based on “brightness” or strength of reflection in specific spectral bands). For example, a user incorporate NDVI into a supervised classification and set a maximum/minimum NDVI value for a certain class. The user also designates the number of classes that the image is classified into. Many analysts use a combination of supervised and unsupervised classification processes to develop final output analyses and classified maps.

The following demonstrates a user creating an “Urban” classifier by selecting pixels from the image that represents an urban area. The computer will then learn to recognize similar patterns and pixel values and classify them as “Urban” without further human intervention

### Feature extraction and instance segmentation

Another type of remote sensing machine learning is image segmentation, or feature extraction, that works to segment an image by assigning a label to every pixel in an image in such a way that pixels that share certain characteristics are captured and classified but remain their own instance. This approach is useful in locating objects and boundaries like lines and curves in the image. Image segmentation is different from image classification in that in image classification for example, all buildings are captured together as one class. In image segmentation, each instance of a building is captured as its own before being classified as “building”. See the example below of example building footprint segmentation data.

Segmentation models require supervised learning, where the human analyst must create data examples (training data) that the model will learn from. For example, if you want to teach a machine learning model to extract building footprints, you must first digitize a training dataset of building outlines in the format you wish the model to extract them in.

The applications of instance segmentation machine learning in remote sensing are various, including environmental monitoring, disaster response mapping, population estimation, route optimization, and spatial modeling to name a few. 

### Platforms For Satellite Data Machine Learning

**Software Solutions** – Many software’s such as ESRI’s ArcGIS platform, L3Harris’s ENVI, or even Picterra’s Geospatial ML Platform have native machine learning functionality built in for ease of use that you can use from any operating system. The models and processes are built into the software to make the machine learning pipeline as simple as possible. Most software solutions come with a cost as most GIS software that has ML capability is proprietary. However, Quantum GIS (QGIS) is a free-to-use, open-source GIS software with limited ML capability. 

**Hardware Solutions** - Linux Ubuntu– For developing your own ml algorithms and code, Linux is an open source (free) operating system often paired with the Linux distribution Ubuntu – it has become a favorite in ML/AI development because there are no inhibiting license requirement and is widely used across the industry. It can be expensive to get the hardware system requirements with GPUs, but it is a onetime fixed cost. 

**Cloud Solutions** – With advancements in cloud compute capabilities, GIS data scientists can opt out of the clunky hardware solution and develop and run ML models in the cloud. Emerging platforms include Microsoft’s Planetary Computer enabled by Microsoft Azure, Google’s cloud that supports Google Colab, and Amazon World Services (AWS). Cloud ML solutions come with their own costs and can become expensive depending on the model compute requirements. Google Colab starts of free to use, and can upgraded for $9.99 month for faster GPUS and more memory 

### Learning Materials & Tools

As the machine learning space develops, an abundance of tools and learning materials are being published and open sourced for a broad community of users. Outlined below are several resources and additional considerations for using machine learning with satellite data.

**GitHub** is a free and open-sourced web-based interface that has become a popular programming resource for data scientists, GIS analysts, and the machine learning community. GitHub serves as a repository for open-source machine learning project documentation, codebases, and additional resources that is free to access and utilize. 
Robin Cole’s Satellite Image Deep Learning GitHub is a page which provides an expansive library of resources for machine learning with satellite imagery including countless resources on cutting edge machine learning projects that deploy classification and segmentation techniques.  
**Radiant ML Hub** is a free and open-source geospatial library offering data and algorithms intended to accelerate the adoption and understanding of ML/AI as it’s applied to remotely sensed data. It houses large datasets of training data for machine learning applications including crop identification and agricultural forecasting, wildfire and flood mapping, building extraction, and land use classification.
**Python** is a free programming language incorporated into many GIS software applications such as ArcGIS and QGIS. It is commonly used in machine learning and other processes to automate geoprocessing tasks. Here is a free introduction course from MIT.
**Anaconda Distribution** is world’s most popular open-source Python distribution platform. It equips individuals to easily search and install thousands of Python/R packages and access a vast library of community content and support satellite imagery analysis.
**Jupyter Notebooks** is a free software and web-based interactive development environment for python (works with other languages as well) notebooks, code, and data. Its interface allows users to configure and arrange workflows in data science and machine learning. It is a common way that project code and different applications/models are shared because it allows for easy replication and extension of the process. Here is an overview from RealPython.
**TensorFlow** is a free and open source software library for machine learning and artificial intelligence. It works with python and C++ languages and is useful for training and inference of deep learning neural networks. 

Additional Resources:
https://link.springer.com/chapter/10.1007/978-3-319-65633-5_8
