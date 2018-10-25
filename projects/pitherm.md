---
layout: project
type: project
image: images/pitherm/pitherm_square.jpg
title: πTherm
permalink: projects/pitherm
# All dates must be YYYY-MM-DD format!
# date: 2015-08-01
labels:
  - Generative design
  - 3D printing
  - 3D modeling
summary: Design a parametric heat exchanger for metal 3D printing
---

πTherm (pronounced PiTherm) is a parametric heat exchanger initiated by the [Temisth](http://temisth.com/) company based in Marseille, France. Those heat exchangers are designed specifically for metal additive manufacturing, to allow for complex shapes.

Temisth is a thermal engineering R&D company. It develops news heat exchangers for various industries including aerospace. πTherm is a R&D project whose objective is to optimize heat exchanges using all the potential of metallic additive manufacturing. I helped them by designing a dedicated *generative design* tool to create infinite 3D variations of a heat exchanger from a set of constraints defined by the user. Those 3D models are meant to be 3D printing in metal, because it would be very hard to manufacture them with other technologies. 

I used the Rhinoceros3D software and its generative design plugin Grasshopper to design the model. I also developed a custom Grasshopper module in Python. For the early stage *proof of concept* I used the [OpenJsCAD](https://openjscad.org/) online generative design tool, freeing the user from having to setup a dedicated software on her computer.

## The proof of concept

<img width="100%" class="ui" src="../images/pitherm/openjscad_pitherm.png"/>

For this proof on concept, I developed an online 3D configurator with OpenJsCAD which generates 3D models containing honeycomb structures ready for 3D printing according to user-supplied parameters : the overall dimensions of the pipe, and the diameter and thickness of the holes.

The purpose of the proof of concept is to validate the relevance of such an online tool, and the ease of use of such a system.

You can see a preview of the system above, and see it live below.

