import Cancel01Icon from '@/components/icons/cancel';
import Upload04Icon from '@/components/icons/upload';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useRef } from 'react';

export default function ImageUpload({ formik, name }) {
	const image = useRef(null);
	return (
		<AspectRatio
			onClick={() => image.current.click()}
			ratio={4 / 3}
			className={`flex h-full w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-200  ${
				formik.values[name] ? '' : 'p-4'
			} text-neutral-600 ring-4 ring-neutral-100`}
		>
			{!formik.values[name] && <Upload04Icon className="h-6 w-6" stroke="2" />}
			{formik.values[name] && (
				<>
					<img src={URL.createObjectURL(formik.values[name])} className="h-full w-full rounded-xl object-cover" alt="Icon" />
					<button
						type="button"
						className="absolute -right-3 -top-3 h-6 w-6 appearance-none rounded-full bg-neutral-600 p-1 text-white"
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
			<input
				type="file"
				ref={image}
				onChange={(e) => formik.setFieldValue(name, e.target.files[0])}
				className="hidden"
				multiple={false}
				accept=".png, .jpg, .jpeg, .svg, .gif"
			/>
		</AspectRatio>
	);
}
