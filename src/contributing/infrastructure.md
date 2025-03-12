---
title: 'About the Learn Astropy Infrastructure'
slug: '/contributing/infrastructure'
---

# Overview

The main interface to accessing tutorials and guides developed by the Astropy community is through the [Learn Astropy website](https://learn.astropy.org). This website provides a dynamic search bar that enables searching educational resources that are indexed by Learn Astropy, but it is not the main location where this material is hosted. For example, the Astropy tutorials are written as Jupyter notebooks in the [astropy-tutorials](https://github.com/astropy/astropy-tutorials) repository, and the guides are written as individual Jupyter books in the Astropy organization (e.g., [the CCD reduction guide](https://github.com/astropy/ccd-reduction-and-photometry-guide)). More information about the infrastructure that renders the tutorials and guides is given below.

## Astropy Tutorials

The Astropy tutorials are written as Jupyter notebooks and stored in subdirectories within the `tutorials` folder of the [astropy-tutorials](https://github.com/astropy/astropy-tutorials) repository. These notebook files do not contain output in order to reduce the file size burden of version-controlling the files, but the notebooks are executed and rendered as static HTML pages and then ingested into the Learn Astropy website.

The rendered Astropy tutorials are generated using [nbcollection](https://github.com/astropy/nbcollection), which is a lightweight wrapper around [nbconvert](https://nbconvert.readthedocs.io/) that handles executing and converting nested directory structures of Jupyter notebook files.

We use GitHub actions for continuous integration, which runs [nbcollection](https://github.com/astropy/nbcollection) on the tutorials in the [astropy-tutorials](https://github.com/astropy/astropy-tutorials) repository and passes on the rendered HTML pages to the Learn Astropy website build infrastructure, described below.

### Tutorials Directory Structure

The notebook files are be written as individual Jupyter notebooks in subdirectories within the `tutorials` folder. One folder can contain multiple tutorial files, for example [the Astropy coordinates tutorials](https://github.com/astropy/astropy-tutorials/tree/main/tutorials/astropy-coordinates).

### Testing notebook build and render locally

You can test the Astropy tutorials build machinery locally using [nbcollection](https://github.com/astropy/nbcollection) through the provided [Makefile](https://github.com/astropy/astropy-tutorials/blob/main/Makefile). For example, by running:

    make

in the root of the cloned `astropy-tutorials` repository, this will (1) check your local Python environment to make sure you have installed all dependencies (specified in the [pip requirements file](https://github.com/astropy/astropy-tutorials/blob/main/pip-requirements.txt)), (2) execute the notebooks using `nbcollection`/`nbconvert`, (3) convert the executed notebooks to HTML using `nbcollection`/`nbconvert`. You can run these commands separately, for example, to just execute the tutorials:

    make execute

Or to then convert the tutorials to HTML:

    make convert

These commands will create a `build` path in the root of the repository folder that, if the commands execute successfully, will contain the executed tutorial notebooks and the converted HTML versions of each tutorial.

TODO: run only the modified ones locally??

## Learn Astropy Website Infrastructure

TODO: briefly describe algolia and website infrastructure.
