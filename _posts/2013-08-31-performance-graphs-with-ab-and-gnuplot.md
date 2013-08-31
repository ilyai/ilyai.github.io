---
layout: post
title: "Performance graphs with ab and gnuplot"
date: 2013-08-31 00:00:00
categories: visualization
---

There are not many tools for generating graphs of server benchmarking.
But `ab` tool from `apache2-utils` package has an ability of producing results
in [gnuplot](http://www.gnuplot.info/) format. Just run it with the `-g [filename]` option.

    $ ab -n 1000 -c 100 -g benchmark.tsv http://example.com

In order to generate graph as an png image feed this script to gnuplot program. Probably
you should first customize it to your own needs.

    set terminal pngcairo size 800,600 enhanced font 'Arial,10'
    set output "benchmark.png"
    set title "HTTP Server Benchmark #1"
    set grid y
    set xlabel "request"
    set ylabel "response time (ms)"
    plot "benchmark.tsv" using 9 smooth bezier with lines title "some additional information"

And now your graph should be ready.
