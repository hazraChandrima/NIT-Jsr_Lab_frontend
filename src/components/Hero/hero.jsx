"use client";
import Image from "next/image";
import './Hero.css';
import {useEffect, useState} from "react";
export default function Hero(props) {
 const [index,updateIndex]=useState(0);
 useEffect(()=>{
  setTimeout(()=>{
    let i=((index+1)>=props.images.length)? 0:index+1;
    updateIndex(i);
    console.log(i);
  },5000);
 },[index])
    return (
      <div style={{height:props.height, overflow:"clip",position:"relative"}}>
        <h1 className="heroText">{props.children}</h1>
        <Image src={props.images[index]} className="img" style={{width:"100%", animation:(props.transition)? "zoom 5s infinite alternate":"none"}}></Image>
      </div>
    )
  }