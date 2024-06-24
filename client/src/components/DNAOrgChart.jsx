import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import '/src/css/DNA.css';

const DNAOrgChart = ({ data }) => {
  const d3Container = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1400, height: 800 });

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setDimensions({ width: 600, height: 400 }); // Adjust dimensions for small screens
    } else {
      setDimensions({ width: 1400, height: 800 }); // Default dimensions for larger screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (d3Container.current && data) {
      const svg = d3.select(d3Container.current);
      svg.selectAll('*').remove(); // Clear previous content

      const { width, height } = dimensions;
      const margin = { top: 100, right: 100, bottom: 20, left: 100 }; // Increased top margin

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
        .style('stroke', '#a4a4a4');

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
        .style('fill', d => d.data.color || '#8fb6ff'); // Apply the color from the data or a default color

      node.append('text')
        .attr('x', 0)
        .attr('y', -20)
        .attr('dy', '1em') // Vertical alignment
        .style('text-anchor', 'middle')
        .style('fill', d => d.data.textColor || '#202124') // Apply text color from the data or default to black
        .text(d => d.data.name);

      node.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '1em') // Vertical alignment
        .style('text-anchor', 'middle')
        .style('fill', d => d.data.mutationColor || '#202124')
        .text(d => d.data.mutation);
    }
  }, [data, dimensions]);

  return <svg className="DNAchart" ref={d3Container} />;
};

export default DNAOrgChart;

