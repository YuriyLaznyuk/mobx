import React from 'react';
import './controlBlock.scss';
const ControlBlock = () => {
	return (
		<div className='controlBlock'>
			<div className='controlBlock__header'>
				<div className='controlBlock__header-title'>
					<div className='controlBlock__header-title-height'>
						Staking balances
					</div>
					<div className='controlBlock__header-title-low'>
						These are your Referees at all levels
					</div>
				</div>
				<div className='controlBlock__header-buttons'>
					<div className='controlBlock__header-buttons-btn'>
						<button>Add Tokens</button>
					</div>
					<div className='controlBlock__header-buttons-btn'>
						<button>Withdraw</button>
					</div>
					<div className='controlBlock__header-buttons-btn'>
						<button>Claim rewards</button>
					</div>
					<div className='controlBlock__header-buttons-btn'>
						<button>Unlock Plan</button>
					</div>
				</div>
			</div>
			<div className='controlBlock__show'>
				<div className='controlBlock__show-section'>
					<div className='controlBlock__show-section-number'>23,500.08</div>
					<div className='controlBlock__show-section-title'>
						<span>Total vested balance</span>
					</div>
				</div>
				<div className='controlBlock__show-section'>
					<div className='controlBlock__show-section-number'>3,024.92</div>
					<div className='controlBlock__show-section-title'>
						<span>Available balance</span>
					</div>
				</div>
				<div className='controlBlock__show-section'>
					<div className='controlBlock__show-section-number'>25.12</div>
					<div className='controlBlock__show-section-title'>
						<span>Staking Rewards</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ControlBlock;
