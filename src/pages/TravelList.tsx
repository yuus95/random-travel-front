import { useEffect, useState } from "react";
import { GetList } from "../api/randomTravelApi";
import Header from "../components/Header";
import RandomTravelList from "../components/RandomTravelList";
import { useAuth } from "../hooks/useAuth";


export default function RandomTravelListPage() {
    return (
        <div>
            <Header/>
            <RandomTravelList />
        </div>
    );
};