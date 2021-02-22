import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'


export default  ()=>{
  const User = useSelector(state => state.User);
  const router = useRouter();
  useEffect(()=>{
    if(!User.Name){
      router.push("/login")
    }
  },[User])

  return (<div>Bem Vindo</div>)
}