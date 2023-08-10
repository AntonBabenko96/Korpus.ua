import Image from 'next/image';
import Container from '@/app/components/Container/Container';
import s from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <section className={s.aboutUs}>
      <div className={s.wrapper}>
        <Container>
          <div className={s.aboutUsContainer}>
            <h2 className={s.title}>korpus</h2>
            <p className={s.text}>
              Ми команда талановитих дизайнерів та майстрів, що втілюють
              естетику та комфорт у вашому будинку.
            </p>
            <p className={s.text}>
              Наша місія - зробити ваше життя комфортним та елегантним,
              створюючи індивідуальні рішення, які поєднують функціональність та
              естетичність.
            </p>
            <p className={s.text}>
              Завдяки ретельному вибору матеріалів найвищої якості, ми
              забеспечуємо довговічність та естетичність.
            </p>
          </div>
          <div className={s.border}></div>
          <Image
            src="/images/aboutUs/aboutUs1@2x.jpg"
            width={334}
            height={324}
            alt="Зображення інтер'єру"
            className={s.leftImage}
          />
        </Container>
      </div>
      <Image
        src="/images/aboutUs/aboutUs2@2x.png"
        width={262}
        height={219}
        alt="Зображення тумби"
        className={s.rightImage}
      />
    </section>
  );
}
