'use client'


//import styles from "./TollButton.module.scss";

import { useState, useEffect } from 'react'

export default function VoiceToText() {


    let SpeechRecognition = null;
    let SpeechGrammarList = null;
    let SpeechRecognitionEvent = null;
  
    useEffect(() => {
      console.log("Should be good");
      SpeechRecognition = window.webkitSpeechRecognition
      SpeechGrammarList = window.webkitSpeechGrammarList
      SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent
    }, []); 

    
  return (
    <div>
        <p class="output"><em>…diagnostic messages</em></p>
      </div>
  );
}
