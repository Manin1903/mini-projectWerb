import { authOption } from "@/app/api/auth/[...nextauth]/route";
import headerToken from "@/app/api/headerToken";
import { getServerSession } from "next-auth";

//get all workspace
export const getAllWorkSpaceService = async () => {
  const header = await headerToken();
  const res = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/workspaces",
    { headers: header },
    { cache: "no-store", next: { tag: ["workSpace"] } }
  );
  const data = await res.json();
  return data;
};

//insert all workspace
export const insertWorkSpaceService = async (workSpaceData) => {
  console.log("data : ", workSpaceData);
  const header = await headerToken();
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    method: "POST",
    body: JSON.stringify({
      workspaceName: workSpaceData,
    }),
    headers: header,
  });
  const data = await res.json();
  console.log("Response : ", data);
  return data;
};


//delete all workspace
export const deleteWorkSpaceService = async (workSpaceId)=>{
  console.log("data : ", workSpaceId);
  const header = await headerToken();
  const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces/${workSpaceId}`, {
    method: "DELETE",
    headers: header,
    
  });
  const data = await res.json();
  console.log("Response : ", data);
  return data;
};
