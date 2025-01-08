"use client";
import React, { useEffect, useRef } from "react";
import useWindow from "@/utils/useWindow";

export default function Scene() {
  const { dimension } = useWindow();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPosition = useRef<{ x: number; y: number } | null>(null);

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY, movementX, movementY } = e;
    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current;

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);

        draw(targetX, targetY, 50);
      }
    }

    prevPosition.current = { x: clientX, y: clientY };

    draw(clientX, clientY, 50);
  };

  const draw = (x: number, y: number, radius: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill(); // Reveals the content beneath
  };

  useEffect(() => {
    if (dimension.width > 0) {
      init();
    }
  }, [dimension]);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill the canvas to fully cover the area
    ctx.fillStyle = "#455CE9"; // Set the initial color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set global composite operation to reveal on draw
    ctx.globalCompositeOperation = "destination-out";
  };

  return (
    <canvas
      ref={canvasRef}
      height={dimension.height}
      width={dimension.width}
      className="absolute top-0 left-0"
      onMouseMove={manageMouseMove}
    />
  );
}
