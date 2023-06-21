'use client';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async data => {
    const res = await fetch(`/api/email`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // console.log(`SENDEMAIL()`, res);

    if (res.status !== 200) {
      toast(`WOW, smthing gone wrong`);
    }
    toast.success('Запит відправлено', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const formSubmitHandler = async event => {
    event.preventDefault();
    try {
      const data = { name, phone, message };
      await sendEmail(data);
      setName(``);
      setPhone(``);
      setMessage(``);
      handleClose();
    } catch (error) {}
  };

  // useEffect(() => {
  //   setIsOpen(true);
  // }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
      )}
      <button className={styles.formopener} onClick={() => setIsOpen(true)}>
        <Image
          src="/images/contactForm/MdChevronRight.svg"
          priority
          alt="корпус меблі"
          className={styles.arrow}
          width={16}
          height={16}
        />
        <span className={styles.buttontext}> Замовити&nbspпрорахунок</span>
      </button>
      <div className={`${styles.contactForm} ${isOpen && styles.active}`}>
        <Image
          src="/images/contactForm/MdChevronRight.svg"
          priority
          alt="корпус меблі"
          width={22}
          height={22}
          className={styles.hide}
          onClick={handleClose}
        />
        <Image
          src="/images/contactForm/MdClose.svg"
          priority
          alt="корпус меблі"
          width={24}
          height={24}
          className={styles.close}
          onClick={handleClose}
        />

        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.controls}>
            <div className={styles.control}>
              <span className={styles.inputIcon}>
                <Image
                  src="/images/contactForm/MdAcUnit.svg"
                  alt="name icon"
                  width={4}
                  height={4}
                />
              </span>
              <input
                type="text"
                id="name"
                required
                placeholder="Ім’я"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className={styles.control}>
              <span className={styles.inputIcon}>
                <Image
                  src="/images/contactForm/MdAcUnit.svg"
                  alt="name icon"
                  width={4}
                  height={4}
                />
              </span>
              <input
                type="number"
                id="pnone"
                required
                placeholder="+38 (099) 000 00 00"
                value={phone}
                onChange={event => setPhone(event.target.value)}
              />
            </div>
            <div className={styles.control}>
              <input
                type="text"
                id="message"
                placeholder="Введіть свій коментар"
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div>
            <button className={styles.btn}> Відправити </button>
          </div>
        </form>
      </div>
    </>
  );
}
