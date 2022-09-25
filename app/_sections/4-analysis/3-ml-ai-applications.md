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

#### Unsupervised Classification (calculated by software):
In this method, groupings of pixels with common characteristics are determined by the software’s analysis of an image without the user providing sample classes. The computer uses techniques to determine which pixels are related and groups them into the most common feature types found in the image which can include buildings, forest, and water. The user can specify which algorithm the software will use and the desired number of output classes but otherwise does not aid in the classification process. However, the user must have knowledge of the area being classified when the groupings of pixels with common characteristics produced by the computer are related to actual features on the ground (such as wetlands, developed areas, coniferous forests, etc.).

#### Supervised Classification (human-guided): 
This approach is based on the idea that a user can select sample pixels (training data) in an image that are representative of specific classes and then direct the image processing software to use these training sites as references for the classification of all other pixels in the image. The training data are selected based on the knowledge of the user. The user also sets the bounds for how similar other pixels must be to group them together. These bounds are often set based on the spectral characteristics of the training area, plus or minus a certain increment (often based on “brightness” or strength of reflection in specific spectral bands). For example, a user incorporate NDVI into a supervised classification and set a maximum/minimum NDVI value for a certain class. The user also designates the number of classes that the image is classified into. Many analysts use a combination of supervised and unsupervised classification processes to develop final output analyses and classified maps.

The following demonstrates a user creating an “Urban” classifier by selecting pixels from the image that represents an urban area. The computer will then learn to recognize similar patterns and pixel values and classify them as “Urban” without further human intervention
