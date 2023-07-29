import { useHistory } from "react-router-dom";

const Desktop1 = () => {
	const history = useHistory();

	const handleButtonClick = () => {
		history.push("/Desktop2");
	};

	const onAboutTextClick = () => {
		history.push("/Desktop3");
	};

	const onTranslatorTextClick = () => {
		history.push("/Desktop2");
	};

	return (
		<div className="relative bg-black w-full h-[824px] overflow-hidden text-left text-xl text-white font-poppins">
			<div className="absolute top-[92px] left-[830px] rounded-[50%] [background:linear-gradient(38.97deg,_#c729c0,_rgba(73,_110,_243,_0.9))] w-[300px] h-[299px]" />
			<img
				className="absolute top-[400px] left-[573px] w-[250px] h-[250px]"
				alt=""
				src="/ellipse-21.svg"
			/>
			<div className="absolute top-[139px] left-[336px] rounded-[50%] [background:linear-gradient(226.17deg,_rgba(52,_108,_251,_0.76),_#f71bfc)] w-[170px] h-[170px]" />
			<div className="absolute top-[101px] left-[405px] rounded-21xl [background:linear-gradient(121.49deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] w-[590px] h-[502px] flex flex-col py-[31px] px-[18px] box-border items-start justify-start">
				<div className="flex flex-col items-center justify-start">
					<div className="h-[385px] flex flex-col items-start justify-start">
						<img
							className="relative w-[576px] h-[418px] object-cover"
							alt=""
							src="/translate-logos-transparent-11@2x.png"
						/>
					</div>
					<div className="rounded-21xl [background:linear-gradient(270deg,_rgba(73,_110,_243,_0.9),_#c729c0)] w-[250px] h-[50px] flex flex-row py-1.5 px-6 box-border items-center justify-center mt-[-5px]">
						<div
							onClick={handleButtonClick}
							className="relative tracking-[-0.01em] font-semibold cursor-pointer">
							Start Translating
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-[25px] left-[475px] flex flex-row items-center justify-start text-6xl">
				<div className="flex flex-row items-end justify-start gap-[82px]">
					<div className="relative tracking-[-0.01em] font-semibold cursor-pointer">
						Home
					</div>
					<div
						className="relative tracking-[-0.01em] font-semibold cursor-pointer"
						onClick={onAboutTextClick}>
						About
					</div>
					<div
						className="relative tracking-[-0.01em] font-semibold cursor-pointer"
						onClick={onTranslatorTextClick}>
						Translator
					</div>
				</div>
			</div>
			<div className="absolute top-[62.5px] left-[473.5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[78px] h-[3px] border-t-[3px] border-solid border-white" />
		</div>
	);
};

export default Desktop1;

