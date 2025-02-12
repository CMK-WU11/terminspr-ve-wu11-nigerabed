"use client";

import Button from "./Button";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

export default function TidmeldButton({ activityId }) {
  console.log("--------", activityId);

  async function handleTilmeldButton() {
    const token = getCookie("landrup_token");
    const userId = getCookie("landrup_userid");

    if (!token || !userId) {
      redirect("/login");
    }
    console.log("process tilmeld");

    let isTilmeldtDone = false;
    try {
      const response = fetch(
        `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "content-type": "application/json",
          },
        }
      );

      console.log("------------>>>>>>");
     
      isTilmeldtDone = true;

      // setIsTilmeldt(data.isTilmeldt);
    } catch (e) {
      console.log("some thing wrong...................");
      console.log(e);
    }


    if (isTilmeldtDone) {
        redirect("/activitier");
      }


  }

  return (
    <>
      <div
        onClick={handleTilmeldButton}
        className="pl-[5em] absolute bottom-[2em] left-[2em]"
      >
        <Button text={"Tilmeld"} />
      </div>
    </>
  );
}
