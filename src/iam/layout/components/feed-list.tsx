import { ScrollArea } from "@/components/ui/scroll-area";
import { FeedListHeader } from "@/iam/layout/components/feed-list-header";
import { FeedListWrapper } from "@/iam/layout/components/feed-list-wrapper";

export function FeedList() {
    return (
        <FeedListWrapper>
            <FeedListHeader />
            <div className="px-4 py-1">
                <ScrollArea className="lg:h-[calc(100vh-5.5rem)]">
                    <div className="space-y-1"></div>
                </ScrollArea>
            </div>
        </FeedListWrapper>
    );
}