/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Swal from 'sweetalert2';

const ContactView = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0k446b9', 'template_zs5taeb', form.current, {
        publicKey: '9u1h3pon3nvUwF_pT',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Pesan Telah Terkirim!',
            text: 'Semoga Harimu Menyenangkan!',
            icon: 'success',
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.text,
          });
        }
      );
  };

  return (
    <section className="contact container section">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" name="user_name" id="name" className="contact_form-input" placeholder="Insert your name" />
            </div>

            <div className="contact_form-div">
              <input type="email" name="user_email" id="email" className="contact_form-input" placeholder="Insert your email" />
            </div>
          </div>

          <div className="contact_form-div">
            <input type="text" name="user_subject" id="subject" className="contact_form-input" placeholder="Insert your subject" />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea name="message" id="message" className="contact_form-input" placeholder="Write your message"></textarea>
          </div>

          <input type="submit" value="Send Message" className="button" style={{ textDecoration: 'none', color: '#fff', border: 'none' }} />
        </form>
      </div>
    </section>
  );
};

export default ContactView;
