import React from 'react';
import './InfoPercolation.css';

function InfoPercolation() {
  return (
    <div className="info">
      <p className="lead">
        Percolation is the process of a liquid passing through a medium that has empty spaces inside.
        In order to simulate percolation we can use Monte Carlo method in which there is initially a grid
        of blocked square sites. As the simulation proceeds, blocked sites are opened and they get filled
        if they have contact with surface above. When a site at the bottom gets filled we say that the
        system percolates. A system percolates when approximately 60% of the sites are open. Percolation is
        also called phase transition. In the graphic above, there is  a 20x20 grid of squared sites where
        the blue sites percolate, the white sites are empty, and the grey ones are blocked.
      </p>
      <p className="lead">
        Percolation is a case in algorithm theory of dynamic connectivity where the data structure keeps information
        about the components that are connected. Connected components have the same root in a graph.
      </p>
      <p className="lead">
        The basic data structure is a site-indexed id[] array. The entry for id[n] is the name of another site in the same component.
        By following the link on each site we encounter the root, which is a site pointing to itself. The union operation equals the
        roots of two sites.
      </p>
    </div>
  )
}

export default InfoPercolation;
