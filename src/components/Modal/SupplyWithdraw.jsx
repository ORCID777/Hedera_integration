import ModalListItem from "./ModalListItem";

export default function WithdrawBox() {
  return (
    <>
      <div className='popup-info-container'>
        <div className='main-info-container'>
          <div className='all-info'>
            <ModalListItem
              title='Supply APY'
              value='1.80%'
            />
            <ModalListItem
              title='Supply Balance'
              value='$10'
            />
            <ModalListItem
              title='Borrow Limit'
              value='$43'
            />
            <ModalListItem
              title='Borrow Limit Used - &gt; Available'
              value='$0'
            />
          </div>
        </div>
      </div>
      <div className='buttons-container'>
        <div className='supply-buttons'>
          <button className='primary-btn'>Withdraw</button>
        </div>
      </div>
    </>
  );
}
