import React from "react"
import Image from "next/image"
import heroImage from "../public/images/2014-la-lady-greta.jpg"
import { Element } from "react-scroll"

function Home() {
  return (
    <Element id="home" name="home">
      <div>
        <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
          <p></p>
          <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block lg:hidden">
            <Image
              src={heroImage}
              title="heroImage"
              alt="heroImage"
              layout="fill"
              objectFit="cover"
              className="rounded-full cursor-pointer hidden md:block"
            />
          </div>
          <div className=" w-3/4 h-960 shadow-sm rounded-lg relative px-0 hidden lg:block xl:hidden">
            <Image
              src={heroImage}
              title="Photo: Victor Kane"
              alt="Photo: Victor Kane"
              className="rounded-lg h-960 cursor-pointer hidden md:block"
            />
          </div>
          <div className="flex flex-col md:ml-20 mx-10 mt-10">
            <h1 className="font-bold text-7xl text-left mb-5">
              Hello, I´m{" "}
              <span className="text-indigo-900">Greta the Diva Cat</span>
            </h1>
            <small className="text-left">
              <em>Photo: Victor Kane</em>
            </small>
            <p className="text-left font-normal font mb-5 flex-wrap">
              Eat owner's food. Sit as close as possible to warm fire without
              sitting on cold floor eat prawns daintily with a claw then lick
              paws clean wash down prawns with a lap of carnation milk then
              retire to the warmest spot on the couch to claw at the fabric
              before taking a catnap kitty ipsum dolor sit amet, shed everywhere
              shed everywhere
            </p>
            <a
              href="#"
              className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
            >
              Come on in! Garden green!
            </a>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Home
