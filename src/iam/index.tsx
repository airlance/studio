import { Routes, Route, Navigate } from 'react-router-dom';
import { FeedPage } from "@/iam/pages/feed/page";
import { Layout } from "@/iam/layout";

export default function IamModule() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Navigate to="feed" replace />} />
                <Route path="feed" element={<FeedPage />} />
            </Route>
        </Routes>
    )
}