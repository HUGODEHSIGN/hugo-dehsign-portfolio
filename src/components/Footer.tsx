"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Footer() {
	return (
		<footer className="container my-4">
			<nav className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between p-6 bg-primary rounded-lg">
				<Button variant="outline" size="icon">
					<Home width={20} height={20} />
				</Button>
				<div className="flex flex-col sm:flex-row items-start gap-2">
					<Button variant="link" className="text-primary-foreground">
						<Link href="https://www.linkedin.com/in/hugo-hsi/" target="_blank">
							LinkedIn
						</Link>
					</Button>
					<Button variant="link" className="text-primary-foreground">
						<Link href="https://github.com/hugo-hsi-dev" target="_blank">
							Github
						</Link>
					</Button>
					<Button
						variant="link"
						className="text-primary-foreground"
						onClick={() => {
							navigator.clipboard.writeText("me@hugohsi.dev");
							toast("Copied to clipboard");
						}}
					>
						me@hugohsi.dev
					</Button>
				</div>
			</nav>
		</footer>
	);
}
