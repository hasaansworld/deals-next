'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/auth';
import AddSquareIcon from '@/components/icons/add_square';
import Notification03Icon from '@/components/icons/notification';
import UserCircle02Icon from '@/components/icons/user_circle';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import Login03Icon from '@/components/icons/login';
import UserAdd01Icon from '@/components/icons/user_add';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
	const { user } = useAuth({ middleware: 'guest' });

	return (
		<header className="fixed left-0 right-0 top-0 z-10 border-b border-[#777]/10 bg-white/10 py-2 backdrop-blur-2xl backdrop-filter">
			<nav>
				<div className="flex items-center justify-between px-6">
					<Link href="/">
						<div className="flex items-center gap-2">
							<img src="/logo.svg" alt="Logo" className="h-6 w-6" />
							<h1 className="text-lg font-bold text-black">Appdeals</h1>
						</div>
					</Link>

					<p className="mx-9 w-[400px] rounded-lg border border-[#666]/10 bg-[#f6f6f6]/10 px-3 py-1 font-medium text-[#888]">Search apps</p>

					<div className="mr-14 flex items-center gap-8">
						<Link
							href="/submit"
							className="flex items-center gap-2 rounded-full bg-fuchsia-100 px-4 py-1 font-medium text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white"
						>
							<AddSquareIcon className="h-4 w-4" stroke="2.5" />
							Submit
						</Link>
						{user ? (
							<>
								<Notification03Icon className="h-5 w-5 text-black" stroke="2" />
								<img src="profile3.jpg" className="h-8 w-8 rounded-full border border-[#eee]" />
							</>
						) : (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div className="h-8 w-8 cursor-pointer rounded-full bg-transparent p-1 hover:bg-neutral-100">
										<UserCircle02Icon className="h-6 w-6 text-black" stroke="1.5" />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-40 p-1">
									<DropdownMenuItem asChild>
										<Link
											href="/login"
											className="flex items-center gap-3 px-4 py-2 text-neutral-600 hover:bg-neutral-100 hover:text-black"
										>
											<Login03Icon className="h-4 w-4" stroke="2" />
											<p className="text-sm font-medium">Login</p>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link
											href="/signup"
											className="flex items-center gap-3 px-4 py-2 text-neutral-600 hover:bg-neutral-100 hover:text-black"
										>
											<UserAdd01Icon className="h-4 w-4" stroke="2" />
											<p className="text-sm font-medium">Signup</p>
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
