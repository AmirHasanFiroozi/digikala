import { useEffect } from "react";
import AppLayout from "./AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchWidgetData } from "../features/HomePageFeaturesRequest";

function HomePage() {
  const dispatch = useDispatch();
  const { situation } = useSelector(store => store.homePageWidgets);

  useEffect(function(){
    dispatch(fetchWidgetData());
  },[dispatch]);

  if(situation === "arrive") return <AppLayout />
}

export default HomePage;
