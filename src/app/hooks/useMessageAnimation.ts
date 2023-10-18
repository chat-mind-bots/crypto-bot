"use client";
import { useSpring } from "@react-spring/web";

export const useMessageAnimation = () => {
  const initial = {
    opacity: 1,
    y: 0,
    zIndex: 2,
  };

  const hidden = {
    y: -20,
    scale: 0.9,
    opacity: 0.2,
    zIndex: 0,
  };

  const end = {
    display: "block",
    y: 20,
    opacity: 0,
    zIndex: 2,
  };

  const [firstBlock, apiFirstBlock] = useSpring(() => ({
    from: { ...initial },
    config: { duration: 500 },
  }));
  const [secondBlock, apiSecondBlock] = useSpring(() => ({
    from: { ...end },
    config: { duration: 500 },
  }));
  const [thirdBlock, apiThirdBlock] = useSpring(() => ({
    from: { ...end },
    config: { duration: 500 },
  }));

  const styles = [firstBlock, secondBlock, thirdBlock];

  const firstTick = () => {
    apiFirstBlock.start({ to: { ...hidden } });
    apiSecondBlock.start({ to: { ...initial } });
    apiThirdBlock.start({ to: { ...end } });
    secondTick();
  };

  const secondTick = () => {
    apiFirstBlock.start({ to: { ...end }, delay: 2000 });
    apiSecondBlock.start({ to: { ...hidden }, delay: 2000 });
    apiThirdBlock.start({ to: { ...initial }, delay: 2000 });
    thirdTick();
  };

  const thirdTick = () => {
    apiFirstBlock.start({
      to: { ...initial },
      delay: 4000,
    });
    apiSecondBlock.start({ to: { ...end }, delay: 4000 });
    apiThirdBlock.start({ to: { ...hidden }, delay: 4000 });
  };

  return { styles, firstTick };
};
