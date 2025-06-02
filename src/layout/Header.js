import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state && location.state.username) {
            setUsername(location.state.username);
            localStorage.setItem('username', location.state.username);
        } else {
            const savedUsername = localStorage.getItem('username');
            setUsername(savedUsername || '');
        }
    }, [location.state]);

    const handleLogout = () => {
        if(window.confirm('로그아웃 하시겠습니까?')) {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            setUsername('');
            navigate('/ginipet');
        }
    };

    return (
        <header>
            <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} className='toggle_btn' onClick={()=>setMenuOpen(true)}/>
            <Link to='/ginipet'><img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} style={{width: '30%', marginLeft: '57px'}}/></Link>
            <p style={{color: '#fff', fontSize: '16px', paddingTop: '17px', cursor: 'pointer'}} onClick={username ? handleLogout : undefined} title={username ? '로그아웃' : ''}>{username}님</p>
            <img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} className='cart_btn'/>

            <nav style={{left:menuOpen?'0%':'-100%'}}>
                <button className='close_btn' onClick={()=>setMenuOpen(false)}><img src={`${process.env.PUBLIC_URL}/images/btn_close.png`}/></button>
                <ul className='gnb'>
                    <li><Link to='/ginipet' onClick={()=>setMenuOpen(false)}>지니펫 쇼핑몰</Link></li>
                    <li><Link to='/intro' onClick={()=>setMenuOpen(false)}>브랜드 소개</Link></li>
                    <li><Link to='/info' onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
                    <li><Link to='/event' onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
                    <li><Link to='/customer' onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
                </ul>
                <ul className='form_navi'>
                    <li><Link to='/login' onClick={()=>setMenuOpen(false)}>로그인</Link></li>
                    <li><Link to='/join' onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
                    <li><Link to='/order' onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
                    <li><Link to='/cart' onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;