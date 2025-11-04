
import { SidebarFooter } from "@/iam/layout/components/sidebar-footer.tsx";
import { ScrollArea } from '@/components/ui/scroll-area';

export function SidebarContent() {
  return (
    <div className="in-data-[sidebar-collapsed=true]:w-15">
      <div className="grow">
        <ScrollArea className="grow h-[calc(100vh-8rem)] lg:h-[calc(100vh-14.5rem)] px-2.5 
        in-data-[sidebar-collapsed=true]:px-0
        in-data-[sidebar-collapsed=true]:flex in-data-[sidebar-collapsed=true]:flex-col in-data-[sidebar-collapsed=true]:items-center
        ">
          <div className="in-data-[sidebar-collapsed=true]:flex in-data-[sidebar-collapsed=true]:justify-center in-data-[sidebar-collapsed=true]:w-full"></div>
          <div className="in-data-[sidebar-collapsed=true]:flex in-data-[sidebar-collapsed=true]:justify-center in-data-[sidebar-collapsed=true]:w-full"></div>
          <div className="in-data-[sidebar-collapsed=true]:flex in-data-[sidebar-collapsed=true]:justify-center in-data-[sidebar-collapsed=true]:w-full"></div>
        </ScrollArea>
      </div>
      
      <div className="in-data-[sidebar-collapsed=true]:flex in-data-[sidebar-collapsed=true]:justify-center in-data-[sidebar-collapsed=true]:w-full">
        <SidebarFooter />
      </div>
    </div>
  );
}
