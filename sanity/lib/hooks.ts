"use client"
import { useEffect, useState } from "react";

import {getCategories} from './actions'

export const useCategories = () => {
    const [categories, setCategories] = useState<
      Array<{
        title: string;
        description: string;
        slug: string;
      }>
    >([]);
  
    useEffect(() => {
        getCategories().then((data) => setCategories(data));
    }, []);
  
    return categories;
  };
  