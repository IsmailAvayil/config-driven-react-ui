import { heroDrivenData } from "../data/hero-driven-data";
import { productsDrivenData } from "../data/products-driven-data";
import { profileDrivenData } from "../data/profile-driven-data";
export const appConfig = {
  theme: {
    primaryColor: "bg-[#000000]",
    textColor: "text-[#FFFFFF]",
    spacing: "p-4",
  },

  nav: {
    show: true,
  },

  pages: [
    {
      path: "/",
      title: "Home",
      sections: heroDrivenData,
    },
    {
      path: "/products",
      title: "Products",
      sections: productsDrivenData,
    },
    {
      path: "/profile",
      title: "Profile",
      sections: profileDrivenData,
    },
  ],
} as const;
