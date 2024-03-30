"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRef, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScroll = useRef<number>(0);

  useLenis(({ scroll }) => {
    if (scroll > lastScroll.current) {
      setDirection("down");
    } else {
      setDirection("up");
    }

    lastScroll.current = scroll;
  });

  return direction;
}
