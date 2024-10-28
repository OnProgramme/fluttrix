import { useEffect, useState } from "react";
import { AppBar } from "../models/AppBar";
import Scaffold from "../models/Scaffold";

export interface BuildApppInCanvasBehavior {
  scaffold: Scaffold;
}

export const useBuildAppInCanvas = (): BuildApppInCanvasBehavior => {

  const [scaffold] = useState<Scaffold>(new Scaffold({
    appBar: new AppBar(),
  }));

  const [, setupdateScaffold] = useState({})

  useEffect(() => {
    const unsubscribe = scaffold.subscribe(() => {
      setupdateScaffold({});
    });
    return () => {
      unsubscribe();
    };
  }, []);



  return {
    scaffold,
  };
}