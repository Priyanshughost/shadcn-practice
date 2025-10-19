import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Menu, Moon } from 'lucide-react'
import SideBar from './SideBar'
import { SidebarInset, useSidebar } from './components/ui/sidebar'
import { Avatar, AvatarFallback } from './components/ui/avatar'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import { useTheme } from './ThemeProvider'

function App() {
  const { toggleSidebar } = useSidebar()
  const { setTheme } = useTheme()
  return (
    <div className="flex w-full">
      <SideBar />
      <SidebarInset asChild>
        <main className="flex flex-col w-full">
          <div className='flex h-fit w-full items-center justify-between sticky top-0 backdrop-blur-lg rounded-2xl z-10'>
            <Button variant='icon' onClick={toggleSidebar}><Menu /></Button>
            <div className="w-full justify-end px-2 sm:px-4 flex">
              <Button variant='ghost' asChild><span>Dashboard</span></Button>
              <Button variant='icon' 
              onClick={() => {
                const theme = localStorage.getItem("vite-ui-theme")
                return theme === "light" ? setTheme('dark') : setTheme('light')
              }}>
                <Moon />
              </Button>
              <Button variant='ghost' ><Avatar><AvatarFallback>PG</AvatarFallback></Avatar></Button>
            </div>
          </div>
          <div className='px-6 py-4'>
            <Outlet/>
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}

export default App
