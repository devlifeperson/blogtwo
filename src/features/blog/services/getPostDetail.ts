import { privateEnv } from "@/config/private-env";
import { publicEnv } from "@/config/public-env";

export const getPost = async (id: string | number) => {
  const header = new Headers();
  header.append("accept", "application/json");
  header.append("Origin", publicEnv.DEPLOY_URL);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: header,
    redirect: "follow",
    next: {
      revalidate: 60,
    },
  };

  const response = await fetch(
    `${privateEnv.API_URL}/api/websites/${privateEnv.WEBSITE_ID}/projects/${id}`,
    requestOptions
  );

  if (response.status === 404) {
    return {
      success: false,
      status: 404,
    };
  }

  const data = (await response.json()) as Data;

  return {
    success: true,
    data,
  };
};

interface Data {
  id: number;
  title: string;
  description: string | null | undefined;
  estimate: number;
  urls: string[];
  created_at: string;
  author: string;
}
