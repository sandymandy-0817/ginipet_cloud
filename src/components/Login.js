import React, {useState} from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value});
        setError('');
        setSuccess('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:9070/login', login);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', login.username);
            alert('로그인 성공');
            setLogin({
                username: '',
                password: ''
            });
            navigate('/ginipet', {state: {username: login.username}});
        }catch(err) {
            setError('로그인 실패 : 아이디 또는 비밀번호를 확인하세요');
        }
    }
    
    return (
        <section className='login'>
            <h2>로그인</h2>
            <div className='login_box'>
                <div className='check_m'>
                    <p>
                        <input type="radio" id='member' checked/>
                        <label htmlFor="member">회원</label>
                    </p>
                    <p>
                        <input type="radio" id='n_member'/>
                        <label htmlFor="n_member">비회원</label>
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>
                        <input type="text" id='username' name='username' placeholder='아이디' value={login.username} required onChange={handleChange}/>
                    </p>
                    <p>
                        <input type="password" id='password' name='password' placeholder='비밀번호' value={login.password} required onChange={handleChange}/>
                    </p>
                    <p>
                        <input type='checkbox' id='save' name='save' />
                        <label htmlFor="save">아이디 저장</label>
                    </p>
                    <button type='submit'>로그인</button>
                    {error&&<p style={{color:'#f00'}}>{error}</p>}
                    {success&&<p style={{color:'#f00'}}>{success}</p>}
                </form>
                <ul>
                    <li><Link to='/search_id'>아이디찾기</Link></li>
                    <li><Link to='/search_pw'>비밀번호찾기</Link></li>
                    <li><Link to='/search_account'>휴먼계정찾기</Link></li>
                </ul>
                <hr />
                <div className='signin_btn'>
                    <h3>아직! 회원이 아니세요??</h3>
                    <p>지금 지니펫 회원으로 가입하시고 풍성한 혜택 받아가세요.</p>
                    <button>회원가입</button>
                </div>
            </div>
        </section>
    );
}

export default Login;