import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      accent: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      textColor: string;
      bgColor: string;
      baseText: string;
      baseBg: string;
      hoveredText: string;
      hoveredBg: string;
      selectedText: string;
      selectedBg: string;
      seriesA: string;
      seriesB: string;
      seriesC: string;
      seriesD: string;
      seriesE: string;
      seriesF: string;
    };
  }
}
