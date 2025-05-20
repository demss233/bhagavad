"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import fetch_chapters from "@/utils/fetch_chapters";
import LinkHeader from "./Links";

const Container = () => {
  const [bhagvad, setBhagvad] = useState([]);

  useEffect(() => {
    fetch_chapters()
      .then((response) => {
        setBhagvad(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        key={2}
        className="grid w-[90%] mx-auto mt-16 grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-3 items-center"
      >
        {bhagvad.map((element, index) => {
          return (
            <LinkHeader
              key={index + 100}
              headers={[
                index + 1,
                element.name,
                element.name_transliterated,
                element.name_translated,
              ]}
            ></LinkHeader>
          );
        })}
      </div>
    </>
  );
};
export default Container;
