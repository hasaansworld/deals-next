'use client';

import ArrowRight02Icon from '@/components/icons/arrow_right';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Signup() {
	return (
		<div className="mx-auto flex h-full w-full max-w-max flex-col items-center justify-center p-10">
			<h1 className="text-3xl font-bold text-black">Signup to Appdeals</h1>
			<p className="mt-1 text-sm text-neutral-400">Create an account to submit deals and add comments</p>

			<form className="mt-10 flex w-[300px] flex-col">
				<Label htmlFor="name" className="text-base font-semibold">
					Full Name *
				</Label>
				<Input type="text" name="name" placeholder="Enter your name" className="mt-1 text-base" />
				<Label htmlFor="email" className="mt-5 text-base font-semibold">
					Email *
				</Label>
				<Input type="email" name="email" placeholder="Enter your email" className="mt-1 text-base" />
				<Label htmlFor="password" className="mt-5 text-base font-semibold">
					Password *
				</Label>
				<Input type="password" name="password" placeholder="Choose a password" className="mt-1 text-base" />
				<p className="mt-1 text-xs font-medium text-neutral-400">Must be at least 8 characters</p>
				<button className="bg-primary mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-white hover:gap-3">
					Signup
					<ArrowRight02Icon className="h-5 w-5" stroke="2" />
				</button>
				<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 font-medium text-black shadow-sm hover:bg-neutral-100">
					<img src="/google_logo.svg" alt="Google Logo" className="h-4 w-4" /> Signup With Google
				</button>
			</form>
			<p className="my-12 font-medium text-neutral-600">
				Already have an account?{' '}
				<Link href="/login" className="text-fuchsia-500 hover:underline">
					Login
				</Link>
			</p>
		</div>
	);
}
