"use client";
import React, { useEffect, useState } from "react";
import fetch_chapters from "@/utils/fetch_chapters";
import LinkHeader from "./Links";

const Container = () => {
  const [bhagvad, setBhagvad] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch_chapters()
      .then((response) => {
        setBhagvad(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full overflow-hidden">
        <img src="/preloader.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <div
      key={2}
      className="grid w-[90%] mx-auto mt-16 grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-3 items-center"
    >
      {bhagvad.map((element, index) => (
        <LinkHeader
          key={index + 100}
          headers={[
            index + 1,
            element.name,
            element.name_transliterated,
            element.name_translated,
          ]}
        />
      ))}
    </div>
  );
};

export default Container;
