'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';
import NavButton from './navButton';

export default function Navbar() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<header className='w-full relative z-50 bg-[#202020] text-[#f7f7f7] p-5 flex justify-between items-center'>
			<a
				aria-label='landing page template'
				className='flex items-center w-full bg-green400'
				title='landing page template'
				href={`/${langName}`}
			>
				<Image
					width={200}
					height={200}
					src={'/onlylogowhite.png'}
					className='rotator transition-all hover:scale-110 w-8 md:w-14 h-8 md:h-14'
					alt='logo'
				/>
				<div className='flex flex-col text-white justify-around md:h-14'>
					<h2 className='ml-3 font-bold text-lg md:text-[22px]'>EXPO ESSENTIALS</h2>
					<p className='ml-3 text-[10px] md:text-[14px]'>BOOTH CONSTRUCTION</p>
				</div>
			</a>

			<ul className='w-full px-5 gap-9 font-medium hidden md:flex flex-nowrap items-center justify-around'>
				{linkList.map((link, index) => (
					<li key={index} className='group py-3 text-center'>
						<a
							aria-label={link.name}
							className='group relative'
							title={link.name}
							href={`/${langName}${link.url}`}
						>
							{link.name}
							<div className='absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90'></div>
						</a>
					</li>
				))}
			</ul>

			<div className='md:w-full flex items-center justify-end gap-2'>
				<NavButton className='ml-2' />

				{/* Dropdown Menu */}
				<div ref={dropdownRef} className='relative md:hidden'>
					<button
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className='btn btn-ghost p-0'
					>
						<MdMenu size={18} />
					</button>
					{isDropdownOpen && (
						<ul className='absolute right-0 mt-2 menu dropdown-content z-[100] p-2 shadow bg-[#202020] opacity-100 rounded-box w-52'>
							{linkList.map((link, index) => (
								<li key={index} onClick={() => setIsDropdownOpen(false)}>
									<a
										aria-label={link.name}
										title={link.name}
										href={`/${langName}${link.url}`}
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</header>
	);
}
