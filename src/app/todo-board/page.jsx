import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import WorkspacePopupComponent from '@/components/WorkspacePopupComponent'
import React from 'react'

const ToDoBoard = () => {
  return (
    <main>
        <div className='w-full flex '>
            <div className='w-[20%]'>
                <SidebarComponent/>
            </div>
            <div className='w-full pl-10'>
                <NavbarComponent/>
                <div className='mt-5 px-4'>
                    <ListBoardComponentHeader/>
                </div>
                <div className='mt-5 px-4 flex gap-10'>
                    <div className='w-[250px]'>
                        <h1 className=''>TODO</h1>
                        <hr className='text-yellow-300 '/>
                        <div className=' w-full'>
                            <TodoCardComponent/>
                        </div>
                    </div>
                    
                    <div className='w-[250px]'>
                        <h1 className=''>WORKING ON</h1>
                        <hr className='text-blue-500 '/>
                        <div className=' w-full'>
                            <TodoCardComponent/>
                        </div>
                    </div>
                    <div className='w-[250px]'>
                        <h1 className=''>CHECKING</h1>
                        <hr className='text-red-500 '/>
                        <div className=' w-full'>
                            <TodoCardComponent/>
                        </div>
                    </div>
                    <div className='w-[250px]'>
                        <h1 className=''>COMPLETED</h1>
                        <hr className='text-green-500 '/>
                        <div className=' w-full'>
                            <TodoCardComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
  )
}

export default ToDoBoard