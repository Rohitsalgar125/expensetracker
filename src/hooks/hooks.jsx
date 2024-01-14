import { useMutation } from "@tanstack/react-query";
import fetchData from "../helper";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) =>
      fetchData("https://exptrack-kziy.onrender.com/login", "POST", data),
    onSuccess: (data) => {
      localStorage.setItem('userData' , data)
      alert(data.response);
    },
  });
};

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data) =>
      fetchData("https://exptrack-kziy.onrender.com/register", "POST", data),
    onSuccess: (data) => {
      alert(data.response);
    },
  });
};

export { useLoginMutation, useRegisterMutation };
