'use client';

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLayout } from "./use-layout";

export function FeedViewWrapper({children, className}: {children: ReactNode, className?: string}) {
    const { isMailViewExpanded, isMobile } = useLayout();

    return (
        <div className={cn(
            'bg-background grow',
            'lg:w-[calc(100%-300px)] xl:w-(--feed-view-width)',
            // Desktop: always visible
            'lg:block',
            // Mobile: positioned absolutely over the list when expanded
            isMobile && !isMailViewExpanded && 'hidden',
            isMobile && isMailViewExpanded && 'fixed inset-0 z-50 m-0',
            className
        )}>
            {children}
        </div>
    );
}