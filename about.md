# About

## Why should I care about open science?

[Open science](https://en.wikipedia.org/wiki/Open_science) is a set of principles that aim to improve the quality of scientific research by making it more accessible, reproducible and reusable. 2i2c's demo gallery is designed to showcase powerful and compelling examples of open science in practice that use interactive computing technologies.

## What is interactive computing?

Interactive computing is the ability to bring together data, computation and code that interacts with the user as it runs. [Project Jupyter](https://jupyter.org/) develops open-source software for interactive computing across multiple languages, such as **Ju**lia, **Py**thon and **R**. The Jupyter Notebook is a browser-based interface that allows users to write code and narrative (using Markdown) together in one file in order to bring data and analysis into a single document that can be shared with others.

## Which open source tools make cloud-enabled interactive content sharing possible?

Users limited by local resources (such as their laptop) can also reproduce and share their software environment, access larger datasets and access more compute in the cloud. The demos on this site enables these features by leveraging the following technologies:

::::::{div}
:name: tool-grid

:::::{grid} 2 2 3 3
::::{card}
:link: https://jupyter.org/
:::{image} https://jupyter.org/assets/homepage/main-logo.svg
:class: tool-badge
:::
::::
::::{card}
:link: https://jupyter.org/hub
:::{image} https://jupyter.org/assets/homepage/hublogo.svg
:class: tool-badge
::::
::::{card}
:link: https://jupyter.org/binder
:::{image} https://jupyter.org/assets/logos/binder.svg
:class: tool-badge
::::
::::{card}
:link: https://mystmd.org/
:::{image} https://mystmd.org/build/_assets/logo-wide-AK6GY6DB.svg
:class: tool-badge
:::
::::
::::{card}
:link: https://next.jupyterbook.org/
:::{image} https://next.jupyterbook.org/build/config-item-8634ffd3-26cb306075f4a5bc13a6da37b7a31cca.svg
:class: tool-badge
:::
::::
::::{card}
:link: https://thebe.readthedocs.io/en/stable/
:::{image} https://github.com/jupyter-book/thebe/blob/main/apps/simple/static/thebe_wide_logo.png
:class: tool-badge
:::
::::
:::::
::::::

2i2c integrates these tools together to serve a variety of personas to unlock open science discoveries.

## Who can benefit from this?

::::{grid} 1
:::{card}
A **student** is taking a class and wants to reference curriculum material for their studies. They can visit a static MyST website authored and published by a **teaching assistant**.

Demo: [UC Berkeley Data Science Curriculum Guide](https://curriculum-guide.datahub.berkeley.edu/)
:::

:::{card}
An **instructor** convenes a workshop with interactive computational narratives. **Workshop participants** include scientists, policymakers, and other stakeholders. A public BinderHub service provides a shared compute environment with access to cloud data. Participants can launch into a JupyterLab interface to edit code and explore datasets themselves.

Demo: [TOPS-T ScienceCore: Climate Risks](https://2i2c.org/demo-Sciencecore-climaterisk/), [Project Pythia - Radar Cookbook](https://2i2c.org/demo-Project-Pythia/)
:::

:::{card}
A **researcher** shares tutorials for a software library with live demonstrations. Some tutorials require access to a closed BinderHub service with larger cloud computing resources for data processing routines. **Authorized users** can launch into a JupyterLab interface to edit code and explore datasets themselves using this larger resource.

Demo: [Manipulating ICESat-2 Data with icepyx](https://2i2c.org/demo-icepyx/)
:::

::::

:::{seealso}
To access the big BinderHub you will need to be member of a NASA community. This requires a GitHub account for membership of the GitHub Team `2i2c-nasa-binder-access:big-binder-team` for authorization. Please send us an email at [binder-requests@2i2c.org](mailto:binder-requests@2i2c.org) to be added to the GitHub Team.
:::

## How can I get involved?

We're always happy to grow our network of community hubs! We currently prioritize running infrastructure for a diverse group of organizations for both research and educational use-cases. In particular, we wish to serve institutions with limited resources or those from historically under-represented institutions.

[**Join our network**](https:2i2c.org/join)

## How do I contribute?

We welcome contributions from the community. Please visit our [GitHub repository](https://github.com/2i2c-org/demo-gallery) and open an issue to get started.

## Acknowledgements

The resources to provide the BinderHub and JupyterHub services for this demo gallery were provided by NASA NSPIRES F.15 High Priority Open-Source Science Award NNH22ZDA001N-HPOSS. Please see our [blog post](https://2i2c.org/blog/2024/nasa-ephemeral-hubs/) for more information.

---

:::{note}
:name: note-launcher

The rocket button 🚀 can be used to open a specific page in a properly-configured BinderHub or JupyterHub. This can be used to explore published content in a fully-fledged editor (such as vscode, or JupyterLab), or access particular data-storage.
:::

:::{hint} Why does Binder take so long to launch?
:name: hint-binder

Binder is a great tool for sharing code and data, but it can be slow to start up. This is because Binder needs to build an image to provide the software environment that includes all of the dependencies needed to run your notebooks. The first time you use Binder, this process takes longer than usual. Subsequent launches are faster as the image is cached on the cloud and does not need to be rebuilt.

For more details, check out this [Jupyter Discourse post](https://discourse.jupyter.org/t/how-to-reduce-mybinder-org-repository-startup-time/4956).
:::
