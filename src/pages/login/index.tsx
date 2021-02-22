import { Background, BackgroundForm, Content, Aside} from "./styles"
import Form from "./form"
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from './actions';
import { useEffect} from "react";
import { useRouter } from 'next/router'


export default function Login() {
  const dispatch = useDispatch();
  const User = useSelector(state => state.User);
  const router = useRouter();
  useEffect(()=>{
    if(User.Name){
      router.push("/")
    }
  },[User])

  const  handleSubmmit = async payload => {
    const { Username, Password } = payload;
    dispatch(signInRequest(Username, Password));
  }


  return (
    <Content>
      <Background>
        <Aside/>      
      </Background>
      <BackgroundForm>
        <Form onsubmit={handleSubmmit}/>
      </BackgroundForm>
    </Content>
  )
}
