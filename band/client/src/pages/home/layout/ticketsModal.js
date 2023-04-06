import React from 'react'
import "../styles/ticketsModal.css"

const TicketsModal = ({ isOpen, onClose }) => {
    const modalClass = isOpen ? 'modal open' : 'modal';

    const HandleStopBubbling = (event) => {
        event.stopPropagation()
    }

  return (
    <div className={modalClass} onClick={onClose}>
        <div className='modal-container' onClick={HandleStopBubbling}>
            
            <button  onClick={onClose} className='modal-close'>
                x
            </button>

            <header className='modal-header'>
                <div className='bag-icon'><i class="fa-solid fa-suitcase"></i></div>
                Tickets
            </header>

            <div className='modal-body'>
                <label for="quantity" className='modal-label'>
                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                    Tickets, $15 per person
                </label>
                <input id="quantity" type='text' className='modal-input' placeholder='How many?'/>

                <label for="ticket-email" className='modal-label'>
                    <i class="fa-solid fa-user"></i>
                    Send to
                </label>
                <input id="ticket-email" type='email' className='modal-input' placeholder='Ener email...'/>
                <button className='buy-tickets-modal'>
                    Pay <i class="fa-sharp fa-solid fa-check"></i>
                </button>
            </div>

            <footer className='modal-footer'>
                <p>Need <a href=''>help?</a></p>
            </footer>
        </div>
    </div>
  )
}

export default TicketsModal