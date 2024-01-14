import { useMutation } from "@tanstack/react-query";
import fetchData from "../helper";
import { toast } from "react-toastify";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) =>
      fetchData("https://exptrack-kziy.onrender.com/login", "POST", data),
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data));
      toast.success(data.response);
    },
  });
};

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data) =>
      fetchData("https://exptrack-kziy.onrender.com/register", "POST", data),
    onSuccess: (data) => {
      toast.success(data.response);
    },
  });
};

export { useLoginMutation, useRegisterMutation };
