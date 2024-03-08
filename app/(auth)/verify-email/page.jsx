import getUser from '@/lib/server';

export default async function VerifyEmail() {
	const user = await getUser();
	console.log(user);
	return (
		<div className="mx-auto flex h-full w-full max-w-[500px] flex-col items-center justify-center px-10 pb-40">
			<h1 className="text-3xl font-bold text-black">Verify email to continue</h1>
			<p className="mt-1 text-center text-neutral-600">
				We have sent a verification email at <span className="font-bold text-black">{user.email}</span>. Please verif your email address
			</p>
		</div>
	);
}
