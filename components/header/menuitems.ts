"use client"

import { MenuItem } from "@/types/interfaces"

const menuItems: MenuItem[] = [
	{ title: "Home", href: "/" },
	{
		title: "Dropdown",
		submenu: [
			{
				"href": "/one",
				"title": "Submenu item one"
			},
			{
				"href": "/two",
				"title": "Submenu item two"
			},
			{
				"href": "/three",
				"title": "Submenu item three"
			}
		],
	},
	{ title: "PAGE 1", href: "/page-one" },
	{ title: "PAGE 2", href: "/page-two" },
	{ title: "PAGE 3", href: "/page-three" },
	{ title: "PAGE 4", href: "/page-four" },
]

export default menuItems;
