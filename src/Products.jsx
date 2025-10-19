import React from 'react'
// import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { Card, CardContent } from './components/ui/card'

function Products() {
    return (
        <Carousel
            opts={{
                align: "start",
                // loop: true,
            }}
            orientation="vertical"
        // plugins={[
        //     Autoplay({
        //         delay: 2000,
        //     }),
        // ]}
        className='w-full'
        >
            <CarouselContent className="-mt-1 h-60">
                <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                        <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">1</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                        <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">2</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                        <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">3</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                        <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">4</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Products