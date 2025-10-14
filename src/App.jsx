import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { ArrowRight, ClipboardSignatureIcon, Mail, PhoneCall, Star } from 'lucide-react'
import Navbar from './Navbar'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { ButtonGroup } from './components/ui/button-group'
import { Separator } from './components/ui/separator'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
