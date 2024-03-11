'use client';
import ArrowRight02Icon from '@/components/icons/arrow_right';
import Upload04Icon from '@/components/icons/upload';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/auth';
import { useRef, useState } from 'react';
import Link from 'next/link';
import NewTwitterIcon from '@/components/icons/new_twitter';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormik } from 'formik';
import Cancel01Icon from '@/components/icons/cancel';
import ImageUpload from './image-upload';

export default function NewListing() {
	// const { user, logout } = useAuth({ middleware: 'guest' });

	const iconFile = useRef(null);

	const user = { hi: true };
	const formik = useFormik({
		initialValues: {
			iconFile: '',
			image1: '',
			image2: '',
			image3: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="h-screen w-full overflow-y-auto pt-32">
			<div className="mx-auto flex w-[600px] flex-col items-center pb-60">
				{user ? (
					<>
						<div className="w-full">
							<h1 className="text-2xl font-bold text-black">New Listing</h1>
							<p className="mt-1 text-neutral-400">Please provide the following information about your deal</p>
						</div>

						<form className="mt-14 flex w-full flex-col" onSubmit={formik.handleSubmit}>
							<div className="flex items-start gap-12">
								<div className="flex flex-col items-center gap-1">
									<div
										onClick={() => iconFile.current.click()}
										className={`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 ${
											formik.values.iconFile ? '' : 'p-4'
										} text-neutral-600 ring-4 ring-neutral-100`}
									>
										{!formik.values.iconFile && <Upload04Icon className="h-12 w-12" stroke="1" />}
										{formik.values.iconFile && (
											<>
												<img
													src={URL.createObjectURL(formik.values.iconFile)}
													className="h-full w-full rounded-xl object-cover"
													alt="Icon"
												/>
												<button
													type="button"
													className="absolute -right-3 -top-3 h-6 w-6 appearance-none rounded-full bg-neutral-600 p-1 text-white"
													onClick={(e) => {
														e.stopPropagation();
														console.log('click');
														iconFile.current.value = '';
														formik.setFieldValue('iconFile', '');
													}}
												>
													<Cancel01Icon className="h-4 w-4" stroke="3" />
												</button>
											</>
										)}
										<input
											type="file"
											ref={iconFile}
											onChange={(e) => formik.setFieldValue('iconFile', e.target.files[0])}
											className="hidden"
											multiple={false}
											accept=".png, .jpg, .jpeg, .svg, .gif"
										/>
									</div>
									<p className="mt-2 font-semibold">App Icon *</p>
								</div>
								<div className="flex-1">
									<Label htmlFor="appName" className="text-base font-semibold">
										App Name *
									</Label>
									<Input
										type="text"
										id="appName"
										name="appName"
										placeholder="Enter your app's name"
										maxLength="50"
										className="mb-5 mt-1 text-base"
										autoFocus
									/>
									<Label htmlFor="shortDescription" className="text-base font-semibold">
										Short Description *
									</Label>
									<Textarea
										type="text"
										id="shortDescription"
										name="shortDescription"
										maxLength="250"
										placeholder="Briefly describe your app"
										className="mt-1 text-base"
									/>
								</div>
							</div>

							<Label htmlFor="youtubeURL" className="mt-8 block text-base font-semibold">
								Youtube Video URL (Optional)
							</Label>
							<Input
								type="text"
								id="youtubeURL"
								name="youtubeURL"
								placeholder="App demo or promotional video URL"
								maxLength="150"
								className="mb-5 mt-1 text-base"
							/>
							<Label htmlFor="image1" className="mt-6 block text-base font-semibold">
								Images *
							</Label>
							<p className="text-sm text-neutral-400">At least 1 required </p>
							<div className="mt-2 grid grid-cols-3 gap-6">
								<ImageUpload formik={formik} name="image1" />
								<ImageUpload formik={formik} name="image2" />
								<ImageUpload formik={formik} name="image3" />
							</div>

							<Label htmlFor="introduction" className="mt-6 block text-base font-semibold">
								Introduction *
							</Label>
							<Textarea
								type="text"
								id="introduction"
								name="introduction"
								maxLength="2000"
								placeholder="Introduce your app in as much detail as you can"
								className="mt-1 text-base"
								rows="15"
							/>

							<div className="mt-6 flex items-center gap-6">
								<div className="flex-1">
									<Label htmlFor="price" className="block text-base font-semibold">
										Price *
									</Label>
									<div className="relative w-full">
										<Input
											type="number"
											id="price"
											name="price"
											placeholder="Enter your price"
											maxLength="150"
											min={0}
											step={0.01}
											className="mb-5 mt-1 pl-20 text-center text-base"
										/>
										<Select>
											<SelectTrigger className="absolute left-0 top-0 w-20" left={true}>
												<SelectValue placeholder="$" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="$">$</SelectItem>
													<SelectItem value="€">€</SelectItem>
													<SelectItem value="£">£</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
								<div className="flex-1">
									<Label htmlFor="oldPrice" className="block text-base font-semibold">
										Old Price (Optional)
									</Label>
									<div className="relative w-full">
										<Input
											type="number"
											id="oldPrice"
											name="oldPrice"
											placeholder="Enter old price"
											maxLength="150"
											min={0}
											step={0.01}
											className="mb-5 mt-1 pl-20 text-center text-base"
										/>
										<Select>
											<SelectTrigger className="absolute left-0 top-0 w-20" left={true}>
												<SelectValue placeholder="$" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="$">$</SelectItem>
													<SelectItem value="€">€</SelectItem>
													<SelectItem value="£">£</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>

							<button
								type="submit"
								className="mt-8 flex w-1/2 items-center justify-center gap-2 self-end rounded-full bg-fuchsia-500 px-4 py-2 text-lg font-medium text-white hover:ring-4 hover:ring-fuchsia-200 disabled:opacity-70"
							>
								Submit
								<ArrowRight02Icon className="h-6 w-6" stroke="2" />
							</button>
						</form>
					</>
				) : (
					<div className="flex h-full w-full flex-col items-center justify-center">
						<h1 className="text-2xl font-bold text-black">New Listing</h1>
						<p className="mt-1 text-center text-lg text-neutral-600">Please connect one of the following accounts to get started</p>
						<div className="mt-6 w-80">
							<div className="flex w-full items-center gap-5">
								<Link
									href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/google`}
									className="mt-6 flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 font-medium text-black shadow-sm hover:bg-neutral-100"
								>
									<img src="/google_logo.svg" alt="Google Logo" className="h-7 w-7" />
								</Link>
								<Link
									href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/twitter`}
									className="mt-6 flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 font-medium text-black shadow-sm hover:bg-neutral-100"
								>
									<NewTwitterIcon className="h-7 w-7 text-black" stroke="2" />
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
