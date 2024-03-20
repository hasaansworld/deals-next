import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Delete01Icon from '@/components/icons/delete';
import axios from '@/lib/axios';
import RestoreBinIcon from '@/components/icons/restore_bin';
import RefreshIcon from '@/components/icons/refresh';
import { Oval } from 'react-loader-spinner';

export default function DeactivatePopover({ listing, deactivateCallback }) {
	const [open, setOpen] = useState(false);
	const [isDeactivating, setIsDeactivating] = useState(false);
	const [error, setError] = useState('');

	const setActivate = (activate) => {
		setError('');
		setIsDeactivating(true);

		axios
			.post(`/api/listing/${listing.nameId}/update`, { active: activate })
			.then((res) => {
				setOpen(false);
				setTimeout(() => {
					setIsDeactivating(false);
					deactivateCallback(listing.id, activate);
				}, 300);
			})
			.catch((error) => {
				setIsDeactivating(false);
				setError(error.response.data.message);
			});
	};
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					onClick={(e) => e.stopPropagation()}
					className={`h-12 w-12 rounded-full p-3.5 hover:bg-neutral-100 ${listing.active ? 'hover:text-rose-500' : 'hover:text-green-600'}`}
				>
					{listing.active ? <Delete01Icon className="h-5 w-5" stroke="2" /> : <RefreshIcon className="h-5 w-5" stroke="2" />}
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-96 p-4" onClick={(e) => e.stopPropagation()}>
				<h4 className="font-bold">{listing.active ? 'Deactivate' : 'Activate'}</h4>
				<p className="text-neutral-600">{`Do you want to ${listing.active ? 'deactivate' : 'activate'} the listing of ${listing.appName}?`}</p>
				{error && <p className="mt-2 overflow-hidden text-rose-500">{error}</p>}
				<div className="mt-3 flex justify-end gap-2">
					<button
						onClick={(e) => {
							e.stopPropagation();
							setOpen(false);
						}}
						disabled={isDeactivating}
						className="rounded-lg bg-neutral-500 px-3 py-1 font-medium text-white hover:bg-neutral-600"
					>
						Cancel
					</button>
					<button
						onClick={(e) => {
							e.stopPropagation();
							setActivate(!listing.active);
						}}
						disabled={isDeactivating}
						className={`flex items-center gap-3 rounded-lg px-3 py-1 font-medium text-white ${
							listing.active ? 'bg-rose-500 hover:bg-rose-600' : 'bg-green-500 hover:bg-green-600'
						}`}
					>
						{listing.active ? (isDeactivating ? 'Deactivating' : 'Deactivate') : isDeactivating ? 'Activating' : 'Activate'}
						{isDeactivating && <Oval width="18" height="18" strokeWidth={10} color="#fff" secondaryColor="rgba(255, 255, 255, 0.3)" />}
					</button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
