---
layout: project
type: project
image: images/legone/yoghurt-tray.png
title: Parametric yoghurt tray
permalink: projects/yoghurt-tray
# All dates must be YYYY-MM-DD format!
date: 2018-10-15
labels:
  - Generative design
  - 3D printing
summary: A parametric yoghurt tray
---
<iframe id="sd-iframe-13923" style="width:100%;height:450px" frameBorder="0" allowFullScreen src="https://shapediver.com/embed/yoghurt-tray?viewerSettings=%7B%22allowFullscreen%22%3Atrue%2C%22showZoomControl%22%3Afalse%2C%22cameraRevertAtMouseUp%22%3Afalse%2C%22cameraAutoAdjust%22%3Afalse%2C%22staticControls%22%3Afalse%7D">
    <p><a href='https://www.shapediver.com'>3d configurator powered by <b>ShapeDiver</b></a></p>
</iframe>
<script>document.getElementById('sd-iframe-13923').onload = function(){this.contentWindow.postMessage({'iFrameInit':true},'https://www.shapediver.com');}</script>

This is a tray designed as a reusable carrying devices for artisanal yoghurts produced by the local cheese factory and shop [Fromagerie Neuvilloise Le Gone](http://www.fromagerieneuvilloise.fr). It is meant to be 3D printed with FDM 3D printers. The low volume (~300 pieces) should be produced in a month using several 3D printers in parallel.

I created a Rhinoceros3D Grasshopper script and uploaded it to [ShapeDiver](https://shapediver.com) to create an online 3D configurator out of it.

The online 3D configurator is available here: [Yoghurt Tray on ShapeDiver](https://shapediver.com/m/yoghurt-tray).

Please note that not all configurations are possible, and that this script is pretty much a work in progress and a showcase. The initial demand was for a tray of 2x3 yoghurt pots, and others configurations are optional.

<img src="../images/legone/yoghurt-tray-grasshopper.png" width="100%"/>

Here is what the Grasshopper looks like. I factorized some common functionalities under Grasshopper "*clusters*" which appear as a single block in the picture above. The full graph should thus appear much more complex than it actually looks.
