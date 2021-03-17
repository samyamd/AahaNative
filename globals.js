import { StyleSheet } from "react-native";

// var imagesize = {height: 40, width: 100};
// export function ImageSize(h, w) {
//     // imagesize = {height: h, width: w};
// }

var themeColor = "#131A46";

export const globalStyle = StyleSheet.create({
  font100: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    backgroundColor: "#FFFFFF",
    padding: 20
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexEnd: {
    justifyContent: "flex-end",
  },
  flexBetween: {
    justifyContent: "space-between",
  },

  //Image
  // image: {
  //     imagesize
  // },

  //   Text
  h1: {
    fontSize: 28,
    fontWeight: "700",
    marginVertical: 4,
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 4,
  },
  h3: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 8,
  },
  h4: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
  },
  h5: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 8,
  },
  p: {
    fontSize: 16,
  },
  styledp: {
    fontSize: 16,
    color: "#777",
  },
  light: {
    color: "#777",
  },
  gray: {
    color: "#eee",
  },
  theme: {
    color: themeColor,
  },
  themebg: {
    backgroundColor: themeColor,
  },
  border: {
    borderColor: "#777",
    borderWidth: 1
  },
  //margins
  mr1: {
    marginRight: 1,
  },
  mr2: {
    marginRight: 2,
  },
  mr3: {
    marginRight: 3,
  },
  mr4: {
    marginRight: 4,
  },
  mr5: {
    marginRight: 5,
  },
  mr15: {
    marginRight: 15,
  },
  ml1: {
    marginLeft: 1,
  },
  ml2: {
    marginLeft: 2,
  },
  ml3: {
    marginLeft: 3,
  },
  ml4: {
    marginLeft: 4,
  },
  ml5: {
    marginLeft: 5,
  },
  ml15: {
    marginLeft: 15,
  },
  my1: {
    marginVertical: 4,
  },
  py1: {
    paddingVertical: 4,
  },
  py10: {
    paddingVertical: 10,
  },
  px10: {
    paddingHorizontal: 10
  },
  px20: {
    paddingHorizontal: 20
  },

  my2: {
    marginVertical: 8,
  },
  my3: {
    marginVertical: 12,
  },
  my4: {
    marginVertical: 16,
  },
  my5: {
    marginVertical: 20,
  },
  p10: {
      padding: 20
  },

  //   Footer
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#eee",
  },
});
