import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Desktop2 = () => {
	const history = useHistory();
	const onImageContainerClick = () => {
		history.push("/");
	};

	const onHomeTextClick = () => {
		history.push("/");
	};

	const onAboutTextClick = () => {
		history.push("/Desktop3");
	};

	const [inputText, setInputText] = useState("");
	const [translatedText, setTranslatedText] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("en"); // en or kok
	const endpoint = {
		en: "en-kok",
		kok: "kok-en",
	};

	const handleLanguageChange = (e) => {
		setSelectedLanguage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				//change with your local
				`http://192.168.152.158:8000/translate/${endpoint[selectedLanguage]}/`,
				{
					input: inputText,
				}
			)
			.then((response) => {
				setTranslatedText(response.data.target);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
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
				onClick={onImageContainerClick}>
				<img
					className="relative w-[324px] h-[258px] object-cover"
					alt=""
					src="/translate-logos-transparent-1@2x.png"
				/>
			</div>

			<div className="absolute top-[45px] left-[614px] flex flex-row items-end justify-start gap-[82px]">
				<div
					className="relative tracking-[-0.01em] font-semibold cursor-pointer"
					onClick={onHomeTextClick}>
					Home
				</div>
				<div
					className="relative tracking-[-0.01em] font-semibold cursor-pointer"
					onClick={onAboutTextClick}>
					About
				</div>
				<div className="relative tracking-[-0.01em] font-semibold">
					Translator
				</div>
			</div>

			<div className="absolute top-[81.5px] left-[930.5px] box-border w-[131px] h-[3px] border-t-[3px] border-solid border-white" />

			<div className="absolute top-[110px] left-[485px]">
				<label
					htmlFor="languageSelect"
					className="text-white text-xl font-semibold mr-2">
					Select Language:
				</label>
				<select
					id="languageSelect"
					value={selectedLanguage}
					onChange={handleLanguageChange}
					className="rounded bg-[#373737] text-white px-2 py-1 outline-none">
					<option value="en">English</option>
					<option value="kok">Konkani</option>
				</select>
			</div>

			<div className="absolute top-[170px] left-[460px] rounded-21xl [background:linear-gradient(121.49deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] w-[428px] h-[422px] flex flex-col py-[31px] pr-[122px] pl-[18px] box-border items-start justify-start text-left text-xl text-white font-poppins ">
				<textarea
					className="[background:linear-gradient(121.49deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))]  rounded border:none text-white font-poppins p-1 outline-1 outline-[#d8cdcd] placeholder-gray-100"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					rows={25}
					cols={50}
					placeholder="Enter text to translate..."
				/>
			</div>
			<div
				onClick={handleSubmit}
				className="rounded-21xl [background:linear-gradient(270deg,_rgba(73,_110,_243,_0.9),_#c729c0)] w-[250px] h-[50px] flex flex-row py-1.5 px-6 box-border items-center justify-center mt-[-5px] absolute top-[605px] left-[775px] text-white font-poppins cursor-pointer">
				Submit
			</div>

			<div className="absolute top-[170px] left-[910px] rounded-21xl [background:linear-gradient(121.49deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] w-[428px] h-[422px] flex flex-col py-[31px] pr-[122px] pl-[18px] box-border items-start justify-start text-left text-xl text-white font-poppins">
				<textarea
					className="[background:linear-gradient(121.49deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))]  rounded border:none text-white font-poppins p-1 outline-[#d8cdcd]"
					readOnly
					value={translatedText}
					rows={25}
					cols={50}
				/>
			</div>

			
		</div>
	);
};

export default Desktop2;

