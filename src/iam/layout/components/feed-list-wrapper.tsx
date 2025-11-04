'use client';

import { cn } from "@/lib/utils";
import { useLayout } from "./use-layout";

export function FeedListWrapper({children, className}: {children: React.ReactNode, className?: string}) {
    const { isMailViewExpanded, isMobile } = useLayout();

    return (
        <div className={cn(
            'bg-background border border-input rounded-xl shadow-xs',
            'w-full lg:w-[300px] xl:w-(--feed-list-width) shrink-0',
            // Mobile: hide list when mail view is expanded
            isMobile && isMailViewExpanded && 'hidden',
            className
        )}>
            {children}
        </div>
    );
}