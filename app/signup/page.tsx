'use client'

import { useState } from 'react'
import { signup } from '@/app/auth/actions'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import Image from 'next/image'

export default function SignupPage() {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        const password = formData.get('password') as string
        const confirmPassword = formData.get('confirmPassword') as string

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            setLoading(false)
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            setLoading(false)
            return
        }

        const result = await signup(formData)

        if (result?.error) {
            setError(result.error)
            setLoading(false)
        }
    }

    async function handleGoogleSignup() {
        setGoogleLoading(true)
        setError(null)

        const supabase = createClient()
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        })

        if (error) {
            setError(error.message)
            setGoogleLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Panel — Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, #0a1628 0%, #1a2847 40%, #0d2137 100%)',
                }}
            >
                {/* Grid background */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Glow orbs */}
                <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, #2D7CFF 0%, transparent 70%)' }}
                />
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, #006BFF 0%, transparent 70%)' }}
                />

                <div className="relative z-10 max-w-md px-8 text-center">
                    <div className="mb-8 flex items-center justify-center gap-3">
                        <Image
                            src="/S_1_-removebg-preview.png"
                            alt="SourceSmart"
                            width={48}
                            height={48}
                            className="rounded-lg"
                        />
                        <span className="text-2xl font-bold text-white tracking-tight">
                            SourceSmart
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                        Start sourcing{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            smarter today
                        </span>
                    </h2>

                    <p className="text-blue-200/70 text-base leading-relaxed mb-8">
                        Join thousands of procurement teams who trust SourceSmart to reduce costs, manage risks, and find the best suppliers globally.
                    </p>

                    <div className="flex flex-col gap-3 text-left">
                        {[
                            { icon: '⚡', text: 'Set up in under 5 minutes' },
                            { icon: '🔒', text: 'SOC 2 Type II compliant' },
                            { icon: '🌍', text: 'Access suppliers in 50+ countries' },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-blue-100/80 text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel — Signup Form */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white dark:bg-gray-950">
                <div className="w-full max-w-md">
                    {/* Mobile logo */}
                    <div className="lg:hidden mb-8 flex items-center justify-center gap-2">
                        <Image
                            src="/S_1_-removebg-preview.png"
                            alt="SourceSmart"
                            width={36}
                            height={36}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                            SourceSmart
                        </span>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Create your account
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Get started with SourceSmart for free
                        </p>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="mb-6 px-4 py-3 rounded-xl text-sm font-medium"
                            style={{
                                background: 'rgba(229, 57, 53, 0.08)',
                                border: '1px solid rgba(229, 57, 53, 0.2)',
                                color: '#E53935',
                            }}
                        >
                            {error}
                        </div>
                    )}

                    {/* Google Signup */}
                    <button
                        onClick={handleGoogleSignup}
                        disabled={googleLoading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                        style={{
                            background: 'white',
                            border: '1px solid #E4E7EB',
                            color: '#1C1F34',
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                            <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                        </svg>
                        {googleLoading ? 'Connecting...' : 'Continue with Google'}
                    </button>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
                            or
                        </span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                    </div>

                    {/* Email/Password Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                            >
                                Full name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                autoComplete="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                style={{ border: '1px solid #E4E7EB' }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = '#2D7CFF'
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 124, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = '#E4E7EB'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="you@company.com"
                                className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                style={{ border: '1px solid #E4E7EB' }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = '#2D7CFF'
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 124, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = '#E4E7EB'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="new-password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                style={{ border: '1px solid #E4E7EB' }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = '#2D7CFF'
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 124, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = '#E4E7EB'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                            >
                                Confirm password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                autoComplete="new-password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                style={{ border: '1px solid #E4E7EB' }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = '#2D7CFF'
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 124, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = '#E4E7EB'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                            style={{
                                background: 'linear-gradient(135deg, #2D7CFF 0%, #006BFF 100%)',
                            }}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Creating account...
                                </span>
                            ) : (
                                'Create account'
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="font-semibold hover:underline"
                            style={{ color: '#2D7CFF' }}
                        >
                            Sign in
                        </Link>
                    </p>

                    <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
                        By creating an account, you agree to our{' '}
                        <Link href="/terms" className="underline hover:text-gray-600">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="underline hover:text-gray-600">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
