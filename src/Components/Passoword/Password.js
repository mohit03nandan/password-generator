import React from 'react'
import "./Password.css"
import ReactSlider from 'react-slider';
const Password = () => {
  return (
    <div class="main">


     <div class="card card-1" style={{height: "5rem",width:"28rem"}}>
       <div class="card-body">
         Password
       </div>
     </div>
     <div class="card text-center mb-3 card-2" >
        <div class="card-body">

     <div>
       <label id="slider-label">Characters Length</label>
       


     <div class="card card-4">
       <div class="card-body card-body-4">
       <ReactSlider
            class="horizontal-slider"
             className="horizontal-slider"
             marks
             markClassName="example-mark"
             min={0}
             max={9}
             thumbClassName="example-thumb"
             trackClassName="example-track"
             renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
       </div>
     </div>
       

     </div>
       <div class="radio">
          <input type="radio" name="radio"/> <h5> Include UpperCase Letters</h5><br/>
          <input type="radio" name="radio"/><h5> Include LpperCase Letters</h5><br/>
          <input type="radio" name="radio"/><h5> Include Numbers</h5><br/>
          <input type="radio" name="radio"/><h5> Include Symbols</h5><br/>
       </div>
       <div class="card card-3">
             <div class="card-body card-body-3" >
                STRENGTH.
             </div>
        </div>
        <button class="btn btn-secondary">GENERATE</button>
     </div>
    </div>
    </div>
  )
}

export default Password