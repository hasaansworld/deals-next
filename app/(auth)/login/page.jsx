'use client';

import ArrowRight02Icon from '@/components/icons/arrow_right';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Login() {
	return (
		<div className="mx-auto flex h-full w-full max-w-max flex-col items-center justify-center p-10">
			<h1 className="text-3xl font-bold text-black">Welcome Back</h1>
			<p className="mt-1 text-sm text-neutral-400">Please enter your details</p>

			<form className="mt-6 flex w-[300px] flex-col">
				<Label htmlFor="email" className="mt-5 text-base font-semibold">
					Email *
				</Label>
				<Input type="email" name="email" placeholder="Enter your email" className="mt-1 text-base" autoFocus />
				<Label htmlFor="password" className="mt-5 text-base font-semibold">
					Password *
				</Label>
				<Input type="password" name="password" placeholder="Enter your password" className="mt-1 text-base" />
				<div className="mt-1 flex w-full justify-end text-sm font-medium">
					<Link href="/forgot-password" className="text-fuchsia-500 hover:underline">
						Forgot Password?
					</Link>
				</div>
				<button className="bg-primary mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-white hover:gap-3">
					Login
					<ArrowRight02Icon className="h-5 w-5" stroke="2" />
				</button>
				<button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 font-medium text-black shadow-sm hover:bg-neutral-100">
					<img src="/google_logo.svg" alt="Google Logo" className="h-4 w-4" /> Login With Google
				</button>
			</form>
			<p className="my-12 font-medium text-neutral-600">
				Need an account?{' '}
				<Link href="/signup" className="text-fuchsia-500 hover:underline">
					Signup
				</Link>
			</p>
		</div>
	);
}
