import HeroSection from "../pages/HeroSection";
import ProductListSection from "../pages/ProductsList";
import Profile from "../pages/Profile";

export const componentResolver: Record<string, React.FC<any>> = {
  hero: HeroSection,
  productList: ProductListSection,
  profile: Profile,
};
export default componentResolver;
