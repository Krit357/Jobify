import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/job/${params.id}`);
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job delete successfully");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    return redirect("/dashboard/all-jobs");
  };
