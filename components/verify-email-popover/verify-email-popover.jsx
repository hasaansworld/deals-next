'use client';
import { PopoverContent } from '@/components/ui/popover';
import Mail01Icon from '@/components/icons/mail';

export default function VerifyEmailPopover({ user }) {
	return (
		<PopoverContent className="flex w-80 flex-col items-center gap-3 p-4">
			<Mail01Icon className="h-5 w-5" stroke="2" />
			<h4 className="font-bold">Verify your email first</h4>
			<p className="text-center text-sm text-green-600">
				We&apos;ve sent a verification link at <b>{user.email}</b>, please use that to continue.
			</p>
		</PopoverContent>
	);
}
