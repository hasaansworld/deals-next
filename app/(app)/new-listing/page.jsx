import ArrowRight02Icon from '@/components/icons/arrow_right';
import Upload04Icon from '@/components/icons/upload';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function NewListing() {
	return (
		<div className="h-full w-full overflow-y-auto pb-60 pt-32">
			<div className="mx-auto w-[600px]">
				<h1 className="text-3xl font-bold text-black">New Listing</h1>
				<p className="mt-1 text-neutral-400">Please provide the following information about your deal</p>
				<form className="mt-10 flex flex-col">
					<div className="flex items-start gap-12">
						<div className="flex flex-col items-center gap-1">
							<div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 p-4 text-neutral-600 ring-4 ring-neutral-100">
								<Upload04Icon className="h-12 w-12" stroke="1" />
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
						Images
					</Label>
					<p className="text-sm text-neutral-400">At least 1 required </p>
					<div className="mt-2 grid grid-cols-3 gap-6">
						<AspectRatio
							ratio={4 / 3}
							className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-200 p-4 text-neutral-600 ring-4 ring-neutral-100"
						>
							<Upload04Icon className="h-6 w-6" stroke="2" />
						</AspectRatio>
						<AspectRatio
							ratio={4 / 3}
							className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-200 p-4 text-neutral-600 ring-4 ring-neutral-100"
						>
							<Upload04Icon className="h-6 w-6" stroke="2" />
						</AspectRatio>
						<AspectRatio
							ratio={4 / 3}
							className="w-full4 flex h-full cursor-pointer items-center justify-center rounded-xl border border-neutral-200 p-4 text-neutral-600 ring-4 ring-neutral-100"
						>
							<Upload04Icon className="h-6 w-6" stroke="2" />
						</AspectRatio>
					</div>

					<Label htmlFor="introduction" className="mt-6 block text-base font-semibold">
						Introduction *
					</Label>
					<Textarea
						type="text"
						id="shortDescription"
						name="shortDescription"
						maxLength="2000"
						placeholder="Introduce your app in as much detail as you can"
						className="mt-1 text-base"
						rows="15"
					/>
					<button
						type="submit"
						className="mt-8 flex w-1/2 items-center justify-center gap-2 self-end rounded-full bg-fuchsia-500 px-4 py-2 font-medium text-white hover:gap-3 disabled:opacity-70"
					>
						Submit
						<ArrowRight02Icon className="h-5 w-5" stroke="2" />
					</button>
				</form>
			</div>
		</div>
	);
}
