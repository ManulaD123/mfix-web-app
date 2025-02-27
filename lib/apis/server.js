import { api } from "@/lib/api";

//----------------Get Movies------------------------------

export const getMovies = async () => {
  try {
    const response = await api.get("v1/movies");
    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "Something went wronng" };
    }
  } catch (error) {
    console.log("MongoDB ERROR:: ", error);
    return { error: true, message: "Something went wronng" };
  }
};
