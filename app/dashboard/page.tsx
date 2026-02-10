import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/app/auth/actions'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <div className="max-w-6xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ''}! 👋
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Here&apos;s an overview of your procurement activity.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { label: 'Active RFQs', value: '0', icon: '📋', color: '#2D7CFF' },
                    { label: 'Tracked Suppliers', value: '0', icon: '🏭', color: '#00C853' },
                    { label: 'Pending Bids', value: '0', icon: '📨', color: '#FFC107' },
                    { label: 'Watched Materials', value: '0', icon: '📊', color: '#E53935' },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="p-5 rounded-2xl transition-all duration-200 hover:shadow-md"
                        style={{
                            background: 'white',
                            border: '1px solid #E4E7EB',
                        }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl">{stat.icon}</span>
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ background: stat.color }}
                            />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        {
                            title: 'Search Suppliers',
                            description: 'Discover verified manufacturers globally',
                            icon: '🔍',
                            gradient: 'linear-gradient(135deg, #2D7CFF 0%, #006BFF 100%)',
                        },
                        {
                            title: 'Create RFQ',
                            description: 'Start a new request for quote',
                            icon: '📝',
                            gradient: 'linear-gradient(135deg, #00C853 0%, #009624 100%)',
                        },
                        {
                            title: 'Ask AI Copilot',
                            description: 'Get instant procurement insights',
                            icon: '🤖',
                            gradient: 'linear-gradient(135deg, #7C4DFF 0%, #651FFF 100%)',
                        },
                    ].map((action) => (
                        <button
                            key={action.title}
                            className="group p-5 rounded-2xl text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                            style={{
                                background: 'white',
                                border: '1px solid #E4E7EB',
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3"
                                style={{ background: action.gradient }}
                            >
                                <span className="brightness-0 invert">{action.icon}</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                {action.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {action.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Recent Activity (empty state) */}
            <div
                className="p-8 rounded-2xl text-center"
                style={{
                    background: 'white',
                    border: '1px solid #E4E7EB',
                }}
            >
                <div className="text-4xl mb-3">📭</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    No recent activity
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Start by searching for suppliers or creating your first RFQ.
                </p>
            </div>

            {/* Sign Out Section */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid #E4E7EB' }}>
                <form action={signOut}>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                    >
                        Sign out
                    </button>
                </form>
            </div>
        </div>
    )
}
