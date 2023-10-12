import React from "react";

export const animate = (
  prevBoundingBox,
  boundingBox,
  children,
  isDirectionByX,
  opacityEnable = true,
  isFixed = false,
) => {
  const maxCount = React.Children.count(children);
  // eslint-disable-next-line sonarjs/cognitive-complexity
  React.Children.forEach(children, (child, index) => {
    const domNode = child.ref.current;
    const firstBox = prevBoundingBox[child.key];
    const lastBox = boundingBox[child.key];
    const changeInX = firstBox.left - lastBox.left;
    const changeInY = firstBox.top - lastBox.top;
    if (isFixed || changeInX || changeInY) {
      requestAnimationFrame(() => {
        if (isDirectionByX) {
          domNode.style.transform = `translateX(${changeInX}px)`;
        }
        if (!isDirectionByX) {
          domNode.style.transform = `translateY(${changeInY}px)`;
        }
        if (opacityEnable && index === maxCount - 1) {
          domNode.style.opacity = 0.5;
        }
        domNode.style.transition = "transform 0s";

        requestAnimationFrame(() => {
          // the transistion to play the animation
          domNode.style.transform = "";
          domNode.style.transition = `transform 500ms, opacity 500ms`;
          if (opacityEnable) {
            domNode.style.opacity = 1;
          }
        });
      });
    }
  });
};
