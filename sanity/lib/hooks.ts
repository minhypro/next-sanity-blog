"use client";
import { useEffect, useState } from "react";

import { ICategories } from "@/lib";

import { getCategories } from "./actions";

export const useCategories = () => {
  const [categories, setCategories] = useState<Array<ICategories>>([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return categories;
};
