import { componentResolver } from "../resolver/ComponentResolver";

export function useSectionRenderer(type: string) {
  return componentResolver[type];
}
