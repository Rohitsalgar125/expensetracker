import { useMutation } from "@tanstack/react-query";
import fetchData from "../helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const useLoginMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data) =>
      fetchData("https://exptrack-kziy.onrender.com/login", "POST", data),
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data));
      toast.success(data.response);
      navigate('/dashboard')
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
