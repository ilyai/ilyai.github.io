---
layout: post
title: "RESTful HTTP methods support across browsers"
date: 2013-06-11 12:10:32
categories: rest http
---

Surprisingly, all of the information I've found on the net about this wasn't quite clear
and reliable. So I decided to write a small test determine support for PUT, PATCH and DELETE
methods using Node.js and run it in all major browsers.
 
{% gist 5798712 %}

Running test yielded these results:

<table>
  <tr>
    <td>Chrome</td>
    <td>OK</td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>OK</td>
  </tr>
  <tr>
    <td>IE9</td>
    <td>OK</td>
  </tr>
  <tr>
    <td>IE8</td>
    <td>OK, except PATCH</td>
  </tr>
  <tr>
    <td>IE7</td>
    <td>OK, except PATCH</td>
  </tr>
  <tr>
    <td>IE6</td>
    <td>OK</td>
  </tr>
</table>
