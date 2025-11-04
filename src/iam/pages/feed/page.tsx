import { FeedList } from "@/iam/layout/components/feed-list.tsx";
import { FeedViewMessage } from "@/iam/layout/components/feed-view-message";

export function FeedPage() {
    return (
        <div className="flex grow gap-1 relative">
            <FeedList />
            <FeedViewMessage />
        </div>
    );
}
