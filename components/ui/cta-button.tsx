"use client"

import React from 'react';
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Link from 'next/link';

export function CTAButton() {
  return (
    <div className="flex justify-center py-10">
      <Link href="https://cal.com/eshaan-kansal/15min" target="_blank" rel="noopener noreferrer">
        <div className="relative h-[100px] w-[250px]">
          <LiquidButton className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
            BOOK A CALL
          </LiquidButton>
        </div>
      </Link>
    </div>
  );
}
