'use client'


//import styles from "./TollButton.module.scss";

import { useState, useEffect } from 'react'
import Router from 'next/router';

export default function VoiceToText() {

    let SpeechRecognition = null;
    let SpeechGrammarList = null;
    let SpeechRecognitionEvent = null;

    let started = false;
    const buildListener = () => {
      started = true;
      console.log("Should be good - only once");
      SpeechRecognition = window.webkitSpeechRecognition
      SpeechGrammarList = window.webkitSpeechGrammarList
      SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent


      var recognition = new SpeechRecognition();
        if (SpeechGrammarList) {
        // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
        // This code is provided as a demonstration of possible capability. You may choose not to use it.
        //var speechRecognitionList = new SpeechGrammarList();
        //var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
        //speechRecognitionList.addFromString(grammar, 1);
        //recognition.grammars = speechRecognitionList;
        }
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        var diagnostic = document.querySelector('.output');



        recognition.start();
        console.log('.....now listening');


        recognition.onresult = function(event) {
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The first [0] returns the SpeechRecognitionResult at the last position.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The second [0] returns the SpeechRecognitionAlternative at position 0.
        // We then return the transcript property of the SpeechRecognitionAlternative object
        var words = event.results[0][0].transcript;
        diagnostic.textContent = '' + words + '';
        console.log('Confidence: ' + event.results[0][0].confidence);

        console.log(event.results[0][0]);
        }

        recognition.onspeechend = function() {
            console.log('Speech ended');
            recognition.stop();
        }

        recognition.onend = function() {
          console.log('end');
          recognition.start();
        }

        recognition.onnomatch = function(event) {
            diagnostic.textContent = "I didn't recognise those words.";
        }

        recognition.onerror = function(event) {
            diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
        }
    }
  
    useEffect(() => {
      console.log("Should be good");
      if (!started) {
        buildListener();
      }
    }, []); 

    
  return (
    <div>
        <p className="output"><em>…</em></p>
      </div>
  );
}
