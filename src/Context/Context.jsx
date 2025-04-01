import { createContext, use, useState } from "react";
import runChat from "../config/horizonai";

export const Context = createContext();

const delayPara = (index) => {

}

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompt, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index,nextword)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextword);
        },75*index)
    }


    const newChat = () =>{
        setLoading(false)
        setShowResult(false)
    }


    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response =await runChat(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPreviousPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
        
        let responseArray = response.split("**");
        let newResponse = "" ;
        for(let i =0; i <responseArray.length; i++){
            if(i%2===0){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }

        let newResponsetwo = newResponse.split("*").join("<br>");


        let newArrayResponse = newResponsetwo.split(" ");
        for(let i=0; i<newArrayResponse.length; i++){

            const nextword = newArrayResponse[i];
            delayPara(i,nextword+" ")
        }

        setLoading(false)
        setInput("")
    }


    const contextValue = {
        previousPrompt,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;