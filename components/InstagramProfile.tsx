import React from 'react';
import { Camera, Home, Search, PlusSquare, Heart, User, Grid, Video, Bookmark, Bell, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ProfileHeader = () => (
    <div className="flex justify-between items-center p-4">
        <Camera size={24} />
        <h1 className="text-xl font-bold">yournamehere</h1>
        <div className="flex space-x-4">
            <Bell size={24} />
            <MoreHorizontal size={24} />
        </div>
    </div>
);

const ProfileInfo = () => (
    <div className="px-4">
        <div className="flex items-center space-x-8">
            <Avatar className="w-20 h-20">
                <AvatarImage src="/api/placeholder/150/150" alt="Profile" />
                <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <div className="flex space-x-4 text-center">
                <div>
                    <p className="font-bold">883</p>
                    <p className="text-sm">Posts</p>
                </div>
                <div>
                    <p className="font-bold">14.1k</p>
                    <p className="text-sm">Followers</p>
                </div>
                <div>
                    <p className="font-bold">1,000</p>
                    <p className="text-sm">Following</p>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <h2 className="font-bold">Yourname Here</h2>
            <p>The best solutions for your business</p>
            <p className="font-semibold">Переглянути перегляд</p>
            <a href="http://www.yoursite.com" className="text-blue-900">www.yoursite.com</a>
            <p className="text-gray-600">Mainstreet 19, Ukraine 2200</p>
        </div>
    </div>
);

const ProfileActions = () => (
    <div className="flex space-x-2 p-4">
        <Button variant="outline" className="flex-1">Following</Button>
        <Button variant="outline" className="flex-1">Message</Button>
        <Button variant="outline" className="flex-1">Contact</Button>
        <Button variant="outline" className="w-12">▼</Button>
    </div>
);

const StoryHighlights = () => (
    <div className="flex space-x-4 p-4 overflow-x-auto">
        {['About', 'Catalog', 'Price', 'Reviews', 'Location'].map((item) => (
            <div key={item} className="flex flex-col items-center">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="/api/placeholder/64/64" alt={item} />
                    <AvatarFallback>{item[0]}</AvatarFallback>
                </Avatar>
                <p className="text-sm mt-1">{item}</p>
            </div>
        ))}
    </div>
);

const ProfileTabs = () => (
    <div className="flex justify-around border-t border-gray-200">
        <Button variant="ghost" className="flex-1"><Grid size={24} /></Button>
        <Button variant="ghost" className="flex-1"><Video size={24} /></Button>
        <Button variant="ghost" className="flex-1"><Bookmark size={24} /></Button>
    </div>
);

const ProfileGallery = () => (
    <div className="grid grid-cols-3 gap-1">
        {[...Array(6)].map((_, i) => (
            <Card key={i} className="aspect-square">
                <CardContent className="p-0">
                    <img src={`/api/placeholder/150/150?text=Photo ${i + 1}`} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                </CardContent>
            </Card>
        ))}
    </div>
);

const BottomNavigation = () => (
    <div className="flex justify-around py-2 border-t border-gray-200">
        <Home size={24} />
        <Search size={24} />
        <PlusSquare size={24} />
        <Heart size={24} />
        <User size={24} />
    </div>
);

const InstagramProfile = () => {
    return (
        <div className="max-w-md mx-auto bg-white">
            <ProfileHeader />
            <ProfileInfo />
            <ProfileActions />
            <StoryHighlights />
            <ProfileTabs />
            <ProfileGallery />
            <BottomNavigation />
        </div>
    );
};

export default InstagramProfile;