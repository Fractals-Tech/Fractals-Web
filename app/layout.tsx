import type { Metadata } from "next"
import { Fraunces, Epilogue } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
	axes: ["opsz"],
})

const epilogue = Epilogue({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
})

const opticianSans = localFont({
	src: "../public/fonts/Optician-Sans.ttf",
	variable: "--font-wordmark",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Fractals — Cloud Consultancy & Software Engineering",
	description:
		"Fractals is a cloud consultancy and software engineering firm. We architect, build, and ship — cloud infrastructure, backend systems, and production software for teams that need it done right.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${fraunces.variable} ${epilogue.variable} ${opticianSans.variable}`}
		>
			<body>{children}</body>
		</html>
	)
}
