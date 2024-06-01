import React, { useRef, useEffect } from 'react';
import '/src/css/DNA.css';
import * as d3 from 'd3';

const DNAOrgChart = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current && data) {
      const svg = d3.select(d3Container.current);
      svg.selectAll('*').remove(); // Clear previous content

      const width = 1000; // Increase width for more horizontal space
      const height = 1500; // Increase height for more vertical space
      const margin = { top: 20, right: 120, bottom: 20, left: 120 };

      svg.attr('width', width).attr('height', height);

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      const root = d3.hierarchy(data);
      const treeLayout = d3.tree().size([width - margin.left - margin.right, height - margin.top - margin.bottom]);
      treeLayout(root);

      // Adjust node positions to add margin and spread out the graph
      root.descendants().forEach((d, i) => {
        d.y = d.depth * 100; // Increase vertical spacing
      });


      // Links
      g.selectAll('.link')
        .data(root.links())
        .enter()
        .append('line')
        .classed('link', true)
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .style('stroke', 'black');

      // Nodes
      const node = g.selectAll('.node')
        .data(root.descendants())
        .enter()
        .append('g')
        .classed('node', true)
        .attr('transform', d => `translate(${d.x},${d.y})`);

      node.append('rect')
        .attr('width', 150)
        .attr('height', 50)
        .attr('x', -75) // Position the rectangle to center it at the node
        .attr('y', -25) // Adjusted y to center vertically
        .attr('rx', 12) // Horizontal radius for rounded corners
        .attr('ry', 12) // Vertical radius for rounded corners
        .style('stroke', 'black')
        .style('fill', '#d6e6ff');

      node.append('text')
        .attr('x', 0)
        .attr('y', -20)
        .attr('dy', '1em') // Vertical alignment
        .style('text-anchor', 'middle')
        .text(d => d.data.name);

      node.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '1em') // Vertical alignment
        .style('text-anchor', 'middle')
        .text(d => d.data.mutation);
    }
  }, [data]);

  return <svg className="DNAchart" ref={d3Container} />;
};

export default DNAOrgChart;

