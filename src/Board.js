import React, { useState } from 'react'
import {
    selector,
    useRecoilState
  } from 'recoil'

  export const usedLettersArray = selector({
    key: 'usedLettersArray',
    get: (selectedLetter)  => {
        let lettersArray = []
        lettersArray.push(selectedLetter)
        return lettersArray
    } ,
  });

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

console.log(LETTERS);
export default function Board() {

    const [selectedLetter, setselectedLetter] = useState();

    
    const clickedLetter = (e, letter) => {
       setselectedLetter(letter);
        e.target.style.color = 'grey';
       
    }



    let board = LETTERS.map((letter, index) => {
       return  <button key={index} onClick={(e)=>clickedLetter(e,letter)}>{letter}</button>
    })
    return (
     <>
     {board}
     </>
    )
}
