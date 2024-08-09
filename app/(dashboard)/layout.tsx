import { Navbar } from "./_components/navbar"
import { Orgbar } from "./_components/Orgbar"
import { Sidebar } from "./_components/sidebar"

interface DashboardLayoutProps {
    children: React.ReactNode
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar></Sidebar>
            <div className="ml-[65px] h-full">
                <div className="flex gap-x-1 h-full">
                    <Orgbar></Orgbar>
                    <div className="flex-1 h-full">
                        <Navbar></Navbar>
                        {children}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout