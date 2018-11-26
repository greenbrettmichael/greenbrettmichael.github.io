---
layout: post
published: true
title: EULER ANGLE TO CARTESIAN COORDINATES
---
## EULER ANGLE TO CARTESIAN COORDINATES
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

<img src="{{ site.baseurl }}/img/Yaw_Axis_Corrected.svg.png" />


It may be more convenient mathematically to use Cartesian coordinates. In order to do this, simply apply the rotation matrices. If you have forgotten your linear algebra here they are below:

<img src="{{ site.baseurl }}/img/Rotations.png" />

The final rotation being

<img src="{{ site.baseurl }}/img/Rotation.png" />

&nbsp;

&nbsp;
<script src="{{ site.baseurl }}/js/jquery-1.11.2.min.js"></script>
<script>
$(document).ready(function() {
    $("#calcBtn").click(function(){
    theta = parseFloat($("#yaw").val()) * Math.PI/180;
    psi = parseFloat($("#roll").val()) * Math.PI/180;
    phi = parseFloat($("#pitch").val()) * Math.PI/180;
    $("#a11").text(String((Math.cos(theta)*Math.cos(phi)).toFixed(3)));
    $("#a12").text(
    String((Math.sin(psi)*Math.sin(theta)*Math.cos(phi) - Math.cos(psi)*Math.sin(phi)).toFixed(3)));
    $("#a13").text(
    String((Math.cos(psi)*Math.sin(theta)*Math.cos(phi) + Math.sin(psi)*Math.sin(phi)).toFixed(3)));
    $("#a21").text(
    String((Math.cos(theta)*Math.sin(phi)).toFixed(3)));
    $("#a22").text(
    String((Math.sin(psi)*Math.sin(theta)*Math.sin(phi) + Math.cos(psi)*Math.cos(phi)).toFixed(3)))
    $("#a23").text(
    String((Math.cos(psi)*Math.sin(theta)*Math.sin(phi) - Math.sin(psi)*Math.cos(phi)).toFixed(3)))
    $("#a31").text(
    String((-1*Math.sin(theta)).toFixed(3)));
    $("#a32").text(
    String((Math.sin(psi)*Math.cos(theta)).toFixed(3)));
    $("#a33").text(
    String((Math.cos(psi)*Math.cos(theta)).toFixed(3)));
    }); 
});
</script>
<center>
  <label for="roll">Roll:</label>
  <input type="text" id="roll" name="roll" value="0">
  <br>
  <label for="pitch">Pitch:</label>
  <input type="text" id="pitch" name="pitch" value="0">
  <br>
  <label for="yaw">Yaw:</label>
  <input type="text" id="yaw" name="yaw" value="0">
  <br>
  <input type="button" id="calcBtn" value="CALCULATE CARTESIAN" >
  <br>
  <br>
  <label id="a11">1.000</label>
  <label id="a12">0.000</label>
  <label id="a13">0.000</label>
  <br>
  <label id="a21">0.000</label>
  <label id="a22">1.000</label>
  <label id="a23">0.000</label>
  <br>
  <label id="a31">0.000</label>
  <label id="a32">0.000</label>
  <label id="a33">1.000</label>
</center>

<br>

https//www.staff.city.ac.uk/~sbbh653/publications/euler.pdf

https//www.euclideanspace.com/maths/geometry/rotations/euler/

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
