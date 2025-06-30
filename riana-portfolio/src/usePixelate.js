import { useEffect } from "react";

export function usePixelate(pixelSize = 8) {
  useEffect(() => {
    const images = document.querySelectorAll("img.pixelated");

    images.forEach((img) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Match layout: set canvas display and size same as image
      canvas.style.display = "inline-block";
      canvas.style.width = img.width + "px";
      canvas.style.height = img.height + "px";
      canvas.className = img.className; // Copy over classes

      img.style.display = "none";
      img.parentNode.insertBefore(canvas, img);

      const applyPixelation = () => {
        const width = img.naturalWidth / pixelSize;
        const height = img.naturalHeight / pixelSize;

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imageData, 0, 0);
        ctx.drawImage(
          canvas,
          0,
          0,
          width,
          height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      };

      if (img.complete) {
        applyPixelation();
      } else {
        img.onload = applyPixelation;
      }
    });
  }, [pixelSize]);
}
