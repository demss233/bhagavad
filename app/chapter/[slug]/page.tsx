"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import fetch_verses from "@/utils/fetch_verses";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Page() {
  let [verses, setVerses] = useState<any[]>([]);
  let [loaded, setLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch_verses(params.slug)
      .then((response) => {
        setVerses(response);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {loaded && (
        <>
          <Navbar></Navbar>
          <div
            key={1}
            className="flex flex-col w-[90%] mx-auto mt-10 gap-10 grid-cols-3"
          >
            {verses.map((element, index) => {
              return <Heading header={`${index + 1}. ${element}`}></Heading>;
            })}
          </div>
          <Footer></Footer>
        </>
      )}
      {!loaded && (
        <>
          <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            <img src="/preloader.gif" alt="" />
          </div>
        </>
      )}
    </>
  );
}
