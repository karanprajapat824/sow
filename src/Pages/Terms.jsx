import { useEffect, useState } from 'react';
import './../Css/Terms.css';
import { GiHamburgerMenu } from "react-icons/gi"; 
import { IoCloseSharp } from "react-icons/io5";


const eg = {
  home: "Home",
  order: "Order",
  our_customer: "Our Customers",
  about_us: "About Us",
  contact_us: "Contact Us",
  terms: "Terms",
  close_and_go_back: "Close and Go Back",
  english: "English",
  swedish: "Swedish",
};

const sv = {
  home: "Hem",
  order: "Beställ",
  our_customer: "Våra kunder",
  about_us: "Om oss",
  contact_us: "Kontakta oss",
  terms: "Villkor",
  close_and_go_back: "Stäng och gå tillbaka",
  english: "Engelska",
  swedish: "Svenska",
};

const Terms = () => {
  const [data, setData] = useState("");
  const [options, setOptions] = useState(false);
  const [chooseLanguage, setChooseLanguage] = useState(false);
  const [lang, setLang] = useState("eg");

  const t = lang === "eg" ? eg : sv;

  useEffect(() => {
    const fetchTerms = async () => {
      const response = await fetch(`https://backend-price-list.onrender.com/terms/${lang}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const result = await response.json();
        setData(result.content);
      } else {
        console.log("error");
      }
    };
    fetchTerms();
  }, [lang]);

  return (
    <div className='terms'>
      <img className='wallpaper' src='https://storage.123fakturera.se/public/wallpapers/sverige43.jpg' alt="Wallpaper" />
      <div className='terms-header'>
        <div 
          onClick={() => setOptions(!options)}
          className='terms-hamburgermenu'
          style={{ cursor: 'pointer' }}
        >
          {options ? <IoCloseSharp /> : <GiHamburgerMenu />}
          {options && (
            <div className='mini-navbar'>
              <div>{t.home}</div>
              <div>{t.order}</div>
              <div>{t.our_customer}</div>
              <div>{t.about_us}</div>
              <div>{t.contact_us}</div>
            </div>
          )}
        </div>
        <img className='only-for-big-screen' src='https://storage.123fakturera.se/public/icons/diamond.png' alt="Logo" />
        <div className='terms-navbar'>
          <div className='only-for-big-screen'>{t.home}</div>
          <div className='only-for-big-screen'>{t.order}</div>
          <div className='only-for-big-screen'>{t.our_customer}</div>
          <div className='only-for-big-screen'>{t.about_us}</div>
          <div className='only-for-big-screen'>{t.contact_us}</div>
          <div 
            onClick={() => setChooseLanguage(!chooseLanguage)}
            className='terms-language'
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            {lang === "eg" ? t.english : t.swedish}
            &nbsp;&nbsp;&nbsp;
            <img
              src={
                lang === "eg"
                  ? 'https://storage.123fakturere.no/public/flags/GB.png'
                  : 'https://storage.123fakturere.no/public/flags/SE.png'
              }
              alt="flag"
            />
            {chooseLanguage && (
              <div className="language-model" style={{ cursor: 'default' }}>
                <div
                  onClick={() => { setLang("sv"); setChooseLanguage(false); }}
                  style={{ cursor: 'pointer' }}
                >
                  {sv.swedish}
                  <img src='https://storage.123fakturere.no/public/flags/SE.png' alt="sv" />
                </div>
                <div
                  onClick={() => { setLang("eg"); setChooseLanguage(false); }}
                  style={{ cursor: 'pointer' }}
                >
                  {eg.english}
                  <img src='https://storage.123fakturere.no/public/flags/GB.png' alt="eg" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='terms-heading'>{t.terms}</div>
      <div className='close-and-goback'>
        <button style={{ cursor: 'pointer' }}>{t.close_and_go_back}</button>
      </div>
      <div className='terms-container'>
        <div
          className="terms-content"
          dangerouslySetInnerHTML={{
            __html: data.replace(/\n/g, '<br />'),
          }}
        ></div>
      </div>
      <div className='close-and-goback'>
        <button style={{ cursor: 'pointer' }}>{t.close_and_go_back}</button>
      </div>
    </div>
  );
};

export default Terms;
