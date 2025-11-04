import { Outlet } from 'react-router-dom';
import { useLayout } from "@/iam/layout/components/use-layout";
import { Aside } from './aside';
import { Sidebar } from './sidebar';

export function Wrapper() {
    const { isMobile } = useLayout();

    return (
        <>
            <div className="flex flex-col lg:flex-row grow py-(--page-space)">
                <div className="flex grow rounded-xl">
                    {!isMobile && <Sidebar />}
                    {!isMobile && <Aside />}
                    <div className="grow pt-(--header-height-mobile) lg:pt-(--header-height) lg:overflow-hidden lg:ms-(--sidebar-width) lg:in-data-[sidebar-collapsed=true]:ms-(--sidebar-width-collapse) lg:transition-[margin] lg:duration-300 lg:me-[calc(var(--aside-width))]">
                        <main className="grow px-2.5 lg:p-0" role="content">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
