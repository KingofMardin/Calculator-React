import { useState, useEffect } from 'react';
import CloseIcon from '../assets/close-icon.svg';

export default function HistoryModal({ show, history }) {
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setFilter(history.slice(0, 3).reverse());

    }, [history]);

    return (
        <div className='history_modal'>
            <div className='history_modal_content'>
                <span className='title'>History</span>
                <button className='close' onClick={() => show(false)}>
                    <img src={CloseIcon} alt="closeIcon" />
                </button>
                <div className="data_modal">
                    {filter.map((item, index) => (
                        <div key={index} className='modal_item'>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
