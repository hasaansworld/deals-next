'use client';

import ArrowRight02Icon from '@/components/icons/arrow_right';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import * as Yup from 'yup';
import { useEffect } from 'react';

export default function Signup() {
	const [errors, setErrors] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { register } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/',
	});

	const SignupSchema = Yup.object().shape({
		name: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name is required'),
		email: Yup.string().email('Invalid email address').required('Email is required'),
		password: Yup.string()
			.min(8, 'Minimum 8 characters are required')
			.matches(/[A-Z]/, 'Use at least one uppercase letter')
			.matches(/[a-z]/, 'Use at least one lowercase letter')
			.matches(/\d/, 'Use at least one number')
			.required('Password is required'),
		terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			newsletter: false,
			terms: false,
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			setIsSubmitting(true);
			register({
				...values,
				password_confirmation: values.password,
				setErrors,
			});
		},
	});

	useEffect(() => {
		if (errors) {
			setIsSubmitting(false);
		}
	}, [errors]);

	return (
		<div className="mx-auto flex h-full w-full max-w-max flex-col items-center justify-center p-10">
			<h1 className="text-3xl font-bold text-black">Signup</h1>
			<p className="mt-1 text-sm text-neutral-400">Create an account to submit deals and add comments</p>

			<form className="mt-10 flex w-[300px] flex-col" onSubmit={formik.handleSubmit}>
				<Label htmlFor="name" className="text-base font-semibold">
					Full Name *
				</Label>
				<Input
					type="text"
					name="name"
					placeholder="Enter your name"
					className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.name ? 'border-rose-500' : ''}`}
					onChange={formik.handleChange}
					value={formik.values.name}
					autoFocus
				/>
				{formik.submitCount > 0 && formik.errors.name && <p className="m-0 text-sm font-medium text-rose-500">{formik.errors.name}</p>}
				<Label htmlFor="email" className="mt-5 text-base font-semibold">
					Email *
				</Label>
				<Input
					type="email"
					name="email"
					placeholder="Enter your email"
					className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.email ? 'border-rose-500' : ''}`}
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.submitCount > 0 && formik.errors.email && <p className="text-sm font-medium text-rose-500">{formik.errors.email}</p>}
				{errors.email && <p className="text-sm font-medium text-rose-500">{errors.email}</p>}
				<Label htmlFor="password" className="mt-5 text-base font-semibold">
					Password *
				</Label>
				<Input
					type="password"
					name="password"
					placeholder="Min 8 characters"
					className={`mt-1 text-base ${formik.touched.password && formik.errors.password ? 'border-rose-500' : ''}`}
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password && <p className="text-sm font-medium text-rose-500">{formik.errors.password}</p>}
				{errors.password && <p className="text-sm font-medium text-rose-500">{errors.password}</p>}
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
						<Link href="/terms" target="_blank" className="text-black underline hover:text-fuchsia-500">
							terms and conditions
						</Link>
					</Label>
				</div>

				{formik.submitCount > 0 && formik.errors.terms && <p className="mt-4 text-sm font-medium text-rose-500">{formik.errors.terms}</p>}

				<button
					type="submit"
					disabled={isSubmitting}
					className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white ${
						isSubmitting ? '' : 'hover:gap-3'
					} disabled:opacity-70`}
				>
					{isSubmitting && <Oval width="18" height="18" strokeWidth={10} color="#fff" secondaryColor="rgba(255, 255, 255, 0.3)" />}
					{isSubmitting ? 'Creating account' : 'Create Account'}
					{!isSubmitting && <ArrowRight02Icon className="h-5 w-5" stroke="2" />}
				</button>
				<Link
					href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/google`}
					className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 font-medium text-black shadow-sm hover:bg-neutral-100"
				>
					<img src="/google_logo.svg" alt="Google Logo" className="h-4 w-4" /> Signup With Google
				</Link>
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
