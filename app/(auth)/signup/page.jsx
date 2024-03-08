'use client';

import ArrowRight02Icon from '@/components/icons/arrow_right';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useFormik } from 'formik';

export default function Signup() {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			newsletter: false,
			terms: false,
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className="mx-auto flex h-full w-full max-w-max flex-col items-center justify-center p-10">
			<h1 className="text-3xl font-bold text-black">Signup to Appdeals</h1>
			<p className="mt-1 text-sm text-neutral-400">Create an account to submit deals and add comments</p>

			<form className="mt-10 flex w-[300px] flex-col" onSubmit={formik.handleSubmit}>
				<Label htmlFor="name" className="text-base font-semibold">
					Full Name *
				</Label>
				<Input
					type="text"
					name="name"
					placeholder="Enter your name"
					className="mt-1 text-base"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				<Label htmlFor="email" className="mt-5 text-base font-semibold">
					Email *
				</Label>
				<Input
					type="email"
					name="email"
					placeholder="Enter your email"
					className="mt-1 text-base"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<Label htmlFor="password" className="mt-5 text-base font-semibold">
					Password *
				</Label>
				<Input
					type="password"
					name="password"
					placeholder="Min 8 characters"
					className="mt-1 text-base"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{/* <p className="mt-1 text-xs font-medium text-neutral-400">Must be at least 8 characters</p> */}
				<div className="mt-8 flex w-[400px] items-center space-x-2">
					<Checkbox
						id="newsletter"
						name="newsletter"
						onCheckedChange={() => formik.setFieldValue('newsletter', !formik.values.newsletter)}
						value={formik.values.newsletter}
						className="focus:ring-2 focus:ring-fuchsia-200"
					/>
					<Label htmlFor="newsletter" className="cursor-pointer text-sm text-neutral-600">
						Join newsletter and get promotional emails
					</Label>
				</div>
				<div className="mt-3 flex items-center space-x-2">
					<Checkbox
						id="terms"
						name="terms"
						onCheckedChange={() => formik.setFieldValue('terms', !formik.values.terms)}
						value={formik.values.terms}
						className="focus:ring-2 focus:ring-fuchsia-200"
					/>
					<Label htmlFor="terms" className="cursor-pointer text-sm text-neutral-600">
						Accept{' '}
						<Link href="/terms-and-conditions" className="text-black underline hover:text-fuchsia-500">
							terms and conditions
						</Link>
					</Label>
				</div>
				<button
					type="submit"
					className="bg-primary mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-white hover:gap-3"
				>
					Signup
					<ArrowRight02Icon className="h-5 w-5" stroke="2" />
				</button>
				<button
					type="button"
					className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 font-medium text-black shadow-sm hover:bg-neutral-100"
				>
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
