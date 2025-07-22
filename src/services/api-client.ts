import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8c86830a90454011a138733beae07148",
  },
});
