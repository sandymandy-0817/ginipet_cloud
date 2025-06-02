import React from 'react';

function Footer(props) {
    return (
        <footer>
            <p className='notice'>공지사항</p>
            <div className='f_top'>
                <div>
                    <p className='private'>개인정보처리방침</p>
                    <p>쇼핑몰약관</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/footer_sns_2.gif`} />
            </div>
            <div className='f_middle'>
                <p>고객센터</p>
                <p className='tel_n'>02-2166-7770</p>
                <p>평일 10:00 ~ 17:00</p>
                <p>(점심 12:00 ~ 13:00)</p>
            </div>
            <div className='f_bottom'>
                <p>지니펫 사업자 정보 확인</p>
                <img src={`${process.env.PUBLIC_URL}/images/iconArrow_bottom.png`} />
            </div>
        </footer>
    );
}

export default Footer;