const heroDirective = {
  name: `hero`,
  doc: `A directive for a hero section`,
  body: {
    type: "myst",
  },
  run(data) {
    const div = {
      type: "div",
      style: {
        fontWeight: "bold",
        fontSize: "3em",
        maxWidth: "50%",
        margin: ".5em auto",
        textAlign: "center",
        lineHeight: "normal",
        overflowWrap: "normal",
      },
      children: data.body,
    };
    return [div];
  },
};

const largeRole = {
  name: `large`,
  doc: `A role for large text`,
  body: {
    type: "myst",
  },
  run(data) {
    const div = {
      type: "span",
      style: { fontSize: "1.5em" },
      children: data.body,
    };
    return [div];
  },
};

const colorRoles = Object.entries({
  bigBlue: "#1D4EF5",
  paleBlue: "#F2F5FC",
  midnight: "#230344",
  mauve: "#B86BFC",
  forest: "#057761",
  lightGreen: "#0CEFAE",
  magenta: "#C60A76",
  pink: "#FF808B",
  coral: "#FF4E4F",
  yellow: "#FFDE17",
}).map(([color, hexCode]) => {
  return {
    name: color,
    doc: `A role for 2i2c ${color} text`,
    body: {
      type: "myst",
    },
    run(data) {
      const div = {
        type: "span",
        style: { color: hexCode },
        children: data.body,
      };
      return [div];
    },
  };
});

const plugin = {
  name: "Landing page extensions",
  roles: [largeRole, ...colorRoles],
  directives: [heroDirective],
};

export default plugin;
