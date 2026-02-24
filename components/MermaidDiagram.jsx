"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function MermaidDiagram({ chart, className = "" }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "base",
        securityLevel: "loose",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis",
        },
        sequence: {
          useMaxWidth: true,
          actorMargin: 80,
          messageMargin: 40,
        },
      });

      try {
        chartRef.current.removeAttribute("data-processed");
        chartRef.current.innerHTML = chart;
        mermaid.run({
          nodes: [chartRef.current],
        });
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    }
  }, [chart]);

  return (
    <div className={`mermaid-container ${className}`}>
      <div ref={chartRef} className="mermaid" style={{ minHeight: "400px" }}>
        {chart}
      </div>
      <style jsx>{`
        .mermaid-container {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          overflow-x: auto;
          min-height: 400px;
        }
        :global(.dark) .mermaid-container {
          background: #1f2937;
        }
        .mermaid {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 100%;
        }
        .mermaid :global(svg) {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }
        .mermaid :global(.node rect) {
          stroke-width: 2px !important;
          rx: 8px !important;
          ry: 8px !important;
        }
        .mermaid :global(.node circle),
        .mermaid :global(.node polygon) {
          stroke-width: 2px !important;
        }
        .mermaid :global(.cluster rect) {
          stroke-width: 2px !important;
          rx: 12px !important;
          ry: 12px !important;
        }
        .mermaid :global(.label) {
          font-size: 14px !important;
          font-weight: 500 !important;
        }
        .mermaid :global(.actor) {
          font-size: 14px !important;
          font-weight: 500 !important;
        }
        .mermaid :global(.messageText) {
          font-size: 13px !important;
        }
        .mermaid :global(.node text) {
          font-size: 14px !important;
        }
        .mermaid :global(.activation0),
        .mermaid :global(.activation1),
        .mermaid :global(.activation2) {
          fill: #f3f4f6 !important;
          rx: 4px !important;
        }
      `}</style>
    </div>
  );
}
