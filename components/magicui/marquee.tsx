import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, children, pauseOnHover = false, reverse = false, fade = false, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState<number>(0);

    useEffect(() => {
      if (!containerRef.current) return;
      const firstItem = containerRef.current.querySelector('[data-item="true"]');
      if (!firstItem) return;
      setContentWidth(firstItem.scrollWidth);
    }, []);

    return (
      <div
        ref={ref}
        className={cn("flex w-full overflow-hidden [--gap:1rem] [--duration:40s]", className)}
        {...props}
      >
        <div
          ref={containerRef}
          className={cn(
            "animate-marquee flex min-w-full shrink-0 items-center gap-[--gap] [animation-direction:var(--direction,normal)] [animation-duration:var(--duration)] [animation-play-state:var(--play-state,running)]",
            pauseOnHover && "hover:[--play-state:paused]",
            reverse && "[--direction:reverse]"
          )}
        >
          {React.Children.map(children, (child, index) => (
            <div data-item="true" className="flex-shrink-0" key={index}>
              {child}
            </div>
          ))}
        </div>
        
        {contentWidth > 0 && (
          <div
            aria-hidden
            className={cn(
              "animate-marquee flex min-w-full shrink-0 items-center gap-[--gap] [animation-direction:var(--direction,normal)] [animation-duration:var(--duration)] [animation-play-state:var(--play-state,running)]",
              pauseOnHover && "hover:[--play-state:paused]",
              reverse && "[--direction:reverse]"
            )}
          >
            {React.Children.map(children, (child, index) => (
              <div className="flex-shrink-0" key={index}>
                {child}
              </div>
            ))}
          </div>
        )}
        
        {fade && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </>
        )}
      </div>
    );
  }
);

Marquee.displayName = "Marquee";
