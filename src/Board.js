import React from 'react'
import {
    atom,
    useRecoilState,
  } from 'recoil'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'


  export const lettersState = atom({
    key: 'letters',
    default: [],
  });

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Board() {

    const [selectedLetter, setselectedLetter] = useRecoilState(lettersState);

    const clickedLetter = (e, letter) => {

       setselectedLetter(oldArray => [...oldArray, letter]);
        e.target.style.color = 'grey';
       
    }


    let board = LETTERS.map((letter, index) => {
       return  <button key={index} className = "pulse" value={letter} onClick={(e)=>clickedLetter(e,letter)}>{letter}</button>
    })
    return (
        <div className='keyboard'>
        {board}
        </div>
    )
}
