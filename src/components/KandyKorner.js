import React, { useEffect, useState } from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";

export const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <h1>Kandy Korner's Tasty Treats</h1>
            <ApplicationViews />
        </>
    )
}