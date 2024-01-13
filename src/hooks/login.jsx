import { useMutation } from "@tanstack/react-query";
import fetchData from "../helper";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) =>
      fetchData("https://exptrack-kziy.onrender.com/login", "POST", data),
    onSuccess: (data) => {
      alert(data.message);
      alert(data.response);
    },
  });
};

export { useLoginMutation };
