import React from "react";

export default function ListTodoComponent() {
    return (
        <div className="bg-[#FFEE93] p-3 rounded-md grid grid-cols-[auto_1fr_auto] gap-4">
            <div className="bg-white rounded-md flex flex-col items-center justify-center p-3">
                <p className="text-red-600">18</p>
                <p>MON</p>
            </div>
            <div>
                <p className="font-semibold ">Slack</p>
                <p className="text-sm">Description</p>
            </div>
            <div className="flex items-end">
                <p className="capitalize bg-white px-3 rounded-sm">
                    {/* {todo.status == 1
            ? "Todo"
            : todo.status == 2
            ? "working on"
            : todo.status == 3
            ? "checking"
            : "completed"} */}
                </p>
            </div>
        </div>
    );
}