import React from "react";
import { useSectionRenderer } from "../../hooks/useSectionRenderer";

type Section = {
  readonly type: string;
  readonly props: unknown;
};

type PageRendererProps = {
  readonly sections: readonly Section[];
};

export const PageRenderer: React.FC<PageRendererProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => {
        const Component = useSectionRenderer(section.type);

        if (!Component) {
          console.warn(`No component registered for type: ${section.type}`);
          return null;
        }

        return (
          <Component
            key={index}
            {...(section.props as Record<string, unknown>)}
          />
        );
      })}
    </>
  );
};

export default PageRenderer;
