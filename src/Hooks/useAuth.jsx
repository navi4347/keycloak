import  { useState, } from "react";

const useAuth = () => {
  const [isLogin] = useState(false);
  return [isLogin];
};

export default useAuth;