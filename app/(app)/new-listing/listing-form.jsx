'use client';
import ArrowRight02Icon from '@/components/icons/arrow_right';
import Upload04Icon from '@/components/icons/upload';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormik } from 'formik';
import Cancel01Icon from '@/components/icons/cancel';
import ImageUpload from './image-upload';
import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';
import CheckmarkCircle03Icon from '@/components/icons/checkmark_circle';
import axios from '@/lib/axios';
import Compressor from 'compressorjs';

function compress(file, maxWidth) {
	return new Promise((resolve, reject) => {
		new Compressor(file, {
			quality: 0.8,
			maxWidth,
			success: resolve,
			error: reject,
		});
	});
}

export default function ListingForm({ user }) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState('');
	const [success, setSuccess] = useState(false);
	const iconFile = useRef(null);

	const ListingSchema = Yup.object().shape({
		iconFile: Yup.mixed()
			.required('Required')
			.test('fileSize', 'Max 10mb', (value) => {
				if (!value.length) return true;
				return value[0].size < 10485760;
			}),
		appName: Yup.string().min(3, 'Min 3 characters required').max(50, 'Max 50 characters').required('App name is required'),
		shortDescription: Yup.string().min(20, 'Min 20 characters required').max(250, 'Max 250 characters').required('Short description is required'),
		youtubeURL: Yup.string().test('valid-url', 'Invalid video URL', (value) => !value || value.includes('youtu.be') || value.includes('youtube.')),
		introduction: Yup.string().min(300, 'Min 300 characters required').required('Introduction is required'),
		image2: Yup.string(),
		image3: Yup.string(),
		image1: Yup.string().when(['youtubeURL', 'image2', 'image3'], {
			is: (youtubeURL, image2, image3) => {
				return !youtubeURL && !image2 && !image3;
			},
			then: (schema) => schema.required('At least 1 required'),
		}),
		price: Yup.number().required('Price is required'),
		endsIn: Yup.number().required('Ends in is required'),
		url: Yup.string()
			.required('URL is required')
			.test('valid-url', 'Invalid URL', (value) => value.includes('.')),
		websiteURL: Yup.string()
			.required('Website URL is required')
			.test('valid-url', 'Invalid website URL', (value) => value.includes('.')),
	});

	const formik = useFormik({
		initialValues: {
			iconFile: '',
			appName: '',
			shortDescription: '',
			youtubeURL: '',
			image1: '',
			image2: '',
			image3: '',
			introduction: '',
			priceCurrency: '$',
			price: 1,
			oldPrice: '',
			endsIn: 30,
			type: 'lifetime',
			url: '',
			websiteURL: '',
		},
		validationSchema: ListingSchema,
		onSubmit: async (values) => {
			setIsSubmitting(true);
			setSubmitError('');

			let formData = new FormData();
			for (const key in values) {
				if (['iconFile', 'image1', 'image2', 'image3'].includes(key) && values[key] && values[key].type !== 'image/gif') {
					const compressed = await compress(values[key], key === 'iconFile' ? 150 : 1080);
					formData.append(key, compressed);
				} else {
					formData.append(key, values[key]);
				}
			}

			axios
				.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-listing`, formData)
				.then((res) => {
					setSuccess(true);
				})
				.catch((error) => {
					setSubmitError(error.toString());
					setIsSubmitting(false);
				});
		},
	});

	if (success) {
		return (
			<div className="w-full px-4 pt-32 md:px-0">
				<div className="flex w-full flex-col items-center pb-60 md:mx-auto md:w-[600px]">
					<div className="flex w-full flex-col items-center py-40">
						<CheckmarkCircle03Icon className="h-12 w-12 text-green-500" />
						<h1 className="mt-8 text-center text-2xl font-bold text-black">Deal Submitted</h1>
						<p className="mt-1 w-2/3 text-center text-neutral-500">
							Thank you for sharing your deal with the Appdeals community. Your deal will be published soon.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full px-4 pb-60 pt-32 md:px-0">
			<div className="w-full md:mx-auto md:w-[600px]">
				<div className="w-full">
					<h1 className="text-2xl font-bold text-black">New Listing</h1>
					<p className="mt-1 text-neutral-400">Please provide the following information about your deal</p>
				</div>

				<form className="mt-14 flex w-full flex-col" onSubmit={formik.handleSubmit}>
					<div className="flex items-start gap-6 md:gap-12">
						<div className="flex flex-col items-center gap-1">
							<div
								onClick={() => iconFile.current.click()}
								className={`relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl border md:h-24 md:w-24 ${
									formik.values.iconFile ? '' : 'p-4'
								} ${
									formik.submitCount > 0 && formik.errors.iconFile ? 'border-rose-500 ring-rose-100' : 'border-neutral-200 ring-neutral-100'
								} text-neutral-600 ring-4`}
							>
								{!formik.values.iconFile && <Upload04Icon className="h-12 w-12" stroke="1" />}
								{formik.values.iconFile && (
									<>
										<img src={URL.createObjectURL(formik.values.iconFile)} className="h-full w-full rounded-xl object-cover" alt="Icon" />
										<button
											type="button"
											className="absolute -right-3 -top-3 h-6 w-6 appearance-none rounded-full bg-black p-1 text-white"
											onClick={(e) => {
												e.stopPropagation();
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
									accept=".png, .jpg, .jpeg, .svg, .gif, .webp"
								/>
							</div>
							<p className="mt-2 font-semibold">App Icon *</p>
							{formik.submitCount > 0 && formik.errors.iconFile && (
								<p className="m-0 text-sm font-medium text-rose-500">{formik.errors.iconFile}</p>
							)}
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
								className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.appName ? 'border-rose-500' : ''}`}
								value={formik.values.appName}
								onChange={formik.handleChange}
								autoFocus
							/>
							{formik.submitCount > 0 && formik.errors.appName && (
								<p className="m-0 text-sm font-medium text-rose-500">{formik.errors.appName}</p>
							)}
							<Label htmlFor="shortDescription" className="mt-5 block text-base font-semibold">
								Short Description *
							</Label>
							<Textarea
								type="text"
								id="shortDescription"
								name="shortDescription"
								maxLength="250"
								placeholder="Briefly describe your app"
								value={formik.values.shortDescription}
								onChange={formik.handleChange}
								className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.appName ? 'border-rose-500' : ''}`}
							/>
							{formik.submitCount > 0 && formik.errors.shortDescription && (
								<p className="m-0 text-sm font-medium text-rose-500">{formik.errors.shortDescription}</p>
							)}
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
						className="mt-1 text-base"
						value={formik.values.youtubeURL}
						onChange={formik.handleChange}
					/>
					<Label htmlFor="image1" className="mt-6 block text-base font-semibold">
						Images *
					</Label>
					<p className={`text-sm ${formik.submitCount > 0 && formik.errors.image1 ? 'text-rose-500' : 'text-neutral-400'}`}>At least 1 required </p>
					<div className="mt-2 grid grid-cols-2 gap-6 md:grid-cols-3">
						<ImageUpload formik={formik} name="image1" error={formik.submitCount > 0 && formik.errors.image1} />
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
						className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.introduction ? 'border-rose-500' : ''}`}
						rows="15"
						value={formik.values.introduction}
						onChange={formik.handleChange}
					/>
					{formik.submitCount > 0 && formik.errors.introduction && (
						<p className="m-0 text-sm font-medium text-rose-500">{formik.errors.introduction}</p>
					)}

					<div className="mt-6 flex items-start gap-6">
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
									min={1}
									step={0.01}
									value={formik.values.price}
									onChange={formik.handleChange}
									className={`mt-1 pl-20 text-center text-base ${formik.submitCount > 0 && formik.errors.price ? 'border-rose-500' : ''}`}
								/>
								<Select value={formik.values.priceCurrency} onValueChange={(v) => formik.setFieldValue('priceCurrency', v)}>
									<SelectTrigger className="absolute left-0 top-0 w-20" left="true">
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
							{formik.submitCount > 0 && formik.errors.price && <p className="m-0 text-sm font-medium text-rose-500">{formik.errors.price}</p>}
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
									min={formik.values.price + 0.01}
									step={0.01}
									value={formik.values.oldPrice}
									onChange={formik.handleChange}
									className="mt-1 pl-20 text-center text-base"
								/>
								<Select value={formik.values.priceCurrency} onValueChange={(v) => formik.setFieldValue('priceCurrency', v)}>
									<SelectTrigger className="absolute left-0 top-0 w-20" left="true">
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

					<div className="mt-6 flex gap-6">
						<div className="flex-1">
							<Label htmlFor="days" className="block text-base font-semibold">
								Ends in *
							</Label>
							<div className="relative w-full">
								<Input
									type="number"
									id="endsIn"
									name="endsIn"
									placeholder="Ends in"
									min={1}
									max={30}
									value={formik.values.endsIn}
									onChange={formik.handleChange}
									className={`mt-1 pr-32 text-center text-base ${formik.submitCount > 0 && formik.errors.endsIn ? 'border-rose-500' : ''}`}
								/>
								<p className="absolute right-4 top-1/2 -translate-y-1/2"> days</p>
							</div>
							{formik.submitCount > 0 && formik.errors.endsIn && <p className="m-0 text-sm font-medium text-rose-500">{formik.errors.endsIn}</p>}
						</div>
						<div className="flex-1">
							<Label htmlFor="type" className="block text-base font-semibold">
								Deal type
							</Label>
							<Select value={formik.values.type} onValueChange={(v) => formik.setFieldValue('type', v)}>
								<SelectTrigger className="mt-1 w-full">
									<SelectValue placeholder="Lifetime" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="lifetime">Lifetime</SelectItem>
										<SelectItem value="per_month">Per month</SelectItem>
										<SelectItem value="per_week">Per week</SelectItem>
										<SelectItem value="per_use">Per use</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>

					<Label htmlFor="url" className="mt-6 block text-base font-semibold">
						Deal link *
					</Label>
					<Input
						type="text"
						id="url"
						name="url"
						placeholder="Checkout or details page URL"
						maxLength="500"
						className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.url ? 'border-rose-500' : ''}`}
						value={formik.values.url}
						onChange={formik.handleChange}
					/>
					{formik.submitCount > 0 && formik.errors.url && <p className="m-0 text-sm font-medium text-rose-500">{formik.errors.url}</p>}

					<Label htmlFor="websiteURL" className="mt-6 block text-base font-semibold">
						Website *
					</Label>
					<Input
						type="text"
						id="websiteURL"
						name="websiteURL"
						placeholder="URL of your homepage / appstore listing"
						maxLength="500"
						className={`mt-1 text-base ${formik.submitCount > 0 && formik.errors.websiteURL ? 'border-rose-500' : ''}`}
						value={formik.values.websiteURL}
						onChange={formik.handleChange}
					/>
					{formik.submitCount > 0 && formik.errors.websiteURL && <p className="m-0 text-sm font-medium text-rose-500">{formik.errors.websiteURL}</p>}

					{formik.submitCount > 0 && Object.keys(formik.errors).length > 0 && (
						<p className="-mb-6 mt-6 w-full text-end text-sm font-medium text-rose-500">Please fix the errors before submitting!</p>
					)}

					{submitError && <p className="-mb-6 mt-6 w-full text-end text-sm font-medium text-rose-500">{submitError}</p>}

					<button
						type="submit"
						disabled={isSubmitting}
						className={`mt-8 flex w-1/3 items-center justify-center gap-2 self-end rounded-full bg-fuchsia-500 px-4 py-2 text-lg font-medium text-white ${
							isSubmitting ? '' : 'hover:ring-4 hover:ring-fuchsia-200'
						} disabled:opacity-70`}
					>
						{isSubmitting && <Oval width="18" height="18" strokeWidth={10} color="#fff" secondaryColor="rgba(255, 255, 255, 0.3)" />}
						{isSubmitting ? 'Submitting' : 'Submit'}
						{!isSubmitting && <ArrowRight02Icon className="h-5 w-5" stroke="2" />}
					</button>
				</form>
			</div>
		</div>
	);
}
