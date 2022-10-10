import {FC} from 'react';
import Flag from './Flag';

const FlagLevel: FC = () => {
	return (
		<div className="flag-level">
			<div className="local-side">
				<Flag lov="local" />
			</div>

			<div className="visit-side">
				<Flag lov="visit" />
			</div>	
		</div>
	)
}

export default FlagLevel;
