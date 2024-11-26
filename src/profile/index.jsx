import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import MyListing from './components/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function Profile() {
  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="my-lystig">Mi Lista</TabsTrigger>
            <TabsTrigger value="inbox">inbox</TabsTrigger>
            <TabsTrigger value="Profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="my-lystig" className="mb-6">
          <MyListing />
          </TabsContent>
          <TabsContent value="inbox">Inbox Tab</TabsContent>
          <TabsContent value="Profile">Profile Tab</TabsContent>
        </Tabs>
        </div>
    </div>
  )
}

export default Profile