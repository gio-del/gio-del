---
layout: ../../layouts/ProjectLayout.astro
title: 'Graph Ranker'
pubDate: 2023-01-13
github: 'https://github.com/gio-del/Progetto-API-2020-21'
tags: ["c", "data-structures-and-algorithms"]
---
The project aims to maintain a ranking of weighted directed graphs, where the ranking keeps track of the k "best" graphs. The program takes in two parameters, the number of nodes in the graphs (n) and the length of the ranking (k), followed by a series of commands. These commands include:
- **AddGraph [adjacency matrix]**: This command adds a new graph to be considered for the ranking. The adjacency matrix of the graph is provided,with elements separated by commas and one row per line. The nodes in the graph are assumed to be labeled with integers between 0 and n-1, and the node in position 0 corresponds to the first row of the matrix. The edges in the graph have integer weights in the range [0, 2^32-1].
- **TopK**: This command prints the indices of the k graphs with the k smallest values of the sum of the shortest paths from node 0 to all other nodes in the graph. If there are multiple graphs with the same metric value, the first arrivals are given priority. The distances of the nodes not reachable from node 0 are considered null. The indices are printed on a single line separated by spaces in any order.