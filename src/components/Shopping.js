import React from 'react';
import '../styles/shopping.css';

function Shopping(props) {
    return (
        <section className='shopping'>
            <img src={`${process.env.PUBLIC_URL}/images/title_shopping_icon.png`} style={{width: '10%', marginBottom: '15px'}}/>
            <h2><span>지니펫 쇼핑하러</span> 가기</h2>
            <button>바로가기</button>
            <div className='product' style={{display:'flex'}}>
                <div className='p_img'><img src={`${process.env.PUBLIC_URL}/images/shopping.jpg`} /></div>
                <div className='p_info'>
                    <p>([사로] 홀리스틱)</p>
                    <p><b>홍삼&국내산오리(5.2kg)</b></p>
                    <p className='price'>78,000<span>원</span></p>
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} /></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Shopping;