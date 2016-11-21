This is the implementation of a barnes-hut force layout arlogithm
This algorithm is used to create the force directed layout
As input, the algorithm takes Graphinius.js nodes (or other objects
with the specified fields).
The nodes have a default mass (can be weighted) and edges (also weighted).
The nodes repel each other (anti-gravity) and the edges attract.

The algorithm starts with a root node (in our case the egonode of the social
network). It then takes a second node, calculates the distance of the two nodes
and calculates a position for the second node (direction is random). From then
on, every Node gets placed relatively to all the already placed nodes.

For this algorithm, we will need:
 * algorithm.js     - implementation of the algorithm
 * quadtree.js      - implementation of the quadtree (n-tree can be added later)
 * vector2D.js      - A position (vector) in 2d

