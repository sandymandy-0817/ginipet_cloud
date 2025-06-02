import React from 'react';
import '../styles/sns.css';

function SNS(props) {
    return (
        <section className='sns'>
            <div className='title'>
                <img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} style={{width: '10%', marginBottom: '15px'}}/>
                <h2>지니펫 <span>in 스타</span></h2>
            </div>
            <p>지니펫의 다양한 소식과 정보를 만나보세요</p>
            <div className='content1'>
                <img src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`} />
                <img src={`${process.env.PUBLIC_URL}/images/snsContent1.jpg`}/>
            </div>
            <div className='content2'>
                <img src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`} />
                <img src={`${process.env.PUBLIC_URL}/images/snsContent2.jpg`}/>
            </div>
        </section>
    );
}

export default SNS;