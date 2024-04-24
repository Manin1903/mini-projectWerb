import React from 'react'

const listPage = () => {
  return (
    <main>
        <div className='w-full flex '>
            <div className='w-[20%]'>
                <SidebarComponent/>
            </div>
            <div className='w-full pl-10'>
                <NavbarComponent/>
                
            </div>
        </div>
        
    </main>
  )
}

export default listPage