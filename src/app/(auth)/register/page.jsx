import React from 'react'
import Image from "next/image";
const RegisterPage = () => {
    return (
    <main>
      <section className="bg-white h-screen ">
        <div className="px-32 py-10">
            <Image src={"/assets/icons/logo.svg"} width={200} height={150} />
        </div>
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-8">

            <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2 w-full">
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name:</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 bg-gray-500 text-gray-900 text-sm rounded-lg w-[380px] focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600  mt-5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." required />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name:</label>
                        <input type="text" name="brand" id="brand"  className="bg-gray-50 border border-gray-300 text-gray-900  mt-5  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your naem..."/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                        <input type="text" name="brand" id="brand"  className="bg-gray-50 border border-gray-300 text-gray-900  mt-5  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="sokmanin.1918@gmail.com"/>
                        
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No :</label>
                        <input type="text" name="brand" id="brand"  className="bg-gray-50 border border-gray-300 text-gray-900  mt-5  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="+91-952834234"/>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender: </label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Female</option>
                            <option value="TV">Male</option>

                        </select>
                        
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
                        <input type="text" name="brand" id="brand"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  mt-5  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="***********"/>
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comfirm Password :</label>
                        <input type="text" name="brand" id="brand"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  mt-5  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="***********"/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none w-32 mt-5  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                       Sign Up
                    </button>
                    
                </div>
                
            </form>
        
          </div>
          <div className="hidden lg:mt-0 lg:col-span-4  lg:flex  ">
            <Image src={"/assets/icons/sign-up.svg"} width={400} height={50} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage