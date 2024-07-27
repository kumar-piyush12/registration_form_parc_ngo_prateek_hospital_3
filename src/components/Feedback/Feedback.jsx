import React from 'react'

import './Feedback.css';

const Feedback = () => (
  <div class='container'>
    <div className='pc'>
      <div className='input'>
        <h1 id='header'>Get in Touch</h1>

        <div className='data'>
          <div className='input_box'>
            <h1 className='input_header'>Name</h1>
            <input className='info' type='text' placeholder='Name' />
          </div>

          <div className='input_box'>
            <h1 className='input_header'>Phone</h1>
            <input className='info' type='text' placeholder='Phone' />
          </div>

          <div className='input_box'>
            <h1 className='input_header'>E-mail</h1>
            <input className='info' type='text' placeholder='Email' />
          </div>

          <div className='input_box'>
            <h1 className='input_header'>Doctor</h1>
            <select name='doctors' id='doctors'>
              <option value='Dr. Pankaj'>Dr. Pankaj</option>
              <option value='Dr. Mishra'>Dr. Mishra</option>
              <option value='Dr. Raman'>Dr. Raman</option>
              <option value='Dr. Jyoti'>Dr. Jyoti</option>
            </select>
          </div>

          <div className='input_box'>
            <h1 className='input_header'>Services Taken</h1>
            <select name='services' id='services'>
              <option value='checkup'>Checkup</option>
              <option value='blood-test'>Blood-test</option>
              <option value='urine-test'>Urine-test</option>
              <option value='surgery'>Surgery</option>
            </select>
          </div>

          <div className='input_box'>
            <h1 className='input_header'>Give Us Your Feedback</h1>
            <input className='info' type='text' id='give_feedback' />
          </div>

          <div className='submit'>
            <button id='submit' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Feedback
