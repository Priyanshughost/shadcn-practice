import * as React from "react"
import { PlusIcon } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemFooter,
    ItemGroup,
    ItemHeader,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
} from "@/components/ui/item"
import { ScrollArea } from "./components/ui/scroll-area"

// const people = [
//     {
//         username: "shadcn",
//         avatar: "https://github.com/shadcn.png",
//         email: "shadcn@vercel.com",
//     },
//     {
//         username: "maxleiter",
//         avatar: "https://github.com/maxleiter.png",
//         email: "maxleiter@vercel.com",
//     },
//     {
//         username: "evilrabbit",
//         avatar: "https://github.com/evilrabbit.png",
//         email: "evilrabbit@vercel.com",
//     },
//     {
//         username: "shadcn",
//         avatar: "https://github.com/shadcn.png",
//         email: "shadcn@vercel.com",
//     },
//     {
//         username: "shadcn",
//         avatar: "https://github.com/shadcn.png",
//         email: "shadcn@vercel.com",
//     },
//     {
//         username: "maxleiter",
//         avatar: "https://github.com/maxleiter.png",
//         email: "maxleiter@vercel.com",
//     },
//     {
//         username: "evilrabbit",
//         avatar: "https://github.com/evilrabbit.png",
//         email: "evilrabbit@vercel.com",
//     },
//     {
//         username: "maxleiter",
//         avatar: "https://github.com/maxleiter.png",
//         email: "maxleiter@vercel.com",
//     },
//     {
//         username: "evilrabbit",
//         avatar: "https://github.com/evilrabbit.png",
//         email: "evilrabbit@vercel.com",
//     }
// ]

function ItemList() {
    return (
        <>
            <ScrollArea className='h-85 rounded-md border'>
            <Item className='sticky backdrop-blur-lg z-3 top-0'>
                <ItemContent>
                    <ItemTitle>Top Users</ItemTitle>
                </ItemContent>
            </Item>
            <Item>
                <ItemHeader>
                    <ItemTitle>John Doe</ItemTitle>
                    <ItemDescription>@johndoe</ItemDescription>
                </ItemHeader>

                <ItemMedia>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </ItemMedia>

                <ItemContent>
                    <ItemTitle>Sample Title</ItemTitle>
                    <ItemDescription>Sample Description</ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button>View</Button>
                </ItemActions>
            </Item>
            <Item>
                <ItemHeader>
                    <ItemTitle>John Doe</ItemTitle>
                    <ItemDescription>@johndoe</ItemDescription>
                </ItemHeader>

                <ItemMedia>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </ItemMedia>

                <ItemContent>
                    <ItemTitle>Sample Title</ItemTitle>
                    <ItemDescription>Sample Description</ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button>View</Button>
                </ItemActions>
            </Item>
            <Item>
                <ItemHeader>
                    <ItemTitle>John Doe</ItemTitle>
                    <ItemDescription>@johndoe</ItemDescription>
                </ItemHeader>

                <ItemMedia>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </ItemMedia>

                <ItemContent>
                    <ItemTitle>Sample Title</ItemTitle>
                    <ItemDescription>Sample Description</ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button>View</Button>
                </ItemActions>
            </Item>
            <Item>
                <ItemHeader>
                    <ItemTitle>John Doe</ItemTitle>
                    <ItemDescription>@johndoe</ItemDescription>
                </ItemHeader>

                <ItemMedia>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </ItemMedia>

                <ItemContent>
                    <ItemTitle>Sample Title</ItemTitle>
                    <ItemDescription>Sample Description</ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button>View</Button>
                </ItemActions>
            </Item>
            <Item>
                <ItemHeader>
                    <ItemTitle>John Doe</ItemTitle>
                    <ItemDescription>@johndoe</ItemDescription>
                </ItemHeader>

                <ItemMedia>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </ItemMedia>

                <ItemContent>
                    <ItemTitle>Sample Title</ItemTitle>
                    <ItemDescription>Sample Description</ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button>View</Button>
                </ItemActions>
            </Item>
            <Item>
                <ItemHeader>
                    <ItemTitle>John Doe</ItemTitle>
                    <ItemDescription>@johndoe</ItemDescription>
                </ItemHeader>

                <ItemMedia>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </ItemMedia>

                <ItemContent>
                    <ItemTitle>Sample Title</ItemTitle>
                    <ItemDescription>Sample Description</ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button>View</Button>
                </ItemActions>
            </Item>
            </ScrollArea>
        </>

    )
}

export default ItemList