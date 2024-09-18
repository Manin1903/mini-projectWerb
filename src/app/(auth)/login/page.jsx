"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  //define handle login
  async function handleLogin(userInfo) {
    //define new auth
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };

    //Calling  next  auth service
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    console.log("res in login:", res);

    //check login
    if(res?.status == 200)  {
      router.push("/todo-list");
    }
  }
  return (
    <main>
      <section className="bg-white h-screen ">
        <div className="px-32 py-10">
          <Image src={"/assets/icons/logo.svg"} width={200} height={150} />
        </div>
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-2xl font-bold px-16 py-5">Login with jingnin</h1>
            <form
              className="max-w-xl mx-auto w-[600px] px-16"
              action={handleLogin}
            >
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
              </div>

              <button
                type="submit"
                className=" px-[205px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <div className="mt-5 text-sm">
                <p>
                  Don't have an account ?{" "}
                  <span>
                    <a href="#" className="text-blue-700">
                      {" "}
                      Register
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex  justify-between mt-5">
                <div>
                  <hr className="w-36 mt-3" />
                </div>
                <div>Continue with</div>
                <div>
                  <hr className="w-36  mt-3" />
                </div>
              </div>
              <button
                type="submit"
                className=" px-[205px] text-white bg-stone-400 mt-5 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Google
              </button>
            </form>
            <div className="text-sm mt-10 ">
              <h1> © 2024 My office . All Rights Reserved</h1>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5  lg:flex  ">
            <Image src={"/assets/icons/login.svg"} width={400} height={50} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
