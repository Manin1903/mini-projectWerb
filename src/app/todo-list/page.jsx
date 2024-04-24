import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'
import Image from "next/image";
import { getServerSession } from 'next-auth'

const ToDoListPage = () => {
  return (
    <main>
        <div className='w-full flex '>
            <div className='w-[20%]'>
                <SidebarComponent/>
            </div>
            <div className='w-full pl-10'>
                <NavbarComponent/>
                
                <h1 className='text-center text-blue-700 text-[200px] py-[100px] '>Wellcome</h1>
            </div>
        </div>
        
    </main>
  )
}

export default ToDoListPage