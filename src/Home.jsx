import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { ButtonGroup } from './components/ui/button-group'
import { Separator } from './components/ui/separator'
import { Button } from './components/ui/button'
import { ArrowRight, ClipboardSignatureIcon, Mail, PhoneCall, Star } from 'lucide-react'

function Home() {
    return (
        <>
            <div className='h-max mt-50 mb-30 w-full flex flex-col justify-center items-center px-4 gap-7'>
                <h1 className="scroll-m-20 text-center text-5xl font-bold tracking-wide text-balance underline underline-offset-12 decoration-2">Welcome To ElectraBid.</h1>
                <h5 className='text-center text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quibusdam ab assumenda itaque repellat quidem natus aperiam repudiandae porro, maxime ipsam voluptates provident magnam, laudantium reprehenderit rerum sequi quam rem!</h5>
                <ButtonGroup>
                    <Button>
                        Get Started.
                        <ArrowRight />
                    </Button>
                    <Button variant='ghost'>
                        Start Bidding
                        <ClipboardSignatureIcon />
                    </Button>
                </ButtonGroup>
            </div>
            <Separator className='my-10' />
            <div className='w-full flex flex-col justify-center items-center mb-10 gap-4'>
                <h1 className='text-4xl tracking-wider'>Our Products</h1>
                <p className='text-lg tracking-widest'>We deliver most trusted Products</p>
            </div>
            <div className='h-screen flex overflow-x-scroll gap-20 w-[90%] mx-auto scroll-container scroll-smooth snap-x snap-mandatory'>
                <Card className="w-[280px] h-fit overflow-hidden shadow-2xl hover:shadow-md transition-all duration-300 flex-shrink-0 snap-start">
                    <CardHeader className="p-0">
                        <img
                            src='https://plus.unsplash.com/premium_photo-1667579006165-16b6f04ccc78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxoaGJEQ0J6MzllNHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500'
                            alt='hello'
                            className="w-full h-48 object-cover"
                        />
                    </CardHeader>

                    <CardContent className="p-4 flex flex-col gap-2">
                        <CardTitle className="text-lg truncate">Title</CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus consectetur itaque praesentium soluta minus. Dicta repellendus temporibus maxime dolor error veritatis pariatur voluptatem recusandae ipsa, in voluptatum distinctio illum.
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                        <span className="text-base font-semibold">$10</span>
                        <Button size="sm" className="rounded-full">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] h-fit overflow-hidden shadow-2xl hover:shadow-md transition-all duration-300 flex-shrink-0 snap-start">
                    <CardHeader className="p-0">
                        <img
                            src='https://plus.unsplash.com/premium_photo-1666823706428-5d93ae18c1c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxoaGJEQ0J6MzllNHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500'
                            alt='hello'
                            className="w-full h-48 object-cover"
                        />
                    </CardHeader>

                    <CardContent className="p-4 flex flex-col gap-2">
                        <CardTitle className="text-lg truncate">Title</CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus consectetur itaque praesentium soluta minus. Dicta repellendus temporibus maxime dolor error veritatis pariatur voluptatem recusandae ipsa, in voluptatum distinctio illum.
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                        <span className="text-base font-semibold">$10</span>
                        <Button size="sm" className="rounded-full">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] h-fit overflow-hidden shadow-2xl hover:shadow-md transition-all duration-300 flex-shrink-0 snap-start">
                    <CardHeader className="p-0">
                        <img
                            src='https://plus.unsplash.com/premium_photo-1666823700173-e53bfc3dbd8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xoaGJEQ0J6MzllNHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500'
                            alt='hello'
                            className="w-full h-48 object-cover"
                        />
                    </CardHeader>

                    <CardContent className="p-4 flex flex-col gap-2">
                        <CardTitle className="text-lg truncate">Title</CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus consectetur itaque praesentium soluta minus. Dicta repellendus temporibus maxime dolor error veritatis pariatur voluptatem recusandae ipsa, in voluptatum distinctio illum.
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                        <span className="text-base font-semibold">$10</span>
                        <Button size="sm" className="rounded-full">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] h-fit overflow-hidden shadow-2xl hover:shadow-md transition-all duration-300 flex-shrink-0 snap-start">
                    <CardHeader className="p-0">
                        <img
                            src='https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xoaGJEQ0J6MzllNHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500'
                            alt='hello'
                            className="w-full h-48 object-cover"
                        />
                    </CardHeader>

                    <CardContent className="p-4 flex flex-col gap-2">
                        <CardTitle className="text-lg truncate">Title</CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus consectetur itaque praesentium soluta minus. Dicta repellendus temporibus maxime dolor error veritatis pariatur voluptatem recusandae ipsa, in voluptatum distinctio illum.
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                        <span className="text-base font-semibold">$10</span>
                        <Button size="sm" className="rounded-full">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] h-fit overflow-hidden shadow-2xl hover:shadow-md transition-all duration-300 flex-shrink-0 snap-start">
                    <CardHeader className="p-0">
                        <img
                            src='https://plus.unsplash.com/premium_photo-1666898930625-c1f5e082da22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8aGhiRENCejM5ZTR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'
                            alt='hello'
                            className="w-full h-48 object-cover"
                        />
                    </CardHeader>

                    <CardContent className="p-4 flex flex-col gap-2">
                        <CardTitle className="text-lg truncate">Title</CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus consectetur itaque praesentium soluta minus. Dicta repellendus temporibus maxime dolor error veritatis pariatur voluptatem recusandae ipsa, in voluptatum distinctio illum.
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                        <span className="text-base font-semibold">$10</span>
                        <Button size="sm" className="rounded-full">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className='h-fit w-full flex'>
                <Card className='h-fit w-[90%] mx-auto my-15 px-6'>
                    <CardTitle>
                        <h1 className='text-3xl text-center'>We Delivered More Than 120k+ Happy Customers</h1>
                    </CardTitle>
                    <CardContent className='flex flex-col gap-10 items-center'>
                        <p className='text-muted-foreground mb-4 text-center'>
                            Our commitment to quality, speed, and transparency has helped us
                            serve customers across 30+ countries. Whether it's a small startup
                            order or a full-scale enterprise delivery, we make sure every
                            product reaches safely and on time.
                        </p>

                        <ul className='list-disc list-inside space-y-1 text-sm text-muted-foreground'>
                            <li>24/7 support for all orders and shipments</li>
                            <li>Trusted by 400+ businesses worldwide</li>
                            <li>Eco-friendly packaging and logistics</li>
                            <li>Real-time order tracking system</li>
                        </ul>
                        <CardAction>
                            <ButtonGroup>
                                <Button>Call Us <PhoneCall /></Button>
                                <Button>Mail Us<Mail /></Button>
                            </ButtonGroup>
                        </CardAction>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Home