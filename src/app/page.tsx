import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
      <>
          <header>
              <NavigationMenu>
                  <NavigationMenuList>
                      <NavigationMenuItem>
                          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                          <NavigationMenuContent>
                              <NavigationMenuLink>Link</NavigationMenuLink>
                          </NavigationMenuContent>
                      </NavigationMenuItem>
                  </NavigationMenuList>
              </NavigationMenu>
          </header>
          <main>
              <div>Next.js on GitHub Pages</div>
          </main>
      </>
  );
}
