'use client';

import ArrowRight02Icon from '@/components/icons/arrow_right';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Oval } from 'react-loader-spinner';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
	const router = useRouter();

	const [errors, setErrors] = useState([]);
	const [status, setStatus] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { login } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/',
	});

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email address').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			setIsSubmitting(true);
			login({
				...values,
				remember: true,
				setErrors,
				setStatus,
			});
		},
	});

	useEffect(() => {
		if (errors) {
			setIsSubmitting(false);
		}
	}, [errors]);

	useEffect(() => {
		if (router.reset?.length > 0 && errors.length === 0) {
			setStatus(atob(router.reset));
		} else {
			setStatus(null);
		}
	});

	return (
		<div className="mx-auto flex h-full w-full max-w-max flex-col items-center justify-center p-10">
			<h1 className="text-3xl font-bold text-black">Welcome Back</h1>
			<p className="mt-1 text-sm text-neutral-400">Please enter your details</p>

			<form className="mt-6 flex w-[300px] flex-col" onSubmit={formik.handleSubmit}>
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
					autoFocus
				/>
				{formik.submitCount > 0 && formik.errors.email && <p className="text-sm font-medium text-rose-500">{formik.errors.email}</p>}

				<Label htmlFor="password" className="mt-5 text-base font-semibold">
					Password *
				</Label>
				<Input
					type="password"
					name="password"
					placeholder="Enter your password"
					className={`mt-1 text-base ${formik.touched.password && formik.errors.password ? 'border-rose-500' : ''}`}
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password && <p className="text-sm font-medium text-rose-500">{formik.errors.password}</p>}
				<div className="mt-1 flex w-full justify-end text-sm font-medium">
					<Link href="/forgot-password" className="text-fuchsia-500 hover:underline">
						Forgot Password?
					</Link>
				</div>
				{errors.email && <p className="mt-4 text-sm font-medium text-rose-500">{errors.email}</p>}
				{errors.password && <p className="mt-4 text-sm font-medium text-rose-500">{errors.password}</p>}
				<button
					type="submit"
					disabled={isSubmitting}
					className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white ${
						isSubmitting ? '' : 'hover:gap-3'
					}" disabled:opacity-70`}
				>
					{isSubmitting && <Oval width="18" height="18" strokeWidth={10} color="#fff" secondaryColor="rgba(255, 255, 255, 0.3)" />}
					{isSubmitting ? 'Logging In' : 'Login'}
					{!isSubmitting && <ArrowRight02Icon className="h-5 w-5" stroke="2" />}
				</button>
				<Link
					href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/google`}
					className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 font-medium text-black shadow-sm hover:bg-neutral-100"
				>
					<img src="/google_logo.svg" alt="Google Logo" className="h-4 w-4" /> Login With Google
				</Link>
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
