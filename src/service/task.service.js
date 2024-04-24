import headerToken from "@/app/api/headerToken";

//get all todoboard
export const getAllTodoList = async (workSpaceId) => {
    const header = await headerToken();
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/${workSpaceId}`, 
      { headers: header },
      { cache: "no-store", next: { tag: ["workSpace"] } }
    );
    const data = await res.json();
    return data;
  };