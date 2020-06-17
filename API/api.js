import React from "react";

export async function CWD_API(lat, lon) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  try {
    const response = await fetch(
      proxy +
        `http://www.crazywebdesigners.com/salon/api/home1.php?sid=1`
    );
    const res = await response.json();
    // console.log(" => CWD api called",res);
    return res;
  } catch (err) {
    console.log(err);
  }
}

