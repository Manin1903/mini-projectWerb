"use server";

import { deleteWorkSpaceService, insertWorkSpaceService } from "@/service/workSpace.service";
import { revalidatePath, revalidateTag } from "next/cache";

//Server  action htmlFor handler workspace
export async function handleWorkSpace(WorkspaceInput) {
  
  console.log(WorkspaceInput);
  //define object structure
  const newWorkSpace = {
    workspaceName: WorkspaceInput.get("workspaceName"),
  };
  //calling server by insert customer
  const workspace = await insertWorkSpaceService(newWorkSpace.workspaceName);
  console.log(workspace);

  //calling revalidate tag
  revalidateTag("workSpace");
}


export const deleteWorkSpaceAction= async(id) =>{
  const res = await deleteWorkSpaceService(id);
  console.log(res);
  revalidatePath("/todo-list")
}