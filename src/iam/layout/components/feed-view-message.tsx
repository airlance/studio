import { ScrollArea } from "@/components/ui/scroll-area";
import { FeedViewWrapper } from "./feed-view-wrapper";
import { FeedViewItem } from "@/iam/layout/components/feed-view-item";

export function FeedViewMessage() {
    return (
        <FeedViewWrapper>
            <div className="w-4/5 mx-auto">
                <div className="flex flex-col gap-4">
                    <ScrollArea className="lg:h-[calc(100vh-1rem)] me-1">
                        { <FeedViewItem /> }
                        { <FeedViewItem /> }
                        { <FeedViewItem /> }
                        { <FeedViewItem /> }
                        { <FeedViewItem /> }
                        { <FeedViewItem /> }
                        { <FeedViewItem /> }
                    </ScrollArea>
                </div>
            </div>
            {/*<ScrollArea className="lg:h-[calc(100vh-6rem)] me-1">*/}
            {/*    <div className="flex flex-col items-stretch min-h-[calc(100vh-6rem)]"></div>*/}
            {/*</ScrollArea>*/}
        </FeedViewWrapper>
    );
}