import React from "react";

export const animate = (prevBoundingBox, boundingBox, children) => {
  React.Children.forEach(children, (child) => {
    const domNode = child.ref.current;
    const firstBox = prevBoundingBox[child.key];
    const lastBox = boundingBox[child.key];
    const changeInX = firstBox.left - lastBox.left;

    if (changeInX) {
      requestAnimationFrame(() => {
        // Before the DOM paints, invert child to old position
        domNode.style.transform = `translateX(${changeInX}px)`;
        domNode.style.transition = "transform 0s";

        requestAnimationFrame(() => {
          // After the previous frame, remove
          // the transistion to play the animation
          domNode.style.transform = "";
          domNode.style.transition = "transform 500ms";
        });
      });
    }
  });
};
