import Link from "next/link";

type NavbarProps = {
	children: React.ReactNode;
};
export default function Navbar({ children }: NavbarProps) {
	return (
		<header className="flex flex-col sm:flex-row gap-4 justify-between items-center rounded-lg bg-primary shadow mt-6 p-6">
			<Link href="/">
				<h1 className="text-3xl font-bold  text-primary-foreground">
					HUGO HSI
				</h1>
			</Link>
			<nav className="">{children}</nav>
		</header>
	);
}
