const primary = "#fff";
const secondary = "#000";
export interface DefaultTheme {
  primary: string;
  secondary: string;
  text: string;
  border: string;
  header: string;
  background: string;
  input: string;
  error: string;
  success: string;
  placeholder: string;
  warning: string;
  buttons: {
    secondaryDark: {
      foreground: string;
      background: string;
    };
    linear: {
      foreground: string;
      background: string;
    };
    gray: {
      foreground: string;
      background: string;
    };
    primary: {
      foreground: string;
      background: string;
    };
    secondary: {
      foreground: string;
      background: string;
    };
    danger: {
      foreground: string;
      background: string;
    };
    success: {
      foreground: string;
      background: string;
    };
    warning: {
      foreground: string;
      background: string;
    };
    base: {
      foreground: string;
      background: string;
    };
    alternative: {
      foreground: string;
      background: string;
    };
  };
  fonts: {
    size: {
      10: string;
      12: string;
      14: string;
      15: string;
      16: string;
      18: string;
      20: string;
      22: string;
      26: string;
      30: string;
    };
  };
}

export const defaultTheme: DefaultTheme = {
  primary,
  secondary,
  text: "#FAFAFA" || "black",
  border: secondary,
  background: "#FFFFFF",
  error: "#FF5630",
  header: primary,
  input: "#7A869A",
  success: "#20A612",
  warning: "#FF8F35",
  placeholder: "#E2E2E2",
  buttons: {
    secondaryDark: {
      foreground: "#FFFFFF",
      background: secondary,
    },
    linear: {
      foreground: "#FFFFFF",
      background: "#FFFFFF",
    },
    gray: {
      foreground: "#737373",
      background: "#E2E2E2",
    },
    primary: {
      foreground: "#FFFFFF",
      background: primary,
    },
    secondary: {
      foreground: secondary,
      background: "#0A8B97",
    },
    danger: {
      foreground: "#FFFFFF",
      background: "#F93B31",
    },
    success: {
      foreground: "#FFFFFF",
      background: "#35c75a",
    },
    warning: {
      foreground: "#FFFFFF",
      background: "#FDCC01",
    },
    base: {
      foreground: "#FFFFFF",
      background: "#05015E",
    },
    alternative: {
      foreground: "#FFFFFF",
      background: "#FF8203",
    },
  },
  fonts: {
    size: {
      10: `${10}px`,
      12: `${12}px`,
      14: `${14}px`,
      15: `${15}px`,
      16: `${16}px`,
      18: `${18}px`,
      20: `${20}px`,
      22: `${22}px`,
      26: `${26}px`,
      30: `${30}px`,
    },
  },
};
