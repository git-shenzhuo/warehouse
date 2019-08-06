import React from 'react'
import './hong.scss'

function Hong(props){
    let {location:{state}} = props
    // console.log(state);
    
    return <div className='quotation-hong'>
        <img src={state.url1} alt=''/>
        <h3>{state.h_1}</h3>
        <img src={state.url2} alt='' />

        <h3>{state.h_2}</h3>
        <p>{state.p_1}</p>
        <img src={state.url3} alt='' />

        <h3>{state.h_3}</h3>
        <p>{state.p_2}</p>
        <img src={state.url4} alt='' />

        <h3>{state.h_4}</h3>
        <p>{state.p_3}</p>
        <img src={state.url5} alt='' />

        <h3>{state.h_5}</h3>
        <p>{state.p_4}</p>
        <img src={state.url6} alt='' />
        {
            (state.p_5.length!==0)?<p>备注：</p>:null
        }
        <p>{state.p_5}</p>
    </div>
}


export default Hong