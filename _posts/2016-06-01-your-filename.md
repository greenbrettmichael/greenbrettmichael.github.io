---
layout: post
published: false
title: ''
---
## d
<h1>EULER ANGLE TO CARTESIAN COORDINATES</h1>
  If you work with technical documentation from skilled laborers or engineers, you will often find jargon that makes the math of the trade the easiest to understand in implement. Unfortunately this usually leaves those outside the trade (e.g. software developers, journalists) with a learning curve. If you have watched Top Gun, or played a video game that included a flight sim, you have been exposed to terms like: yaw, pitch, and roll; these are an example of Euler Angle notation. Below is a table that describes a few scenarios with their respective notation:
<table style="height: 111px;" width="803">
<tbody>
<tr>
<td width="162">Scenario</td>
<td width="162">Airplane Directions</td>
<td width="162">Angular velocity</td>
<td width="162">Telescope Position</td>
<td width="162">Associated Symbol</td>
</tr>
<tr>
<td width="162">Rotation about z</td>
<td width="162">heading</td>
<td width="162">yaw</td>
<td width="162">azimuth</td>
<td width="162">θ</td>
</tr>
<tr>
<td width="162">Rotation about y</td>
<td width="162">attitude</td>
<td width="162">pitch</td>
<td width="162">elevation</td>
<td width="162">φ</td>
</tr>
<tr>
<td width="162">Rotation about x</td>
<td width="162">bank</td>
<td width="162">roll</td>
<td width="162">tilt</td>
<td width="162">ψ</td>
</tr>
</tbody>
</table>
Visual Example of yaw, pitch and roll from wikipedia user <a title="User:Auawise" href="https://commons.wikimedia.org/wiki/User:Auawise">Auawise</a>

<img src="{{ site.baseurl }}/img/yaw_axis_corrected-svg.png" />


It may be more convenient mathematically to use Cartesian coordinates. In order to do this, simply apply the rotation matrices. If you have forgotten your linear algebra here they are below:

<img src="{{ site.baseurl }}/img/Rotations.png" />

The final rotation being

<img src="{{ site.baseurl }}/img/Rotation.png" />

&nbsp;

&nbsp;

http://www.staff.city.ac.uk/~sbbh653/publications/euler.pdf

http://www.euclideanspace.com/maths/geometry/rotations/euler/

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
