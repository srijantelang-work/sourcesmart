import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-950">
            {/* Top Bar */}
            <header
                className="sticky top-0 z-50 h-16 flex items-center justify-between px-6"
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid #E4E7EB',
                }}
            >
                <div className="flex items-center gap-3">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        style={{ background: 'linear-gradient(135deg, #2D7CFF 0%, #006BFF 100%)' }}
                    >
                        S
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                        SourceSmart
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                    </div>
                    <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: 'linear-gradient(135deg, #2D7CFF 0%, #006BFF 100%)' }}
                    >
                        {user.user_metadata?.full_name?.[0]?.toUpperCase() ||
                            user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-6">
                {children}
            </main>
        </div>
    )
}
