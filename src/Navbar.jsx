import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const handleTheme = () => {
        window.document.body.classList = window.document.body.classList == 'dark' ? 'light' : 'dark'
    }
    return (
        <nav className="w-full bg-background/50 backdrop-blur-md border-b px-6 py-5 flex justify-between items-center sticky top-0">
            <div className="text-2xl font-semibold tracking-tight">Electrabid.</div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-4">
                    <NavigationMenuItem>
                        <Button variant='icon' onClick={handleTheme}><Moon /></Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Button variant='outline'>Home</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Button variant='outline'>Services</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Button variant='outline'>About</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Button variant='ghost'>DashBoard</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Button asChild variant="destructive">
                                <Link to="/login">Login</Link>
                            </Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </nav>
    )
}
