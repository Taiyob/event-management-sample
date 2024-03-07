// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

const ServiceDetail = () => {
  const detailId = useParams();
  console.log(detailId.id);
  const information = useLoaderData();
  console.log(information);
  // if(detailId){
    const info =  information.find(details => details.id == detailId.id);
    console.log(info);
  // }
  return (
    <div>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-black text-6xl">{info.id}</h1>
          {/* <h1 className="text-black text-6xl">{info.description}</h1> */}
          <figure className="max-w-lg">
            <img
              className="h-auto max-w-full rounded-lg"
              // src={img}
              // alt={description}
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              
            </figcaption>
          </figure>
          <p className="text-justify text-gray-500 dark:text-gray-400">
            
          </p>
        </div>
        <div>
          <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl font-bold">Login With</h2>
            <button className="btn btn-outline w-full">
              <FaGoogle></FaGoogle>
              Login with Google
            </button>
            <button className="btn btn-outline w-full">
              <FaGithub></FaGithub>
              Login with Github
            </button>
          </div>
          <div className="p-4 mb-6">
            <h2 className="text-3xl font-bold mb-4">Find us on</h2>
            <a
              href=""
              className="p-4 flex text-lg items-center border rounded-t-lg"
            >
              <FaFacebook className="mr-3"></FaFacebook>
              Facebook
            </a>
            <a href="" className="p-4 flex text-lg items-center border-x">
              <FaTwitter className="mr-3"></FaTwitter>
              Twiteer
            </a>
            <a
              href=""
              className="p-4 flex text-lg items-center border rounded-b-lg"
            >
              <FaInstagram className="mr-3"></FaInstagram>
              Instagram
            </a>
          </div>
          <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl font-bold">Q Zone</h2>
            {/* <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
