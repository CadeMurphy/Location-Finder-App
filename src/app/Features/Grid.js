import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStartState, selectStartCementState, selectStartVisibilityState, startVisibilityToggle, startCementVisibilityToggle } from './GridSlice';


export default function Grid() {

    const rows = []

    for (let i = 0; i <= 279; i++) {
        rows.push(i)
    }



    const startState = useSelector(selectStartState)
    const startVisibilityState = useSelector(selectStartVisibilityState)
    const startCementState = useSelector(selectStartCementState)
    const dispatch = useDispatch();



    return (
        <main>
            {rows.map((rows, index) => (
        <button key={index} onMouseEnter={(e) => {
            if(startState === true) {
                dispatch(startVisibilityToggle(index))
            }

        }} onMouseLeave={(e) => {
            if(startState === true) {
                dispatch(startVisibilityToggle(index))
            }

        }}
        
        onClick={(e) => {
            if(startState === true) {
                
                if(startCementState === '') {
                    dispatch(startCementVisibilityToggle(index))
                  
                } else {
                    dispatch(startCementVisibilityToggle(index))
                    dispatch(startCementVisibilityToggle(index))
            
                    
                    
                
                }
                
                
            }
        }}
        
        id={index}>
        
        <svg visibility={startVisibilityState === index ? 'visible' : 'hidden'} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-model" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8h8v8h-8z" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M16 16l3.3 3.3" />
  <path d="M16 8l3.3 -3.3" />
  <path d="M8 8l-3.3 -3.3" />
  <path d="M8 16l-3.3 3.3" />
</svg>



        <div className='bottom-right'></div>
        <div className='bottom-left'></div>
        <div className='top-right'></div>
        <div className='top-left'></div></button>
      ))}
        </main>
    )
}