import {FC, useEffect, useState} from 'react';
import Image from 'next/image';

type FlagData = {
	lov: string
};

const Flag: FC<FlagData> = ({lov}: FlagData) => { 
	const [teamName, setTeamName] = useState("");

	useEffect(() => {
		setTeamName(localStorage.getItem(`${lov}Team`) ?? "")
	});

	return (
		<div className={`${lov}-flag w-96`}>
			<Image src={`/img/teams/${teamName}.png`} width="500px" height="500px" alt={`${lov} team flag`}></Image>
		</div>
	)
}

export default Flag;
