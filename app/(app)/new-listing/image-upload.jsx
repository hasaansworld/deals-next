import Cancel01Icon from '@/components/icons/cancel';
import RefreshIcon from '@/components/icons/refresh';
import Upload04Icon from '@/components/icons/upload';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useRef } from 'react';

export default function ImageUpload({ formik, name, error = false, edit = false, url = '' }) {
	const image = useRef(null);

	return (
		<AspectRatio
			onClick={() => image.current.click()}
			ratio={16 / 9}
			className={`flex h-full w-full cursor-pointer items-center justify-center rounded-xl border  ${formik.values[name] ? '' : 'p-4'} ${
				error ? 'border-rose-500 ring-rose-100' : 'border-neutral-200 ring-neutral-100'
			} text-neutral-600 ring-4`}
		>
			{!formik.values[name] && <Upload04Icon className="h-6 w-6" stroke="2" />}
			{formik.values[name] && (
				<>
					<img
						src={typeof formik.values[name] === 'string' ? formik.values[name] : URL.createObjectURL(formik.values[name])}
						className="h-full w-full rounded-xl object-cover"
						alt="Image"
					/>
					<button
						type="button"
						className="absolute -right-3 -top-3 h-6 w-6 appearance-none rounded-full bg-black p-1 text-white"
						onClick={(e) => {
							e.stopPropagation();
							image.current.value = '';
							formik.setFieldValue(name, '');
						}}
					>
						<Cancel01Icon className="h-4 w-4" stroke="3" />
					</button>
				</>
			)}
			{((edit && url && !formik.values[name]) || (edit && typeof formik.values[name] !== 'string')) && (
				<button
					type="button"
					className="absolute -left-3 -top-3 h-7 w-7 appearance-none rounded-full bg-black p-1.5 text-white"
					onClick={(e) => {
						e.stopPropagation();
						image.current.value = '';
						formik.setFieldValue(name, url);
					}}
				>
					<RefreshIcon className="h-4 w-4" stroke="3" />
				</button>
			)}
			<input
				type="file"
				ref={image}
				onChange={(e) => formik.setFieldValue(name, e.target.files[0])}
				className="hidden"
				multiple={false}
				accept=".png, .jpg, .jpeg, .svg, .gif, .webp"
			/>
		</AspectRatio>
	);
}
