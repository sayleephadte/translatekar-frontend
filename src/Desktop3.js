import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';



const Desktop3 = () => {
  const history = useHistory();
  const onImageContainerClick = () => {
    history.push('/');
  };
  
  const onHomeTextClick = () => {
    history.push('./');
  };
  const onTranslatorTextClick = () => {
    history.push('/Desktop2');
  };
  

  

  return (
    <div className="relative bg-black w-full h-[824px] overflow-hidden text-left text-6xl text-white font-poppins">
      <div className="absolute top-[31px] left-[155px] rounded-[50%] [background:linear-gradient(38.97deg,_#c729c0,_rgba(73,_110,_243,_0.9))] w-[287px] h-[292px]" />
      <img
        className="absolute top-[233px] left-[96px] w-[239px] h-[244px]"
        alt=""
        src="/ellipse-2.svg"
      />
      <div className="absolute top-[121px] left-[28px] rounded-[50%] [background:linear-gradient(226.17deg,_rgba(52,_108,_251,_0.76),_#f71bfc)] w-[163px] h-[166px]" />
      <div
        className="absolute top-[121px] left-[46px] w-[253px] h-[193px] flex flex-col items-start justify-start cursor-pointer"
        onClick={onImageContainerClick}
      >
        <img
          className="relative w-[324px] h-[258px] object-cover"
          alt=""
          src="/translate-logos-transparent-1@2x.png"
        />
      </div>
      <div className="absolute top-[45px] left-[614px] flex flex-row items-end justify-start gap-[82px]">
        <div
          className="relative tracking-[-0.01em] font-semibold cursor-pointer"
          onClick={onHomeTextClick}
        >
          Home
        </div>
        <div className="relative tracking-[-0.01em] font-semibold">About</div>
        <div
          className="relative tracking-[-0.01em] font-semibold cursor-pointer"
          onClick={onTranslatorTextClick}
        >
          Translator
        </div>
      </div>
      <div className="absolute top-[81.5px] left-[769.5px] box-border w-[79px] h-[3px] border-t-[3px] border-solid border-white" />
      <div className="absolute top-[110px] left-[505px] rounded-21xl [background:linear-gradient(121.49deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] w-[823px] h-[530px] flex flex-col py-[31px] pr-[122px] pl-[18px] box-border items-start justify-start text-xl text-center">
        <div className="w-[786px] h-[456px] flex flex-col pt-0 px-0 pb-[163px] box-border items-center justify-start">
          <div className="relative tracking-[-0.01em] font-semibold inline-block w-[776px] h-[426px] shrink-0">
            <p className="m-0 ">
              Welcome to the project page of Translateकर, a language translator designed to facilitate seamless translation between English and Konkani languages. With the power of Neural Machine Translation (NMT) and the transformative capabilities of Transformers, Translateकर aims to bridge the language barrier and enhance communication for individuals in English and Konkani-speaking communities. 
              The underlying model architecture of Translateकर is based on Transformers, a state-of-the-art neural network architecture known for its exceptional performance in sequence-to-sequence tasks. 
              Our model has been trained on an extensive parallel corpus comprising 19.5 lakh examples of English and Konkani sentences. This vast amount of training data enables Translatekar to learn from diverse examples and continuously improve translation quality over time.
              With its user-friendly interface, Translateकर ensures a seamless translation experience for both novice and advanced users. Users can input text in English or Konkani and obtain the translation instantly, without any hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
