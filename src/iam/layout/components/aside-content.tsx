import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "react-router";
import {
    PanelTop,
    BarChart3,
    Settings,
    Users,
    ShieldUser,
    Plus,
} from 'lucide-react';

const menuItems = [
    {
        icon: PanelTop,
        tooltip: 'Feed',
        path: '/iam/feed',
        rootPath: '#',
    },
    {
        icon: BarChart3,
        tooltip: 'Dashboard',
        path: '/iam',
        rootPath: '#'
    },
    {
        icon: Settings,
        tooltip: 'Account',
        path: '#',
        rootPath: '#',
    },
    {
        icon: Users,
        tooltip: 'Network',
        path: '/iam/wall',
        rootPath: '#',
    },
    {
        icon: ShieldUser,
        tooltip: 'Authentication',
        path: '#',
        rootPath: '#',
    },
    {
        icon: Plus,
        tooltip: 'Security Logs',
        path: '#',
        rootPath: '#',
    },
];

export function AsideContent() {
    return (
        <div className="grow gap-3.5 shrink-0 flex items-center flex-col">
            {menuItems.map((item, index) => (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <Button
                            asChild
                            variant="outline"
                            mode="icon"
                            className="shadow-md shadow-black/5"
                        >
                            <Link to={item.path}>
                                <item.icon/>
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.tooltip}</TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
