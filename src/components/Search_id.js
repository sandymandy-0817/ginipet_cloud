import React, {useState} from 'react';
import '../styles/search_id.css';

function Search_id(props) {
    const [active, setActive] = useState(0);

    const types = ['아이디찾기', '비밀번호찾기', '휴먼계정찾기'];

    return (
        <section className='id_search'>
            <h2>아이디/비밀번호찾기</h2>
            <div className='search_box'>
                <ul className='search_type'>
                    {types.map((type, idx)=> (
                        <li key={type} className={active === idx? 'act':''} onClick={()=> setActive(idx)}>{type}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Search_id;